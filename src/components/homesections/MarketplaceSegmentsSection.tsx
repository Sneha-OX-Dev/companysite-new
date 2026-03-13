import SectionHeader from "@/components/Headings/SectionHeader";

export default function MarketplaceSegmentsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-white sm:gap-14 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Marketplace Segments"
        title="Who the network serves"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Human Participation Marketplace
          </p>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            <li>→ Builders — early participants building Machine Self</li>
            <li>→ Contributors — providing knowledge, context, decisions</li>
            <li>→ Workers — digital task execution</li>
            <li>→ Workers (Physical) — real-world task execution</li>
            <li>→ Validators — confirming outcomes &amp; AI outputs</li>
            <li>→ Specialists — domain experts, skilled professionals</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Enterprise &amp; Commercial Marketplace
          </p>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            <li>
              → Operations Optimisation — manufacturing, logistics, supply
              chains
            </li>
            <li>
              → Marketplace Operators — e-commerce, gig platforms, procurement
              networks
            </li>
            <li>
              → Enterprise Decision Systems — consulting, intelligence,
              analytics
            </li>
            <li>→ Service Providers — outsourcing, verification services</li>
            <li>
              → Industry Verticals — retail, energy, agriculture, healthcare,
              finance, insurance, defense
            </li>
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Developer &amp; Technology Marketplace
          </p>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            <li>
              → Platform Developers — companies building platforms on the
              network
            </li>
            <li>→ AI Developers — model builders, human-in-the-loop AI</li>
            <li>
              → Robotics &amp; Automation — robotics, drones, industrial
              automation
            </li>
            <li>→ Application Developers — startups building applications</li>
            <li>
              → Integration Providers — APIs, enterprise system integrators
            </li>
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Government &amp; Public Infrastructure Marketplace
          </p>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            <li>→ Smart Cities — city governments, urban planning</li>
            <li>
              → Public Infrastructure — transportation, energy grids, utilities
            </li>
            <li>
              → Emergency &amp; Response Systems — disaster response, safety
              coordination
            </li>
            <li>→ Public Services — healthcare, education, social services</li>
            <li>
              → National Systems — federal governments, national infrastructure,
              defense
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-5 text-[13px] leading-relaxed text-white/80 shadow-[0_20px_70px_rgba(0,0,0,0.7)] sm:text-[14px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
          How the ecosystem fits
        </p>
        <p className="mt-2">
          → Human participants supply capability and signals
          <br />
          → Enterprises create demand for work and intelligence
          <br />
          → Developers build applications and systems on top
          <br />
          → Capital markets fund and price the network through tokens
          <br />→ Governments use the network to operate public systems
        </p>
        <p className="mt-3">
          All coordinated by the underlying system: A decentralised network of
          Machine Selves turning static big data into live human intelligence.
        </p>
      </div>
    </section>
  );
}
