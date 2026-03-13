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

function BulletItem({
  text,
  color = "pink",
}: {
  text: string;
  color?: "pink" | "white" | "green";
}) {
  const dotStyles = {
    pink: "bg-[#FF2D6B] shadow-[0_0_8px_rgba(255,45,107,0.85)]",
    white: "bg-white/50",
    green: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]",
  };
  return (
    <li className="flex items-start gap-3.5 text-[14px] leading-relaxed text-white/75 sm:text-[15px]">
      <span className="relative mt-[7px] flex h-4 w-4 shrink-0 items-center justify-center">
        {color !== "white" && (
          <span
            className={`absolute inset-0 rounded-full opacity-15 ${color === "pink" ? "bg-[#FF2D6B]" : "bg-emerald-400"}`}
          />
        )}
        <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[color]}`} />
      </span>
      {text}
    </li>
  );
}

function Card({
  children,
  accent = "pink",
  className = "",
}: {
  children: React.ReactNode;
  accent?: "pink" | "purple" | "green" | "none";
  className?: string;
}) {
  const accentColors = {
    pink: "via-[#FF2D6B]",
    purple: "via-[#7B1FA2]",
    green: "via-emerald-400",
    none: "via-white/10",
  };
  const glowColors = {
    pink: "bg-[#FF2D6B]",
    purple: "bg-[#7B1FA2]",
    green: "bg-emerald-400",
    none: "bg-white",
  };
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-sm ${className}`}
    >
      {accent !== "none" && (
        <>
          <div
            className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accentColors[accent]} to-transparent opacity-70`}
          />
          <div
            className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${glowColors[accent]} opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]`}
          />
        </>
      )}
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/40 sm:text-[12px]">
      {children}
    </p>
  );
}

export default function ProblemAndFixSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-24 text-white sm:py-32">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_45%_at_30%_20%,rgba(248,113,113,0.13),transparent_65%),radial-gradient(ellipse_60%_40%_at_70%_80%,rgba(59,130,246,0.11),transparent_65%)]"
      />

      {/* ── THE PROBLEM ── */}
      <div className="flex flex-col gap-10">
        <SectionHeader
          pillText="The Problem"
          title="Systems operate on stale assumptions, while humans act in real time."
          subtitle="Modern digital systems operate primarily on inferred history and probabilistic prediction."
          align="left"
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
          {/* Left — root causes + results */}
          <Card accent="pink">
            <Label>Three root causes</Label>
            <ul className="mt-5 space-y-4">
              {PROBLEM_ROOT_CAUSES.map((item) => (
                <BulletItem key={item} text={item} color="pink" />
              ))}
            </ul>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Label>Four results</Label>
            <ul className="mt-5 space-y-3">
              {PROBLEM_RESULTS.map((item) => (
                <BulletItem key={item} text={item} color="white" />
              ))}
            </ul>
          </Card>

          {/* Right — core statement */}
          <Card accent="purple" className="lg:sticky lg:top-8">
            <Label>Core statement</Label>

            <p className="mt-5 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px]">
              Systems guess.
              <br />
              <span className="bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
                Humans know.
              </span>
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="text-[13.5px] leading-relaxed text-white/60 sm:text-[14px]">
              There is no infrastructure layer today that enables live,
              consented, structured human intelligence to participate directly
              in digital coordination.
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/60 sm:text-[14px]">
              Humans are observed, not integrated.
            </p>
          </Card>
        </div>
      </div>

      {/* ── THE FIX ── */}
      <div className="flex flex-col gap-10">
        <SectionHeader
          pillText="The Fix"
          title="From probability to certainty. From extraction to participation."
          subtitle="OX removes the architectural limitation that has always separated systems from real human intelligence."
          align="left"
        />

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          {/* What OX does */}
          <Card accent="green">
            <Label>For digital systems and AI</Label>

            <h3 className="mt-4 text-[20px] font-bold tracking-[-0.02em] text-white sm:text-[22px]">
              What OX does
            </h3>

            <p className="mt-4 text-[13.5px] leading-relaxed text-white/65 sm:text-[14px]">
              Through Machine Selves, any digital system, any AI, any machine
              can now reach a verified, consented, live human being and receive
              a real decision — a confirmed physical action, verified expertise,
              or a cryptographically binding consent signal.
            </p>

            <blockquote className="my-6 border-l-2 border-emerald-400/50 pl-4 text-[14px] italic leading-relaxed text-white/75">
              "Not better data. A different category of input entirely — the
              difference between a weather forecast and looking out the window."
            </blockquote>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Label>What OX enables</Label>
            <ul className="mt-5 space-y-3.5">
              {FIX_SYSTEMS.map((item) => (
                <BulletItem key={item} text={item} color="green" />
              ))}
            </ul>
          </Card>

          {/* For humans */}
          <Card accent="pink">
            <Label>For humans</Label>

            <h3 className="mt-4 text-[20px] font-bold tracking-[-0.02em] text-white sm:text-[22px]">
              The bigger fix
            </h3>

            <p className="mt-4 text-[13.5px] leading-relaxed text-white/65 sm:text-[14px]">
              OX doesn't just improve how systems access human intelligence. It
              restructures the relationship between humans and digital systems
              entirely.
            </p>

            <div className="my-6 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/30">
                From
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/55 line-through decoration-white/20">
                A data point in someone else's model. A segment in a
                demographic. A profile in a centralised database.
              </p>
              <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#FF2D6B]/70">
                To
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/80">
                A sovereign economic unit. A market of one. A contributor of
                one.
              </p>
            </div>

            <p className="mt-5 text-[13.5px] leading-relaxed text-white/65 sm:text-[14px]">
              At one billion Machine Selves, OX breaks the planet into one
              billion individual economies — each sovereign, each connected,
              each earning.
            </p>

            <div className="mt-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D6B] shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
              Systems coordinate. Humans earn.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
