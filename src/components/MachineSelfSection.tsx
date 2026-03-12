import { landing } from "@/content/landing";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import { HumanInputMachineSelfFlowchart } from "@/components/diagrams";

export default function MachineSelfSection() {
  return (
    <section className="animate-fade-in-up border-y border-indigo-900/50 bg-indigo-950/30 px-6 py-20 md:py-28" style={{ animationDelay: "0.2s", opacity: 0 }}>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          {landing.machineSelf.eyebrow}
        </p>
        <h2 className="font-heading mt-2 text-3xl font-bold text-white text-balance sm:text-4xl">
          {landing.machineSelf.headline}
        </h2>
        <p className="mt-1 text-2xl font-semibold text-zinc-300">
          {landing.machineSelf.subheadline}
        </p>
        <div className="mt-8">
          <HumanInputMachineSelfFlowchart />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Your <GlossaryTerm termKey="machineSelf">Machine Self</GlossaryTerm>{" "}
          learns and acts on your behalf. It lives on your device and acts only
          with your permission. It learns how you think. Understands how you
          feel. Evolves with every signal. It answers to you.
        </p>
        <p className="mt-4 text-sm font-medium text-[var(--accent)]">
          Self-Expanding. Acts Digitally. Executes Physically. Verifies Reality.
        </p>
      </div>
    </section>
  );
}
