import SectionHeader from "@/components/Headings/SectionHeader";
import { Body, DisplayText, CardTitle } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const STATEMENTS = [
  {
    num: "01",
    title: "Machine Self",
    body: "Every person has a Machine Self — a sovereign digital agent that represents their identity, capabilities, and intelligence. Built by you. Owned by you. Working for you.",
    accent: "from-primary to-brand-purple",
    glow: "bg-primary",
    topLine: "via-primary/50",
    tag: "text-primary/70",
    border: "hover:border-primary/20",
  },
  {
    num: "02",
    title: "Consent and Permission",
    body: "Your data never leaves your device. Every interaction is consent-based. You decide what participates, what earns, and what stays private. Always.",
    accent: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    topLine: "via-brand-purple/50",
    tag: "text-brand-purple/80",
    border: "hover:border-brand-purple/20",
  },
  {
    num: "03",
    title: "Human Intelligence Network",
    body: "Machine Selves connect into a global network that coordinates human knowledge, decisions, and actions across digital and physical environments — at scale.",
    accent: "from-primary to-brand-purple",
    glow: "bg-primary",
    topLine: "via-primary/50",
    tag: "text-primary/70",
    border: "hover:border-primary/20",
  },
  {
    num: "04",
    title: "AI Orchestration",
    body: "AI agents route tasks, integrate humans into AI workflows, and verify real-world work. Human judgement works alongside artificial intelligence. Neither replaces the other.",
    accent: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    topLine: "via-brand-purple/50",
    tag: "text-brand-purple/80",
    border: "hover:border-brand-purple/20",
  },
  {
    num: "05",
    title: "Marketplace and Token Economy",
    body: "External demand enters the network. Verified human participation fulfils it. Value flows back to the people who built the network — not to a platform intermediary.",
    accent: "from-primary to-brand-purple",
    glow: "bg-primary",
    topLine: "via-primary/50",
    tag: "text-primary/70",
    border: "hover:border-primary/20",
  },
];

export default function CoreStatementsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-10 text-white">
      <div
        aria-hidden
        className="atm-violet-indigo pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader
        title="Five core system statements."
        eyebrowText="THE PROTOCOL"
        align="left"
      />

      {/* Statements — alternating large cards */}
      <div className="flex flex-col gap-4">
        {STATEMENTS.map((s, i) => (
          <div
            key={s.num}
            className={cn("glass-card group relative overflow-hidden p-7 transition-all duration-300 sm:p-8", s.border)}
          >
            {/* Top accent line */}
            <div
              className={cn("pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-70", s.topLine)}
            />
            {/* Glow orb */}
            <div
              className={cn(
                "pointer-events-none absolute -top-10 h-40 w-40 rounded-full opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]",
                s.glow,
                { "-right-10": i % 2 === 0, "-left-10": i % 2 !== 0 }
              )}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
              {/* Number + title block */}
              <div className="flex shrink-0 items-center gap-4 sm:w-56 lg:w-64 sm:flex-col sm:items-start sm:gap-2">
                <span
                  className={cn("font-mono text-xs font-bold tracking-widest", s.tag)}
                >
                  {s.num}
                </span>
                <CardTitle
                  className={cn("bg-gradient-to-r bg-clip-text leading-tight tracking-tight text-transparent", s.accent)}
                >
                  {s.title}
                </CardTitle>
              </div>

              {/* Divider */}
              <div className="hidden h-full w-px self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />

              {/* Body */}
              <Body className="flex-1">{s.body}</Body>
            </div>
          </div>
        ))}
      </div>

      {/* Closing statement */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden p-8 text-center bg-gradient-to-br from-primary/[0.06] to-brand-purple/[0.06]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
        <div className="pointer-events-none absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-primary opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-brand-purple opacity-[0.07] blur-3xl" />
        <DisplayText className="text-headline">
          Built by humans.{" "}
          <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
            Owned by humans.
          </span>
          <br />
          <span className="font-normal text-title text-foreground/60">
            Working for humans.
          </span>
        </DisplayText>
      </div>
    </section>
  );
}
