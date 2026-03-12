import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/660e2f07f76ab1e3f4fc3d05_Image%20and%20lines.webp";
const LOGO_URL =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/6601f1ceaf0f5b2dda2239dd_ox.svg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-10 pb-20 text-center">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.4),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 text-left md:flex-row md:items-center md:gap-12">
        {/* Left: copy + CTAs */}
        <div className="flex-1 space-y-7">
          {/* pill + logo */}
          <div className="flex-col items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="OX"
              width={24}
              height={24}
              className="hidden h-18 w-18 text-white sm:inline-block"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-200 backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(255,45,107,0.9)]" />
              <span>Human Intelligence Protocol</span>
            </div>
          </div>

          {/* headline + vision */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold tracking-[-0.05em] text-white text-balance sm:text-5xl md:text-6xl">
              The Human Intelligence Protocol.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
              We are scaling a decentralised network of one billion connected
              human agents, where personal AI represents the unique intelligence
              of individuals and coordinates human and artificial intelligence
              to solve problems, perform work, and create economic value.
            </p>
            <p className="text-[13px] font-medium text-white/60 sm:text-[14px]">
              <span className="font-semibold text-white">
                OX is the Human Intelligence Layer
              </span>{" "}
              that systems require to operate in the real world.
            </p>
          </div>

          {/* scale number */}
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/40">
              Scale target
            </p>
            <p className="bg-linear-to-r from-white via-zinc-200 to-[var(--accent)] bg-clip-text text-2xl font-semibold tracking-[-0.04em] text-transparent sm:text-3xl md:text-[32px]">
              One billion human agents.
            </p>
          </div>

          {/* three pillars */}
          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {[
              "Humans become verified Machine Selves",
              "Phones become live intelligence nodes",
              "Systems connect to living human reality",
            ].map((text) => (
              <div
                key={text}
                className="group flex items-start gap-2 rounded-lg border border-white/10 bg-black/30 px-3.5 py-3 text-[12px] text-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition hover:border-[var(--accent)]/60 hover:bg-black/50"
              >
                <span className="mt-0.5 text-[14px] text-[var(--accent)] group-hover:translate-x-0.5 group-hover:text-white transition-transform">
                  →
                </span>
                <p className="leading-snug">{text}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="#machine-self"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_0_32px_rgba(255,45,107,0.55)] transition hover:translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,45,107,0.9)]"
            >
              Build Your Machine Self
            </Link>
            <Link
              href="#how-ox-works"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              See How It Works
            </Link>
            <Link
              href="#get-the-app"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:text-white"
            >
              Join the Network
            </Link>
          </div>
        </div>

        {/* Right: hero visual */}
        <div className="relative mt-8 flex flex-1 items-center justify-center md:mt-0">
          <div className="pointer-events-none absolute inset-10 rounded-[32px] border border-white/5 bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
          <div className="relative w-full max-w-2xl animate-float-soft md:max-w-3xl">
            <Image
              src={HERO_IMAGE}
              alt=""
              width={1200}
              height={600}
              className="w-full rounded-[32px] border border-white/5 bg-black/40 object-cover shadow-[0_40px_110px_rgba(0,0,0,0.8)]"
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
