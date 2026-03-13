import SectionHeader from "@/components/Headings/SectionHeader";

export default function NetworkScaleSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 text-white sm:gap-12 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(129,140,248,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.2),transparent_60%)]"
      />

      <SectionHeader
        pillText="Network Effects & Scale"
        title="Network effects & scale"
        subtitle="Under network effect principles, network value scales with participant density."
      />

      <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 text-[13px] leading-relaxed text-white/80 shadow-[0_22px_80px_rgba(0,0,0,0.75)] sm:text-[14px]">
        <p>
          Under network effect principles, network value scales with participant
          density.
        </p>
        <p>
          Each Machine Self adds: Declared truth, Permission boundaries,
          Regulatory eligibility, Reliability history.
        </p>
        <p>
          Network growth increases coordination precision and enterprise routing
          efficiency.
        </p>
        <p>GLOBAL SCALING MILESTONES</p>
        <p>
          Objective: Universal Machine Self deployment on smartphones globally.
        </p>
      </div>
    </section>
  );
}
