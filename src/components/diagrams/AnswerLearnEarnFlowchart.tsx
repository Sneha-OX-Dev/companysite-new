"use client";

const STEPS = [
  { label: "Answer", sub: "Short questions in the app" },
  { label: "AI learns", sub: "Machine Self builds" },
  { label: "Earn", sub: "Get rewarded in tokens" },
] as const;

export default function AnswerLearnEarnFlowchart() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-2">
      {STEPS.map(({ label, sub }, i) => (
        <div key={label} className="flex flex-col items-center gap-2 md:flex-row">
          <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-5 py-3 text-center min-w-[120px]">
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
  );
}
