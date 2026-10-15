import { scoreHistory } from "@/lib/demo";
export default function ScoreChart() {
  const w = 300, h = 110, min = 40, max = 100;
  const pts = scoreHistory.map((p, i) => [20 + (i * (w - 40)) / (scoreHistory.length - 1), h - 30 - ((p.value - min) / (max - min)) * (h - 50)]);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Founder Score over time">
      <polyline fill="none" stroke="#0E7C66" strokeWidth="3" points={pts.map((p) => p.join(",")).join(" ")} />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="5" fill="#0E7C66" />
          <text x={p[0]} y={h - 6} textAnchor="middle" fontSize="11" fill="#5B6478">{scoreHistory[i].label} · {scoreHistory[i].value}</text>
        </g>
      ))}
    </svg>
  );
}
