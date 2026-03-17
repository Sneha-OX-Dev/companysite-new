import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle, Body, SectionLabel, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  {
    num: "01",
    tag: "Individuals",
    headline: "You are not a user.",
    sub: "You are an economic participant. Build your Machine Self. Mine OXME. Get matched to paid work.",
    gradient: "from-primary to-brand-purple",
    glow: "bg-primary",
    topLine: "via-primary/50",
    numColor: "text-primary/50",
  },
  {
    num: "02",
    tag: "Enterprise & Business",
    headline: "Pay for results.",
    sub: "Post structured work into the OX framework. Get matched to real, verified humans — privately.",
    gradient: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    topLine: "via-brand-purple/50",
    numColor: "text-brand-purple/60",
  },
  {
    num: "03",
    tag: "Developers & Builders",
    headline: "Build on live intelligence.",
    sub: "Plug into real-time human signals. Coordinate human and AI workflows via API.",
    gradient: "from-primary to-brand-purple",
    glow: "bg-primary",
    topLine: "via-primary/50",
    numColor: "text-primary/50",
  },
  {
    num: "04",
    tag: "Government & Smart Cities",
    headline: "Live signals. Sovereign citizens.",
    sub: "Replace delayed reports with real-time signals from people and systems — without a central database.",
    gradient: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    topLine: "via-brand-purple/50",
    numColor: "text-brand-purple/60",
  },
];

export default function WhoOxIsForTeaser() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-8 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_60%_40%_at_30%_0%,rgba(255,45,107,0.10),transparent_65%),radial-gradient(ellipse_50%_35%_at_70%_100%,rgba(123,31,162,0.09),transparent_65%)]"
      />

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel className="text-primary/70">WHO IT&apos;S FOR</SectionLabel>
          <SectionTitle className="mt-2">
            One network.{" "}
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              Four audiences.
            </span>
          </SectionTitle>
        </div>
        <Button asChild variant="glass" size="pill" className="shrink-0 self-start sm:self-auto">
          <Link href="/marketplace">Explore the marketplace →</Link>
        </Button>
      </div>

      {/* 2×2 grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {AUDIENCES.map((a, i) => (
          <div
            key={a.num}
            className={cn(
              "group glass-card relative overflow-hidden p-6 transition-all duration-300 hover:border-primary/20 sm:p-7"
            )}
          >
            {/* Top accent */}
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                a.topLine
              )}
            />
            {/* Glow */}
            <div
              className={cn(
                "pointer-events-none absolute h-32 w-32 rounded-full opacity-[0.06] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.14]",
                a.glow,
                { "-right-8 -top-8": i % 2 === 0, "-left-8 -top-8": i % 2 !== 0 }
              )}
            />

            <div className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className={cn("font-mono text-[10px] font-bold tracking-[0.22em]", a.numColor)}>
                  {a.num}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r bg-clip-text text-transparent",
                    a.gradient
                  )}
                >
                  {a.tag}
                </span>
              </div>

              <Body className="font-semibold text-foreground/90 leading-snug">
                {a.headline}
              </Body>

              <Muted className="text-foreground/55 leading-relaxed">
                {a.sub}
              </Muted>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA — mobile convenience */}
      <div className="flex justify-center sm:hidden">
        <Button asChild variant="glass" size="pill">
          <Link href="/marketplace">Explore the marketplace →</Link>
        </Button>
      </div>
    </section>
  );
}
