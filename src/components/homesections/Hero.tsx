import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTitle, SectionLabel, Body, Subhead, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import AudienceCards from "@/components/sections/AudienceCardsSection";
import VideoThumbnails from "@/components/homesections/VideoThumbnails";
const HERO_BG =
  "bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.10),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.08),transparent_60%)]";

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

        {/* Mobile: hero title */}
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

        {/* Mobile: token card below hero image */}
        <div className="px-6 pb-4 md:hidden">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[rgba(6,8,20,0.78)] p-6 backdrop-blur-xl"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-primary opacity-[0.07] blur-3xl" />
            <div className="relative flex flex-col items-center gap-4 text-center">
              <SectionLabel className="text-primary/80">THE TOKEN</SectionLabel>
              <div className="space-y-0.5">
                <p className="text-xl font-black leading-tight tracking-tight text-white">No buying. No selling.</p>
                <p className="text-xl font-black leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">Just earning.</span>
                </p>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                OXME is not bought. It is earned. The only way a token enters circulation is through human participation — your time, your attention, your intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Fixed supply.", "Live now.", "Yours to earn."].map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-white/55">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href="/earn"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,45,107,0.5)]"
              >
                Start earning OXME →
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: cinematic 90vh — hero text bottom-left, token card top-right */}
        <div className="relative hidden w-full overflow-hidden md:block md:h-[640px] lg:h-[720px] xl:h-[800px]">
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
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,10,24,0.97) 0%, rgba(8,10,24,0.55) 35%, transparent 65%)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

          {/* Content overlay — constrained to max-w-6xl, centered */}
          <div className="absolute inset-0 mx-auto w-full max-w-6xl px-6">

            {/* Token card — top-right within the container */}
            <div className="absolute right-6 top-6 w-[44%] max-w-[520px] min-w-[380px]">
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.13] bg-black/55 p-8 backdrop-blur-xl xl:p-12"
                style={{ boxShadow: "0 12px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)" }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-primary opacity-[0.08] blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-brand-purple opacity-[0.08] blur-3xl" />

                <div className="relative flex flex-col items-center gap-6 text-center">
                  <SectionLabel className="text-primary/80">THE TOKEN</SectionLabel>

                  <div className="space-y-1">
                    <p className="text-3xl font-black leading-tight tracking-tight text-white xl:text-4xl">
                      No buying. No selling.
                    </p>
                    <p className="text-3xl font-black leading-tight tracking-tight xl:text-4xl">
                      <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
                        Just earning.
                      </span>
                    </p>
                  </div>

                  <p className="text-base leading-relaxed text-white/65 xl:text-lg">
                    OXME is not bought. It is earned. The only way a token enters
                    circulation is through human participation — your time, your
                    attention, your intelligence.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    {["Fixed supply.", "Live now.", "Yours to earn."].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <a
                    href="/earn"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-bold text-white shadow-[0_0_28px_rgba(255,45,107,0.55)] transition-all duration-200 hover:shadow-[0_0_40px_rgba(255,45,107,0.75)]"
                  >
                    Start earning OXME →
                  </a>
                </div>
              </div>
            </div>

            {/* Hero text — bottom-left within the container */}
            <div className="absolute bottom-0 left-6 pb-14 space-y-3 w-[50%]">
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

      {/* 5-stat live data bar */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-6">
        <div className="glass-card overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-5">
            {[
              { val: "1.5M", label: "Machine Selves being built" },
              { val: "4 min", label: "A day. 30 seconds at a time." },
              { val: "16 hrs", label: "Of human capital. Stored on completion." },
              { val: "2,000", label: "Data points no system can guess." },
              { val: "OXME", label: "The token you mine — not buy.", accent: true },
            ].map(({ val, label, accent }, i) => (
              <div
                key={label}
                className={cn(
                  "flex flex-col items-center gap-1.5 px-3 py-5 sm:py-6 md:px-5",
                  {
                    "border-b border-white/[0.06] sm:border-b-0 sm:border-r": i < 4,
                    "bg-gradient-to-b from-primary/[0.07] to-brand-purple/[0.05]": accent,
                  }
                )}
              >
                <span
                  className={cn(
                    "whitespace-nowrap bg-gradient-to-r bg-clip-text font-mono font-black tracking-tight text-transparent",
                    {
                      "from-primary to-brand-purple text-3xl md:text-4xl": !accent,
                      "from-primary via-brand-purple to-primary text-2xl md:text-3xl": accent,
                    }
                  )}
                >
                  {val}
                </span>
                <Muted className="text-center text-[11px] leading-snug text-foreground/50">{label}</Muted>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three pillars — compact boxes */}
      <div className="relative z-10 mx-auto mt-6 w-full max-w-4xl px-6">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {[
            "Humans become verified Machine Selves",
            "Phones become live intelligence nodes",
            "Systems connect to living human reality",
          ].map((text, i) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3"
            >
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/25">
                0{i + 1}
              </span>
              <span className="text-sm font-medium text-white/60">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <AudienceCards />
    </section>
  );
}
