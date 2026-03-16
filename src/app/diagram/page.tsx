import Footer from "@/components/Footer";
import GetTheAppSection from "@/components/GetTheAppSection";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import AudienceCards from "@/components/sections/AudienceCardsSection";
import { CircularEconomySection } from "@/components/sections/CircularEconomySection";
import DigitalHumanBridgeSection from "@/components/sections/DigitalHumanBridgeSection";
import { EcosystemMapSection } from "@/components/sections/EcosystemMapSection";
import { HumanMiningSection } from "@/components/sections/HumanMiningSection";
import MachineSelfSection from "@/components/sections/MachineSelfSection";
import { MatchingLoopSection } from "@/components/sections/MatchingLoopSection";
import { NetworkScaleMilestonesSection } from "@/components/sections/NetworkScaleMilestonesSection";
import { OldVsOxSection } from "@/components/sections/OldVsNewModelSection";
import { OxitToOxmeConversionSection } from "@/components/sections/OxitToOxmeConversionSection";
import { PhoneSovereignNodeSection } from "@/components/sections/PhoneSoverignNodeSection";
import { ProtocolStackSection } from "@/components/sections/ProtocolStackSection";
import { SystemsWithoutWithOX } from "@/components/sections/SystemsWithoutWithOX";
import { TwoStageEarningSection } from "@/components/sections/TwoStageEarningSection";

export default function Home() {
  return (
    <>
      <main>
        {/* Section 1 — Hero (incl. audience cards) */}
        <section id="hero">
          <Hero />

          <AudienceCards />
        </section>

        {/* Section 2 — The Only Crypto You Mine With Your Time (Two-Stage Earning) */}
        <section id="two-stage-earning">
          <TwoStageEarningSection />
        </section>

        {/* Ambient marquee strip (no direct navbar anchor) */}
        <MarqueeStrip />

        {/* Section 5 — The Fix (Systems Without vs With OX) */}
        <section id="the-fix">
          <SystemsWithoutWithOX />
        </section>

        {/* Section 7 — Your Machine Self (Phone as node + 2,000 / 16h / 4m) */}
        <section id="machine-self">
          <PhoneSovereignNodeSection />
          <MachineSelfSection />
        </section>

        {/* Section 8 — How OX Works (Matching Loop + Digital vs Human Bridge) */}
        <section id="how-ox-works">
          <MatchingLoopSection />
          <DigitalHumanBridgeSection />
        </section>

        {/* Section 6 & 12 — What Is OX (Old vs OX model + Protocol Stack) */}
        <section id="what-is-ox">
          <OldVsOxSection />
          <ProtocolStackSection />
        </section>

        {/* Section 9 — Token Economy (OXIT→OXME, Circular Economy, Human vs Machine Mining) */}
        <section id="token-economy">
          <OxitToOxmeConversionSection />
          <CircularEconomySection />
          <HumanMiningSection />
        </section>

        {/* Section 13 — Network Effects & Scale */}
        <section id="network-scale">
          <NetworkScaleMilestonesSection />
        </section>

        {/* Section 14 — Ecosystem Map */}
        <section id="ecosystem-map">
          <EcosystemMapSection />
        </section>

        {/* Get the app anchor used by CTA buttons */}
        <section id="get-the-app">
          <GetTheAppSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
