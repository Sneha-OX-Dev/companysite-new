import Image from "next/image";
import Link from "next/link";
import { landing } from "@/content/landing";

const HERO_IMAGE =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/660e2f07f76ab1e3f4fc3d05_Image%20and%20lines.webp";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/6601f1ceaf0f5b2dda2239dd_ox.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent" aria-hidden />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <Image
          src={LOGO_URL}
          alt="OX"
          width={80}
          height={32}
          className="h-8 w-20 text-white"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {landing.hero.headline}
          </h1>
          <p className="text-xl text-zinc-300 sm:text-2xl md:text-3xl">
            {landing.hero.subline}
          </p>
        </div>
        <Link
          href="#get-the-app"
          className="rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
        >
          {landing.hero.cta}
        </Link>
      </div>
      <div className="relative z-0 mt-8 w-full max-w-4xl px-4">
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
    </section>
  );
}
