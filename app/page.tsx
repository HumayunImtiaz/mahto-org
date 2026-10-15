import Link from "next/link";
import FounderCard from "@/components/FounderCard";
import { journey } from "@/lib/demo";

const plans = [
  ["Student Founder", "₹10,000", "Professor-verified student status"],
  ["Graduate Founder", "₹25,000", "Graduate and professional founders"],
  ["Startup Evaluation", "₹10,000", "Startup Score and evaluation report"],
];
const why = [
  ["Founder Passport", "Your whole entrepreneurial history in one place. It stays with you when you leave a startup."],
  ["Founder Score", "A score out of 100 that grows as you do. It measures development, not a guarantee of success."],
  ["Founder Card", "A verified identity card with a QR code. It shows you belong to the network."],
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-5xl leading-[1.05] sm:text-6xl">Build your Founder Profile from Year 1.</h1>
          <p className="mt-6 max-w-md text-xl text-mut">Don't just build a startup. Build yourself.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#pricing" className="rounded-lg bg-accent px-6 py-3 font-semibold text-white">Apply as Founder</Link>
            <Link href="/dashboard" className="rounded-lg border border-line bg-white px-6 py-3 font-medium">See the Founder dashboard</Link>
          </div>
        </div>
        <FounderCard />
      </section>

      <section id="journey" className="mx-auto max-w-6xl px-5">
        <div className="grid overflow-hidden rounded-2xl border border-line bg-white sm:grid-cols-3 lg:grid-cols-6">
          {journey.map(([t, d]) => (
            <div key={t} className="border-b border-line p-5 sm:border-r lg:border-b-0">
              <p className="font-semibold">{t}</p>
              <p className="mt-1 text-sm text-mut">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl">A profile that lasts a lifetime</h2>
        <p className="mt-3 max-w-xl text-mut">One Mahto account follows you from student to founder to mentor. Nothing is lost when a startup changes.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {why.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-2 text-mut">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-4xl">Pricing</h2>
        <p className="mt-3 text-mut">One payment per startup, however many founders it has.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map(([t, p, d]) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-6">
              <p className="font-semibold">{t}</p>
              <p className="mt-3 font-serif text-4xl">{p}</p>
              <p className="text-sm text-mut">per startup</p>
              <p className="mt-4 text-sm text-mut">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
