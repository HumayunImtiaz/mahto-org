import { describe, it, expect } from "vitest";
import { nextActions } from "../lib/next-action";
import { can, canEditStartup } from "../lib/rbac";

const base = { kycDone: true, stage: "MVP" as const, interviews: 12, mvpUploaded: false, coFounderChallengeDone: false, prospectsContacted: 8, pitchRecorded: false };

describe("next action engine", () => {
  it("asks for KYC first", () => expect(nextActions({ ...base, kycDone: false })[0].title).toBe("Complete your KYC"));
  it("asks for customer interviews when under 20", () => expect(nextActions(base)[0].title).toMatch(/Interview 5 more/));
  it("does not force a co-founder", () => expect(nextActions({ ...base, interviews: 20 }).length).toBeGreaterThan(0));
});

describe("rbac", () => {
  it("investor cannot edit startup", () => expect(can(["INVESTOR"], "startup:edit")).toBe(false));
  it("former founder cannot edit old startup", () => expect(canEditStartup(["FOUNDER"], { status: "FORMER" })).toBe(false));
  it("active founder can edit", () => expect(canEditStartup(["FOUNDER"], { status: "ACTIVE" })).toBe(true));
});
