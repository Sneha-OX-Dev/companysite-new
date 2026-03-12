"use client";

const STATS = [
  { value: "1B", label: "Users" },
  { value: "1B", label: "Wallets" },
  { value: "16B", label: "Stored Human Hours" },
] as const;

export default function ScaleScarcityFlowchart() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
      {STATS.map(({ value, label }, i) => (
        <div key={label} className="flex flex-col items-center gap-2 md:flex-row">
          <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-8 py-4 text-center">
            <span className="text-2xl font-bold text-[var(--accent)]">{value}</span>
            <p className="mt-1 text-xs text-zinc-400">{label}</p>
          </div>
          {i < STATS.length - 1 && (
            <span className="text-xl text-[var(--accent)]" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
