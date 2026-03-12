import { CARDS } from "@/lib/constants";
import AudienceCard from "../cards/AudienceCard";

export function AudienceCards() {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-16 px-6 pb-20 pt-20 text-white sm:pb-24 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      />

      {/* header */}
      <div className="max-w-2xl text-center">
        <h2 className="font-heading text-[24px] font-semibold leading-tight tracking-[-0.03em] sm:text-[30px] md:text-[34px]">
          Who is OX{" "}
          <span className="bg-linear-to-r from-[#E8264A] via-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
            for?
          </span>
        </h2>
        <p className="mt-3 text-[13px] font-normal tracking-[0.02em] text-white/70 sm:text-[14px]">
          Two core audiences. One network. One fixed-supply token — mined
          entirely by human participation.
        </p>
      </div>

      {/* cards */}
      <div className="grid w-full gap-16 md:grid-cols-2">
        {CARDS.map((card) => (
          <AudienceCard key={card.id} card={card} />
        ))}
      </div>

      {/* footer line */}
      <p className="mt-6 w-full max-w-5xl border-t border-white/10 pt-6 text-center text-[11px] font-normal tracking-[0.12em] text-white/60 sm:text-[12px]">
        <span className="font-semibold text-white/80">
          One billion human agents.
        </span>{" "}
        One fixed‑supply token. Mined entirely by human participation.
      </p>
    </section>
  );
}
