import SectionHeader from "@/components/Headings/SectionHeader";

export default function VisionSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 text-white sm:gap-12 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(244,114,182,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Vision & Closing"
        title="The vision"
        subtitle="OX is infrastructure for a decentralised network of one billion connected human agents."
      />

      <div className="space-y-8 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)]">
        <div className="space-y-3 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
          <p>
            We are scaling a decentralised network of one billion connected
            human agents, where the Machine Self represents the unique
            intelligence of individuals and coordinates human and artificial
            intelligence to solve problems, perform work, and create economic
            value.
          </p>
          <p>OX is infrastructure.</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            Four things OX does at scale
          </p>
          <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            <li>→ Completes AI</li>
            <li>→ Rewires work</li>
            <li>→ Realigns markets</li>
            <li>→ Redistributes power</li>
          </ul>
        </div>

        <div className="space-y-3 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
          <p>
            A Machine Self is a verified digital counterpart of a human that
            allows the individual to operate across digital systems, AI systems,
            and the real world.
          </p>
          <p>
            Through Machine Selves, humans become active participants inside
            systems, contributing intelligence, judgement, verification,
            expertise, and work.
          </p>
          <p>
            Machine Selves are paid contributors within the network, allowing
            businesses, AI systems, and digital platforms to coordinate human
            participation directly.
          </p>
          <p>
            OX is building a decentralised network designed to scale to 1
            billion Machine Selves.
          </p>
          <p>
            The network operates through the devices people already carry,
            allowing any human with a phone to participate through their Machine
            Self.
          </p>
          <p>
            This creates a new kind of network where human intelligence and
            machine intelligence operate together, producing levels of
            productivity never previously possible.
          </p>
          <p>
            The result is a system capable of delivering dramatically greater
            output or dramatically lower cost, as human participation becomes
            directly integrated into digital infrastructure.
          </p>
        </div>

        <p className="text-[13px] font-semibold text-white sm:text-[14px]">
          This is not optional. It is inevitable.
        </p>
      </div>
    </section>
  );
}
