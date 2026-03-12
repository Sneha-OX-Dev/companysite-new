const PHRASES = [
  "Sovereignty",
  "Machine Self",
  "16h Work",
  "Token",
  "Marketplace",
  "1.5M users",
  "Your Data",
  "Earn OXME",
  "Alive in the Network",
  "Unlocking $3 Trillion",
  "Monetise Your Unique Self",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="flex w-max gap-12 pr-12"
      style={{
        animation: "marquee 35s linear infinite",
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...PHRASES, ...PHRASES].map((phrase, i) => (
        <span
          key={`${phrase}-${i}`}
          className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-zinc-500"
        >
          {phrase}
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <section className="relative overflow-hidden border-y border-indigo-900/40 bg-black/30 py-3" aria-hidden>
      <div className="flex">
        <MarqueeRow />
      </div>
      <div className="absolute left-0 top-0 flex w-full" style={{ marginTop: "2.5rem" }}>
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
