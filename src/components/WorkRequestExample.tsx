"use client";

const STEPS = [
  { label: "Brand asks", sub: "e.g. Prefer A or B?" },
  { label: "You answer", sub: "~1 min in app" },
  { label: "Machine Self earns", sub: "OXIT for you" },
] as const;

export default function WorkRequestExample() {
  return (
    <div className="mt-6 rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4">
      <p className="text-sm font-semibold text-[var(--accent)]">
        Example: Solutions, not ads
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-2">
        {STEPS.map(({ label, sub }, i) => (
          <div key={label} className="flex flex-col items-center gap-2 md:flex-row">
            <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-4 py-3 text-center min-w-[100px]">
              <span className="text-sm font-semibold text-[var(--accent)]">
                {label}
              </span>
              <p className="mt-0.5 text-xs text-zinc-400">{sub}</p>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className="text-lg text-[var(--accent)] md:rotate-0"
                aria-hidden
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
