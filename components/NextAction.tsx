"use client";
import { useState } from "react";
import type { Action } from "@/lib/next-action";

export default function NextAction({ actions }: { actions: Action[] }) {
  const [done, setDone] = useState(0);
  const total = actions.length;
  const current = actions[done];
  const pct = Math.round((done / total) * 100);
  return (
    <section className="rounded-2xl bg-ink p-7 text-white">
      <p className="text-sm opacity-70">What should I do next?</p>
      {current ? (
        <>
          <h2 className="mt-2 text-3xl sm:text-4xl">{current.title}</h2>
          <p className="mt-2 opacity-80">{current.why}</p>
        </>
      ) : (
        <h2 className="mt-2 text-3xl">All actions done. Great work.</h2>
      )}
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-accent transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-xs opacity-70">{done} of {total} actions complete</p>
      {current && (
        <button onClick={() => setDone(done + 1)} className="mt-5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink">Mark as done</button>
      )}
      {actions.slice(done + 1, done + 3).length > 0 && (
        <ul className="mt-6 text-sm opacity-85">
          {actions.slice(done + 1, done + 3).map((a, i) => (
            <li key={a.title} className="border-t border-white/15 py-2">{i === 0 ? "Next" : "Then"}: {a.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
