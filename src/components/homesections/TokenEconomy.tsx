import SectionHeader from "@/components/Headings/SectionHeader";

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
    glow: "bg-[#FF2D6B]",
    border: "hover:border-[#FF2D6B]/25",
    topLine: "via-[#FF2D6B]/50",
    tag: "text-[#FF2D6B]/70",
  },
  {
    num: "02",
    title: "Organisations acquire tokens",
    desc: "Third parties obtain tokens to access the network and submit job requests.",
    glow: "bg-[#7B1FA2]",
    border: "hover:border-[#7B1FA2]/25",
    topLine: "via-[#7B1FA2]/50",
    tag: "text-[#7B1FA2]/90",
  },
  {
    num: "03",
    title: "Tokens fund work",
    desc: "Organisations request work, intelligence, and validation from the network.",
    glow: "bg-[#FF2D6B]",
    border: "hover:border-[#FF2D6B]/25",
    topLine: "via-[#FF2D6B]/50",
    tag: "text-[#FF2D6B]/70",
  },
  {
    num: "04",
    title: "Tokens return to community",
    desc: "Participants complete the work and receive tokens as rewards.",
    glow: "bg-[#7B1FA2]",
    border: "hover:border-[#7B1FA2]/25",
    topLine: "via-[#7B1FA2]/50",
    tag: "text-[#7B1FA2]/90",
  },
];

export default function TokenEconomySection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_65%_50%_at_15%_10%,rgba(255,45,107,0.15),transparent_65%),radial-gradient(ellipse_55%_45%_at_85%_85%,rgba(123,31,162,0.13),transparent_65%)]"
      />

      <SectionHeader
        pillText="Token Economy"
        title="Human-mined circular crypto economy."
        subtitle="Organisations pay tokens to access the network. Humans earn those tokens by participating. Fixed supply. Growing demand. Mined only by people."
      />

      {/* Hero statement bar */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-r from-[#FF2D6B]/[0.08] via-[#7B1FA2]/[0.06] to-[#FF2D6B]/[0.06] p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/40 to-transparent" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#7B1FA2] opacity-[0.07] blur-3xl" />

        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[24px] font-black leading-tight tracking-[-0.03em] text-white sm:text-[30px]">
            Not created by{" "}
            <span className="text-white/30 line-through decoration-white/20">
              machines
            </span>
            .
            <br />
            <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
              Created by humans.
            </span>
          </p>
          <div className="flex shrink-0 flex-col items-center gap-1.5 rounded-2xl border border-[#FF2D6B]/20 bg-[#FF2D6B]/[0.07] px-7 py-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#FF2D6B]/55">
              Supply
            </span>
            <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-[30px] font-black leading-none tracking-[-0.04em] text-transparent">
              Fixed
            </span>
            <span className="text-[11px] text-white/30">growing demand</span>
          </div>
        </div>
      </div>

      {/* Equal-height two-column grid */}
      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
        {/* Left — human mining */}
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/50 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#FF2D6B] opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
            Human mining
          </p>

          <p className="mt-5 text-[17px] leading-[1.8] text-white/65 sm:text-[18px]">
            Tokens are not created through capital investment or machine
            computation. The{" "}
            <span className="font-semibold text-white/90">
              only way a token enters circulation
            </span>{" "}
            is through human participation.
          </p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#7B1FA2]/70">
            Participants earn by
          </p>

          <ul className="mt-5 flex flex-1 flex-col justify-between space-y-3">
            {HUMAN_MINING_POINTS.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 text-[16px] leading-snug text-white/65 sm:text-[17px]"
              >
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#FF2D6B]/15 to-[#7B1FA2]/15">
                  <span className="text-[10px] font-bold text-white/45">
                    {i + 1}
                  </span>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#FF2D6B]/20 bg-[#FF2D6B]/[0.07] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FF2D6B]/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF2D6B] shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
            Mined by humans, not machines
          </div>
        </div>

        {/* Right — circular economy */}
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#7B1FA2] opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#7B1FA2]/70">
            The circular economy
          </p>

          <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
            {CIRCULAR_STEPS.map((step) => (
              <div
                key={step.num}
                className={`group/card relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-4 transition-all duration-300 ${step.border}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${step.topLine} to-transparent opacity-60`}
                />
                <div
                  className={`pointer-events-none absolute -right-4 -top-4 h-14 w-14 rounded-full ${step.glow} opacity-[0.08] blur-xl transition-opacity duration-300 group-hover/card:opacity-[0.18]`}
                />
                <span
                  className={`font-mono text-[11px] font-bold tracking-[0.22em] ${step.tag}`}
                >
                  {step.num}
                </span>
                <p className="mt-2 text-[14px] font-bold leading-snug text-white/85 sm:text-[15px]">
                  {step.title}
                </p>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-white/40 sm:text-[13px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-[15px] leading-[1.8] text-white/55 sm:text-[16px]">
            A closed-loop economy: humans mine tokens, organisations acquire
            them, tokens fund work, then flow back to the humans who do it.
          </p>

          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#7B1FA2]/20 bg-[#7B1FA2]/[0.07] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7B1FA2]/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#7B1FA2] shadow-[0_0_6px_rgba(123,31,162,0.9)]" />
            Human-powered. Closed loop.
          </div>
        </div>
      </div>
    </section>
  );
}
