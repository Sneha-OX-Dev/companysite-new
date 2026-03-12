"use client";

const STEPS = ["Connect", "Mine", "Wallet", "Earn"] as const;

export default function DrillFlowchart() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-2">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-4 py-2 text-center">
            <span className="text-sm font-semibold text-[var(--accent)]">
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <span className="text-lg text-[var(--accent)]" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
