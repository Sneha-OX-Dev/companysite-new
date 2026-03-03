import { landing } from "@/content/landing";

export default function MindTwinSection() {
  return (
    <section className="animate-fade-in-up border-y border-indigo-900/50 bg-indigo-950/30 px-6 py-20 md:py-28" style={{ animationDelay: "0.2s", opacity: 0 }}>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          {landing.mindtwin.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          {landing.mindtwin.headline}
        </h2>
        <p className="mt-1 text-2xl font-semibold text-zinc-300">
          {landing.mindtwin.subheadline}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          {landing.mindtwin.body}
        </p>
      </div>
    </section>
  );
}
