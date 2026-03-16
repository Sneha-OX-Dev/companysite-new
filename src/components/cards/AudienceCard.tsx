import Link from "next/link";
import { cn } from "@/lib/utils";
import { CardTitle, Body, Muted } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AudienceCard({ card }: { card: Record<string, any> }) {
  return (
    <article
      className={cn(
        "group glass-card-dark relative flex flex-col overflow-hidden px-7 pb-7 pt-9 transition-all duration-300 hover:border-primary/20",
        card.hoverShadow
      )}
    >
      {/* top gradient accent bar */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r",
          card.gradient
        )}
      />

      {/* glow orb */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary opacity-[0.08] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.18]" />

      {/* badge — centered at top */}
      <div className="flex justify-center">
        <span className={cn(
          "inline-flex items-center rounded-full border px-4 py-1 text-[10px] font-semibold uppercase tracking-widest",
          "border-white/15 bg-white/5 text-foreground/50"
        )}>
          {card.badge}
        </span>
      </div>

      {/* heading — centered */}
      <CardTitle className="mt-5 text-center leading-snug">
        {card.heading}
      </CardTitle>

      {/* divider */}
      <div
        className={cn(
          "my-5 h-px w-8 rounded-full bg-gradient-to-r",
          card.gradient
        )}
      />

      {/* body */}
      <div className="flex flex-1 flex-col gap-3">
        <Body className="font-semibold text-foreground/80">{card.lead}</Body>
        {card.bullets.map((text: string) => (
          <div key={text} className="flex gap-2.5">
            <span
              className={cn(
                "mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r",
                card.gradient
              )}
            />
            <Muted className="text-foreground/50">{text}</Muted>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant="accent"
        size="pill"
        className={cn("mt-6 w-fit", card.glowShadow)}
        asChild
      >
        <Link href="#">
          {card.cta} →
        </Link>
      </Button>
    </article>
  );
}

export default AudienceCard;
