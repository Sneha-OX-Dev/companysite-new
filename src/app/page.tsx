import Footer from "@/components/Footer";
import GetTheAppSection from "@/components/GetTheAppSection";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
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
      <Hero />
      <TwoStageEarningSection />
      <MarqueeStrip />
      <OxitToOxmeConversionSection />
      <SystemsWithoutWithOX />
      <PhoneSovereignNodeSection />
      <MachineSelfSection />
      <MatchingLoopSection />
      <DigitalHumanBridgeSection />
      <OldVsOxSection />
      <CircularEconomySection />
      <HumanMiningSection />
      <NetworkScaleMilestonesSection />
      <EcosystemMapSection />
      <ProtocolStackSection />
      <GetTheAppSection />
      <Footer />
    </>
  );
}
