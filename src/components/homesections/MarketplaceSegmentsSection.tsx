import SectionHeader from "@/components/Headings/SectionHeader";
import { SectionLabel, Body, CardTitle, DisplayText, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const SEGMENTS = [
  {
    num: "01",
    tag: "Human Participation",
    tagColor: "text-primary/70",
    topLine: "via-primary/50",
    glow: "bg-primary",
    dotClass: "bg-primary shadow-[0_0_8px_rgba(255,45,107,0.8)]",
    border: "hover:border-primary/25",
    gradient: "from-primary to-brand-purple",
    items: [
      {
        label: "Builders",
        desc: "Early participants building their Machine Self",
      },
      {
        label: "Contributors",
        desc: "Providing knowledge, context, decisions",
      },
      { label: "Workers (Digital)", desc: "Digital task execution at scale" },
      {
        label: "Workers (Physical)",
        desc: "Real-world task execution, verified",
      },
      { label: "Validators", desc: "Confirming outcomes & AI outputs" },
      { label: "Specialists", desc: "Domain experts, skilled professionals" },
    ],
  },
  {
    num: "02",
    tag: "Enterprise & Commercial",
    tagColor: "text-brand-purple/80",
    topLine: "via-brand-purple/50",
    glow: "bg-brand-purple",
    dotClass: "bg-brand-purple shadow-[0_0_8px_rgba(123,31,162,0.8)]",
    border: "hover:border-brand-purple/25",
    gradient: "from-brand-purple to-primary",
    items: [
      { label: "Operations Optimisation", desc: "Manufacturing, logistics, supply chains" },
      {
        label: "Marketplace Operators",
        desc: "E-commerce, gig platforms, procurement",
      },
      {
        label: "Enterprise Decision Systems",
        desc: "Consulting, intelligence, analytics",
      },
      {
        label: "Service Providers",
        desc: "Outsourcing, verification services",
      },
      {
        label: "Industry Verticals",
        desc: "Retail, energy, agriculture, healthcare, finance, insurance, defense",
      },
    ],
  },
  {
    num: "03",
    tag: "Developer & Technology",
    tagColor: "text-primary/70",
    topLine: "via-primary/50",
    glow: "bg-primary",
    dotClass: "bg-primary shadow-[0_0_8px_rgba(255,45,107,0.8)]",
    border: "hover:border-primary/25",
    gradient: "from-primary to-brand-purple",
    items: [
      {
        label: "Platform Developers",
        desc: "Companies building on the network",
      },
      { label: "AI Developers", desc: "Model builders, human-in-the-loop AI" },
      {
        label: "Robotics & Automation",
        desc: "Drones, robotics, industrial automation",
      },
      { label: "Application Developers", desc: "Startups building applications" },
      {
        label: "Integration Providers",
        desc: "APIs, enterprise system integrators",
      },
    ],
  },
  {
    num: "04",
    tag: "Government & Public",
    tagColor: "text-brand-purple/80",
    topLine: "via-brand-purple/50",
    glow: "bg-brand-purple",
    dotClass: "bg-brand-purple shadow-[0_0_8px_rgba(123,31,162,0.8)]",
    border: "hover:border-brand-purple/25",
    gradient: "from-brand-purple to-primary",
    items: [
      { label: "Smart Cities", desc: "City governments, urban planning" },
      {
        label: "Public Infrastructure",
        desc: "Transportation, energy grids, utilities",
      },
      {
        label: "Emergency Systems",
        desc: "Disaster response, safety coordination",
      },
      {
        label: "Public Services",
        desc: "Healthcare, education, social services",
      },
      {
        label: "National Systems",
        desc: "Federal governments, national infrastructure, defense",
      },
    ],
  },
];

const ECOSYSTEM = [
  {
    actor: "Human participants",
    role: "Supply capability and signals",
    num: "01",
    even: true,
  },
  {
    actor: "Enterprises",
    role: "Create demand for work and intelligence",
    num: "02",
    even: false,
  },
  {
    actor: "Developers",
    role: "Build applications and systems on top",
    num: "03",
    even: true,
  },
  {
    actor: "Capital markets",
    role: "Fund and price the network through tokens",
    num: "04",
    even: false,
  },
  {
    actor: "Governments",
    role: "Use the network to operate public systems",
    num: "05",
    even: true,
  },
];

export default function MarketplaceSegmentsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-10 text-white">
      <div
        aria-hidden
        className="atm-cyan-teal pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader
        pillText="Marketplace Segments"
        title="Who the network serves."
      />

      {/* Segments grid — 2x2 */}
      <div className="grid gap-4 lg:grid-cols-2">
        {SEGMENTS.map((s, si) => (
          <div
            key={s.num}
            className={cn("glass-card group relative overflow-hidden transition-all duration-300", s.border)}
          >
            <div
              className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent", s.topLine)}
            />
            <div
              className={cn(
                "pointer-events-none absolute h-52 w-52 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.15]",
                s.glow,
                { "-right-14 -top-14": si % 2 === 0, "-left-14 -top-14": si % 2 !== 0 }
              )}
            />

            <div className="relative p-8">
              {/* Header row */}
              <div className="mb-6 flex items-center gap-4">
                <span
                  className={cn("font-mono text-xs font-bold tracking-widest", s.tagColor)}
                >
                  {s.num}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                <p
                  className={cn("bg-gradient-to-r bg-clip-text text-sm font-black uppercase tracking-widest text-transparent", s.gradient)}
                >
                  {s.tag}
                </p>
              </div>

              <ul className="space-y-4">
                {s.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className={cn("mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full", s.dotClass)} />
                    <div className="flex flex-col gap-0.5">
                      <Body className="font-semibold leading-snug text-foreground/85">
                        {item.label}
                      </Body>
                      <Muted className="text-foreground/50">
                        {item.desc}
                      </Muted>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem — completely redesigned */}
      <div className="glass-card glass-card-accent-pink relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary opacity-[0.07] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-purple opacity-[0.07] blur-[80px]" />

        {/* Top — title + big statement */}
        <div className="relative border-b border-white/[0.06] p-8 md:p-10">
          <SectionLabel className="text-primary/80">How the ecosystem fits</SectionLabel>
          <DisplayText className="mt-5 max-w-3xl text-headline">
            All coordinated by one underlying system —
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              {" "}
              a decentralised network of Machine Selves.
            </span>
          </DisplayText>
          <Body className="mt-4 max-w-2xl text-foreground/60">
            Turning static big data into live human intelligence — coordinated,
            consented, and rewarded.
          </Body>
        </div>

        {/* Bottom — 5 actor cards in a row */}
        <div className="relative grid grid-cols-1 divide-y divide-white/[0.05] sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {ECOSYSTEM.map((e) => (
            <div
              key={e.actor}
              className="group relative flex flex-col gap-3 overflow-hidden p-6 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  { "via-primary/30": e.even, "via-brand-purple/30": !e.even }
                )}
              />
              <span
                className={`font-mono text-xs font-bold tracking-widest ${e.even ? "text-primary/50" : "text-brand-purple/60"}`}
              >
                {e.num}
              </span>
              <p
                className={cn(
                  "bg-gradient-to-r bg-clip-text text-base font-black leading-snug tracking-tight text-transparent",
                  { "from-primary to-brand-purple": e.even, "from-brand-purple to-primary": !e.even }
                )}
              >
                {e.actor}
              </p>
              <Muted className="text-foreground/70">{e.role}</Muted>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
