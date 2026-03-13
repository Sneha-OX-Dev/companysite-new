import SectionHeader from "@/components/Headings/SectionHeader";

const WHY_NOW_POINTS = [
  "AI has hit an architectural wall.",
  "Bigger data farms ≠ better intelligence.",
  "Live world vs historical systems.",
];

export default function WhyNowSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 text-white sm:gap-12 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(94,234,212,0.16),transparent_60%)]"
      />

      <SectionHeader
        pillText="Section 5B — Why Now"
        title="Why now"
        subtitle="AI and digital systems have reached the limits of what can be done without live human reality."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
        {/* Left: three reasons as chips */}
        <div className="space-y-4">
          <div className="inline-flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            {WHY_NOW_POINTS.map((p) => (
              <div
                key={p}
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[12px] font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <p className="max-w-xl text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
            To progress, systems must connect to live human reality and verified intent.
            That architecture requires OX.
          </p>
        </div>

        {/* Right: explanation card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.25),transparent_55%)]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            Architectural limit
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            AI has reached a point where more parameters and more data no longer guarantee
            better intelligence. Systems are trapped in their own history — optimising on
            stale assumptions instead of the live world.
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            What is missing is a safe, structured way to access{" "}
            <span className="font-semibold text-white">
              live human truth and verified intent
            </span>
            , without centralising that truth in one place. OX provides that layer.
          </p>
        </div>
      </div>
    </section>
  );
}

