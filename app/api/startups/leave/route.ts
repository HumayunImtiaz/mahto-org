import { NextResponse } from "next/server";
import { z } from "zod";
import { leaveStartup } from "@/lib/leave-startup";

const Body = z.object({ founderId: z.string(), startupId: z.string() });

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  // TODO: read session user and confirm it owns founderId
  try {
    const r = await leaveStartup(parsed.data.founderId, parsed.data.startupId, parsed.data.founderId);
    return NextResponse.json({ status: r.status, endDate: r.endDate });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 409 });
  }
}
