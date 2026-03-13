import Footer from "@/components/Footer";
import AiTeamSection from "@/components/homesections/AiTeamSection";
import CoreStatementsSection from "@/components/homesections/CoreStatements";
import Hero from "@/components/homesections/Hero";
import HowOxWorksSection from "@/components/homesections/HowOxWorks";
import MachineSelfSection from "@/components/homesections/MachineSelf";
import MarketplaceSegmentsSection from "@/components/homesections/MarketplaceSegmentsSection";
import NetworkScaleSection from "@/components/homesections/NetworkScaleSection";
import ProblemAndFixSection from "@/components/homesections/ProblemAndFix";
import TheOnlyCryptoSection from "@/components/homesections/TheOnlyCrypto";
import TokenEconomySection from "@/components/homesections/TokenEconomy";
import TokenomicsSection from "@/components/homesections/TokenomicsSection";
import TractionSection from "@/components/homesections/Traction";
import VisionSection from "@/components/homesections/VisionSection";
import WhatIsOxSection from "@/components/homesections/WhatIsOx";
import WhoOxIsForSection from "@/components/homesections/WhoOxIsFor";
import WhyNowSection from "@/components/homesections/WhyNow";
import MarqueeStrip from "@/components/MarqueeStrip";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TheOnlyCryptoSection />
      <TractionSection />
      <MarqueeStrip />
      <ProblemAndFixSection />
      <WhyNowSection />
      <WhatIsOxSection />
      <MachineSelfSection />
      <HowOxWorksSection />
      <TokenEconomySection />
      <CoreStatementsSection />
      <WhoOxIsForSection />
      <VisionSection />
      <NetworkScaleSection />
      <MarketplaceSegmentsSection />
      <AiTeamSection />
      <TokenomicsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
