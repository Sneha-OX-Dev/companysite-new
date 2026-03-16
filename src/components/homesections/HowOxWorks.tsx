import SectionHeader from "@/components/Headings/SectionHeader";
import {
  Body,
  CardTitle,
  DisplayText,
  Eyebrow,
  Muted,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const PHYSICAL_WORK_STEPS = [
  "The participant opts in.",
  "The task is completed.",
  "Verification confirms completion.",
  "Reward is issued.",
];

const FLOW_STEPS = [
  {
    icon: "01",
    title: "Enterprise posts demand",
    body: "Structured requests for work, intelligence, validation, or action — not raw data pulls.",
    color: "from-primary/20 to-transparent",
    accent: "text-primary/70",
    glow: "bg-primary",
    border: "hover:border-primary/25",
    topLine: "via-primary/40",
  },
  {
    icon: "02",
    title: "Machine Self evaluates privately",
    body: "On-device matching. No raw data ever leaves the participant's phone.",
    color: "from-brand-purple/20 to-transparent",
    accent: "text-brand-purple/80",
    glow: "bg-brand-purple",
    border: "hover:border-brand-purple/25",
    topLine: "via-brand-purple/40",
  },
  {
    icon: "03",
    title: "Participant opts in",
    body: "Only eligible participants see the opportunity. Only the consent signal is transmitted.",
    color: "from-brand-purple/20 to-transparent",
    accent: "text-brand-purple/90",
    glow: "bg-brand-purple",
    border: "hover:border-brand-purple/25",
    topLine: "via-brand-purple/40",
  },
  {
    icon: "04",
    title: "Verified outcome. Reward issued.",
    body: "Enterprises purchase verified outcomes — not data. You work. You get paid.",
    color: "from-primary/15 to-brand-purple/10",
    accent: "text-primary/70",
    glow: "bg-primary",
    border: "hover:border-primary/25",
    topLine: "via-primary/40",
  },
];

export default function HowOxWorksSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-24 pt-10 text-white">
      {/* Ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.16),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_85%,rgba(123,31,162,0.14),transparent_65%)]"
      />

      <SectionHeader
        pillText="How OX Works"
        title="Where systems stop predicting — and start knowing."
        subtitle="Enterprises post demand. Machine Selves evaluate privately. Only consent and verified outcomes leave the device."
      />

      {/* Flow steps row */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {FLOW_STEPS.map((step, i) => (
          <div
            key={step.icon}
            className={cn(
              "glass-card group relative overflow-hidden bg-gradient-to-br p-5 transition-all duration-300",
              step.color,
              step.border,
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-60",
                step.topLine,
              )}
            />
            <div
              className={cn(
                "pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]",
                step.glow,
              )}
            />
            <span
              className={cn(
                "font-mono text-xs font-bold tracking-widest",
                step.accent,
              )}
            >
              {step.icon}
            </span>
            <Body className="mt-3 font-bold leading-snug text-white/90">
              {step.title}
            </Body>
            <Muted className="mt-2 leading-relaxed text-white/60">
              {step.body}
            </Muted>
            {/* Connector arrow — hidden on last */}
            {i < FLOW_STEPS.length - 1 && (
              <div className="pointer-events-none absolute -right-[7px] top-1/2 z-10 hidden -translate-y-1/2 text-white/20 transition-colors duration-300 group-hover:text-primary/60 lg:block">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
        {/* Left — machine–human bridge */}
        <div className="glass-card group relative overflow-hidden p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-primary opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-brand-purple opacity-[0.06] blur-3xl" />

          <Eyebrow className="text-primary/60">Machine–human bridge</Eyebrow>

          {/* Three-column bridge layout */}
          <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-center">
            {/* Digital systems */}
            <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <Eyebrow className="text-primary/60">
                Digital systems &amp; AI
              </Eyebrow>
              <Muted className="mt-3 text-white/70">
                Enterprises post structured demand into the network — typed
                requests for work, intelligence, validation, or action.
              </Muted>
            </div>

            {/* Centre bridge node */}
            <div className="flex shrink-0 flex-col items-center gap-2">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 to-brand-purple/20 shadow-[0_0_28px_rgba(255,45,107,0.25)]">
                <div className="absolute inset-[4px] rounded-xl border border-white/10 bg-black/50" />
                <span className="relative text-center text-xs font-bold uppercase leading-tight tracking-[0.1em] text-white/80">
                  Machine
                  <br />
                  Self
                </span>
              </div>
              <span className="text-xs text-white/35 tracking-wide">
                on-device
              </span>
            </div>

            {/* Human participation */}
            <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <Eyebrow className="text-brand-purple/80">
                Human participation
              </Eyebrow>
              <Muted className="mt-3 text-white/70">
                Only eligible participants see the opportunity. Only the consent
                signal is transmitted — never raw data.
              </Muted>
            </div>
          </div>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Physical work + enterprise grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Eyebrow className="text-white/50">
                When physical work is required
              </Eyebrow>
              <ol className="mt-4 space-y-3">
                {PHYSICAL_WORK_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-brand-purple/20" />
                      <span className="text-xs font-bold text-white/60">
                        {i + 1}
                      </span>
                    </span>
                    <Muted className="text-white/70">{step}</Muted>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <Eyebrow className="text-white/50">
                What enterprises receive
              </Eyebrow>
              <Muted className="mt-4 text-white/70">
                Enterprises do not purchase user data. They purchase{" "}
                <span className="font-semibold text-white/90">
                  verified outcomes.
                </span>
              </Muted>
              <Muted className="mt-3 text-white/70">
                You choose to participate. You do the work. You get paid. The
                system never acts without your consent.
              </Muted>
            </div>
          </div>
        </div>

        {/* Right — demand narrative */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-8">
          <div className="glass-card group relative overflow-hidden p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-purple opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]" />

            <Eyebrow className="text-brand-purple/70">
              How demand reaches participants
            </Eyebrow>

            <DisplayText className="mt-5 text-headline font-black leading-tight tracking-tight text-white">
              Predict nothing.
              <br />
              <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
                Know everything.
              </span>
            </DisplayText>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Body>
              The Machine Self evaluates privately within the OX app, on the
              participant&apos;s device — whether they qualify. No inference. No
              guesswork.
            </Body>

            <Body className="mt-4">
              Only eligible participants see the opportunity to opt in. Only the
              consent signal is transmitted — never raw data. Verified work
              completes. Rewards are issued.
            </Body>

            <div className="mt-8 glass-card p-5">
              <CardTitle className="font-bold leading-snug tracking-tight text-foreground/90">
                The system never acts
                <br />
                <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
                  without your consent.
                </span>
              </CardTitle>
            </div>

            <div className="glass-chip mt-5 gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
              Consent-first protocol
            </div>
          </div>
        </div>
      </div>
      {/* Paradigm Shift table */}
      <div className="glass-card group relative overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Eyebrow>The Paradigm Shift</Eyebrow>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-white/10 pb-3 pr-8 text-left text-xs font-black uppercase tracking-widest text-foreground/60">
                  Old Model
                </th>
                <th className="border-b border-white/10 pb-3 text-left text-xs font-black uppercase tracking-widest text-primary/80">
                  OX Model
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Inference-Based: Probabilistic inference leads to approximation",
                  "Deterministic Eligibility: Structured truth enables verified eligibility",
                ],
                [
                  "Approximation: Uncertain signals produce wasted effort",
                  "Precision Routing: Verified eligibility drives exact routing",
                ],
              ].map(([old, ox]) => (
                <tr
                  key={old}
                  className="border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="py-4 px-2 text-foreground/40">{old}</td>
                  <td className="py-4 px-2 text-foreground/80">{ox}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
