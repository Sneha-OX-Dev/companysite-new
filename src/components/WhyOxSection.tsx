import { landing } from "@/content/landing";

export default function WhyOxSection() {
  const { whyOx } = landing;

  return (
    <section className="border-y border-indigo-900/40 bg-indigo-950/30 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-2xl font-bold text-white text-balance sm:text-3xl">
          {whyOx.headline}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {whyOx.items.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 rounded-xl border border-indigo-900/60 bg-indigo-950/20 px-4 py-3"
            >
              <span className="text-[var(--accent)]" aria-hidden>
                ✓
              </span>
              <span className="text-sm text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
