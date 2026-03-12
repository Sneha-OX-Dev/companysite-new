import { AudienceCards } from "@/components/sections/AudienceCardsSection";
import { landing } from "@/content/landing";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/660e2f07f76ab1e3f4fc3d05_Image%20and%20lines.webp";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/6601f1ceaf0f5b2dda2239dd_ox.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.4),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-200 backdrop-blur">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(255,13,116,0.9)]" />
          <span>OX • ALIVE IN THE NETWORK</span>
        </div>
        <Image
          src={LOGO_URL}
          alt="OX"
          width={80}
          height={32}
          className="h-8 w-20 text-white"
        />
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
            {landing.hero.headline}
          </h1>
          <p className="font-heading bg-gradient-to-r from-white via-zinc-200 to-[var(--accent)] bg-clip-text text-xl font-medium text-transparent text-balance sm:text-2xl md:text-3xl">
            {landing.hero.subline}
          </p>
        </div>
        <Link
          href="/#get-the-app"
          className="relative rounded-full bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white shadow-[0_0_32px_rgba(255,13,116,0.55)] transition hover:translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,13,116,0.9)] animate-pulse-ring"
        >
          {landing.hero.cta}
        </Link>
      </div>
      <div className="relative z-0 mt-8 w-full max-w-4xl px-4 animate-float-soft">
        <Image
          src={HERO_IMAGE}
          alt=""
          width={1200}
          height={600}
          className="w-full object-contain"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
      <AudienceCards />
    </section>
  );
}
