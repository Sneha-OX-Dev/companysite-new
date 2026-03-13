import Hero from "@/components/homesections/Hero";
import HowOxWorksSection from "@/components/homesections/HowOxWorks";
import MachineSelfSection from "@/components/homesections/MachineSelf";
import ProblemAndFixSection from "@/components/homesections/ProblemAndFix";
import TheOnlyCryptoSection from "@/components/homesections/TheOnlyCrypto";
import TokenEconomySection from "@/components/homesections/TokenEconomy";
import TractionSection from "@/components/homesections/Traction";
import WhatIsOxSection from "@/components/homesections/WhatIsOx";
import WhyNowSection from "@/components/homesections/WhyNow";
import MarqueeStrip from "@/components/MarqueeStrip";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TheOnlyCryptoSection />
      <ProblemAndFixSection />
      <MarqueeStrip />
      <TractionSection />
      <WhyNowSection />
      <WhatIsOxSection />
      <MachineSelfSection />
      <HowOxWorksSection />
      <TokenEconomySection />
    </div>
  );
};

export default HomePage;
