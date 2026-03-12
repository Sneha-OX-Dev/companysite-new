import Hero from "@/components/Hero";
import WhatIsOxSection from "@/components/WhatIsOxSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ValueSection from "@/components/ValueSection";
import StatsBar from "@/components/StatsBar";
import StatsTeaserSection from "@/components/StatsTeaserSection";
import MachineSelfSection from "@/components/MachineSelfSection";
import MomentsSection from "@/components/MomentsSection";
import WhyOxSection from "@/components/WhyOxSection";
import JoinSection from "@/components/JoinSection";
import ClarifySection from "@/components/ClarifySection";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsOxSection />
      <MarqueeStrip />
      <ValueSection />
      <StatsBar />
      <StatsTeaserSection />
      <MachineSelfSection />
      <MomentsSection />
      <WhyOxSection />
      <JoinSection />
      <ClarifySection />
      <GetTheAppSection />
      <Footer />
    </>
  );
}
