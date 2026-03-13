import SectionHeader from "@/components/Headings/SectionHeader";

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
    color: "from-[#FF2D6B]/20 to-transparent",
    accent: "text-[#FF2D6B]/70",
    glow: "bg-[#FF2D6B]",
    border: "hover:border-[#FF2D6B]/25",
    topLine: "via-[#FF2D6B]/40",
  },
  {
    icon: "02",
    title: "Machine Self evaluates privately",
    body: "On-device matching. No raw data ever leaves the participant's phone.",
    color: "from-[#9C27B0]/20 to-transparent",
    accent: "text-[#9C27B0]/80",
    glow: "bg-[#9C27B0]",
    border: "hover:border-[#9C27B0]/25",
    topLine: "via-[#9C27B0]/40",
  },
  {
    icon: "03",
    title: "Participant opts in",
    body: "Only eligible participants see the opportunity. Only the consent signal is transmitted.",
    color: "from-[#7B1FA2]/20 to-transparent",
    accent: "text-[#7B1FA2]/90",
    glow: "bg-[#7B1FA2]",
    border: "hover:border-[#7B1FA2]/25",
    topLine: "via-[#7B1FA2]/40",
  },
  {
    icon: "04",
    title: "Verified outcome. Reward issued.",
    body: "Enterprises purchase verified outcomes — not data. You work. You get paid.",
    color: "from-[#FF2D6B]/15 to-[#7B1FA2]/10",
    accent: "text-[#FF2D6B]/70",
    glow: "bg-[#FF2D6B]",
    border: "hover:border-[#FF2D6B]/25",
    topLine: "via-[#FF2D6B]/40",
  },
];

export default function HowOxWorksSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
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
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br ${step.color} p-5 transition-all duration-300 ${step.border}`}
          >
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${step.topLine} to-transparent opacity-60`}
            />
            <div
              className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full ${step.glow} opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.16]`}
            />
            <span
              className={`font-mono text-[11px] font-bold tracking-[0.22em] ${step.accent}`}
            >
              {step.icon}
            </span>
            <p className="mt-3 text-[14px] font-bold leading-snug tracking-[-0.01em] text-white/90 sm:text-[15px]">
              {step.title}
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/45 sm:text-[13px]">
              {step.body}
            </p>
            {/* Connector arrow — hidden on last */}
            {i < FLOW_STEPS.length - 1 && (
              <div className="pointer-events-none absolute -right-[7px] top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="rgba(255,255,255,0.2)"
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
        <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.6)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#FF2D6B] opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#7B1FA2] opacity-[0.06] blur-3xl" />

          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
            Machine–human bridge
          </p>

          {/* Three-column bridge layout */}
          <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-center">
            {/* Digital systems */}
            <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF2D6B]/60">
                Digital systems & AI
              </p>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/60 sm:text-[16px]">
                Enterprises post structured demand into the network — typed
                requests for work, intelligence, validation, or action.
              </p>
            </div>

            {/* Centre bridge node */}
            <div className="flex shrink-0 flex-col items-center gap-2">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF2D6B]/30 bg-gradient-to-br from-[#FF2D6B]/20 to-[#7B1FA2]/20 shadow-[0_0_28px_rgba(255,45,107,0.25)]">
                <div className="absolute inset-[4px] rounded-xl border border-white/10 bg-black/50" />
                <span className="relative text-center text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-white/80">
                  Machine
                  <br />
                  Self
                </span>
              </div>
              <span className="text-[10px] text-white/35 tracking-wide">
                on-device
              </span>
            </div>

            {/* Human participation */}
            <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7B1FA2]/80">
                Human participation
              </p>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/60 sm:text-[16px]">
                Only eligible participants see the opportunity. Only the consent
                signal is transmitted — never raw data.
              </p>
            </div>
          </div>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Physical work + enterprise grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                When physical work is required
              </p>
              <ol className="mt-4 space-y-3">
                {PHYSICAL_WORK_STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-[15px] leading-snug text-white/65 sm:text-[16px]"
                  >
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF2D6B]/20 to-[#7B1FA2]/20" />
                      <span className="text-[10px] font-bold text-white/60">
                        {i + 1}
                      </span>
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                What enterprises receive
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-white/60 sm:text-[16px]">
                Enterprises do not purchase user data. They purchase{" "}
                <span className="font-semibold text-white/90">
                  verified outcomes.
                </span>
              </p>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/60 sm:text-[16px]">
                You choose to participate. You do the work. You get paid. The
                system never acts without your consent.
              </p>
            </div>
          </div>
        </div>

        {/* Right — demand narrative */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-8">
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/50 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7B1FA2] opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#7B1FA2]/70">
              How demand reaches participants
            </p>

            <p className="mt-5 text-[28px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[32px]">
              Predict nothing.
              <br />
              <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
                Know everything.
              </span>
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="text-[16px] leading-[1.85] text-white/60 sm:text-[17px]">
              The Machine Self evaluates privately within the OX app, on the
              participant's device — whether they qualify. No inference. No
              guesswork.
            </p>

            <p className="mt-4 text-[16px] leading-[1.85] text-white/60 sm:text-[17px]">
              Only eligible participants see the opportunity to opt in. Only the
              consent signal is transmitted — never raw data. Verified work
              completes. Rewards are issued.
            </p>

            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#FF2D6B]/[0.07] to-[#7B1FA2]/[0.07] p-5">
              <p className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-white/90 sm:text-[18px]">
                The system never acts
                <br />
                <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
                  without your consent.
                </span>
              </p>
            </div>

            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-[#FF2D6B]/20 bg-[#FF2D6B]/[0.07] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FF2D6B]/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF2D6B] shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
              Consent-first protocol
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
