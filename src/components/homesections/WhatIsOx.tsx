import SectionHeader from "@/components/Headings/SectionHeader";

const WHY_OX_INEVITABLE = [
  "Digital systems require live human truth to replace probabilistic waste.",
  "Human truth cannot be centralised safely or ethically at scale.",
  "Local evaluation preserves privacy whilst enabling structured participation.",
  "Enterprises pay for measurable precision and reduced misallocation.",
];

export default function WhatIsOxSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-white sm:gap-14 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(168,85,247,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Section 6 — What Is OX"
        title="OX is the Human Intelligence Protocol."
        subtitle="The layer where you — a living, consented, sovereign individual — participate directly in the digital systems that shape your world."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
        {/* Protocol definition & architecture */}
        <div className="space-y-5 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
          <p>
            Not through data extracted without your knowledge. Through intelligence you
            declare, control, and own. OX provides structured participation, not
            surveillance.
          </p>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              A different architecture to every existing marketplace
            </p>
            <p className="mt-3">
              Every existing human coordination marketplace — from gig platforms to
              professional networks to task exchanges — extracts value from participants,
              holds their data centrally, and owns the relationship between supply and
              demand.
            </p>
            <p className="mt-3">
              OX is a different architecture entirely. Data never leaves the
              participant&apos;s device. Matching is based on verified, declared
              capability — not ratings, reputation scores, or historical behaviour. Value
              flows back to participants through the token economy, not to a platform
              intermediary.
            </p>
            <p className="mt-3">
              OX does not compete with these platforms. It{" "}
              <span className="font-semibold text-white">
                replaces the architecture they are all built on.
              </span>
            </p>
          </div>
        </div>

        {/* Why OX is structurally inevitable */}
        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            Why OX is structurally inevitable
          </p>
          <ul className="mt-2 space-y-2 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            {WHY_OX_INEVITABLE.map((item) => (
              <li key={item} className="relative pl-5">
                <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-[#FF2D6B] shadow-[0_0_8px_rgba(255,45,107,0.8)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[13px] font-semibold text-white sm:text-[14px]">
            Without structured human participation, AI remains inference-bound.
            <br />
            With OX, AI becomes eligibility-aware and precision-routed.
          </p>
        </div>
      </div>
    </section>
  );
}

