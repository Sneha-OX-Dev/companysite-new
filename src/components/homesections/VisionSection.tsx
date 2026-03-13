import SectionHeader from "@/components/Headings/SectionHeader";
import { CardTitle, SectionLabel, Body, Muted, DisplayText, Subhead } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const PILLARS = [
  { label: "Completes AI", num: "01" },
  { label: "Rewires work", num: "02" },
  { label: "Realigns markets", num: "03" },
  { label: "Redistributes power", num: "04" },
];

const BODY_POINTS = [
  {
    title: "A verified digital counterpart.",
    body: "A Machine Self is a verified digital counterpart of a human that allows the individual to operate across digital systems, AI systems, and the real world.",
  },
  {
    title: "Active participants, not passive data.",
    body: "Through Machine Selves, humans become active participants inside systems — contributing intelligence, judgement, verification, expertise, and work.",
  },
  {
    title: "Paid contributors within the network.",
    body: "Machine Selves are paid contributors within the network, allowing businesses, AI systems, and digital platforms to coordinate human participation directly.",
  },
  {
    title: "Any human with a phone.",
    body: "The network operates through the devices people already carry — allowing any human with a phone to participate through their Machine Self.",
  },
];

export default function VisionSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-10 text-white">
      <div
        aria-hidden
        className="atm-amber-rose pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader
        pillText="Vision & Closing"
        title="The vision."
        subtitle="OX is infrastructure for a decentralised network of one billion connected human agents."
      />

      {/* Hero statement — full width */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden p-10 md:p-14 bg-gradient-to-br from-primary/[0.06] via-brand-purple/[0.04] to-transparent">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary opacity-[0.07] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-purple opacity-[0.07] blur-[80px]" />

        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="text-[200px] font-black text-white opacity-[0.02] leading-none md:text-[280px]">
            OX
          </span>
        </div>

        <div className="relative flex flex-col gap-3">
          <SectionLabel className="text-primary/80">Infrastructure</SectionLabel>
          <DisplayText className="text-display">
            We are scaling a network of
            <br />
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              one billion human agents.
            </span>
          </DisplayText>
          <Body className="mt-3 max-w-2xl">
            Where the Machine Self represents the unique intelligence of
            individuals and coordinates human and artificial intelligence to
            solve problems, perform work, and create economic value.
          </Body>
        </div>
      </div>

      {/* Four pillars — horizontal strip */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <div
            key={p.num}
            className="glass-card group relative overflow-hidden p-5 transition-all duration-300 hover:border-primary/20"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="font-mono text-xs font-bold tracking-widest text-primary/50">
              {p.num}
            </span>
            <CardTitle className="mt-3 leading-tight tracking-tight text-white">
              {p.label}
            </CardTitle>
          </div>
        ))}
      </div>

      {/* Body points — 2x2 grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {BODY_POINTS.map((pt, i) => (
          <div
            key={pt.title}
            className="glass-card group relative overflow-hidden p-7 transition-all duration-300 hover:border-brand-purple/20 sm:p-8"
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                { "via-primary/40": i % 2 === 0, "via-brand-purple/40": i % 2 !== 0 }
              )}
            />
            <div
              className={cn(
                "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.13]",
                { "bg-primary": i % 2 === 0, "bg-brand-purple": i % 2 !== 0 }
              )}
            />
            <CardTitle
              className={cn(
                "bg-gradient-to-r bg-clip-text text-title leading-snug tracking-[-0.02em] text-transparent",
                { "from-primary to-brand-purple": i % 2 === 0, "from-brand-purple to-primary": i % 2 !== 0 }
              )}
            >
              {pt.title}
            </CardTitle>
            <Body className="mt-4">{pt.body}</Body>
          </div>
        ))}
      </div>

      {/* Scale statement — asymmetric two col */}
      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        {/* Left — stat card */}
        <div className="glass-card glass-card-accent-pink relative overflow-hidden p-8 bg-gradient-to-br from-primary/[0.07] to-brand-purple/[0.04]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-[0.07] blur-3xl" />
          <SectionLabel className="text-primary/80">Scale target</SectionLabel>
          <DisplayText className="mt-5 bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-display leading-none tracking-[-0.05em] text-transparent">
            1B
          </DisplayText>
          <CardTitle className="mt-3 font-bold text-foreground/80">
            Machine Selves.
          </CardTitle>
          <Muted className="mt-2">One for every human with a phone.</Muted>
        </div>

        {/* Right — productivity statement */}
        <div className="glass-card glass-card-accent-purple relative overflow-hidden p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-purple opacity-[0.07] blur-3xl" />
          <SectionLabel className="text-brand-purple/70">The outcome</SectionLabel>
          <CardTitle className="mt-5 font-bold leading-snug tracking-tight text-foreground/80">
            Human intelligence and machine intelligence operating together —
            producing levels of productivity{" "}
            <span className="bg-gradient-to-r from-brand-purple to-primary bg-clip-text text-transparent">
              never previously possible.
            </span>
          </CardTitle>
          <Body className="mt-5">
            Dramatically greater output or dramatically lower cost — as human
            participation becomes directly integrated into digital
            infrastructure.
          </Body>
        </div>
      </div>

      {/* Closing — full width inevitability bar */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden p-10 text-center md:p-14 bg-gradient-to-r from-primary/[0.07] via-brand-purple/[0.05] to-primary/[0.04]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary opacity-[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-purple opacity-[0.08] blur-3xl" />

        <DisplayText className="relative text-headline">
          This is not optional.
          <br />
          <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
            It is inevitable.
          </span>
        </DisplayText>
        <Body className="relative mx-auto mt-5 max-w-xl text-foreground/60">
          OX is infrastructure. Not a product. Not a platform. The layer that
          connects human intelligence to every system on earth.
        </Body>
      </div>
    </section>
  );
}
