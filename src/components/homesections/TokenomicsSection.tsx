import SectionHeader from "@/components/Headings/SectionHeader";

export default function TokenomicsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-white sm:gap-14 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(251,191,36,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,113,113,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Tokenomics"
        title="Tokenomics — growth and exchange strategy"
        subtitle="The OX token economy is designed for long-term price stability and sustainable growth."
      />

      <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 text-[13px] leading-relaxed text-white/80 shadow-[0_22px_80px_rgba(0,0,0,0.75)] sm:text-[14px]">
        <p>
          The OX token economy is designed for long-term price stability and
          sustainable growth. With a fixed total supply set at genesis and no
          mechanism for new minting, every OXME in circulation has been earned —
          not created. As the network grows, demand for the token increases
          while supply remains permanently fixed.
        </p>
        <p>How the Model Works</p>
        <p>
          Organisations must acquire OXME to access the network. Humans earn
          OXME by participating. The fixed supply means that as more
          organisations enter the network and more humans hold and convert
          tokens, scarcity increases. Scarcity drives value. Value rewards the
          humans who built the network from day one.
        </p>
        <p>Phase 1 — Stabilisation</p>
        <p>TARGET MARKET CAP</p>
        <p>$10,000,000</p>
        <p>OUTCOME</p>
        <p>
          At Phase 1 target, OX moves to Tier 2 exchanges. This milestone
          validates network activity, token demand, and initial liquidity.
          Listing on Tier 2 exchanges significantly increases accessibility,
          trading volume, and visibility to a broader participant base.
        </p>
        <p>WHAT DRIVES PHASE 1</p>
        <p>
          → Growth in verified Machine Selves across the network
          <br />
          → Increased organisational demand for human intelligence through the
          protocol
          <br />
          → Rising OXIT-to-OXME conversion activity as users complete the
          16-hour build
          <br />→ Community participation and early network effects
        </p>
        <p>Phase 2 — Expansion</p>
        <p>TARGET MARKET CAP</p>
        <p>$100,000,000</p>
        <p>OUTCOME</p>
        <p>
          At Phase 2 target, OX moves to Tier 1 exchanges. This milestone
          represents full-scale network adoption and positions OXME alongside
          the world's leading digital assets. Tier 1 listing unlocks
          institutional participation, global liquidity, and sustained long-term
          growth.
        </p>
        <p>WHAT DRIVES PHASE 2</p>
        <p>
          → One billion human agent target trajectory underway
          <br />
          → Large-scale organisational and enterprise network adoption
          <br />
          → Protocol-level integrations and ecosystem partnerships
          <br />→ Global exchange presence and institutional-grade token
          infrastructure
        </p>
        <p>Why Fixed Supply Matters</p>
        <p>
          Most token projects inflate supply to fund operations. OX does not.
          The supply was fixed at genesis. Every token in circulation was earned
          by a human participant. As the network scales and demand grows, the
          fixed supply ensures that early participants — the humans who built
          the network — are the primary beneficiaries of its growth.
        </p>
        <p>
          The supply is fixed. The work keeps coming. The network grows every
          time another human agent joins.
        </p>
        <p className="text-[12px] leading-relaxed text-white/60 sm:text-[13px]">
          NOTE TO DEVELOPER: Full tokenomics detail including allocation
          percentages, emission schedule, and phase breakdowns is available in
          the White Paper and the gated Investor Document. Link accordingly.
        </p>
      </div>
    </section>
  );
}
