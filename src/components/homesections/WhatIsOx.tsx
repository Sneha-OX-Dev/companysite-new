import SectionHeader from "@/components/Headings/SectionHeader";
import { SectionLabel, Body, CardTitle, Subhead } from "@/components/ui/typography";

const WHY_OX_INEVITABLE = [
  "Digital systems require live human truth to replace probabilistic waste.",
  "Human truth cannot be centralised safely or ethically at scale.",
  "Local evaluation preserves privacy whilst enabling structured participation.",
  "Enterprises pay for measurable precision and reduced misallocation.",
];

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 text-body-lg text-foreground/70">
      <span className="relative mt-[10px] flex h-4 w-4 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,45,107,0.9)]" />
      </span>
      {text}
    </li>
  );
}

export default function WhatIsOxSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_25%_10%,rgba(168,85,247,0.17),transparent_65%),radial-gradient(ellipse_55%_45%_at_75%_90%,rgba(244,114,182,0.13),transparent_65%)]"
      />

      <SectionHeader
        pillText="What Is OX"
        title="OX is the Human Intelligence Protocol."
        subtitle="The layer where you — a living, consented, sovereign individual — participate directly in the digital systems that shape your world."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
        {/* Left — protocol definition */}
        <div className="flex flex-col gap-5">
          <div className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:border-violet-400/20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />

            <SectionLabel className="text-violet-400/80">Not surveillance. Participation.</SectionLabel>

            <Body className="mt-5">
              Not through data extracted without your knowledge. Through
              intelligence you{" "}
              <span className="font-semibold text-white/90">
                declare, control, and own.
              </span>
            </Body>
          </div>

          {/* Architecture card */}
          <div className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:border-pink-400/20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
            <div className="pointer-events-none absolute -left-8 -top-8 h-36 w-36 rounded-full bg-pink-500 opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.10]" />

            <SectionLabel className="text-pink-400/80">A different architecture</SectionLabel>

            <Body className="mt-5">
              Every existing human coordination marketplace — from gig platforms
              to professional networks to task exchanges — extracts value from
              participants, holds their data centrally, and owns the
              relationship between supply and demand.
            </Body>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Body>
              OX is a different architecture entirely. Data never leaves the
              participant&apos;s device. Matching is based on verified, declared
              capability — not ratings, reputation scores, or historical
              behaviour. Value flows back to participants through the token
              economy, not to a platform intermediary.
            </Body>

            <Subhead className="mt-6 text-foreground/90">
              OX does not compete with these platforms.
              <br />
              <span className="bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent">
                It replaces the architecture they are all built on.
              </span>
            </Subhead>
          </div>
        </div>

        {/* Right — structural inevitability */}
        <div className="glass-card group relative overflow-hidden p-8 lg:sticky lg:top-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

          <SectionLabel className="text-fuchsia-400/80">Why OX is structurally inevitable</SectionLabel>

          <ul className="mt-7 space-y-6">
            {WHY_OX_INEVITABLE.map((item) => (
              <BulletItem key={item} text={item} />
            ))}
          </ul>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <Subhead className="text-foreground/90">
            Without structured human participation,{" "}
            <span className="font-normal text-foreground/50">
              AI remains inference-bound.
            </span>
          </Subhead>
          <Subhead className="mt-4">
            With OX,{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              AI becomes eligibility-aware and precision-routed.
            </span>
          </Subhead>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.07] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-fuchsia-300/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-300 shadow-[0_0_6px_rgba(232,121,249,0.9)]" />
            The protocol layer
          </div>
        </div>
      </div>

      {/* OX IS / OX IS NOT comparison table */}
      <div className="glass-card group relative overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
        <SectionLabel className="text-violet-400/80">What OX is — and is not</SectionLabel>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-white/10 pb-3 pr-8 text-left text-xs font-black uppercase tracking-widest text-primary/80">
                  OX IS
                </th>
                <th className="border-b border-white/10 pb-3 text-left text-xs font-black uppercase tracking-widest text-foreground/60">
                  OX IS NOT
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A consent-based intelligence layer", "A social network"],
                ["A structured human-in-the-loop protocol", "A data brokerage platform"],
                ["A deterministic eligibility engine", "An ad exchange"],
                ["A coordination and settlement infrastructure", "A speculative token system"],
              ].map(([is, isNot]) => (
                <tr key={is} className="border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.02]">
                  <td className="py-4 pr-8 text-foreground/80">{is}</td>
                  <td className="py-4 text-foreground/40 line-through decoration-white/20">{isNot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
