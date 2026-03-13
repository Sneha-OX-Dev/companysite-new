import Hero from "@/components/homesections/Hero";
import MachineSelfSection from "@/components/homesections/MachineSelf";
import ProblemAndFixSection from "@/components/homesections/ProblemAndFix";
import TheOnlyCryptoSection from "@/components/homesections/TheOnlyCrypto";
import TractionSection from "@/components/homesections/Traction";
import WhatIsOxSection from "@/components/homesections/WhatIsOx";
import WhyNowSection from "@/components/homesections/WhyNow";
import MarqueeStrip from "@/components/MarqueeStrip";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TheOnlyCryptoSection />
      <MarqueeStrip />
      <TractionSection />
      <ProblemAndFixSection />
      <WhyNowSection />
      <WhatIsOxSection />
      <MachineSelfSection />
    </div>
  );
};

export default HomePage;
