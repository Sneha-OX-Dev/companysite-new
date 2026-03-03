import { landing } from "@/content/landing";

export default function ValueSection() {
  return (
    <section className="animate-fade-in-up px-6 py-20 md:py-28 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" style={{ animationDelay: "0.1s", opacity: 0 }}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {landing.value.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          {landing.value.body}
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          "Enterprises & Institutions",
          "Developers & Engineers",
          "Users & Influencers",
          "Governments & NGOs",
          "Crypto & Digital Rights",
          "AI Builders",
        ].map((label) => (
          <div
            key={label}
            className="group rounded-2xl border border-indigo-900/60 bg-indigo-950/20 px-4 py-4 text-left text-sm text-zinc-300 shadow-[0_0_24px_rgba(15,23,42,0.6)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-indigo-950/40 hover:shadow-[0_0_36px_rgba(255,13,116,0.6)]"
          >
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]/90">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>For</span>
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
