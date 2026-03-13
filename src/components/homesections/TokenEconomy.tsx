import SectionHeader from "@/components/Headings/SectionHeader";
import { SectionLabel, Body, DisplayText, Eyebrow, Subhead } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const HUMAN_MINING_POINTS = [
  "Build their Machine Self",
  "Contribute intelligence to the system",
  "Perform work and tasks",
  "Validate outcomes and signals",
  "Coordinate activity between humans and digital systems",
];

const CIRCULAR_STEPS = [
  {
    num: "01",
    title: "Humans mine the tokens",
    desc: "Build a Machine Self, participate, earn tokens for verified contributions.",
    glow: "bg-primary",
    border: "hover:border-primary/25",
    topLine: "via-primary/50",
    tag: "text-primary/70",
  },
  {
    num: "02",
    title: "Organisations acquire tokens",
    desc: "Third parties obtain tokens to access the network and submit job requests.",
    glow: "bg-brand-purple",
    border: "hover:border-brand-purple/25",
    topLine: "via-brand-purple/50",
    tag: "text-brand-purple/90",
  },
  {
    num: "03",
    title: "Tokens fund work",
    desc: "Organisations request work, intelligence, and validation from the network.",
    glow: "bg-primary",
    border: "hover:border-primary/25",
    topLine: "via-primary/50",
    tag: "text-primary/70",
  },
  {
    num: "04",
    title: "Tokens return to community",
    desc: "Participants complete the work and receive tokens as rewards.",
    glow: "bg-brand-purple",
    border: "hover:border-brand-purple/25",
    topLine: "via-brand-purple/50",
    tag: "text-brand-purple/90",
  },
];

export default function TokenEconomySection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-10 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_65%_50%_at_15%_10%,rgba(255,45,107,0.15),transparent_65%),radial-gradient(ellipse_55%_45%_at_85%_85%,rgba(123,31,162,0.13),transparent_65%)]"
      />

      <SectionHeader
        pillText="Token Economy"
        eyebrowText="THE ECONOMY"
        title="Human-mined circular crypto economy."
        subtitle="Organisations pay tokens to access the network. Humans earn those tokens by participating. Fixed supply. Growing demand. Mined only by people."
      />

      {/* Hero statement bar */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden p-8 bg-gradient-to-r from-primary/[0.07] via-brand-purple/[0.05] to-primary/[0.05]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-purple opacity-[0.07] blur-3xl" />

        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <DisplayText className="text-headline">
            Not created by{" "}
            <span className="text-foreground/30 line-through decoration-foreground/20">
              machines
            </span>
            .
            <br />
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              Created by humans.
            </span>
          </DisplayText>
          <div className="flex shrink-0 flex-wrap gap-3">
            <div className="flex flex-col gap-1 rounded-2xl border border-primary/20 bg-primary/[0.07] px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Fixed total supply</span>
              <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-base font-black leading-none tracking-tight text-transparent">1,371,000,000 OXME</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl border border-brand-purple/20 bg-brand-purple/[0.07] px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-purple/60">Conversion rate</span>
              <span className="bg-gradient-to-r from-brand-purple to-primary bg-clip-text text-base font-black leading-none tracking-tight text-transparent">1,000 OXIT = 1 OXME</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Token standard</span>
              <span className="text-base font-black leading-none tracking-tight text-white/70">ERC-20 on Base</span>
            </div>
          </div>
        </div>
      </div>

      {/* Equal-height two-column grid */}
      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
        {/* Left — human mining */}
        <div className="glass-card glass-card-accent-pink group relative flex flex-col overflow-hidden p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />

          <SectionLabel className="text-primary/80">Human mining</SectionLabel>

          <Body className="mt-5">
            Tokens are not created through capital investment or machine
            computation. The{" "}
            <span className="font-semibold text-white/90">
              only way a token enters circulation
            </span>{" "}
            is through human participation.
          </Body>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <SectionLabel className="text-brand-purple/70">Participants earn by</SectionLabel>

          <ul className="mt-5 flex flex-1 flex-col justify-between space-y-3">
            {HUMAN_MINING_POINTS.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4"
              >
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-primary/15 to-brand-purple/15">
                  <span className="text-xs font-bold text-white/50">
                    {i + 1}
                  </span>
                </span>
                <Body className="text-foreground/70">{item}</Body>
              </li>
            ))}
          </ul>

          <div className="glass-chip mt-7 gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
            Mined by humans, not machines
          </div>
        </div>

        {/* Right — circular economy */}
        <div className="glass-card glass-card-accent-purple group relative flex flex-col overflow-hidden p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-purple opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

          <SectionLabel className="text-brand-purple/80">The circular economy</SectionLabel>

          <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
            {CIRCULAR_STEPS.map((step) => (
              <div
                key={step.num}
                className={cn("group/card relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-4 transition-all duration-300", step.border)}
              >
                <div
                  className={cn("pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-60", step.topLine)}
                />
                <div
                  className={cn("pointer-events-none absolute -right-4 -top-4 h-14 w-14 rounded-full opacity-[0.08] blur-xl transition-opacity duration-300 group-hover/card:opacity-[0.18]", step.glow)}
                />
                <span
                  className={cn("font-mono text-xs font-bold tracking-widest", step.tag)}
                >
                  {step.num}
                </span>
                <Body className="mt-2 font-bold text-white/80">
                  {step.title}
                </Body>
                <Body className="mt-2 flex-1 text-white/60">
                  {step.desc}
                </Body>
              </div>
            ))}
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <Body>
            A closed-loop economy: humans mine tokens, organisations acquire
            them, tokens fund work, then flow back to the humans who do it.
          </Body>

          <div className="glass-chip mt-7 gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-purple/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-purple shadow-[0_0_6px_rgba(123,31,162,0.9)]" />
            Human-powered. Closed loop.
          </div>
        </div>
      </div>
    </section>
  );
}
