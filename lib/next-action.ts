export type Ctx = {
  kycDone: boolean; stage: "IDEA" | "PROBLEM_VALIDATED" | "MVP" | "EARLY_TRACTION" | "REVENUE";
  interviews: number; mvpUploaded: boolean; coFounderChallengeDone: boolean;
  prospectsContacted: number; pitchRecorded: boolean;
};
export type Action = { title: string; why: string; priority: number };

// "What should I do next?" Rules first, AI can rank later.
export function nextActions(c: Ctx): Action[] {
  const a: Action[] = [];
  if (!c.kycDone) a.push({ title: "Complete your KYC", why: "Needed to activate your Founder Card", priority: 1 });
  if (c.interviews < 20) a.push({ title: `Interview ${Math.min(5, 20 - c.interviews)} more customers`, why: `${c.interviews}/20 done`, priority: 2 });
  if (!c.mvpUploaded && c.stage !== "IDEA") a.push({ title: "Upload your MVP", why: "Stage is MVP or later", priority: 3 });
  if (c.prospectsContacted < 50) a.push({ title: `Contact ${Math.min(20, 50 - c.prospectsContacted)} prospects`, why: `${c.prospectsContacted}/50`, priority: 4 });
  if (!c.coFounderChallengeDone) a.push({ title: "Complete your Co-Founder Challenge", why: "Optional. Solo founders can skip", priority: 5 });
  if (!c.pitchRecorded) a.push({ title: "Record your investor pitch", why: "Builds your Pitch Score", priority: 6 });
  return a.sort((x, y) => x.priority - y.priority);
}
