import SectionHeader from "@/components/Headings/SectionHeader";

const PHYSICAL_WORK_STEPS = [
  "The participant opts in.",
  "The task is completed.",
  "Verification confirms completion.",
  "Reward is issued.",
];

export default function HowOxWorksSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-white sm:gap-14 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(59,130,246,0.24),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.22),transparent_65%)]"
      />

      <SectionHeader
        pillText="Section 8 — How OX Works"
        title="Where systems stop predicting — and start knowing."
        subtitle="Enterprises post demand. Machine Selves evaluate privately. Only consent and verified outcomes leave the device."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start">
        {/* Left: machine–human bridge diagram feel */}
        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            Machine–human bridge
          </p>

          <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-center">
            {/* Left column: digital systems */}
            <div className="flex-1 space-y-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Digital systems & AI
              </p>
              <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                Enterprises post structured demand into the network. Not raw data pulls.
                Clear, typed requests for work, intelligence, validation, or action.
              </p>
            </div>

            {/* Centre: bridge node */}
            <div className="flex flex-col items-center">
              <div className="relative h-16 w-16 rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_30%_0%,rgba(129,140,248,0.8),transparent_65%)] shadow-[0_0_24px_rgba(129,140,248,0.6)]">
                <div className="absolute inset-[5px] rounded-xl border border-white/30 bg-black/60" />
                <div className="relative flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  Machine
                  <br />
                  Self
                </div>
              </div>
              <p className="mt-2 text-[11px] text-white/60">
                Evaluates privately
              </p>
            </div>

            {/* Right column: human participation */}
            <div className="flex-1 space-y-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Human participation
              </p>
              <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                Only eligible participants see the opportunity to opt in. Only the
                consent signal is transmitted — never raw data.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)]">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                When physical work is required
              </p>
              <ul className="mt-2 space-y-2 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                {PHYSICAL_WORK_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-[3px] h-4 w-4 rounded-full border border-white/40 text-[10px] text-white/80">
                      <span className="flex h-full w-full items-center justify-center">
                        {i + 1}
                      </span>
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                What enterprises receive
              </p>
              <p className="text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                Enterprises do not purchase user data. They purchase{" "}
                <span className="font-semibold text-white">verified outcomes</span>.
              </p>
              <p className="text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                You choose to participate. You do the work. You get paid. The system
                never acts without your consent.
              </p>
            </div>
          </div>
        </div>

        {/* Right: short “how demand reaches participants” narrative */}
        <div className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            How demand reaches participants
          </p>
          <p className="text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            Enterprises post structured demand into the network. The Machine Self
            evaluates privately within the OX app, on the participant&apos;s device,
            whether they qualify.
          </p>
          <p className="text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            Only eligible participants see the opportunity to opt in. Only the consent
            signal is transmitted — never raw data. Verified work completes. Rewards are
            issued.
          </p>
        </div>
      </div>
    </section>
  );
}

