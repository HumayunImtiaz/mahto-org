import Link from "next/link";
const links = [["Founder", "/#why"], ["How It Works", "/#journey"], ["Founder Journey", "/dashboard"], ["Funding", "/#pricing"], ["Campus Network", "/#why"], ["Founder Stories", "/passport"], ["About", "/#trust"]];
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">MAHTO.ORG</Link>
        <nav className="ml-auto hidden gap-6 text-sm text-mut lg:flex">
          {links.map(([t, h]) => <Link key={t} href={h} className="hover:text-ink">{t}</Link>)}
        </nav>
        <Link href="/dashboard" className="ml-auto rounded-lg border border-line px-4 py-2 text-sm font-medium lg:ml-0">Login</Link>
        <Link href="/#pricing" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white">Apply</Link>
      </div>
    </header>
  );
}
