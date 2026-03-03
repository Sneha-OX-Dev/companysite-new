import { landing } from "@/content/landing";

export default function MomentsSection() {
  return (
    <section className="animate-fade-in-up px-6 py-20 md:py-28 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" style={{ animationDelay: "0.3s", opacity: 0 }}>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          {landing.moments.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          {landing.moments.headline}
        </h2>
        <p className="mt-1 text-2xl font-semibold text-zinc-300">
          {landing.moments.subheadline}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          {landing.moments.body}
        </p>
      </div>
    </section>
  );
}
