import SectionHeader from "@/components/Headings/SectionHeader";

export default function CoreStatementsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 text-white sm:gap-12 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle_at_top,_rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Core System Statements"
        title="Five core system statements"
        align="left"
      />

      <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)]">
        <div>
          <p className="text-[13px] font-semibold text-white sm:text-[14px]">
            1. Machine Self
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            Every person has a Machine Self — a sovereign digital agent that
            represents their identity, capabilities, and intelligence. Built by
            you. Owned by you. Working for you.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-white sm:text-[14px]">
            2. Consent and Permission
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            Your data never leaves your device. Every interaction is
            consent-based. You decide what participates, what earns, and what
            stays private. Always.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-white sm:text-[14px]">
            3. Human Intelligence Network
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            Machine Selves connect into a global network that coordinates human
            knowledge, decisions, and actions across digital and physical
            environments — at scale.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-white sm:text-[14px]">
            4. AI Orchestration
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            AI agents route tasks, integrate humans into AI workflows, and
            verify real-world work. Human judgement works alongside artificial
            intelligence. Neither replaces the other.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-white sm:text-[14px]">
            5. Marketplace and Token Economy
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            External demand enters the network. Verified human participation
            fulfils it. Value flows back to the people who built the network —
            not to a platform intermediary.
          </p>
        </div>
      </div>
    </section>
  );
}
