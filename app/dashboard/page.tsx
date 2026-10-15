import NextAction from "@/components/NextAction";
import ScoreChart from "@/components/ScoreChart";
import { nextActions, type Ctx } from "@/lib/next-action";
import { founder, startups } from "@/lib/demo";

const ctx: Ctx = { kycDone: true, stage: "MVP", interviews: 12, mvpUploaded: false, coFounderChallengeDone: false, prospectsContacted: 8, pitchRecorded: false };

export default function Dashboard() {
  const actions = nextActions(ctx);
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-4xl">Good morning, {founder.name.split(" ")[0]}.</h1>
      <p className="mt-1 text-mut">Programme: Month 3 of 6 · Startup stage: MVP</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <NextAction actions={actions} />
        <section className="rounded-2xl border border-line bg-white p-6">
          <p className="font-semibold">Founder Score</p>
          <p className="mt-2 font-serif text-6xl">68<span className="text-2xl text-mut"> / 100</span></p>
          <div className="mt-3"><ScoreChart /></div>
          <p className="mt-2 text-xs text-mut">The score shows development over time. It does not guarantee success.</p>
        </section>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-line bg-white p-6">
          <p className="font-semibold">My startups</p>
          <ul className="mt-4 space-y-3">
            {startups.map((s) => (
              <li key={s.name} className="flex items-center justify-between rounded-xl border border-line p-4">
                <div><p className="font-medium">{s.name}</p><p className="text-sm text-mut">{s.role} · {s.stage} · {s.since}</p></div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${s.status === "Active" ? "bg-soft text-accent" : "bg-line text-mut"}`}>{s.status}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-mut">A founder can belong to many startups. Leaving one never removes your history.</p>
        </section>
        <section className="rounded-2xl border border-line bg-white p-6">
          <p className="font-semibold">Co-Founder match</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-full" style={{ background: "conic-gradient(#0E7C66 0 78%, #E6E2D9 0)" }}>
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white font-semibold">78%</span>
            </div>
            <p className="text-sm text-mut">Based on skills, working style, commitment and values. Shared only with your permission. Building solo is always fine.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
