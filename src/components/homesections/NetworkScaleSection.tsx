import SectionHeader from "@/components/Headings/SectionHeader";

const NETWORK_ADDS = [
  {
    label: "Declared truth",
    desc: "Real data, directly provided — never inferred or approximated.",
  },
  {
    label: "Permission boundaries",
    desc: "Every participant defines exactly what they share and when.",
  },
  {
    label: "Regulatory eligibility",
    desc: "Verified credentials and compliance signals, on-device.",
  },
  {
    label: "Reliability history",
    desc: "A growing record of verified contributions and outcomes.",
  },
];

const MILESTONES = [
  {
    val: "1M",
    label: "Machine Selves",
    desc: "Proof of concept at scale. Network begins generating real coordination value.",
    gradient: "from-[#FF2D6B] to-[#7B1FA2]",
    glow: "bg-[#FF2D6B]",
    topLine: "via-[#FF2D6B]/50",
  },
  {
    val: "10M",
    label: "Machine Selves",
    desc: "Network effects accelerate. Enterprise routing efficiency reaches critical density.",
    gradient: "from-[#7B1FA2] to-[#FF2D6B]",
    glow: "bg-[#7B1FA2]",
    topLine: "via-[#7B1FA2]/50",
  },
  {
    val: "100M",
    label: "Machine Selves",
    desc: "Global coordination layer active. Every major market covered.",
    gradient: "from-[#FF2D6B] to-[#7B1FA2]",
    glow: "bg-[#FF2D6B]",
    topLine: "via-[#FF2D6B]/50",
  },
  {
    val: "1B",
    label: "Machine Selves",
    desc: "Universal deployment. Any human with a phone participates in the global intelligence network.",
    gradient: "from-[#7B1FA2] to-[#FF2D6B]",
    glow: "bg-[#7B1FA2]",
    topLine: "via-[#7B1FA2]/50",
  },
];

