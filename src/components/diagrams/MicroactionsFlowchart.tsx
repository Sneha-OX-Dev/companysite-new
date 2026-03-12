"use client";

import { Coins, Hand, MousePointerClick, Share2 } from "lucide-react";

const ACTIONS = [
  { label: "Click", Icon: MousePointerClick },
  { label: "Swipe", Icon: Hand },
  { label: "Share", Icon: Share2 },
] as const;

export default function MicroactionsFlowchart() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-2">
      {ACTIONS.map(({ label, Icon }) => (
        <div key={label} className="flex flex-col items-center gap-2 md:flex-row">
          <div className="flex flex-col items-center gap-1.5 rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-4 py-3 min-w-[90px]">
            <Icon className="text-lg text-[var(--accent)]" />
            <span className="text-sm font-semibold text-zinc-200">{label}</span>
          </div>
          <span className="text-lg text-[var(--accent)]" aria-hidden>
            →
          </span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-1.5 rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-4 py-3 min-w-[90px]">
        <Coins className="text-lg text-[var(--accent)]" />
        <span className="text-sm font-semibold text-[var(--accent)]">Earn</span>
      </div>
    </div>
  );
}
