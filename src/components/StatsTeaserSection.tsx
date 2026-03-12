import Link from "next/link";
import { TokenChart } from "@/components/charts";

export default function StatsTeaserSection() {
  return (
    <section className="animate-fade-in-up border-y border-indigo-900/40 bg-indigo-950/20 px-6 py-16 md:py-20" style={{ animationDelay: "0.15s", opacity: 0 }}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-2xl font-bold text-white text-balance sm:text-3xl">
          The network in numbers
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          1.5M citizens → 1B in sight. 16B verified human hours at scale. $0.50 today → $19 @1B (est.)
        </p>
        <div className="mt-6 rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-4 md:p-6">
          <TokenChart compact />
        </div>
        <Link
          href="/network"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          See full stats
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
