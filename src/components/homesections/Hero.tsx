import Link from "next/link";

const HERO_BG =
  "bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.35),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.25),transparent_60%)]";

export default function HomeHero() {
  return (
    <section
      className={`relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-10 pb-20 text-left ${HERO_BG}`}
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-start md:gap-12">
        {/* Left column: copy */}
        <div className="flex-1 space-y-7">
          {/* Category line */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-[12px]">
            Connecting Machines, AI, and Systems to Real Human Agency
          </p>

          {/* Headline + subhead */}
          <div className="space-y-3">
            <h1 className="font-heading text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              1 Billion Machine Selves
            </h1>
            <p className="text-[14px] font-medium text-white/70 sm:text-[15px]">
              1.5 million people have already started.
            </p>
          </div>

          {/* Core idea */}
          <div className="space-y-3 text-[9px] text-white/75">
            <p>
              Today, digital systems and AI operate largely without direct
              access to real human agency. OX changes this by enabling humans to
              participate directly inside digital and AI systems through their
              Machine Selves, providing judgement, work, data, decisions, and
              real-world action in real time.
            </p>
          </div>

          {/* What is OX — one line */}
          <p className="max-w-2xl text-[13px] text-white/70 sm:text-[14px]">
            <span className="font-semibold text-white">
              OX is the Human Agency Layer for digital systems and AI,
            </span>{" "}
            enabling machines, software, and networks to interact directly with
            real human intelligence, judgement, and action.
          </p>

          {/* Scale number */}
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Scale target
            </p>
            <p className="bg-linear-to-r from-white via-zinc-200 to-[var(--accent)] bg-clip-text text-2xl font-semibold tracking-[-0.04em] text-transparent sm:text-3xl md:text-[32px]">
              1 Billion Machine Selves
            </p>
          </div>
        </div>

        {/* Right column: three pillars */}
        <div className="mt-6 flex-1 md:mt-0">
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "Humans become verified Machine Selves",
              "Phones become live intelligence nodes",
              "Systems connect to living human reality",
            ].map((text) => (
              <div
                key={text}
                className="group flex items-start gap-3 rounded-xl border border-white/12 bg-black/40 px-4 py-4 text-[13px] text-white/80 shadow-[0_18px_60px_rgba(0,0,0,0.75)] transition hover:border-[var(--accent)]/70 hover:bg-black/60"
              >
                <span className="mt-0.5 text-[18px] text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:text-white">
                  →
                </span>
                <p className="leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAs row */}
      <div className="mt-10 flex w-full max-w-6xl flex-wrap items-center gap-3">
        <Link
          href="#machine-self"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_0_32px_rgba(255,45,107,0.55)] transition hover:translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,45,107,0.9)]"
        >
          Build Your Machine Self
        </Link>
        <Link
          href="#how-ox-works"
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          See How It Works
        </Link>
        <Link
          href="#get-the-app"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
        >
          Join the Network
        </Link>
      </div>

      {/* Video buttons row */}
      <div className="mt-4 flex w-full max-w-6xl flex-wrap items-center gap-3">
        <Link
          href="/videos/ox-story"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-5 py-2.5 text-[12px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/50 bg-white/10 text-[10px]">
            ▶
          </span>
          Watch the OX Story
        </Link>
        <Link
          href="/videos/axiom-intro"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-5 py-2.5 text-[12px] font-semibold text-white/75 transition hover:bg-white/5 hover:text-white"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-purple-500/60 bg-purple-500/20 text-[10px]">
            ▶
          </span>
          Meet Axiom
        </Link>
      </div>

      {/* Unifying line above any following audience cards */}
      <div className="mt-10 w-full max-w-6xl border-t border-white/10 pt-4 text-[12px] text-white/60 sm:text-[13px]">
        <p>
          <strong className="font-semibold text-white/80">
            One billion human agents.
          </strong>{" "}
          One fixed supply token. Mined entirely by human participation.
        </p>
      </div>
    </section>
  );
}
