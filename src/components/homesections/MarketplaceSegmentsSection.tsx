import SectionHeader from "@/components/Headings/SectionHeader";

const SEGMENTS = [
  {
    num: "01",
    tag: "Human Participation",
    tagColor: "text-[#FF2D6B]/70",
    topLine: "via-[#FF2D6B]/50",
    glow: "bg-[#FF2D6B]",
    glowHex: "rgba(255,45,107,0.8)",
    border: "hover:border-[#FF2D6B]/25",
    gradient: "from-[#FF2D6B] to-[#7B1FA2]",
    items: [
      {
        label: "Builders",
        desc: "Early participants building their Machine Self",
      },
      {
        label: "Contributors",
        desc: "Providing knowledge, context, decisions",
      },
      { label: "Workers (Digital)", desc: "Digital task execution at scale" },
      {
        label: "Workers (Physical)",
        desc: "Real-world task execution, verified",
      },
      { label: "Validators", desc: "Confirming outcomes & AI outputs" },
      { label: "Specialists", desc: "Domain experts, skilled professionals" },
    ],
  },
  {
    num: "02",
    tag: "Enterprise & Commercial",
    tagColor: "text-[#7B1FA2]/80",
    topLine: "via-[#7B1FA2]/50",
    glow: "bg-[#7B1FA2]",
    glowHex: "rgba(123,31,162,0.8)",
    border: "hover:border-[#7B1FA2]/25",
    gradient: "from-[#7B1FA2] to-[#FF2D6B]",
    items: [
      { label: "Operations", desc: "Manufacturing, logistics, supply chains" },
      {
        label: "Marketplace Operators",
        desc: "E-commerce, gig platforms, procurement",
      },
      {
        label: "Decision Systems",
        desc: "Consulting, intelligence, analytics",
      },
      {
        label: "Service Providers",
        desc: "Outsourcing, verification services",
      },
      {
        label: "Industry Verticals",
        desc: "Retail, energy, agriculture, healthcare, finance",
      },
    ],
  },
  {
    num: "03",
    tag: "Developer & Technology",
    tagColor: "text-[#FF2D6B]/70",
    topLine: "via-[#FF2D6B]/50",
    glow: "bg-[#FF2D6B]",
    glowHex: "rgba(255,45,107,0.8)",
    border: "hover:border-[#FF2D6B]/25",
    gradient: "from-[#FF2D6B] to-[#7B1FA2]",
    items: [
      {
        label: "Platform Developers",
        desc: "Companies building on the network",
      },
      { label: "AI Developers", desc: "Model builders, human-in-the-loop AI" },
      {
        label: "Robotics & Automation",
        desc: "Drones, robotics, industrial automation",
      },
      { label: "App Developers", desc: "Startups building applications" },
      {
        label: "Integration Providers",
        desc: "APIs, enterprise system integrators",
      },
    ],
  },
  {
    num: "04",
    tag: "Government & Public",
    tagColor: "text-[#7B1FA2]/80",
    topLine: "via-[#7B1FA2]/50",
    glow: "bg-[#7B1FA2]",
    glowHex: "rgba(123,31,162,0.8)",
    border: "hover:border-[#7B1FA2]/25",
    gradient: "from-[#7B1FA2] to-[#FF2D6B]",
    items: [
      { label: "Smart Cities", desc: "City governments, urban planning" },
      {
        label: "Public Infrastructure",
        desc: "Transportation, energy grids, utilities",
      },
      {
        label: "Emergency Systems",
        desc: "Disaster response, safety coordination",
      },
      {
        label: "Public Services",
        desc: "Healthcare, education, social services",
      },
      {
        label: "National Systems",
        desc: "Federal governments, national infrastructure",
      },
    ],
  },
];

