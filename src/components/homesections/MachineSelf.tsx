import SectionHeader from "@/components/Headings/SectionHeader";

const MACHINE_SELF_POINTS = [
  "2,000 human-created data points — directly provided, not inferred",
  "16 hours of structured input — a genuine representation of who you are",
  "Delivered in 4 minutes of daily activity",
  "Unguessable by AI because they are directly provided",
  "Lives only on your phone. Permissioned. Decentralised.",
  "User-approved matching — no central data monopoly.",
];

export default function MachineSelfSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-white sm:gap-14 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(52,211,153,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Section 7 — Machine Self"
        title="Your Machine Self"
        subtitle="A permissioned digital agent owned by you that represents your identity, data, capabilities, and intelligence."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start">
        {/* Definition and what it is */}
        <div className="space-y-4 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
          <p>
            Every person has a Machine Self — a permissioned digital agent owned by the
            individual that represents their identity, data, capabilities, and
            intelligence, including the unique and unknowable aspects of the individual
            that cannot be externally observed or reconstructed.
          </p>
          <p>
            The Machine Self acts as an active digital agent for the individual, exposing
            thousands of capability signals derived from the person&apos;s unique
            experience and context, and enabling participation in coordination,
            decision-making, task routing, and economic activity within the network.
          </p>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              The numbers
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
              <span className="font-semibold text-white">
                2,000 human-created data points.
              </span>{" "}
              16 hours to build. Unguessable by any AI — because they come directly from
              you.
            </p>
          </div>
        </div>

        {/* How it works — user facing */}
        <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            How it works — user-facing
          </p>
          <ul className="mt-2 space-y-2 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            {MACHINE_SELF_POINTS.map((item) => (
              <li key={item} className="relative pl-5">
                <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

