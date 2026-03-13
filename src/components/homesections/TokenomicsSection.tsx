import SectionHeader from "@/components/Headings/SectionHeader";

export default function TokenomicsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 text-white sm:gap-20 sm:py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_at_top_left,_rgba(236,72,153,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.22),transparent_55%),radial-gradient(circle_at_center,_rgba(139,92,246,0.08),transparent_70%)]"
      />

      <SectionHeader
        pillText="Tokenomics"
        title="Tokenomics — growth and exchange strategy"
        subtitle="The OX token economy is designed for long-term price stability and sustainable growth."
      />

      <div className="flex flex-col gap-8">
        {/* Intro block */}
        <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-950/30 via-purple-950/20 to-black/50 p-8 shadow-[0_0_60px_rgba(236,72,153,0.08)] sm:p-10">
          <p className="text-[16px] leading-8 text-white/80 sm:text-[17px]">
            The OX token economy is designed for long-term price stability and
            sustainable growth. With a fixed total supply set at genesis and no
            mechanism for new minting, every OXME in circulation has been earned
            — not created. As the network grows, demand for the token increases
            while supply remains permanently fixed.
          </p>
        </div>

        {/* How the model works */}
        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 via-black/40 to-black/50 p-8 sm:p-10">
          <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-purple-400">
            How the Model Works
          </h3>
          <p className="text-[16px] leading-8 text-white/80 sm:text-[17px]">
            Organisations must acquire OXME to access the network. Humans earn
            OXME by participating. The fixed supply means that as more
            organisations enter the network and more humans hold and convert
            tokens, scarcity increases. Scarcity drives value. Value rewards the
            humans who built the network from day one.
          </p>
        </div>

        {/* Phase cards row */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Phase 1 */}
          <div className="relative overflow-hidden rounded-3xl border border-pink-500/25 bg-gradient-to-br from-pink-950/40 via-purple-950/20 to-black/60 p-8 shadow-[0_0_50px_rgba(236,72,153,0.1)]">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="mb-6">
              <span className="inline-block rounded-full bg-pink-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-pink-400">
                Phase 1 — Stabilisation
              </span>
            </div>
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-1">
                Target Market Cap
              </p>
              <p className="text-[42px] font-bold leading-none tracking-tight text-white sm:text-[48px]">
                $10M
              </p>
            </div>
            <div className="mb-6 rounded-2xl bg-white/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-3">
                Outcome
              </p>
              <p className="text-[15px] leading-7 text-white/75">
                OX moves to Tier 2 exchanges. This milestone validates network
                activity, token demand, and initial liquidity — significantly
                increasing accessibility and trading volume.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-400/80 mb-3">
                What Drives Phase 1
              </p>
              <ul className="space-y-2.5">
                {[
                  "Growth in verified Machine Selves across the network",
                  "Increased organisational demand for human intelligence",
                  "Rising OXIT-to-OXME conversion as users complete the 16-hour build",
                  "Community participation and early network effects",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] leading-6 text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-950/40 via-purple-950/20 to-black/60 p-8 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="mb-6">
              <span className="inline-block rounded-full bg-violet-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-400">
                Phase 2 — Expansion
              </span>
            </div>
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-1">
                Target Market Cap
              </p>
              <p className="text-[42px] font-bold leading-none tracking-tight text-white sm:text-[48px]">
                $100M
              </p>
            </div>
            <div className="mb-6 rounded-2xl bg-white/5 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 mb-3">
                Outcome
              </p>
              <p className="text-[15px] leading-7 text-white/75">
                OX moves to Tier 1 exchanges. This milestone represents
                full-scale network adoption, unlocking institutional
                participation, global liquidity, and sustained long-term growth.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-400/80 mb-3">
                What Drives Phase 2
              </p>
              <ul className="space-y-2.5">
                {[
                  "One billion human agent target trajectory underway",
                  "Large-scale organisational and enterprise network adoption",
                  "Protocol-level integrations and ecosystem partnerships",
                  "Global exchange presence and institutional-grade infrastructure",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] leading-6 text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Fixed Supply Matters */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-950/20 via-purple-950/15 to-black/60 p-8 sm:p-10">
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-pink-600/8 blur-3xl" />
          <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-pink-400">
            Why Fixed Supply Matters
          </h3>
          <p className="mb-5 text-[16px] leading-8 text-white/80 sm:text-[17px]">
            Most token projects inflate supply to fund operations. OX does not.
            The supply was fixed at genesis. Every token in circulation was
            earned by a human participant. As the network scales and demand
            grows, the fixed supply ensures that early participants — the humans
            who built the network — are the primary beneficiaries of its growth.
          </p>
          <p className="text-[16px] font-medium leading-8 text-white/90 sm:text-[17px]">
            The supply is fixed. The work keeps coming. The network grows every
            time another human agent joins.
          </p>
        </div>
      </div>
    </section>
  );
}
