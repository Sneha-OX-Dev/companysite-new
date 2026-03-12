import Link from "next/link";
import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section className="animate-fade-in-up border-t border-indigo-900/50 bg-indigo-950/30 px-6 py-20 md:py-28" style={{ animationDelay: "0.4s", opacity: 0 }}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white text-balance sm:text-4xl">
          {landing.join.headline}
        </h2>
        <p className="mt-4 text-xl font-semibold text-[var(--accent)]">
          {landing.join.stat}
        </p>
        <p className="mt-4 text-lg text-zinc-400">
          {landing.join.body}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full px-8 shadow-[0_0_28px_rgba(255,13,116,0.6)] transition hover:translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,13,116,0.9)]"
        >
          <Link href="/#get-the-app" className="gap-2 uppercase tracking-wide">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            {landing.join.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
