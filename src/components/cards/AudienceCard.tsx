function AudienceCard({ card }: any) {
  const accentStyle = { backgroundColor: card.badgeColor };
  const borderStyle = { borderColor: `${card.badgeColor}66` };
  const bgStyle = { backgroundColor: `${card.badgeColor}1a` };

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#050618]/80 px-7 pb-7 pt-9 shadow-[0_22px_60px_rgba(15,23,42,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${card.hoverBorder} ${card.hoverShadow}`}
    >
      {/* top accent bar */}
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-linear-to-r ${card.gradient}`}
      />

      {/* badge */}
      <div
        className="absolute right-5 top-5 rounded-full px-3.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em]"
        style={{
          ...borderStyle,
          ...bgStyle,
          color: card.badgeText,
          border: "1px solid",
        }}
      >
        {card.badge}
      </div>

      <h3 className="my-5 text-[20px] font-semibold leading-snug tracking-[-0.01em] md:text-[24px] text-center">
        {card.heading}
      </h3>

      {/* divider */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-[2px] w-9 rounded-full" style={accentStyle} />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-2.5 text-[12px] leading-relaxed text-white/80 sm:text-[13px] text-start">
        <p className="text-sm font-semibold text-white">{card.lead}</p>
        {card.bullets.map((text: string) => (
          <p key={text} className="relative pl-4">
            <span
              className={`absolute left-0 top-[9px] h-1 w-1 rounded-full ${card.dotGlow}`}
              style={accentStyle}
            />
            {text}
          </p>
        ))}
      </div>

      <button
        type="button"
        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${card.gradient} px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ${card.glowShadow} outline-none transition-all duration-200 hover:translate-x-0.5 focus-visible:ring-2 ${card.focusRing} focus-visible:ring-offset-2 focus-visible:ring-offset-[#050618]`}
      >
        {card.cta}
        <span className="text-[13px] transition-transform duration-200 group-hover:translate-x-[3px]">
          →
        </span>
      </button>
    </article>
  );
}
export default AudienceCard;
