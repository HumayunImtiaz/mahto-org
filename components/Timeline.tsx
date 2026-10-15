import { timeline } from "@/lib/demo";
export default function Timeline() {
  return (
    <ol className="ml-2 border-l-2 border-line pl-6">
      {timeline.map((t, i) => (
        <li key={i} className="relative pb-6 last:pb-0">
          <span className={`absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-white ${t.muted ? "bg-mut" : "bg-accent"}`} />
          <p className="font-medium">{t.year} · {t.title}</p>
          <p className="text-sm text-mut">{t.note}</p>
        </li>
      ))}
    </ol>
  );
}