export default function NetworkScaleSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.14),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgba(123,31,162,0.12),transparent_65%)]"
      />

      <SectionHeader
        pillText="Network Effects & Scale"
        title="Network effects & scale."
        subtitle="Under network effect principles, network value scales with participant density."
      />

      {/* ── HERO PRINCIPLE — full bleed with diagonal split ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/60 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#FF2D6B] opacity-[0.08] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#7B1FA2] opacity-[0.08] blur-[90px]" />

        <div className="grid lg:grid-cols-[1fr_auto]">
          {/* Left — statement */}
          <div className="p-10 md:p-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
              Metcalfe's law applied
            </p>
            <p className="mt-6 text-[36px] font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-[44px] md:text-[52px]">
              Each new Machine Self
              <br />
              <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
                multiplies the value
                <br />
                of every other.
              </span>
            </p>
            <p className="mt-7 max-w-xl text-[18px] leading-[1.85] text-white/50 sm:text-[19px]">
              Network value does not grow linearly — it compounds. Every
              additional participant increases coordination precision and
              enterprise routing efficiency for every existing participant.
            </p>
          </div>

          {/* Right — N² watermark panel */}
          <div className="hidden items-center justify-center border-l border-white/[0.06] bg-gradient-to-br from-[#FF2D6B]/[0.06] to-[#7B1FA2]/[0.04] px-14 lg:flex">
            <div className="flex flex-col items-center gap-2">
              <span className="bg-gradient-to-br from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-[96px] font-black leading-none tracking-[-0.06em] text-transparent">
                N²
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/20">
                network law
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT EACH MACHINE SELF ADDS — horizontal with left label ── */}
      <div className="flex flex-col gap-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/30">
          What each Machine Self adds
        </p>

        <div className="grid gap-3 lg:grid-cols-2">
          {NETWORK_ADDS.map((item, i) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition-all duration-300 hover:border-[#FF2D6B]/20 sm:p-7"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${i % 2 === 0 ? "via-[#FF2D6B]/40" : "via-[#7B1FA2]/40"} to-transparent`}
              />
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full ${i % 2 === 0 ? "bg-[#FF2D6B]" : "bg-[#7B1FA2]"} opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.14]`}
              />

              <div className="flex items-start gap-5">
                <span
                  className={`font-mono text-[12px] font-bold tracking-[0.22em] ${i % 2 === 0 ? "text-[#FF2D6B]/50" : "text-[#7B1FA2]/70"}`}
                >
                  0{i + 1}
                </span>
                <div>
                  <p
                    className={`bg-gradient-to-r ${i % 2 === 0 ? "from-[#FF2D6B] to-[#7B1FA2]" : "from-[#7B1FA2] to-[#FF2D6B]"} bg-clip-text text-[19px] font-black tracking-[-0.02em] text-transparent sm:text-[20px]`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.8] text-white/45 sm:text-[16px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MILESTONES — progressive scale layout ── */}
      <div className="flex flex-col gap-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/30">
          Global scaling milestones
        </p>

        {/* Row 1 — 1M + 10M side by side */}
        <div className="grid gap-3 lg:grid-cols-2">
          {MILESTONES.slice(0, 2).map((m) => (
            <div
              key={m.val}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-8 transition-all duration-300 hover:border-[#FF2D6B]/20"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${m.topLine} to-transparent`}
              />
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${m.glow} opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.16]`}
              />

              <div className="flex items-end justify-between">
                <div>
                  <span
                    className={`bg-gradient-to-r ${m.gradient} bg-clip-text text-[64px] font-black leading-none tracking-[-0.05em] text-transparent sm:text-[72px]`}
                  >
                    {m.val}
                  </span>
                  <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em] text-white/30">
                    {m.label}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[16px] leading-[1.85] text-white/55 sm:text-[17px]">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 — 100M narrow + 1B wide (asymmetric) */}
        <div className="grid gap-3 lg:grid-cols-[1fr_1.8fr]">
          {/* 100M */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-8 transition-all duration-300 hover:border-[#FF2D6B]/20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/50 to-transparent" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.16]" />
            <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-[64px] font-black leading-none tracking-[-0.05em] text-transparent sm:text-[72px]">
              100M
            </span>
            <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em] text-white/30">
              Machine Selves
            </p>
            <p className="mt-5 text-[16px] leading-[1.85] text-white/55 sm:text-[17px]">
              Global coordination layer active. Every major market covered.
            </p>
          </div>

          {/* 1B — hero milestone */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#7B1FA2]/[0.10] to-[#FF2D6B]/[0.05] p-8 transition-all duration-300 hover:border-[#7B1FA2]/30">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/60 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#7B1FA2] opacity-[0.10] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.18]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-3xl" />

            {/* Watermark */}
            <div className="pointer-events-none absolute bottom-0 right-4 select-none">
              <span className="text-[140px] font-black leading-none text-white opacity-[0.03]">
                1B
              </span>
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div>
                <span className="bg-gradient-to-r from-[#7B1FA2] to-[#FF2D6B] bg-clip-text text-[80px] font-black leading-none tracking-[-0.05em] text-transparent sm:text-[96px]">
                  1B
                </span>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em] text-white/30">
                  Machine Selves
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-[19px] font-bold leading-snug tracking-[-0.02em] text-white/85 sm:text-[21px]">
                  Universal deployment.
                  <span className="bg-gradient-to-r from-[#7B1FA2] to-[#FF2D6B] bg-clip-text text-transparent">
                    {" "}
                    Any human with a phone.
                  </span>
                </p>
                <p className="text-[16px] leading-[1.85] text-white/50 sm:text-[17px]">
                  Every human with a phone participates in the global
                  intelligence network — the largest coordinated human system
                  ever built.
                </p>
                <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#7B1FA2]/25 bg-[#7B1FA2]/[0.10] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7B1FA2]/80">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#7B1FA2] shadow-[0_0_6px_rgba(123,31,162,0.9)]" />
                  Universal objective
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CLOSING BAR ── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-r from-[#FF2D6B]/[0.08] via-[#7B1FA2]/[0.06] to-[#FF2D6B]/[0.05] p-10 text-center md:p-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/50 to-transparent" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#FF2D6B] opacity-[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#7B1FA2] opacity-[0.08] blur-3xl" />
        <p className="relative text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
          Objective
        </p>
        <p className="relative mt-5 text-[28px] font-black leading-tight tracking-[-0.04em] text-white sm:text-[36px] md:text-[42px]">
          Universal Machine Self deployment
          <br />
          <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
            on smartphones globally.
          </span>
        </p>
        <p className="relative mx-auto mt-5 max-w-lg text-[17px] leading-[1.85] text-white/40 sm:text-[18px]">
          Any human with a phone becomes a sovereign participant in the world's
          first human intelligence network.
        </p>
      </div>
    </section>
  );
}
