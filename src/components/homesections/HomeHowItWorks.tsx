import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel, Body, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    num: "01",
    text: "You build your Machine Self in 4 minutes a day.",
    sub: "16 hours of human capital, stored on your phone, owned by you.",
    accent: "text-primary/60",
    dot: "bg-primary shadow-[0_0_10px_rgba(255,45,107,0.8)]",
    line: "via-primary/30",
  },
  {
    num: "02",
    text: "The network matches you to real work.",
    sub: "Your Machine Self evaluates privately on your device. You see only what you qualify for.",
    accent: "text-brand-purple/70",
    dot: "bg-brand-purple shadow-[0_0_10px_rgba(123,31,162,0.9)]",
    line: "via-brand-purple/30",
  },
  {
    num: "03",
    text: "You complete the work. You get paid. The loop never stops.",
    sub: "Verified outcomes. Real earnings. The network keeps growing.",
    accent: "text-primary/60",
    dot: "bg-primary shadow-[0_0_10px_rgba(255,45,107,0.8)]",
    line: "via-primary/30",
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-20 pt-8 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(123,31,162,0.09),transparent_65%)]"
      />

      {/* Header */}
      <div className="flex flex-col gap-2">
        <SectionLabel className="text-foreground/50">HOW IT WORKS</SectionLabel>
        <p className="text-xl font-bold text-white/90 md:text-2xl">
          Three steps. Simple.
        </p>
      </div>

      {/* Steps */}
      <div className="relative flex flex-col">
        {STEPS.map((step, i) => (
          <div key={step.num} className="relative flex gap-6">
            {/* Left — number + connector line */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] font-mono text-[11px] font-bold tracking-widest",
                  step.accent
                )}
              >
                {step.num}
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "mt-1 w-px flex-1 bg-gradient-to-b from-transparent to-transparent",
                    step.line
                  )}
                  style={{ minHeight: "2.5rem" }}
                />
              )}
            </div>

            {/* Right — content */}
            <div className="pb-8">
              <Body className="font-semibold leading-snug text-white/90">
                {step.text}
              </Body>
              <Muted className="mt-1 text-foreground/50">{step.sub}</Muted>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="accent" size="pill">
          <Link href="/how-it-works">See the full picture →</Link>
        </Button>
        <Button asChild variant="glass" size="pill">
          <Link href="/home">Build your Machine Self</Link>
        </Button>
      </div>
    </section>
  );
}
