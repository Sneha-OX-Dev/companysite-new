import SectionHeader from "@/components/Headings/SectionHeader";
import {
  Body,
  DisplayText,
  Muted,
  SectionLabel,
  Subhead,
} from "@/components/ui/typography";

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
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_75%_45%_at_20%_10%,rgba(56,189,248,0.13),transparent_65%),radial-gradient(ellipse_55%_40%_at_80%_90%,rgba(94,234,212,0.10),transparent_65%)]"
      />

      <SectionHeader
        title="Why now"
        eyebrowText="THE CONTEXT"
        subtitle="AI and digital systems have reached the limits of what can be done without live human reality."
      />

      {/* Full-width statement card */}
      <div className="glass-card group relative overflow-hidden p-8 md:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-cyan-400 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
          <div>
            <SectionLabel className="text-cyan-400/90">
              Architectural limit
            </SectionLabel>
            <DisplayText className="mt-5 text-headline">
              History can&apos;t predict
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                what humans do next.
              </span>
            </DisplayText>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cyan-300/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
              OX IS THAT LAYER
            </div>
          </div>

          <div className="space-y-5">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden" />
            <Body>
              AI has reached a point where more parameters and more data no
              longer guarantee better intelligence. Systems are trapped in their
              own history — optimising on stale assumptions instead of the live
              world.
            </Body>
            <Body>
              What is missing is a safe, structured way to access{" "}
              <span className="font-semibold text-white/90">
                live human truth and verified intent
              </span>
              , without centralising that truth in one place.
            </Body>
          </div>
        </div>
      </div>

      {/* 3-col friction-point cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {WHY_NOW_POINTS.map((point, i) => (
          <div
            key={point.label}
            className="glass-card group relative overflow-hidden p-6 transition-colors duration-300 hover:border-cyan-400/20"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="mb-4 block font-mono text-base font-bold tracking-widest text-cyan-400/50">
              0{i + 1}
            </span>
            <Subhead className="leading-snug text-foreground/90">
              {point.label}
            </Subhead>
            <Muted className="mt-2">{point.sub}</Muted>
          </div>
        ))}
      </div>

      <Body className="text-foreground/60">
        This is the structural problem OX was built to solve.
      </Body>
    </section>
  );
}
