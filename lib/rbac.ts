export type Role = "FOUNDER" | "PROFESSOR" | "INVESTOR" | "MENTOR" | "MANAGER" | "SUPER_ADMIN";
export type Perm = "startup:edit" | "dataroom:view" | "student:verify" | "payment:refund" | "audit:read";

const MAP: Record<Role, Perm[]> = {
  FOUNDER: ["startup:edit"],
  PROFESSOR: ["student:verify"],
  INVESTOR: ["dataroom:view"],
  MENTOR: [],
  MANAGER: ["audit:read"],
  SUPER_ADMIN: ["startup:edit", "dataroom:view", "student:verify", "payment:refund", "audit:read"],
};
export const can = (roles: Role[], p: Perm) => roles.some((r) => MAP[r].includes(p));

// Object-level rule: a founder may only edit startups where they are an ACTIVE member.
export const canEditStartup = (roles: Role[], membership?: { status: string }) =>
  can(roles, "startup:edit") && (roles.includes("SUPER_ADMIN") || membership?.status === "ACTIVE");
