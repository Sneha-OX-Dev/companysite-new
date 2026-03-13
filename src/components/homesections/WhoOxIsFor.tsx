import SectionHeader from "@/components/Headings/SectionHeader";

const AUDIENCES = [
  {
    tag: "Individuals",
    tagColor: "text-[#FF2D6B]/70",
    topLine: "via-[#FF2D6B]/50",
    glow: "bg-[#FF2D6B]",
    border: "hover:border-[#FF2D6B]/20",
    title: "You are not a user.",
    highlight: "You are an economic participant.",
    titleGradient: "from-[#FF2D6B] to-[#7B1FA2]",
    cta: "Build Your Machine Self",
    ctaPrimary: true,
    stats: [
      { val: "4 min", label: "daily to build" },
      { val: "16 hrs", label: "of capital stored" },
      { val: "2,000", label: "data points earned" },
    ],
    body: "Spend 4 minutes a day building your Machine Self. Every minute you invest is stored, verified, and working on your behalf. As you build, you mine. As you mine, you earn. When complete, you are permanently matchable to real paid commercial work from real organisations — across digital systems and the physical world.",
    callout:
      "Not a profile. A sovereign economic asset that earns on behalf of its owner.",
  },
  {
    tag: "Enterprise & Business",
    tagColor: "text-[#7B1FA2]/80",
    topLine: "via-[#7B1FA2]/50",
    glow: "bg-[#7B1FA2]",
    border: "hover:border-[#7B1FA2]/20",
    title: "Pay for results.",
    highlight: "Not reach. Not impressions. Not probability.",
    titleGradient: "from-[#7B1FA2] to-[#FF2D6B]",
    cta: "Request Enterprise Access",
    ctaPrimary: false,
    stats: [
      { val: "Verified", label: "outcomes only" },
      { val: "Zero", label: "data transmitted" },
      { val: "Live", label: "human matching" },
    ],
    body: "Organisations post structured work requests into the OX framework. The network matches those requests against the Machine Selves of real, verified people — privately, on their devices, within their consent boundaries. Only people who qualify see the opportunity. Only a consent signal is returned.",
    callout:
      "The live intelligence layer that will redefine how businesses operate and optimise the world's markets.",
  },
  {
    tag: "Developers & Builders",
    tagColor: "text-[#FF2D6B]/70",
    topLine: "via-[#FF2D6B]/50",
    glow: "bg-[#FF2D6B]",
    border: "hover:border-[#FF2D6B]/20",
    title: "Build on live intelligence.",
    highlight: "Not historical data. The real-time layer.",
    titleGradient: "from-[#FF2D6B] to-[#7B1FA2]",
    cta: "Contact Us",
    ctaPrimary: false,
    stats: [
      { val: "API", label: "direct access" },
      { val: "Real-time", label: "human signals" },
      { val: "On-chain", label: "verified outcomes" },
    ],
    body: "Plug into a foundational AI and human intelligence infrastructure. Access real-time human signals, coordinate human and AI workflows, verify outcomes, and trigger real-world actions — through a decentralised network of Machine Selves representing real people.",
    callout: "Bernard.Flynn@oxygean.com · www.oxygean.com",
  },
  {
    tag: "Government & Smart Cities",
    tagColor: "text-[#7B1FA2]/80",
    topLine: "via-[#7B1FA2]/50",
    glow: "bg-[#7B1FA2]",
    border: "hover:border-[#7B1FA2]/20",
    title: "Live signals. Sovereign citizens.",
    highlight: "Coordination without centralisation.",
    titleGradient: "from-[#7B1FA2] to-[#FF2D6B]",
    cta: "Government Enquiries",
    ctaPrimary: false,
    stats: [
      { val: "Real-time", label: "city signals" },
      { val: "Zero", label: "central database" },
      { val: "Full", label: "data sovereignty" },
    ],
    body: "Replace delayed reports with live signals from people and systems. Verified human signals combine with AI to monitor conditions, validate information, and coordinate action across transportation, public services, infrastructure, safety, and energy systems — whilst preserving full data sovereignty for every citizen.",
    callout:
      "The only architecture that enables governments to operate with live human intelligence whilst fully respecting the privacy and rights of every individual.",
  },
];

export default function WhoOxIsForSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.13),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgba(123,31,162,0.11),transparent_65%)]"
      />

      <SectionHeader pillText="Who OX Is For" title="Who OX is for." />

      <div className="flex flex-col gap-5">
        {AUDIENCES.map((a, i) => (
          <div
            key={a.tag}
            className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] transition-all duration-300 ${a.border}`}
          >
            {/* Top accent line */}
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.topLine} to-transparent`}
            />

            {/* Glow */}
            <div
              className={`pointer-events-none absolute ${i % 2 === 0 ? "-right-16 -top-16" : "-left-16 -top-16"} h-56 w-56 rounded-full ${a.glow} opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]`}
            />

            <div className="grid lg:grid-cols-[280px_1px_minmax(0,1fr)_1px_220px]">
              {/* Col 1 — identity */}
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.28em] ${a.tagColor}`}
                  >
                    {a.tag}
                  </p>
                  <h3
                    className={`mt-4 bg-gradient-to-br ${a.titleGradient} bg-clip-text text-[26px] font-black leading-[1.1] tracking-[-0.03em] text-transparent sm:text-[28px]`}
                  >
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium leading-snug text-white/50 sm:text-[16px]">
                    {a.highlight}
                  </p>
                </div>

                <button
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 ${
                    a.ctaPrimary
                      ? "bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] text-white shadow-[0_0_28px_rgba(255,45,107,0.4)] hover:shadow-[0_0_42px_rgba(255,45,107,0.65)]"
                      : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {a.cta}
                </button>
              </div>

              {/* Vertical divider */}
              <div className="hidden bg-gradient-to-b from-transparent via-white/[0.07] to-transparent lg:block" />

              {/* Col 2 — body + callout */}
              <div className="flex flex-col gap-6 p-8">
                <p className="text-[16px] leading-[1.9] text-white/60 sm:text-[17px]">
                  {a.body}
                </p>

                {/* Callout */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-5`}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${a.topLine} to-transparent opacity-50`}
                  />
                  <p className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-white/80 sm:text-[16px]">
                    {a.callout}
                  </p>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden bg-gradient-to-b from-transparent via-white/[0.07] to-transparent lg:block" />

              {/* Col 3 — stats */}
              <div className="flex flex-col justify-center gap-5 p-8">
                {a.stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span
                      className={`bg-gradient-to-r ${a.titleGradient} bg-clip-text text-[26px] font-black leading-none tracking-[-0.03em] text-transparent sm:text-[28px]`}
                    >
                      {s.val}
                    </span>
                    <span className="text-[12px] text-white/35 tracking-wide">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
