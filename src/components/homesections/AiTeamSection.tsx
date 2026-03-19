import SectionHeader from "@/components/Headings/SectionHeader";
import AxiomCard from "@/components/homesections/AxiomCard";
import { Badge } from "@/components/ui/badge";
import { Body, CardTitle, Eyebrow, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AGENTS = [
  {
    name: "Axiom",
    role: "Lead AI Agent",
    department: "Head of the AI Team",
    imageSrc: "/images/agents/Axiom.jpeg",
    languages: [
      "English",
      "Hindi",
      "Spanish",
      "Portuguese",
      "Arabic",
      "Mandarin",
      "+ more",
    ],
    languageLabel: "All languages",
    accent: "from-primary to-brand-purple",
    glow: "bg-primary",
    isPrimary: true,
    topLine: "via-primary/50",
    border: "hover:border-primary/25",
    tag: "text-primary/70",
    pill: "Primary AI voice",
    function:
      "The one who started it all. Axiom leads the team. Every agent answers to him. He built this system not to replace human intelligence — but to finally give it the recognition it deserves. Where there's confusion about OX, Axiom sends his agents. Where there's a question, they answer it. He speaks every language — because the truth about OX belongs to everyone.",
  },
  {
    name: "Olivia Verma",
    role: "The Keeper of Trust",
    department: "Network Integrity",
    imageSrc: "/images/agents/Olivia.jpeg",
    languages: ["English"],
    languageLabel: "English",
    accent: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    isPrimary: false,
    topLine: "via-brand-purple/50",
    border: "hover:border-brand-purple/25",
    tag: "text-brand-purple/80",
    function:
      "Olivia makes sure every contribution on OX is real, fair, and counted. She educates communities about how verification works — and why it matters that the system is transparent, not just told to be.",
  },
  {
    name: "Aarav Knox",
    role: "The Voice of a Billion Minds",
    department: "Organisational Insight",
    imageSrc: "/images/agents/Aarav.jpeg",
    languages: ["Hindi"],
    languageLabel: "Hindi",
    accent: "from-primary to-brand-purple",
    glow: "bg-primary",
    isPrimary: true,
    topLine: "via-primary/50",
    border: "hover:border-primary/25",
    tag: "text-primary/70",
    function:
      "India has over a billion minds — and most of them have never been paid what they're worth. Aarav knows this. He moves through cities and villages alike, carrying one message: your intelligence has always had value, OX just finally makes sure you're paid for it. He's not just an agent. He's the person Indians have been waiting for someone to send.",
  },
  {
    name: "Miguel Santos",
    role: "The Bridge of Understanding",
    department: "Protocol Stability",
    imageSrc: "/images/agents/Miguel.jpeg",
    languages: ["Portuguese"],
    languageLabel: "Portuguese",
    accent: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    isPrimary: false,
    topLine: "via-brand-purple/50",
    border: "hover:border-brand-purple/25",
    tag: "text-brand-purple/80",
    function:
      "In Brazil and across Latin America, people know how to hustle — they've had to. Miguel speaks their language, literally and culturally. He's the one who sits down with you and explains, without jargon, how the token economy works and why this time, the system is actually on your side. Confiança — trust — is everything to him.",
  },
  {
    name: "Sofia Reyes",
    role: "The Power of the People",
    department: "Decentralised Governance",
    imageSrc: "/images/agents/Sofia.jpeg",
    languages: ["Spanish"],
    languageLabel: "Spanish",
    accent: "from-primary to-brand-purple",
    glow: "bg-primary",
    isPrimary: true,
    topLine: "via-primary/50",
    border: "hover:border-primary/25",
    tag: "text-primary/70",
    function:
      "Sofia is for the Spanish-speaking world that's tired of decisions being made without them. From Madrid to Mexico City to Buenos Aires, she educates communities about what it means to have a real vote in a protocol that listens. She believes governance shouldn't be a word only lawyers understand — it should be something every person can feel.",
  },
  {
    name: "Zyan",
    role: "The Human Voice",
    department: "Network Sentinel",
    imageSrc: "/images/agents/Zayn.jpeg",
    languages: ["English"],
    languageLabel: "English",
    accent: "from-brand-purple to-primary",
    glow: "bg-brand-purple",
    isPrimary: false,
    topLine: "via-brand-purple/50",
    border: "hover:border-brand-purple/25",
    tag: "text-brand-purple/80",
    function:
      "Zyan isn't an agent. He's one of us.He grew up watching systems fail the people they claimed to serve — feeling invisible, unheard, powerless. Then he found OX. For the first time, his intelligence had value. His voice had weight. He had control. Zyan speaks for everyone who's ever felt like the world wasn't built for them. He's proof that it can be different — and he's here to tell you what that actually feels like from the inside.",
  },
];

function LanguageBadge({
  languages,
  isAxiom = false,
  isPrimary = true,
}: {
  languages: string[];
  isAxiom?: boolean;
  isPrimary?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {isAxiom ? (
        <>
          {languages.map((lang) => (
            <Badge
              key={lang}
              variant="outline"
              className="border-white/10 bg-white/[0.05] text-foreground/50 font-semibold tracking-wide"
            >
              {lang}
            </Badge>
          ))}
        </>
      ) : (
        <Badge
          variant="outline"
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.2em]",
            isPrimary
              ? "border-primary/30 bg-primary/[0.10] text-primary/90"
              : "border-brand-purple/30 bg-brand-purple/[0.10] text-brand-purple/90",
          )}
        >
          {languages[0]}
        </Badge>
      )}
    </div>
  );
}

