import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTitle, SectionLabel, SectionTitle, CardTitle, Body, Subhead, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const HERO_BG =
  "bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.2),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.15),transparent_60%)]";

const HERO_ASSET_SRC = "/images/home-section/machine-self-banner1.png";

function PlayIcon() {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" aria-hidden>
      <path d="M0 0l8 5-8 5V0z" />
    </svg>
  );
}

export default function HomeHero() {
  return (
    <section className={cn("relative flex flex-col items-center overflow-hidden pb-24", HERO_BG)}>

      {/* Full-bleed cinematic image */}
      <div className="relative w-full">
        <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
          <Image
            src={HERO_ASSET_SRC}
            alt=""
            fill
            className="object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
            style={{ objectPosition: "center 20%" }}
            priority
            sizes="100vw"
          />

          {/* Cinematic fade — bleeds into page background, no seam */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          {/* Mid-image density layer — dark stage for the headline text */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,20,36,0.95) 0%, rgba(15,20,36,0.5) 35%, transparent 65%)" }} />
          {/* Radial depth vignette — strengthened */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

          {/* Eyebrow + Headline anchored to bottom */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-14">
            <div className="mx-auto w-full max-w-6xl space-y-3">
              <SectionLabel className="text-white/50">
                Connecting Machines, AI, and Systems to Real Human Agency
              </SectionLabel>
              <PageTitle className="drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]">
                1 Billion Machine Selves
              </PageTitle>
              <Subhead className="text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,1)]">
                1.5 million people have already started.
              </Subhead>
            </div>
          </div>
        </div>
      </div>

      {/* Bold gradient headline */}
      <div className="relative z-10 mt-16 w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <SectionTitle>
            The{" "}
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              Human Agency Layer
            </span>
            {" "}for digital systems and AI.
          </SectionTitle>
          <Body className="text-foreground/60">
            OX enables humans to participate directly inside digital and AI systems
            through their Machine Selves — providing judgement, work, data,
            decisions, and real-world action in real time.
          </Body>
        </div>
      </div>

      {/* 4-stat live data bar */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-4xl px-6">
        <div className="glass-card grid grid-cols-2 gap-0 md:grid-cols-4">
          {[
            { val: "1.5M", label: "Users" },
            { val: "4 min", label: "Avg session" },
            { val: "16 hrs", label: "Daily engagement" },
            { val: "2,000", label: "Data points per user" },
          ].map(({ val, label }, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center gap-1 px-6 py-5",
                { "border-r border-white/[0.06]": i < 3 }
              )}
            >
              <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text font-mono text-2xl font-black tracking-tight text-transparent">
                {val}
              </span>
              <Muted className="text-center text-xs text-foreground/50">{label}</Muted>
            </div>
          ))}
        </div>
      </div>

      {/* Three pillars */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-4xl px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            "Humans become verified Machine Selves",
            "Phones become live intelligence nodes",
            "Systems connect to living human reality",
          ].map((text, i) => (
            <div
              key={text}
              className="group glass-card relative flex flex-col gap-4 overflow-hidden px-6 py-6 transition-all duration-300 hover:border-primary/30"
            >
              {/* Top accent line */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                  { "via-primary/60": i % 2 === 0, "via-brand-purple/60": i % 2 !== 0 }
                )}
              />
              {/* Glow orb */}
              <div
                className={cn(
                  "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.18]",
                  { "bg-primary": i % 2 === 0, "bg-brand-purple": i % 2 !== 0 }
                )}
              />
              {/* Number */}
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-foreground/30">
                0{i + 1}
              </span>
              {/* Title */}
              <CardTitle
                className={cn(
                  "bg-gradient-to-r bg-clip-text leading-snug tracking-tight text-transparent",
                  { "from-primary to-brand-purple": i % 2 === 0, "from-brand-purple to-primary": i % 2 !== 0 }
                )}
              >
                {text}
              </CardTitle>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs + Video — unified centred cluster */}
      <div className="relative z-10 mt-10 flex w-full max-w-6xl flex-col items-center gap-5 px-6">
        {/* Primary CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="accent" size="pill">
            <Link href="/home">Build Your Machine Self</Link>
          </Button>
          <Button asChild variant="glass" size="pill">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
          <Button asChild variant="ghost-text" size="pill">
            <Link href="/earn">Join the Network</Link>
          </Button>
        </div>

        {/* Video links */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            target="_blank"
            href="https://s3.eu-west-1.amazonaws.com/oxy.prod1.static-media/public-upload/2026-02-24/oxygean-video-feb-2026.mp4"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-xs font-semibold text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <PlayIcon />
            </span>
            Watch the OX Story
          </Link>
          <Link
            href="https://s3.eu-west-1.amazonaws.com/oxy.prod1.static-media/public-upload/2026-02-24/oxygean-video-feb-2026.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-2.5 text-xs font-semibold text-white/60 backdrop-blur-sm transition hover:bg-white/5 hover:text-white"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/15">
              <PlayIcon />
            </span>
            Meet Axiom
          </Link>
        </div>
      </div>

      {/* Closing note */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-3xl border-t border-white/[0.08] px-6 pt-8 text-center">
        <Subhead className="text-foreground/60">
          <span className="font-bold text-white/80">
            One billion human agents.
          </span>{" "}
          One fixed supply token. Mined entirely by human participation.
        </Subhead>
      </div>

      {/* Wide cinematic image */}
      <div className="relative z-10 mt-10 w-full px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <Image
            src="/images/home-section/hero3.png"
            alt=""
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
