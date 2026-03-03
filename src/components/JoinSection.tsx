import Link from "next/link";
import { landing } from "@/content/landing";

export default function JoinSection() {
  return (
    <section className="border-t border-indigo-900/50 bg-indigo-950/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {landing.join.headline}
        </h2>
        <p className="mt-4 text-xl font-semibold text-[var(--accent)]">
          {landing.join.stat}
        </p>
        <p className="mt-4 text-lg text-zinc-400">
          {landing.join.body}
        </p>
        <Link
          href="#get-the-app"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_28px_rgba(255,13,116,0.6)] transition hover:translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,13,116,0.9)]"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          <span>{landing.join.cta}</span>
        </Link>
      </div>
    </section>
  );
}
