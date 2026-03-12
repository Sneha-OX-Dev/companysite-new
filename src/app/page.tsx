import ClarifySection from "@/components/ClarifySection";
import Footer from "@/components/Footer";
import GetTheAppSection from "@/components/GetTheAppSection";
import Hero from "@/components/Hero";
import JoinSection from "@/components/JoinSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import MomentsSection from "@/components/MomentsSection";
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
import { SystemsWithoutWithOX } from "@/components/sections/SystemsWithoutWithOX";
import { TwoStageEarningSection } from "@/components/sections/TwoStageEarningSection";
import StatsBar from "@/components/StatsBar";
import StatsTeaserSection from "@/components/StatsTeaserSection";
import ValueSection from "@/components/ValueSection";
import WhatIsOxSection from "@/components/WhatIsOxSection";
import WhyOxSection from "@/components/WhyOxSection";

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
      <WhatIsOxSection />
      <ValueSection />
      <StatsBar />
      <StatsTeaserSection />
      <MomentsSection />
      <WhyOxSection />
      <JoinSection />
      <ClarifySection />
      <GetTheAppSection />
      <Footer />
    </>
  );
}
