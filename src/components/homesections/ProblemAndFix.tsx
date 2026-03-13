import SectionHeader from "@/components/Headings/SectionHeader";
import { Eyebrow, Body, DisplayText, CardTitle, Label } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

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

const COMPARISON_ROWS = [
  ["Systems infer human intent", "Systems access real human intent"],
  ["AI guesses at context", "AI coordinates with verified humans"],
  ["Machines operate without human confirmation", "Machines trigger and verify physical human action"],
  ["Centralised data farms approximate reality", "Distributed Machine Selves deliver reality"],
  ["Consent is assumed or bypassed", "Consent is explicit, cryptographic, sovereign"],
  ["Outcomes are probabilistic", "Outcomes are verified and settled on-chain"],
];

function BulletItem({
  text,
  color = "pink",
}: {
  text: string;
  color?: "pink" | "white" | "green";
}) {
  const dotStyles = {
    pink: "bg-primary shadow-[0_0_8px_rgba(255,45,107,0.85)]",
    white: "bg-white/50",
    green: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]",
  };
  return (
    <li className="flex items-start gap-3.5 text-body-lg text-foreground/80">
      <span className="relative mt-[7px] flex h-4 w-4 shrink-0 items-center justify-center">
        {color !== "white" && (
          <span
            className={cn("absolute inset-0 rounded-full opacity-15", { "bg-primary": color === "pink", "bg-emerald-400": color !== "pink" })}
          />
        )}
        <span className={cn("h-1.5 w-1.5 rounded-full", dotStyles[color])} />
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
  const glassAccentClass = {
    pink: "glass-card-accent-pink",
    purple: "glass-card-accent-purple",
    green: "glass-card-accent-green",
    none: "",
  };
  const topBarColors = {
    pink: "via-primary",
    purple: "via-brand-purple",
    green: "via-emerald-400",
    none: "via-white/10",
  };
  const glowColors = {
    pink: "bg-primary",
    purple: "bg-brand-purple",
    green: "bg-emerald-400",
    none: "bg-white",
  };
  const hoverBorderClass = {
    pink: "hover:border-primary/20",
    purple: "hover:border-brand-purple/20",
    green: "hover:border-emerald-400/20",
    none: "",
  };
  return (
    <div
      className={cn("glass-card group relative overflow-hidden p-7 transition-all duration-300", glassAccentClass[accent], hoverBorderClass[accent], className)}
    >
      {accent !== "none" && (
        <>
          <div
            className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-70", topBarColors[accent])}
          />
          <div
            className={cn("pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.10]", glowColors[accent])}
          />
        </>
      )}
      {children}
    </div>
  );
}


export default function ProblemAndFixSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_70%_45%_at_30%_20%,rgba(248,113,113,0.10),transparent_65%),radial-gradient(ellipse_60%_40%_at_70%_80%,rgba(59,130,246,0.08),transparent_65%)]"
      />

      {/* THE PROBLEM */}
      <div className="flex flex-col gap-10">
        <SectionHeader
          pillText="The Problem"
          title="Systems operate on stale assumptions, while humans act in real time."
          subtitle="Modern digital systems operate primarily on inferred history and probabilistic prediction."
          align="left"
        />

        {/* Full-width core statement */}
        <div className="flex flex-col gap-2">
          <DisplayText className="text-headline">
            Systems guess.{" "}
            <span className="bg-gradient-to-r from-primary to-brand-purple bg-clip-text text-transparent">
              Humans know.
            </span>
          </DisplayText>
        </div>

        {/* Equal 50/50 cards */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          <Card accent="pink">
            <Eyebrow>Three root causes</Eyebrow>
            <ul className="mt-5 space-y-4">
              {PROBLEM_ROOT_CAUSES.map((item) => (
                <BulletItem key={item} text={item} color="pink" />
              ))}
            </ul>
          </Card>

          <Card accent="purple">
            <Eyebrow>Four results</Eyebrow>
            <ul className="mt-5 space-y-3">
              {PROBLEM_RESULTS.map((item) => (
                <BulletItem key={item} text={item} color="white" />
              ))}
            </ul>
          </Card>
        </div>

        {/* Body paragraph below the cards */}
        <Body className="max-w-2xl text-foreground/60">
          There is no infrastructure layer today that enables live, consented,
          structured human intelligence to participate directly in digital
          coordination. Humans are observed, not integrated.
        </Body>
      </div>

      {/* THE FIX */}
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
            <Eyebrow>For digital systems and AI</Eyebrow>

            <CardTitle className="mt-4">What OX does</CardTitle>

            <Body className="mt-4">
              Through Machine Selves, any digital system, any AI, any machine
              can now reach a verified, consented, live human being and receive
              a real decision — a confirmed physical action, verified expertise,
              or a cryptographically binding consent signal.
            </Body>

            <blockquote className="my-6 border-l-2 border-emerald-400/50 pl-4 text-sm italic leading-relaxed text-white/80">
              &ldquo;Not better data. A different category of input entirely — the
              difference between a weather forecast and looking out the window.&rdquo;
            </blockquote>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Eyebrow>What OX enables</Eyebrow>
            <ul className="mt-5 space-y-3.5">
              {FIX_SYSTEMS.map((item) => (
                <BulletItem key={item} text={item} color="green" />
              ))}
            </ul>
          </Card>

          {/* For humans */}
          <Card accent="pink">
            <Eyebrow>For humans</Eyebrow>

            <CardTitle className="mt-4">The bigger fix</CardTitle>

            <Body className="mt-4">
              OX doesn&apos;t just improve how systems access human intelligence. It
              restructures the relationship between humans and digital systems
              entirely.
            </Body>

            <div className="my-6 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5">
              <Label className="text-white/50">From</Label>
              <Body className="mt-2 text-white/50 line-through decoration-white/20">
                A data point in someone else&apos;s model. A segment in a
                demographic. A profile in a centralised database.
              </Body>
              <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <Label className="text-primary/70">To</Label>
              <Body className="mt-2 text-white/80">
                A sovereign economic unit. A market of one. A contributor of
                one.
              </Body>
            </div>

            <Body className="mt-5">
              At one billion Machine Selves, OX breaks the planet into one
              billion individual economies — each sovereign, each connected,
              each earning.
            </Body>

            <Body className="mt-4">
              For the first time, digital systems don&apos;t have to guess what humans think, want, or will do. They can coordinate directly. And every human who participates is not just contributing — they are being paid.
            </Body>

            <div className="glass-chip mt-6 gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
              Systems coordinate. Humans earn.
            </div>
          </Card>
        </div>

        {/* Full-width comparison table */}
        <div className="glass-card overflow-hidden">
          <div className="border-b border-white/[0.06] px-7 py-5">
            <Eyebrow>Systems Without OX vs Systems With OX</Eyebrow>
          </div>
          <div className="overflow-x-auto px-7 py-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-white/10 pb-3 pr-8 text-left text-xs font-black uppercase tracking-widest text-foreground/60">
                    Without OX
                  </th>
                  <th className="border-b border-white/10 pb-3 text-left text-xs font-black uppercase tracking-widest text-emerald-400/80">
                    With OX
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(([without, withOx]) => (
                  <tr key={without} className="border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.02]">
                    <td className="py-3.5 pr-8 text-foreground/40 line-through decoration-white/20">{without}</td>
                    <td className="py-3.5 text-foreground/80">{withOx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
