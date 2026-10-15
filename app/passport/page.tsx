import FounderCard from "@/components/FounderCard";
import Timeline from "@/components/Timeline";
import { founder } from "@/lib/demo";

const badges = [["Mahto Founder", true], ["Assessed", true], ["Validated", false], ["Selected", false], ["Mahto-backed", false]] as const;

export default function Passport() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-4xl">Founder Passport</h1>
      <p className="mt-1 max-w-xl text-mut">{founder.name} · {founder.city} · {founder.college}. Your entrepreneurial life, kept in one verified timeline.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <FounderCard />
          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map(([b, on]) => (
              <span key={b} className={`rounded-full border px-4 py-1.5 text-sm ${on ? "border-accent bg-soft text-accent" : "border-line text-mut opacity-60"}`}>{b}{on ? "" : " (locked)"}</span>
            ))}
          </div>
          <p className="mt-3 text-xs text-mut">Membership is for belonging. Achievements are earned and can never be bought.</p>
        </div>
        <section className="rounded-2xl border border-line bg-white p-6">
          <p className="mb-5 font-semibold">Founder timeline</p>
          <Timeline />
        </section>
      </div>
    </main>
  );
}
