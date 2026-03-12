"use client";

const ROW1 = ["Enterprise Fiat", "Market Buy OXME", "Pay Users"] as const;
const ROW2 = ["Access Machine Self", "Generate Value"] as const;

export default function TokenCaptureLoopFlowchart() {
  return (
    <div className="relative overflow-x-auto py-4">
      <div className="flex min-w-max flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          {ROW1.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-5 py-3 text-center">
                <span className="text-sm font-medium text-zinc-200">
                  {label}
                </span>
              </div>
              {i < ROW1.length - 1 && (
                <span className="text-lg text-[var(--accent)]" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <span className="text-lg text-[var(--accent)]" aria-hidden>
          ↓
        </span>
        <div className="flex items-center gap-2">
          {ROW2.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-5 py-3 text-center">
                <span className="text-sm font-medium text-zinc-200">
                  {label}
                </span>
              </div>
              {i < ROW2.length - 1 && (
                <span className="text-lg text-[var(--accent)]" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-between px-2 pt-1">
          <span className="text-xs text-zinc-500">Enterprise</span>
          <svg
            viewBox="0 0 120 24"
            className="h-6 w-full max-w-[200px] flex-1 text-[var(--accent)]"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 120 12 Q 60 24 0 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <polygon points="5,10 0,12 5,14" fill="currentColor" />
          </svg>
          <span className="text-xs text-zinc-500">Generate Value</span>
        </div>
      </div>
    </div>
  );
}
