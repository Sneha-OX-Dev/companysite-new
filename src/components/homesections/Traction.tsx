import SectionHeader from "@/components/Headings/SectionHeader";

const TRACTION_BULLETS = [
  "Token live (access-controlled)",
  "Machine Selves being built by real users",
  "Live verification loops functioning",
];

export default function TractionSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 text-white py-12">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,45,107,0.18),transparent_70%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(123,31,162,0.14),transparent_70%)]"
      />
      {/* Subtle noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <SectionHeader title="Traction" subtitle="" align="center" />

      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
        {/* Metric card */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_32px_80px_rgba(255,45,107,0.12)]">
          {/* Top accent bar */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF2D6B] to-transparent opacity-80" />
          {/* Glow orb */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF2D6B] opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]" />

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF2D6B]/70">
            Downloads
          </p>

          <div className="mt-4 flex items-end gap-3">
            <span
              className="bg-gradient-to-br from-white via-[#FF2D6B]/80 to-[#7B1FA2] bg-clip-text text-[64px] font-black leading-none tracking-[-0.04em] text-transparent sm:text-[72px]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              1.5M+
            </span>
          </div>
          <p className="mt-1.5 text-[13px] text-white/40 tracking-wide">
            total downloads to date
          </p>

          {/* Divider */}
          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bullets */}
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
            Live today
          </p>
          <div className="space-y-3.5">
            {TRACTION_BULLETS.map((t, i) => (
              <div key={t} className="flex items-center gap-3.5">
                <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                  <span className="absolute h-full w-full rounded-full bg-[#FF2D6B]/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D6B] shadow-[0_0_8px_rgba(255,45,107,0.9)]" />
                </span>
                <p className="text-[13.5px] leading-snug text-white/70 sm:text-[14px]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting copy card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-8 backdrop-blur-sm">
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7B1FA2]/60 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#7B1FA2] opacity-[0.06] blur-3xl" />

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7B1FA2]/70">
            What's happening
          </p>

          <p className="mt-6 text-[22px] font-semibold leading-snug tracking-[-0.02em] text-white/90 sm:text-[24px]">
            Humans opt in,
            <br />
            are matched,
            <br />
            and paid.
          </p>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
            Verified outcomes deliver results. Every loop closes with proof — no
            speculation, no vanity metrics.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Verified & current
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
