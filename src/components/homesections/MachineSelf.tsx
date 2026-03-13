import SectionHeader from "@/components/Headings/SectionHeader";

const MACHINE_SELF_POINTS = [
  {
    stat: "2,000",
    label: "human-created data points",
    sub: "Directly provided, never inferred",
  },
  {
    stat: "16 hrs",
    label: "of structured input",
    sub: "A genuine representation of who you are",
  },
  {
    stat: "4 min",
    label: "of daily activity",
    sub: "That's all it takes to maintain your self",
  },
  {
    stat: "0%",
    label: "guessable by AI",
    sub: "Because every point comes directly from you",
  },
];

const PRIVACY_POINTS = [
  "Lives only on your phone — never on a server",
  "User-approved matching — no central data monopoly",
  "Permissioned. Decentralised. Sovereign.",
];

export default function MachineSelfSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(52,211,153,0.15),transparent_65%),radial-gradient(ellipse_55%_40%_at_80%_90%,rgba(59,130,246,0.12),transparent_65%)]"
      />

      <SectionHeader
        pillText="Machine Self"
        title="Your Machine Self"
        subtitle="A permissioned digital agent owned by you that represents your identity, data, capabilities, and intelligence."
      />

      {/* Image banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07]">
        <div
          className="h-[220px] w-full sm:h-[280px] md:h-[320px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(52,211,153,0.15) 0%, rgba(16,16,20,0.95) 40%, rgba(59,130,246,0.12) 100%)",
          }}
        >
          {/* Decorative grid */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Glows */}
          <div className="pointer-events-none absolute left-1/4 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-400 opacity-15 blur-3xl" />

          {/* Centre content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300/80">
              On-device · Permissioned · Sovereign
            </div>
            <p className="max-w-lg text-[22px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[28px]">
              Intelligence that lives{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                with you, not about you.
              </span>
            </p>
            <p className="max-w-md text-[14px] text-white/45 sm:text-[15px]">
              2,000 data points. Built by you. Owned by you. Never leaving your
              device.
            </p>
          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        {/* Left — definition + stat grid */}
        <div className="flex flex-col gap-5">
          {/* Definition card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400/60">
              What it is
            </p>

            <p className="mt-5 text-[17px] leading-[1.85] text-white/65 sm:text-[18px]">
              Every person has a Machine Self — a permissioned digital agent
              owned by the individual that represents their identity, data,
              capabilities, and intelligence, including the{" "}
              <span className="font-semibold text-white/90">
                unique and unknowable aspects
              </span>{" "}
              of the individual that cannot be externally observed or
              reconstructed.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="text-[17px] leading-[1.85] text-white/65 sm:text-[18px]">
              The Machine Self acts as an active digital agent — exposing
              thousands of capability signals derived from the person's unique
              experience and context, enabling participation in coordination,
              decision-making, task routing, and economic activity within the
              network.
            </p>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-3">
            {MACHINE_SELF_POINTS.map((point) => (
              <div
                key={point.stat}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-5 transition-colors duration-300 hover:border-emerald-400/20"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-[30px] font-black leading-none tracking-[-0.04em] text-transparent sm:text-[34px]">
                  {point.stat}
                </p>
                <p className="mt-2 text-[14px] font-semibold leading-snug text-white/80 sm:text-[15px]">
                  {point.label}
                </p>
                <p className="mt-1 text-[12.5px] leading-snug text-white/40 sm:text-[13px]">
                  {point.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — how it works + privacy */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-8">
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-400 opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-400/60">
              How it works
            </p>

            <p className="mt-5 text-[19px] font-bold leading-tight tracking-[-0.02em] text-white/90 sm:text-[21px]">
              Built in 16 hours.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                Maintained in 4 minutes a day.
              </span>
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="text-[16px] leading-[1.85] text-white/60 sm:text-[17px]">
              The Machine Self is not a profile built by observation. It is a
              structured representation you build yourself — through daily
              activity that takes less time than making a coffee.
            </p>

            <p className="mt-4 text-[16px] leading-[1.85] text-white/60 sm:text-[17px]">
              2,000 human-created data points. Unguessable by any AI — because
              every single one comes{" "}
              <span className="font-semibold text-white/85">
                directly from you.
              </span>
            </p>
          </div>

          {/* Privacy card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400/50">
              Sovereignty by design
            </p>

            <ul className="mt-5 space-y-4">
              {PRIVACY_POINTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15px] leading-snug text-white/65 sm:text-[16px]"
                >
                  <span className="relative mt-[6px] flex h-4 w-4 shrink-0 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-emerald-400/15" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.22em] text-emerald-300/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
              Your data never leaves your device
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
