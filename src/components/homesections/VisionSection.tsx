import SectionHeader from "@/components/Headings/SectionHeader";

const PILLARS = [
  { label: "Completes AI", num: "01" },
  { label: "Rewires work", num: "02" },
  { label: "Realigns markets", num: "03" },
  { label: "Redistributes power", num: "04" },
];

const BODY_POINTS = [
  {
    title: "A verified digital counterpart.",
    body: "A Machine Self is a verified digital counterpart of a human that allows the individual to operate across digital systems, AI systems, and the real world.",
  },
  {
    title: "Active participants, not passive data.",
    body: "Through Machine Selves, humans become active participants inside systems — contributing intelligence, judgement, verification, expertise, and work.",
  },
  {
    title: "Paid contributors within the network.",
    body: "Machine Selves are paid contributors within the network, allowing businesses, AI systems, and digital platforms to coordinate human participation directly.",
  },
  {
    title: "Any human with a phone.",
    body: "The network operates through the devices people already carry — allowing any human with a phone to participate through their Machine Self.",
  },
];

export default function VisionSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(255,45,107,0.15),transparent_65%),radial-gradient(ellipse_55%_45%_at_80%_90%,rgba(123,31,162,0.13),transparent_65%)]"
      />

      <SectionHeader
        pillText="Vision & Closing"
        title="The vision."
        subtitle="OX is infrastructure for a decentralised network of one billion connected human agents."
      />

      {/* Hero statement — full width */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#FF2D6B]/[0.07] via-[#7B1FA2]/[0.05] to-transparent p-10 md:p-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/40 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#7B1FA2] opacity-[0.07] blur-[80px]" />

        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="text-[200px] font-black text-white opacity-[0.02] leading-none md:text-[280px]">
            OX
          </span>
        </div>

        <div className="relative flex flex-col gap-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
            Infrastructure
          </p>
          <p className="text-[36px] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[44px] md:text-[52px]">
            We are scaling a network of
            <br />
            <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
              one billion human agents.
            </span>
          </p>
          <p className="mt-3 max-w-2xl text-[17px] leading-[1.85] text-white/55 sm:text-[18px]">
            Where the Machine Self represents the unique intelligence of
            individuals and coordinates human and artificial intelligence to
            solve problems, perform work, and create economic value.
          </p>
        </div>
      </div>

      {/* Four pillars — horizontal strip */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <div
            key={p.num}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-5 transition-all duration-300 hover:border-[#FF2D6B]/20"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="font-mono text-[11px] font-bold tracking-[0.24em] text-[#FF2D6B]/50">
              {p.num}
            </span>
            <p className="mt-3 text-[17px] font-black leading-tight tracking-[-0.02em] text-white sm:text-[18px]">
              {p.label}
            </p>
          </div>
        ))}
      </div>

      {/* Body points — 2x2 grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {BODY_POINTS.map((pt, i) => (
          <div
            key={pt.title}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-7 transition-all duration-300 hover:border-[#7B1FA2]/20 sm:p-8"
          >
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${i % 2 === 0 ? "via-[#FF2D6B]/40" : "via-[#7B1FA2]/40"} to-transparent`}
            />
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${i % 2 === 0 ? "bg-[#FF2D6B]" : "bg-[#7B1FA2]"} opacity-[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.13]`}
            />
            <h4
              className={`bg-gradient-to-r ${i % 2 === 0 ? "from-[#FF2D6B] to-[#7B1FA2]" : "from-[#7B1FA2] to-[#FF2D6B]"} bg-clip-text text-[18px] font-black leading-snug tracking-[-0.02em] text-transparent sm:text-[19px]`}
            >
              {pt.title}
            </h4>
            <p className="mt-4 text-[16px] leading-[1.85] text-white/58 sm:text-[17px]">
              {pt.body}
            </p>
          </div>
        ))}
      </div>

      {/* Scale statement — asymmetric two col */}
      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        {/* Left — stat card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#FF2D6B]/[0.08] to-[#7B1FA2]/[0.05] p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-3xl" />
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/60">
            Scale target
          </p>
          <p className="mt-5 bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-[64px] font-black leading-none tracking-[-0.05em] text-transparent sm:text-[80px]">
            1B
          </p>
          <p className="mt-3 text-[18px] font-bold text-white/80 sm:text-[20px]">
            Machine Selves.
          </p>
          <p className="mt-2 text-[15px] text-white/40 sm:text-[16px]">
            One for every human with a phone.
          </p>
        </div>

        {/* Right — productivity statement */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/50 to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7B1FA2] opacity-[0.07] blur-3xl" />
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#7B1FA2]/70">
            The outcome
          </p>
          <p className="mt-5 text-[19px] font-bold leading-[1.6] tracking-[-0.02em] text-white/85 sm:text-[21px]">
            Human intelligence and machine intelligence operating together —
            producing levels of productivity{" "}
            <span className="bg-gradient-to-r from-[#7B1FA2] to-[#FF2D6B] bg-clip-text text-transparent">
              never previously possible.
            </span>
          </p>
          <p className="mt-5 text-[16px] leading-[1.85] text-white/55 sm:text-[17px]">
            Dramatically greater output or dramatically lower cost — as human
            participation becomes directly integrated into digital
            infrastructure.
          </p>
        </div>
      </div>

      {/* Closing — full width inevitability bar */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-r from-[#FF2D6B]/[0.08] via-[#7B1FA2]/[0.06] to-[#FF2D6B]/[0.05] p-10 text-center md:p-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D6B]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7B1FA2]/50 to-transparent" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#FF2D6B] opacity-[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#7B1FA2] opacity-[0.08] blur-3xl" />

        <p className="relative text-[32px] font-black leading-tight tracking-[-0.04em] text-white sm:text-[40px] md:text-[48px]">
          This is not optional.
          <br />
          <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
            It is inevitable.
          </span>
        </p>
        <p className="relative mx-auto mt-5 max-w-xl text-[16px] leading-[1.85] text-white/45 sm:text-[17px]">
          OX is infrastructure. Not a product. Not a platform. The layer that
          connects human intelligence to every system on earth.
        </p>
      </div>
    </section>
  );
}
