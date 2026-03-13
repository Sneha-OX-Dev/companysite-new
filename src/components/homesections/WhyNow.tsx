import SectionHeader from "@/components/Headings/SectionHeader";

const WHY_NOW_POINTS = [
  {
    label: "AI has hit an architectural wall.",
    sub: "More parameters ≠ better intelligence",
  },
  {
    label: "Bigger data farms ≠ better intelligence.",
    sub: "Historical optimisation has a ceiling",
  },
  {
    label: "Live world vs historical systems.",
    sub: "The gap between now and then is widening",
  },
];

export default function WhyNowSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_75%_45%_at_20%_10%,rgba(56,189,248,0.13),transparent_65%),radial-gradient(ellipse_55%_40%_at_80%_90%,rgba(94,234,212,0.10),transparent_65%)]"
      />

      <SectionHeader
        pillText="Why Now"
        title="Why now"
        subtitle="AI and digital systems have reached the limits of what can be done without live human reality."
      />

      <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
        {/* Left — numbered friction points */}
        <div className="flex flex-col gap-4">
          {WHY_NOW_POINTS.map((point, i) => (
            <div
              key={point.label}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition-colors duration-300 hover:border-cyan-400/20"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-start gap-5">
                <span className="mt-1 shrink-0 font-mono text-[16px] font-bold tracking-widest text-cyan-400/50">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-[17px] font-semibold leading-snug tracking-[-0.02em] text-white/90 sm:text-[18px]">
                    {point.label}
                  </p>
                  <p className="mt-1.5 text-[14px] text-white/40">
                    {point.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <p className="mt-3 pl-1 text-[15px] leading-relaxed text-white/50 sm:text-[15.5px]">
            To progress, systems must connect to live human reality and verified
            intent. That architecture requires OX.
          </p>
        </div>

        {/* Right — main statement card */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-cyan-400 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-400/60">
            Architectural limit
          </p>

          <p className="mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-[40px]">
            History can't predict
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              what humans do next.
            </span>
          </p>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-[15px] leading-[1.75] text-white/60 sm:text-[16px]">
            AI has reached a point where more parameters and more data no longer
            guarantee better intelligence. Systems are trapped in their own
            history — optimising on stale assumptions instead of the live world.
          </p>

          <p className="mt-5 text-[15px] leading-[1.75] text-white/60 sm:text-[16px]">
            What is missing is a safe, structured way to access{" "}
            <span className="font-semibold text-white/90">
              live human truth and verified intent
            </span>
            , without centralising that truth in one place.
          </p>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-cyan-300/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
            OX provides that layer
          </div>
        </div>
      </div>
    </section>
  );
}
