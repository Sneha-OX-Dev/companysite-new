"use client";

const STACK = [
  { label: "Machine Self", sub: "Background work" },
  { label: "Human Think", sub: "Judgment & consent" },
  { label: "Marketplace", sub: "Value flows" },
] as const;

export default function ProductStackFlowchart() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-2">
      {STACK.map(({ label, sub }, i) => (
        <div key={label} className="flex flex-col items-center gap-2 md:flex-row">
          <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-6 py-3 text-center min-w-[140px]">
            <span className="text-sm font-semibold text-[var(--accent)]">
              {label}
            </span>
            <p className="mt-0.5 text-xs text-zinc-400">{sub}</p>
          </div>
          {i < STACK.length - 1 && (
            <span className="text-lg text-[var(--accent)]" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
