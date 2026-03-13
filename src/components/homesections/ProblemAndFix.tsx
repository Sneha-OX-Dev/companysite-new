import SectionHeader from "@/components/Headings/SectionHeader";

const PROBLEM_ROOT_CAUSES = [
  "Your data is held by corporations who profit from it. You earn nothing.",
  "Systems make decisions about you based on who you were — not who you are.",
  "There is no infrastructure that lets you participate directly. Only be observed.",
];

const PROBLEM_RESULTS = [
  "You are targeted, not understood",
  "Your attention is sold without your consent",
  "Your intelligence is ignored — then approximated",
  "You participate in systems that extract from you and give nothing back",
];

const FIX_SYSTEMS = [
  "Any digital or AI system can coordinate directly with live, verified humans",
  "Any machine can trigger and confirm real physical human action",
  "Every human becomes simultaneously a market and a contributor",
  "Consent is explicit, sovereign, and cryptographically enforced",
  "Every verified contribution is settled on-chain and rewarded immediately",
  "Centralised data extraction is replaced by direct human participation",
  "One billion sovereign economies — each individual, each connected",
];

export default function ProblemAndFixSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-20 text-white sm:gap-16 sm:py-24">
      {/* Background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle_at_top,_rgba(248,113,113,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.16),transparent_60%)]"
      />

      {/* The Problem */}
      <div className="space-y-8">
        <SectionHeader
          pillText="Section 4 — The Problem"
          title="Systems operate on stale assumptions, while humans act in real time."
          subtitle="Modern digital systems operate primarily on inferred history and probabilistic prediction."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-5 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
            <p>
              Modern digital systems operate primarily on inferred historical behaviour,
              centralised data aggregation, and probabilistic prediction. They guess.
              They approximate. They project the past onto the present.
            </p>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Three root causes
              </p>
              <ul className="mt-3 space-y-2">
                {PROBLEM_ROOT_CAUSES.map((item) => (
                  <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-[#FF2D6B] shadow-[0_0_8px_rgba(255,45,107,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Four results
              </p>
              <ul className="mt-3 space-y-2">
                {PROBLEM_RESULTS.map((item) => (
                  <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Core statement
            </p>
            <p className="text-[15px] font-semibold text-white sm:text-[16px]">
              Systems guess. Humans know.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
              There is no infrastructure layer today that enables live, consented,
              structured human intelligence to participate directly in digital
              coordination. Humans are observed, not integrated.
            </p>
          </div>
        </div>
      </div>

      {/* The Fix */}
      <div className="space-y-8">
        <SectionHeader
          pillText="Section 5 — The Fix"
          title="From probability to certainty. From extraction to participation."
          subtitle="OX removes the architectural limitation that has always separated systems from real human intelligence."
          align="left"
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]">
          {/* For digital systems & AI */}
          <div className="space-y-5 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              For digital systems and AI
            </p>
            <h3 className="mt-2 font-heading text-[18px] font-semibold tracking-[-0.02em] text-white sm:text-[20px]">
              What OX does
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              Through Machine Selves, any digital system, any AI, any machine can now
              reach a verified, consented, live human being and receive a real decision,
              a confirmed physical action, verified expertise, or a cryptographically
              binding consent signal.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              This is not better data. This is a different category of input entirely.
              The difference between a weather forecast and looking out the window.
            </p>
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                What OX enables
              </p>
              <ul className="mt-3 space-y-2">
                {FIX_SYSTEMS.map((item) => (
                  <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For humans */}
          <div className="space-y-5 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              For humans
            </p>
            <h3 className="mt-2 font-heading text-[18px] font-semibold tracking-[-0.02em] text-white sm:text-[20px]">
              The bigger fix
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              OX does not just improve how systems access human intelligence. It
              restructures the relationship between humans and digital systems entirely.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              Every human with a Machine Self becomes a sovereign economic unit — not a
              data point in someone else&apos;s model, not a segment in a demographic,
              not a profile in a centralised database. A market of one. And a
              contributor of one.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              At one billion Machine Selves, OX breaks the planet into one billion
              individual economies — each sovereign, each connected, each earning.
              Systems don&apos;t have to guess what humans think, want, or will do.
              They can coordinate directly. And every human who participates is not just
              contributing — they are being paid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