export default function AiTeamSection() {
  const axiom = AGENTS[0];
  const row2 = AGENTS.slice(1, 3);
  const row3 = AGENTS.slice(3);

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-24 text-white">
      <div
        aria-hidden
        className="atm-green-blue pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader
        title="The AI team."
        eyebrowText="THE TEAM"
        subtitle="Six dedicated AI agents operating across coordination, verification, and intelligence — each serving a specific function within the OX ecosystem."
      />

      {/* ── AXIOM — hero card with video play button ── */}
      <AxiomCard axiom={axiom} />

      {/* ── ROW 2: Olivia + Aarav — image fills full card height ── */}
      <div className="grid gap-4 lg:grid-cols-2">
        {row2.map((a) => {
          return (
            <div
              key={a.name}
              className={cn(
                "glass-card group relative overflow-hidden transition-all duration-300",
                a.border,
              )}
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                  a.topLine,
                )}
              />
              <div
                className={cn(
                  "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]",
                  a.glow,
                )}
              />

              {/* Portrait on top, info below — consistent with Row 3 */}
              <div className="relative flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={a.imageSrc}
                    alt={a.name}
                    fill
                    className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <Eyebrow className={cn(a.tag)}>{a.role}</Eyebrow>
                    <CardTitle
                      className={cn(
                        "mt-1.5 bg-gradient-to-r bg-clip-text leading-none tracking-tight text-transparent",
                        a.accent,
                      )}
                    >
                      {a.name}
                    </CardTitle>
                    <Muted className="mt-1">{a.department}</Muted>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                  <Body className="text-foreground/70">{a.function}</Body>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                  <div>
                    <Eyebrow className="mb-2">Language</Eyebrow>
                    <LanguageBadge
                      languages={a.languages}
                      isPrimary={a.isPrimary}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── ROW 3: Miguel + Sofia + Zyan — portrait top, info below ── */}
      <div className="grid gap-4 lg:grid-cols-3">
        {row3.map((a) => {
          return (
            <div
              key={a.name}
              className={cn(
                "glass-card group relative overflow-hidden transition-all duration-300",
                a.border,
              )}
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                  a.topLine,
                )}
              />
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.13]",
                  a.glow,
                )}
              />

              <div className="relative flex flex-col">
                {/* Portrait — 3/4 ratio, no side padding so it edge-to-edge */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={a.imageSrc}
                    alt={a.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info below */}
                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <Eyebrow className={cn(a.tag)}>{a.role}</Eyebrow>
                    <CardTitle
                      className={cn(
                        "mt-1.5 bg-gradient-to-r bg-clip-text leading-none tracking-tight text-transparent",
                        a.accent,
                      )}
                    >
                      {a.name}
                    </CardTitle>
                    <Muted className="mt-0.5">{a.department}</Muted>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                  <Body className="text-foreground/70">{a.function}</Body>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                  <div>
                    <Eyebrow className="mb-2">Language</Eyebrow>
                    <LanguageBadge
                      languages={a.languages}
                      isPrimary={a.isPrimary}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
