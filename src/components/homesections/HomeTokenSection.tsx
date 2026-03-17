import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel, Body, Muted, DisplayText } from "@/components/ui/typography";

export default function HomeTokenSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-0 px-6 py-20 text-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,45,107,0.12),transparent_70%),radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(123,31,162,0.10),transparent_70%)]"
      />

      <div className="glass-card glass-card-accent-pink relative w-full overflow-hidden p-8 sm:p-12">
        {/* Top accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary opacity-[0.07] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-purple opacity-[0.07] blur-[80px]" />

        <div className="relative flex flex-col items-center gap-6 text-center">
          <SectionLabel className="text-primary/80">THE TOKEN</SectionLabel>

          <DisplayText className="max-w-2xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-headline leading-tight tracking-tight text-transparent">
            No buying. No selling.
            <br />
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              Just earning.
            </span>
          </DisplayText>

          <Body className="max-w-xl text-foreground/65 leading-relaxed">
            OXME is not bought. It is earned. The only way a token enters
            circulation is through human participation — your time, your
            attention, your intelligence.
          </Body>

          {/* Three pillars */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {["Fixed supply.", "Live now.", "Yours to earn."].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/[0.10] bg-white/[0.04] px-5 py-2"
              >
                <Muted className="text-sm font-semibold text-foreground/70">
                  {item}
                </Muted>
              </div>
            ))}
          </div>

          <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <Button asChild variant="accent" size="pill" className="px-8">
            <Link href="/earn">Start earning OXME →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
