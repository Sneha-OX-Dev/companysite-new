import { landing } from "@/content/landing";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import MicroactionsFlowchart from "@/components/diagrams/MicroactionsFlowchart";

export default function MomentsSection() {
  return (
    <section className="animate-fade-in-up px-6 py-20 md:py-28 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" style={{ animationDelay: "0.3s", opacity: 0 }}>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          {landing.moments.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          {landing.moments.headline}
        </h2>
        <p className="mt-1 text-2xl font-semibold text-zinc-300">
          {landing.moments.subheadline}
        </p>
        <div className="mt-6">
          <MicroactionsFlowchart />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Every click, swipe, share is a value exchange.{" "}
          <GlossaryTerm termKey="microaction">Microactions</GlossaryTerm>: Tiny
          actions—like sharing, skipping, approving, or learning—earn real
          rewards. The Source of Value: OX turns your presence into power —
          because the value isn&apos;t just what you do. It&apos;s you. One click
          at a time. Real ownership. Real earnings. Because you are valuable.
        </p>
      </div>
    </section>
  );
}
