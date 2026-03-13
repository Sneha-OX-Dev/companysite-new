import SectionHeader from "@/components/Headings/SectionHeader";
import { Body, Eyebrow, DisplayText, Muted } from "@/components/ui/typography";

export default function TokenomicsSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 text-white">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_at_top_left,_rgba(236,72,153,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.22),transparent_55%),radial-gradient(circle_at_center,_rgba(139,92,246,0.08),transparent_70%)]"
      />

      <SectionHeader
        pillText="Tokenomics"
        eyebrowText="THE TOKEN"
        title="Tokenomics — growth and exchange strategy"
        subtitle="The OX token economy is designed for long-term price stability and sustainable growth."
      />

      <div className="flex flex-col gap-8">
        {/* How the model works */}
        <div className="group glass-card glass-card-accent-purple relative overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-brand-purple/[0.07] to-black/40 transition-all duration-300 hover:border-brand-purple/25">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-purple opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />
          <Eyebrow className="mb-4 text-brand-purple/80">
            How the Model Works
          </Eyebrow>
          <Body className="text-foreground/80">
            With a fixed total supply set at genesis and no mechanism for new
            minting, every OXME in circulation has been earned — not created. As
            the network grows, demand for the token increases while supply
            remains permanently fixed.
          </Body>
          <Body className="mt-4 text-foreground/80">
            The supply is fixed at genesis. The only way a token enters circulation is through verified human participation. That has never been true of any other network.
          </Body>
          <Body className="mt-4 text-foreground/80">
            Organisations must acquire OXME to access the network. Humans earn
            OXME by participating. The fixed supply means that as more
            organisations enter the network and more humans hold and convert
            tokens, scarcity increases. Scarcity drives value. Value rewards the
            humans who built the network from day one.
          </Body>
        </div>

        {/* Token specifics */}
        <div className="glass-card relative overflow-hidden p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Eyebrow className="mb-5 text-primary/80">Token Specifics</Eyebrow>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Fixed total supply", value: "1,371,000,000 OXME — set at genesis. No new minting. Ever." },
              { label: "Conversion rate", value: "1,000 OXIT = 1 OXME — fixed, immutable, forever." },
              { label: "Token standard", value: "ERC-20 on Base network." },
              { label: "Allocation", value: "75% User Programs | 15% Investors | 10% Protocol Treasury." },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20">
                <Eyebrow className="text-white/70">{label}</Eyebrow>
                <Body className="mt-2 text-white/80">{value}</Body>
              </div>
            ))}
          </div>
        </div>

        {/* Phase cards row */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Phase 1 */}
          <div className="group glass-card glass-card-accent-pink relative overflow-hidden p-8 bg-gradient-to-br from-primary/[0.08] via-brand-purple/[0.05] to-black/50 transition-all duration-300 hover:border-primary/25">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.16]" />
            <div className="mb-6">
              <span className="glass-chip px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary/80">
                Phase 1 — Stabilisation
              </span>
            </div>
            <div className="mb-6">
              <Eyebrow className="mb-1 text-white/70">Target Market Cap</Eyebrow>
              <DisplayText className="text-display font-black leading-none tracking-tight text-white">
                $10M
              </DisplayText>
            </div>
            <div className="mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] p-5">
              <Eyebrow className="mb-3 text-white/70">Outcome</Eyebrow>
              <Body>
                OX moves to Tier 2 exchanges. This milestone validates network
                activity, token demand, and initial liquidity — significantly
                increasing accessibility and trading volume.
              </Body>
            </div>
            <div>
              <Eyebrow className="mb-3 text-primary/80">What Drives Phase 1</Eyebrow>
              <ul className="space-y-2.5">
                {[
                  "Growth in verified Machine Selves across the network",
                  "Increased organisational demand for human intelligence through the protocol",
                  "Rising OXIT-to-OXME conversion as users complete the 16-hour build",
                  "Community participation and early network effects",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                    <Muted className="text-white/70">{item}</Muted>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="group glass-card glass-card-accent-purple relative overflow-hidden p-8 bg-gradient-to-br from-brand-purple/[0.08] to-black/50 transition-all duration-300 hover:border-brand-purple/25">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-purple opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.15]" />
            <div className="mb-6">
              <span className="glass-chip px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-purple/80">
                Phase 2 — Expansion
              </span>
            </div>
            <div className="mb-6">
              <Eyebrow className="mb-1 text-white/70">Target Market Cap</Eyebrow>
              <DisplayText className="text-display font-black leading-none tracking-tight text-white">
                $100M
              </DisplayText>
            </div>
            <div className="mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] p-5">
              <Eyebrow className="mb-3 text-white/70">Outcome</Eyebrow>
              <Body>
                OX moves to Tier 1 exchanges. This milestone represents
                full-scale network adoption, unlocking institutional
                participation, global liquidity, and sustained long-term growth.
              </Body>
            </div>
            <div>
              <Eyebrow className="mb-3 text-brand-purple/80">What Drives Phase 2</Eyebrow>
              <ul className="space-y-2.5">
                {[
                  "One billion human agent target trajectory underway",
                  "Large-scale organisational and enterprise network adoption",
                  "Protocol-level integrations and ecosystem partnerships",
                  "Global exchange presence and institutional-grade infrastructure",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple/70" />
                    <Muted className="text-white/70">{item}</Muted>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Fixed Supply Matters */}
        <div className="group glass-card glass-card-accent-pink relative overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-primary/[0.06] via-brand-purple/[0.04] to-black/50 transition-all duration-300 hover:border-primary/20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.11]" />
          <Eyebrow className="mb-5 text-primary/80">Why Fixed Supply Matters</Eyebrow>
          <Body className="mb-5 text-foreground/80">
            Most token projects inflate supply to fund operations. OX does not.
            The supply was fixed at genesis. Every token in circulation was
            earned by a human participant. As the network scales and demand
            grows, the fixed supply ensures that early participants — the humans
            who built the network — are the primary beneficiaries of its growth.
          </Body>
          <Body className="font-medium text-foreground/90">
            The supply is fixed. The work keeps coming. The network grows every
            time another human agent joins.
          </Body>
        </div>
      </div>
    </section>
  );
}
