import { db } from "./db";
export async function audit(e: { actorId?: string; action: string; object: string; before?: unknown; after?: unknown; ip?: string }) {
  await db.auditLog.create({ data: { ...e, before: e.before as object, after: e.after as object } });
}
