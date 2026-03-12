import {
  Bot,
  Building2,
  Code2,
  Coins,
  Landmark,
  Users,
} from "lucide-react";
import { landing } from "@/content/landing";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AUDIENCES = [
  { label: "Enterprises & Institutions", Icon: Building2 },
  { label: "Developers & Engineers", Icon: Code2 },
  { label: "Users & Influencers", Icon: Users },
  { label: "Governments & NGOs", Icon: Landmark },
  { label: "Crypto & Digital Rights", Icon: Coins },
  { label: "AI Builders", Icon: Bot },
] as const;

export default function ValueSection() {
  return (
    <section className="animate-fade-in-up px-6 py-20 md:py-28 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" style={{ animationDelay: "0.1s", opacity: 0 }}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {landing.value.headline}
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-zinc-400">
          <Badge variant="outline" className="border-indigo-900/60 bg-transparent text-zinc-400">
            Human-first
          </Badge>
          <Badge variant="outline" className="border-indigo-900/60 bg-transparent text-zinc-400">
            Your data
          </Badge>
          <Badge variant="outline" className="border-indigo-900/60 bg-transparent text-zinc-400">
            Consent
          </Badge>
          <Badge variant="outline" className="border-indigo-900/60 bg-transparent text-zinc-400">
            No extraction
          </Badge>
        </div>
        <p className="mt-3 text-lg font-semibold text-[var(--accent)]">
          {landing.value.whatYouDo}
        </p>
        <p className="mt-1 text-sm font-medium text-zinc-500">
          Commercially driven token. Real-time digital engagement.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Unlocking a $3 trillion opportunity. Monetise your unique self. One
          billion digital workers, 16 billion verified human hours. OX puts you
          in control—shaping, training, and owning your personal intelligence.
          Every action, every share, every{" "}
          <GlossaryTerm termKey="machineSelf">Machine Self</GlossaryTerm> is a vote for
          AI freedom. You&apos;re not the product. You&apos;re the power source.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {AUDIENCES.map(({ label, Icon }) => (
          <Card
            key={label}
            className="group rounded-2xl border-indigo-900/60 bg-indigo-950/20 px-4 py-4 text-left text-sm text-zinc-300 shadow-[0_0_24px_rgba(15,23,42,0.6)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-indigo-950/40 hover:shadow-[0_0_36px_rgba(255,13,116,0.6)]"
          >
            <CardHeader className="p-0 pb-1">
              <CardTitle className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]/90">
                <Icon className="text-sm text-[var(--accent)]" />
                For
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p>{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
