import SectionHeader from "@/components/Headings/SectionHeader";
import { SectionLabel, Eyebrow, Body, DisplayText, CardTitle } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const NETWORK_ADDS = [
  {
    label: "Declared truth",
    desc: "Real data, directly provided — never inferred or approximated.",
  },
  {
    label: "Permission boundaries",
    desc: "Every participant defines exactly what they share and when.",
  },
  {
    label: "Regulatory eligibility",
    desc: "Verified credentials and compliance signals, on-device.",
  },
  {
    label: "Reliability history",
    desc: "A growing record of verified contributions and outcomes.",
  },
];

const MILESTONES = [
  {
    val: "10M",
    label: "Machine Selves",
    desc: "Network effects accelerate. Enterprise routing efficiency reaches critical density.",
    gradient: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    topLine: "via-brand-purple/50",
  },
  {
    val: "100M",
    label: "Machine Selves",
    desc: "Global coordination layer active. Every major market covered.",
    gradient: "from-primary to-brand-purple",
    glow: "bg-primary",
    topLine: "via-primary/50",
  },
  {
    val: "1B",
    label: "Machine Selves",
    desc: "Universal deployment. Any human with a phone participates in the global intelligence network.",
    gradient: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    topLine: "via-brand-purple/50",
  },
];

export default function NetworkScaleSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-10 text-white">
      <div
        aria-hidden
        className="atm-emerald-cyan pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader
        title="Network effects & scale."
        eyebrowText="THE NETWORK"
        subtitle="Under network effect principles, network value scales with participant density."
      />

      {/* ── HERO PRINCIPLE — full bleed with diagonal split ── */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary opacity-[0.08] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-purple opacity-[0.08] blur-[90px]" />

        <div className="grid lg:grid-cols-[1fr_auto]">
          {/* Left — statement */}
          <div className="p-10 md:p-14">
            <SectionLabel className="text-primary/80">Metcalfe&apos;s law applied</SectionLabel>
            <DisplayText className="mt-6 text-display">
              Each new Machine Self
              <br />
              <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
                multiplies the value
                <br />
                of every other.
              </span>
            </DisplayText>
            <Body className="mt-7 max-w-xl">
              Network value does not grow linearly — it compounds. Every
              additional participant increases coordination precision and
              enterprise routing efficiency for every existing participant.
            </Body>
          </div>

          {/* Right — N² watermark panel */}
          <div className="hidden items-center justify-center border-l border-white/[0.06] bg-gradient-to-br from-primary/[0.06] to-brand-purple/[0.04] px-14 lg:flex">
            <div className="flex flex-col items-center gap-2">
              <DisplayText className="bg-gradient-to-br from-primary to-brand-purple bg-clip-text text-display leading-none tracking-[-0.06em] text-transparent">
                N²
              </DisplayText>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">
                network law
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT EACH MACHINE SELF ADDS — horizontal with left label ── */}
      <div className="flex flex-col gap-5">
        <Eyebrow>What each Machine Self adds</Eyebrow>

        <div className="grid gap-3 lg:grid-cols-2">
          {NETWORK_ADDS.map((item, i) => (
            <div
              key={item.label}
              className="glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:border-primary/20 sm:p-7"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                  { "via-primary/40": i % 2 === 0, "via-brand-purple/40": i % 2 !== 0 }
                )}
              />
              <div
                className={cn(
                  "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.14]",
                  { "bg-primary": i % 2 === 0, "bg-brand-purple": i % 2 !== 0 }
                )}
              />

              <div className="flex items-start gap-5">
                <span
                  className={cn("font-mono text-xs font-bold tracking-[0.22em]", { "text-primary/50": i % 2 === 0, "text-brand-purple/70": i % 2 !== 0 })}
                >
                  0{i + 1}
                </span>
                <div>
                  <CardTitle
                    className={cn(
                      "bg-gradient-to-r bg-clip-text tracking-[-0.02em] text-transparent",
                      { "from-primary to-brand-purple": i % 2 === 0, "from-brand-purple to-primary": i % 2 !== 0 }
                    )}
                  >
                    {item.label}
                  </CardTitle>
                  <Body className="mt-2 text-foreground/60">
                    {item.desc}
                  </Body>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MILESTONES — progressive scale layout ── */}
      <div className="flex flex-col gap-5">
        <Eyebrow>Global scaling milestones</Eyebrow>

        {/* Row 1 — 10M full width */}
        <div className="grid gap-3">
          {MILESTONES.slice(0, 1).map((m) => (
            <div
              key={m.val}
            className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:border-primary/20"
          >
              <div
                className={cn("pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent", m.topLine)}
              />
              <div
                className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.16]", m.glow)}
              />

              <div className="flex items-end justify-between">
                <div>
                  <DisplayText
                    className={cn("bg-gradient-to-r bg-clip-text text-headline leading-none tracking-[-0.04em] text-transparent", m.gradient)}
                  >
                    {m.val}
                  </DisplayText>
                  <Eyebrow className="mt-1 text-white/50">{m.label}</Eyebrow>
                </div>
              </div>
              <Body className="mt-5">{m.desc}</Body>
            </div>
          ))}
        </div>

        {/* Row 2 — 100M + 1B asymmetric */}
        <div className="grid gap-3 lg:grid-cols-[1fr_1.8fr]">
          {/* 100M */}
          <div className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:border-primary/20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.16]" />
            <DisplayText className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-headline leading-none tracking-[-0.04em] text-transparent">
              100M
            </DisplayText>
            <Eyebrow className="mt-1 text-white/50">Machine Selves</Eyebrow>
            <Body className="mt-5">
              Global coordination layer active. Every major market covered.
            </Body>
          </div>

          {/* 1B — hero milestone */}
          <div className="glass-card glass-card-accent-purple group relative overflow-hidden p-8 transition-all duration-300 hover:border-brand-purple/30 bg-gradient-to-br from-brand-purple/[0.09] to-primary/[0.04]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-purple opacity-[0.10] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.18]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary opacity-[0.07] blur-3xl" />

            {/* Watermark */}
            <div className="pointer-events-none absolute bottom-0 right-4 select-none">
              <span className="text-[140px] font-black leading-none text-white opacity-[0.03]">
                1B
              </span>
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div>
                <DisplayText className="bg-gradient-to-r from-brand-purple to-primary bg-clip-text text-headline leading-none tracking-[-0.04em] text-transparent">
                  1B
                </DisplayText>
                <Eyebrow className="mt-1 text-white/50">Machine Selves</Eyebrow>
              </div>

              <div className="flex flex-col gap-5">
                <CardTitle className="font-bold leading-snug tracking-tight text-foreground/80">
                  Universal deployment.
                  <span className="bg-gradient-to-r from-brand-purple to-primary bg-clip-text text-transparent">
                    {" "}
                    Any human with a phone.
                  </span>
                </CardTitle>
                <Body>
                  Every human with a phone participates in the global
                  intelligence network — the largest coordinated human system
                  ever built.
                </Body>
                <div className="glass-chip w-fit gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-purple/80">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-purple shadow-[0_0_6px_rgba(123,31,162,0.9)]" />
                  Universal objective
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CLOSING BAR ── */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden p-10 text-center md:p-14 bg-gradient-to-r from-primary/[0.07] via-brand-purple/[0.05] to-primary/[0.04]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-primary opacity-[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-brand-purple opacity-[0.08] blur-3xl" />
        <SectionLabel className="relative text-primary/80">Objective</SectionLabel>
        <DisplayText className="relative mt-5 text-headline">
          Universal Machine Self deployment
          <br />
          <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
            on smartphones globally.
          </span>
        </DisplayText>
        <Body className="relative mx-auto mt-5 max-w-lg text-foreground/60">
          Any human with a phone becomes a sovereign participant in the world&apos;s
          first human intelligence network.
        </Body>
      </div>
    </section>
  );
}
