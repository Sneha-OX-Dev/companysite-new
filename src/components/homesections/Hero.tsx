import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTitle, SectionLabel, SectionTitle, CardTitle, Body, Subhead, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import AudienceCards from "@/components/sections/AudienceCardsSection";
import VideoThumbnails from "@/components/homesections/VideoThumbnails";

const HERO_BG =
  "bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.2),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.15),transparent_60%)]";

const HERO_ASSET_SRC = "/images/home-section/machine-self-banner1.png";


export default function HomeHero() {
  return (
    <section className={cn("relative flex flex-col items-center overflow-hidden pb-8", HERO_BG)}>

      {/* Hero image */}
      <div className="relative w-full">
        {/* Mobile: 16:9 image, text sits below */}
        <div className="relative aspect-video w-full overflow-hidden md:hidden">
          <Image
            src={HERO_ASSET_SRC}
            alt=""
            fill
            className="object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
            style={{ objectPosition: "center 20%" }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Mobile: text below image */}
        <div className="px-6 pb-6 pt-5 md:hidden">
          <div className="space-y-2">
            <SectionLabel className="text-white/50">
              Connecting Machines, AI, and Systems to Real Human Agency
            </SectionLabel>
            <PageTitle>
              1 Billion Machine Selves
            </PageTitle>
            <Subhead className="text-white/80">
              1.5 million people have already started.
            </Subhead>
          </div>
        </div>

        {/* Desktop: cinematic 90vh with text overlaid at bottom */}
        <div className="relative hidden h-[90vh] min-h-[600px] w-full overflow-hidden md:block">
          <Image
            src={HERO_ASSET_SRC}
            alt=""
            fill
            className="object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
            style={{ objectPosition: "center 20%" }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,20,36,0.95) 0%, rgba(15,20,36,0.5) 35%, transparent 65%)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
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

      {/* CTAs + Video thumbnails — immediately below hero image */}
      <div className="relative z-10 mt-4 flex w-full max-w-6xl flex-col items-center gap-6 px-6 md:mt-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Button asChild variant="accent" size="pill" className="px-4 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm">
            <Link href="/home">Build Your Machine Self</Link>
          </Button>
          <Button asChild variant="glass" size="pill" className="px-4 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
          <Button asChild variant="ghost-text" size="pill" className="text-xs sm:text-sm">
            <Link href="/earn">Join the Network</Link>
          </Button>
        </div>
        <VideoThumbnails />
      </div>

      {/* Bold gradient headline */}
      <div className="relative z-10 mt-16 w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Subhead className="text-foreground/80">
            OX is the{" "}
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              Human Agency Layer
            </span>
            {" "}for digital systems and AI — enabling machines, software, and networks to interact directly with real human intelligence, judgement, and action.
          </Subhead>
          <Body className="text-foreground/50">
            Today, digital systems and AI operate largely without direct access to real human agency.
            OX changes this by enabling humans to participate directly through their Machine Selves,
            providing judgement, work, data, decisions, and real-world action in real time.
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
                "flex flex-col items-center gap-1 px-3 py-5 md:px-6",
                {
                  "border-r border-white/[0.06]": i % 2 === 0,
                  "border-b border-white/[0.06] md:border-b-0": i < 2,
                }
              )}
            >
              <span className="whitespace-nowrap bg-gradient-to-r from-primary to-brand-purple bg-clip-text font-mono text-3xl font-black tracking-tight text-transparent md:text-5xl">
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

      {/* Closing note */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-3xl border-t border-white/[0.08] px-6 pt-8 text-center">
        <Body className="text-foreground/50">
          <span className="font-bold text-foreground/80">
            One billion human agents.
          </span>{" "}
          One fixed supply token. Mined entirely by human participation.
        </Body>
      </div>

      <AudienceCards />
    </section>
  );
}
