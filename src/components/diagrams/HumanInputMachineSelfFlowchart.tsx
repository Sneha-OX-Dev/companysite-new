"use client";

export default function HumanInputMachineSelfFlowchart() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
      <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-6 py-4 text-center min-w-[160px]">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          Human Input
        </p>
        <ul className="mt-2 space-y-1 text-sm text-zinc-300">
          <li>16 hours</li>
          <li>2,000 answers</li>
          <li>Verified</li>
        </ul>
      </div>
      <span className="text-xl text-[var(--accent)]" aria-hidden>
        →
      </span>
      <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-6 py-4 text-center min-w-[180px]">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          Machine Self
        </p>
        <p className="mt-2 text-xs text-zinc-300">
          Searchable • Permissioned • Commercially Usable
        </p>
      </div>
    </div>
  );
}
