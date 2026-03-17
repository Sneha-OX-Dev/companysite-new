import { CARDS } from "@/lib/constants";
import { SectionTitle, Body, Muted } from "@/components/ui/typography";
import AudienceCard from "../cards/AudienceCard";

export default function AudienceCards() {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 pb-8 pt-16">
      {/* header */}
      <div className="max-w-2xl text-center">
        <SectionTitle>
          The Only Crypto In The World You{" "}
          <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
            Mine With Your Time
          </span>
        </SectionTitle>
        <Body className="mt-3 text-foreground/50">
          Every crypto network on earth wants your money. OX wants your time.
        </Body>
      </div>

      {/* cards */}
      <div className="grid w-full gap-5 md:grid-cols-2">
        {CARDS.map((card) => (
          <AudienceCard key={card.id} card={card} />
        ))}
      </div>

      {/* footer line */}
      <Muted className="w-full border-t border-white/[0.08] pt-6 text-center text-foreground/40">
        <span className="font-semibold text-foreground/70">
          One billion human agents.
        </span>{" "}
        One fixed‑supply token. Mined entirely by human participation.
      </Muted>
    </section>
  );
}
