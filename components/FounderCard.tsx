import { founder } from "@/lib/demo";

function qrCells() {
  let s = 7;
  return Array.from({ length: 81 }, (_, i) => {
    s = (s * 37 + 11) % 101;
    const r = Math.floor(i / 9), c = i % 9;
    return (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3) || s % 2 === 0;
  });
}

export default function FounderCard() {
  return (
    <div className="flex aspect-[1.6/1] max-w-md flex-col justify-between rounded-2xl bg-gradient-to-br from-ink to-[#1F3566] p-6 text-white shadow-lg">
      <div className="flex items-center justify-between text-xs opacity-80">
        <span className="font-serif text-base">MAHTO.ORG</span>
        <span className="rounded-full bg-accent px-3 py-1 font-semibold">Verified</span>
      </div>
      <div>
        <h3 className="text-3xl">{founder.name}</h3>
        <p className="mt-1 text-sm opacity-80">Mahto Founder · {founder.code}</p>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-xs opacity-70">mahto.org/verify/founder/{founder.code}</p>
        <div className="grid h-16 w-16 grid-cols-9 gap-px rounded-md bg-white p-1" aria-label="QR code placeholder">
          {qrCells().map((on, i) => <i key={i} className={on ? "bg-ink" : "bg-white"} />)}
        </div>
      </div>
    </div>
  );
}
