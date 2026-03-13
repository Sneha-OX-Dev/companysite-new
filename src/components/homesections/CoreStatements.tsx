import SectionHeader from "@/components/Headings/SectionHeader";

const STATEMENTS = [
  {
    num: "01",
    title: "Machine Self",
    body: "Every person has a Machine Self — a sovereign digital agent that represents their identity, capabilities, and intelligence. Built by you. Owned by you. Working for you.",
    accent: "from-[#FF2D6B] to-[#7B1FA2]",
    glow: "bg-[#FF2D6B]",
    topLine: "via-[#FF2D6B]/50",
    tag: "text-[#FF2D6B]/70",
    border: "hover:border-[#FF2D6B]/20",
  },
  {
    num: "02",
    title: "Consent and Permission",
    body: "Your data never leaves your device. Every interaction is consent-based. You decide what participates, what earns, and what stays private. Always.",
    accent: "from-[#7B1FA2] to-[#FF2D6B]",
    glow: "bg-[#7B1FA2]",
    topLine: "via-[#7B1FA2]/50",
    tag: "text-[#7B1FA2]/80",
    border: "hover:border-[#7B1FA2]/20",
  },
  {
    num: "03",
    title: "Human Intelligence Network",
    body: "Machine Selves connect into a global network that coordinates human knowledge, decisions, and actions across digital and physical environments — at scale.",
    accent: "from-[#FF2D6B] to-[#7B1FA2]",
    glow: "bg-[#FF2D6B]",
    topLine: "via-[#FF2D6B]/50",
    tag: "text-[#FF2D6B]/70",
    border: "hover:border-[#FF2D6B]/20",
  },
  {
    num: "04",
    title: "AI Orchestration",
    body: "AI agents route tasks, integrate humans into AI workflows, and verify real-world work. Human judgement works alongside artificial intelligence. Neither replaces the other.",
    accent: "from-[#7B1FA2] to-[#FF2D6B]",
    glow: "bg-[#7B1FA2]",
    topLine: "via-[#7B1FA2]/50",
    tag: "text-[#7B1FA2]/80",
    border: "hover:border-[#7B1FA2]/20",
  },
  {
    num: "05",
    title: "Marketplace and Token Economy",
    body: "External demand enters the network. Verified human participation fulfils it. Value flows back to the people who built the network — not to a platform intermediary.",
    accent: "from-[#FF2D6B] to-[#7B1FA2]",
    glow: "bg-[#FF2D6B]",
    topLine: "via-[#FF2D6B]/50",
    tag: "text-[#FF2D6B]/70",
    border: "hover:border-[#FF2D6B]/20",
  },
];

export default function CoreStatementsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 text-white py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.15),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgba(123,31,162,0.13),transparent_65%)]"
      />

      <SectionHeader
        pillText="Core System Statements"
        title="Five core system statements."
        align="left"
      />

      {/* Statements — alternating large cards */}
      <div className="flex flex-col gap-4">
        {STATEMENTS.map((s, i) => (
          <div
            key={s.num}
            className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-7 transition-all duration-300 sm:p-8 ${s.border}`}
          >
            {/* Top accent line */}
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${s.topLine} to-transparent opacity-70`}
            />
            {/* Glow orb */}
            <div
              className={`pointer-events-none absolute -top-10 ${i % 2 === 0 ? "-right-10" : "-left-10"} h-40 w-40 rounded-full ${s.glow} opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]`}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
              {/* Number + title block */}
              <div className="flex shrink-0 items-center gap-4 sm:w-[260px] sm:flex-col sm:items-start sm:gap-2">
                <span
                  className={`font-mono text-[12px] font-bold tracking-[0.26em] ${s.tag}`}
                >
                  {s.num}
                </span>
                <h3
                  className={`bg-gradient-to-r ${s.accent} bg-clip-text text-[20px] font-black leading-tight tracking-[-0.02em] text-transparent sm:text-[22px]`}
                >
                  {s.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="hidden h-full w-px self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />

              {/* Body */}
              <p className="flex-1 text-[16px] leading-[1.85] text-white/60 sm:text-[17px]">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing statement */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#FF2D6B]/[0.07] to-[#7B1FA2]/[0.07] p-8 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/40 to-transparent" />
        <div className="pointer-events-none absolute -left-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[#7B1FA2] opacity-[0.07] blur-3xl" />
        <p className="text-[22px] font-black leading-tight tracking-[-0.03em] text-white sm:text-[26px]">
          Built by humans.{" "}
          <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
            Owned by humans.
          </span>
          <br />
          <span className="text-white/50 font-normal text-[18px] sm:text-[20px]">
            Working for humans.
          </span>
        </p>
      </div>
    </section>
  );
}
