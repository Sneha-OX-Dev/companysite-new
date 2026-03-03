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
          className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
        >
          {landing.join.cta}
        </Link>
      </div>
    </section>
  );
}
