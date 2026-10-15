import crypto from "crypto";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { audit } from "@/lib/audit";

// Razorpay-style webhook. Membership activates only here, never manually.
export async function POST(req: Request) {
  const raw = await req.text();
  const sig = req.headers.get("x-razorpay-signature") ?? "";
  const expected = crypto.createHmac("sha256", process.env.WEBHOOK_SECRET!).update(raw).digest("hex");
  const ok = sig.length === expected.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  if (!ok) return NextResponse.json({ error: "Bad signature" }, { status: 401 });

  const ev = JSON.parse(raw);
  if (ev.event !== "payment.captured") return NextResponse.json({ ok: true });
  const p = ev.payload.payment.entity as { id: string; notes: { startupId: string }; amount: number };

  const exists = await db.payment.findUnique({ where: { gatewayId: p.id } });
  if (exists?.status === "PAID") return NextResponse.json({ ok: true, duplicate: true }); // idempotent

  await db.$transaction([
    db.payment.upsert({
      where: { gatewayId: p.id },
      update: { status: "PAID" },
      create: { gatewayId: p.id, startupId: p.notes.startupId, amountInr: p.amount / 100, status: "PAID" },
    }),
    db.startup.update({ where: { id: p.notes.startupId }, data: { paidAt: new Date() } }),
  ]);
  await audit({ action: "PAYMENT_CAPTURED", object: `payment:${p.id}`, after: { startupId: p.notes.startupId } });
  return NextResponse.json({ ok: true });
}
