import SectionHeader from "@/components/Headings/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { SectionLabel, Body, DisplayText, Muted } from "@/components/ui/typography";

const TRACTION_BULLETS = [
  "Token live (access-controlled)",
  "Machine Selves being built by real users",
  "Live verification loops functioning",
];

export default function TractionSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,45,107,0.14),transparent_70%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(123,31,162,0.10),transparent_70%)]"
      />

      <SectionHeader title="Traction" align="center" eyebrowText="LIVE TODAY" />

      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
        {/* Metric card */}
        <div className="glass-card glass-card-accent-pink group relative overflow-hidden p-8 transition-shadow duration-500 hover:shadow-[0_32px_80px_rgba(255,45,107,0.14)]">
          {/* Top accent bar */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
          {/* Glow orb */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />

          <SectionLabel className="text-primary/70">Downloads</SectionLabel>

          <div className="mt-4 flex items-end gap-3">
            <DisplayText
              className="bg-gradient-to-br from-white via-primary/80 to-brand-purple bg-clip-text text-display leading-none tracking-[-0.04em] text-transparent"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              1.5M+
            </DisplayText>
          </div>
          <Muted className="mt-1.5 tracking-wide">
            total downloads to date
          </Muted>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <SectionLabel className="mb-4 text-foreground/60">Live today</SectionLabel>
          <div className="space-y-3.5">
            {TRACTION_BULLETS.map((t) => (
              <div key={t} className="flex items-center gap-3.5">
                <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                  <span className="absolute h-full w-full rounded-full bg-primary/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,45,107,0.9)]" />
                </span>
                <Muted className="leading-snug text-foreground/80">
                  {t}
                </Muted>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting copy card */}
        <div className="glass-card glass-card-accent-purple group relative overflow-hidden p-8">
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-purple opacity-[0.05] blur-3xl" />

          <SectionLabel className="text-brand-purple/70">What&apos;s happening</SectionLabel>

          <DisplayText className="mt-6 text-headline text-foreground/90 leading-snug">
            Humans opt in,
            <br />
            are matched,
            <br />
            and paid.
          </DisplayText>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <Body>
            Verified outcomes deliver results. Every loop closes with proof — no
            speculation, no vanity metrics.
          </Body>

          <Badge variant="status-live" className="mt-8 gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            Verified &amp; current
          </Badge>
        </div>
      </div>
    </section>
  );
}