const ECOSYSTEM = [
  {
    actor: "Human participants",
    role: "Supply capability and signals",
    num: "01",
    even: true,
  },
  {
    actor: "Enterprises",
    role: "Create demand for work and intelligence",
    num: "02",
    even: false,
  },
  {
    actor: "Developers",
    role: "Build applications and systems on top",
    num: "03",
    even: true,
  },
  {
    actor: "Capital markets",
    role: "Fund and price the network through tokens",
    num: "04",
    even: false,
  },
  {
    actor: "Governments",
    role: "Use the network to operate public systems",
    num: "05",
    even: true,
  },
];

export default function MarketplaceSegmentsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.14),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgba(123,31,162,0.12),transparent_65%)]"
      />

      <SectionHeader
        pillText="Marketplace Segments"
        title="Who the network serves."
      />

      {/* Segments grid — 2x2 */}
      <div className="grid gap-4 lg:grid-cols-2">
        {SEGMENTS.map((s, si) => (
          <div
            key={s.num}
            className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm transition-all duration-300 ${s.border}`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${s.topLine} to-transparent`}
            />
            <div
              className={`pointer-events-none absolute h-52 w-52 rounded-full ${s.glow} opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.15] ${si % 2 === 0 ? "-right-14 -top-14" : "-left-14 -top-14"}`}
            />

            <div className="relative p-8">
              {/* Header row */}
              <div className="mb-6 flex items-center gap-4">
                <span
                  className={`font-mono text-[11px] font-bold tracking-[0.26em] ${s.tagColor}`}
                >
                  {s.num}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                <h3
                  className={`bg-gradient-to-r ${s.gradient} bg-clip-text text-[20px] font-black tracking-[-0.02em] text-transparent sm:text-[22px]`}
                >
                  {s.tag}
                </h3>
              </div>

              {/* Items — label + desc on same line, bullet perfectly centered */}
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className="h-[7px] w-[7px] shrink-0 rounded-full"
                      style={{
                        backgroundColor: si % 2 === 0 ? "#FF2D6B" : "#7B1FA2",
                        boxShadow: `0 0 8px ${s.glowHex}`,
                      }}
                    />
                    <span className="text-[15px] font-semibold text-white/85 sm:text-[16px]">
                      {item.label}
                    </span>
                    <span className="text-[14px] text-white/35 sm:text-[15px]">
                      — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem — completely redesigned */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/50 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#7B1FA2] opacity-[0.07] blur-[80px]" />

        {/* Top — title + big statement */}
        <div className="relative border-b border-white/[0.06] p-8 md:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
            How the ecosystem fits
          </p>
          <p className="mt-5 max-w-3xl text-[26px] font-black leading-[1.2] tracking-[-0.03em] text-white sm:text-[32px] md:text-[36px]">
            All coordinated by one underlying system —
            <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
              {" "}
              a decentralised network of Machine Selves.
            </span>
          </p>
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.8] text-white/45 sm:text-[18px]">
            Turning static big data into live human intelligence — coordinated,
            consented, and rewarded.
          </p>
        </div>

        {/* Bottom — 5 actor cards in a row */}
        <div className="relative grid grid-cols-1 divide-y divide-white/[0.05] sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {ECOSYSTEM.map((e) => (
            <div
              key={e.actor}
              className="group relative flex flex-col gap-3 overflow-hidden p-6 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${e.even ? "via-[#FF2D6B]/30" : "via-[#7B1FA2]/30"} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <span
                className={`font-mono text-[10px] font-bold tracking-[0.24em] ${e.even ? "text-[#FF2D6B]/45" : "text-[#7B1FA2]/55"}`}
              >
                {e.num}
              </span>
              <p
                className={`bg-gradient-to-r ${e.even ? "from-[#FF2D6B] to-[#7B1FA2]" : "from-[#7B1FA2] to-[#FF2D6B]"} bg-clip-text text-[16px] font-black leading-snug tracking-[-0.01em] text-transparent sm:text-[17px]`}
              >
                {e.actor}
              </p>
              <p className="text-[14px] leading-[1.65] text-white">{e.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
