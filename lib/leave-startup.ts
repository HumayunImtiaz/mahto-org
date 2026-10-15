import { db } from "./db";

// Leaving never deletes. Status becomes FORMER, endDate is set, history stays.
export async function leaveStartup(founderId: string, startupId: string, actorId: string) {
  return db.$transaction(async (tx) => {
    const m = await tx.startupFounder.findFirst({ where: { founderId, startupId, status: "ACTIVE" } });
    if (!m) throw new Error("No active membership");
    const after = await tx.startupFounder.update({ where: { id: m.id }, data: { status: "FORMER", endDate: new Date() } });
    await tx.auditLog.create({ data: { actorId, action: "FOUNDER_LEFT", object: `startupFounder:${m.id}`, before: m as object, after: after as object } });
    return after;
  });
}
