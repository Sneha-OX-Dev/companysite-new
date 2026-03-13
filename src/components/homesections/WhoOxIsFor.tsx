import SectionHeader from "@/components/Headings/SectionHeader";
import { Button } from "@/components/ui/button";
import { SectionLabel, Body, CardTitle, DisplayText, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  {
    tag: "Individuals",
    tagColor: "text-primary/70",
    topLine: "via-primary/50",
    glow: "bg-primary",
    border: "hover:border-primary/20",
    title: "You are not a user.",
    highlight: "You are an economic participant.",
    titleGradient: "from-primary to-brand-purple",
    cta: "Build Your Machine Self",
    ctaPrimary: true,
    stats: [
      { val: "4 min", label: "daily to build" },
      { val: "16 hrs", label: "of capital stored" },
      { val: "2,000", label: "data points earned" },
    ],
    body: "Spend 4 minutes a day building your Machine Self. Every minute you invest is stored, verified, and working on your behalf. As you build, you mine. As you mine, you earn. When complete, you are permanently matchable to real paid commercial work from real organisations — across digital systems and the physical world. The network works for you. Even while you sleep.",
    callout:
      "Not a profile. A sovereign economic asset that earns on behalf of its owner.",
  },
  {
    tag: "Enterprise & Business",
    tagColor: "text-brand-purple/80",
    topLine: "via-brand-purple/50",
    glow: "bg-brand-purple",
    border: "hover:border-brand-purple/20",
    title: "Pay for results.",
    highlight: "Not reach. Not impressions. Not probability.",
    titleGradient: "from-brand-purple to-primary",
    cta: "Request Enterprise Access",
    ctaPrimary: false,
    stats: [
      { val: "Verified", label: "outcomes only" },
      { val: "Zero", label: "data transmitted" },
      { val: "Live", label: "human matching" },
    ],
    body: "Organisations post structured work requests into the OX framework. The network matches those requests against the Machine Selves of real, verified people — privately, on their devices, within their consent boundaries. Only people who qualify see the opportunity. Only a consent signal is returned.",
    callout:
      "The live intelligence layer that will redefine how businesses operate and optimise the world's markets and supply chains.",
  },
  {
    tag: "Developers & Builders",
    tagColor: "text-primary/70",
    topLine: "via-primary/50",
    glow: "bg-primary",
    border: "hover:border-primary/20",
    title: "Build on live intelligence.",
    highlight: "Not historical data. The real-time layer.",
    titleGradient: "from-primary to-brand-purple",
    cta: "Contact Us",
    ctaPrimary: false,
    stats: [
      { val: "API", label: "direct access" },
      { val: "Real-time", label: "human signals" },
      { val: "On-chain", label: "verified outcomes" },
    ],
    body: "Plug into a foundational AI and human intelligence infrastructure. Access real-time human signals, coordinate human and AI workflows, verify outcomes, and trigger real-world actions — through a decentralised network of Machine Selves representing real people.",
    callout: "Bernard.Flynn@oxygean.com · www.oxygean.com",
  },
  {
    tag: "Government & Smart Cities",
    tagColor: "text-brand-purple/80",
    topLine: "via-brand-purple/50",
    glow: "bg-brand-purple",
    border: "hover:border-brand-purple/20",
    title: "Live signals. Sovereign citizens.",
    highlight: "Coordination without centralisation.",
    titleGradient: "from-brand-purple to-primary",
    cta: "Government Enquiries",
    ctaPrimary: false,
    stats: [
      { val: "Real-time", label: "city signals" },
      { val: "Zero", label: "central database" },
      { val: "Full", label: "data sovereignty" },
    ],
    body: "Replace delayed reports with live signals from people and systems. Verified human signals combine with AI to monitor conditions, validate information, and coordinate action across transportation, public services, infrastructure, safety, and energy systems — whilst preserving full data sovereignty for every citizen.",
    callout:
      "The only architecture that enables governments to operate with live human intelligence whilst fully respecting the privacy and rights of every individual.",
  },
];

export default function WhoOxIsForSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.13),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgba(123,31,162,0.11),transparent_65%)]"
      />

      <SectionHeader title="Who OX is for." eyebrowText="WHO IT'S FOR" />

      <div className="flex flex-col gap-5">
        {AUDIENCES.map((a, i) => (
          <div
            key={a.tag}
            className={cn("glass-card group relative overflow-hidden transition-all duration-300", a.border)}
          >
            {/* Top accent line */}
            <div
              className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent", a.topLine)}
            />

            {/* Glow */}
            <div
              className={cn(
                "pointer-events-none absolute h-56 w-56 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]",
                a.glow,
                { "-right-16 -top-16": i % 2 === 0, "-left-16 -top-16": i % 2 !== 0 }
              )}
            />

            <div className="grid lg:grid-cols-[280px_1px_minmax(0,1fr)_1px_220px]">
              {/* Col 1 — identity */}
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <SectionLabel className={a.tagColor}>{a.tag}</SectionLabel>
                  <CardTitle
                    className={cn("mt-4 bg-gradient-to-br bg-clip-text text-transparent", a.titleGradient)}
                  >
                    {a.title}
                  </CardTitle>
                  <Body className="mt-2 font-medium leading-snug text-foreground/60">
                    {a.highlight}
                  </Body>
                </div>

                <Button
                  variant={a.ctaPrimary ? "accent" : "glass"}
                  size="pill"
                  className="w-full"
                >
                  {a.cta}
                </Button>
              </div>

              {/* Vertical divider */}
              <div className="hidden bg-gradient-to-b from-transparent via-white/[0.07] to-transparent lg:block" />

              {/* Col 2 — body + callout */}
              <div className="flex flex-col gap-6 p-8">
                <Body>{a.body}</Body>

                {/* Callout */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-5`}
                >
                  <div
                    className={cn("pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-50", a.topLine)}
                  />
                  <Body className="font-semibold leading-snug tracking-tight text-foreground/80">
                    {a.callout}
                  </Body>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden bg-gradient-to-b from-transparent via-white/[0.07] to-transparent lg:block" />

              {/* Col 3 — stats */}
              <div className="flex flex-col justify-center gap-5 p-8">
                {a.stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <DisplayText
                      className={cn("bg-gradient-to-r bg-clip-text text-subhead leading-none tracking-[-0.03em] text-transparent", a.titleGradient)}
                    >
                      {s.val}
                    </DisplayText>
                    <Muted className="text-white/50 tracking-wide">
                      {s.label}
                    </Muted>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
