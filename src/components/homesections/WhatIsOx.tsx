import SectionHeader from "@/components/Headings/SectionHeader";

const WHY_OX_INEVITABLE = [
  "Digital systems require live human truth to replace probabilistic waste.",
  "Human truth cannot be centralised safely or ethically at scale.",
  "Local evaluation preserves privacy whilst enabling structured participation.",
  "Enterprises pay for measurable precision and reduced misallocation.",
];

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 text-[17px] leading-[1.75] text-white/65 sm:text-[18px]">
      <span className="relative mt-[10px] flex h-4 w-4 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#FF2D6B]/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D6B] shadow-[0_0_8px_rgba(255,45,107,0.9)]" />
      </span>
      {text}
    </li>
  );
}

export default function WhatIsOxSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
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
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />

            <p className="text-[14px] font-bold uppercase tracking-[0.28em] text-violet-400/60">
              Not surveillance. Participation.
            </p>

            <p className="mt-5 text-[19px] leading-[1.75] text-white/70 sm:text-[20px]">
              Not through data extracted without your knowledge. Through
              intelligence you{" "}
              <span className="font-semibold text-white/90">
                declare, control, and own.
              </span>
            </p>
          </div>

          {/* Architecture card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-8 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
            <div className="pointer-events-none absolute -left-8 -top-8 h-36 w-36 rounded-full bg-pink-500 opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.10]" />

            <p className="text-[14px] font-bold uppercase tracking-[0.28em] text-pink-400/60">
              A different architecture
            </p>

            <p className="mt-5 text-[17px] leading-[1.85] text-white/60 sm:text-[18px]">
              Every existing human coordination marketplace — from gig platforms
              to professional networks to task exchanges — extracts value from
              participants, holds their data centrally, and owns the
              relationship between supply and demand.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="text-[17px] leading-[1.85] text-white/60 sm:text-[18px]">
              OX is a different architecture entirely. Data never leaves the
              participant's device. Matching is based on verified, declared
              capability — not ratings, reputation scores, or historical
              behaviour. Value flows back to participants through the token
              economy, not to a platform intermediary.
            </p>

            <p className="mt-6 text-[20px] font-semibold leading-snug tracking-[-0.02em] text-white/90 sm:text-[22px]">
              OX does not compete with these platforms.
              <br />
              <span className="bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent">
                It replaces the architecture they are all built on.
              </span>
            </p>
          </div>
        </div>

        {/* Right — structural inevitability */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:sticky lg:top-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

          <p className="text-[14px] font-bold uppercase tracking-[0.28em] text-fuchsia-400/60">
            Why OX is structurally inevitable
          </p>

          <ul className="mt-7 space-y-6">
            {WHY_OX_INEVITABLE.map((item) => (
              <BulletItem key={item} text={item} />
            ))}
          </ul>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-[19px] font-semibold leading-snug tracking-[-0.02em] text-white/90 sm:text-[20px]">
            Without structured human participation,{" "}
            <span className="font-normal text-white/50">
              AI remains inference-bound.
            </span>
          </p>
          <p className="mt-4 text-[19px] font-semibold leading-snug tracking-[-0.02em] sm:text-[20px]">
            With OX,{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              AI becomes eligibility-aware and precision-routed.
            </span>
          </p>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.07] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-fuchsia-300/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-300 shadow-[0_0_6px_rgba(232,121,249,0.9)]" />
            The protocol layer
          </div>
        </div>
      </div>
    </section>
  );
}
