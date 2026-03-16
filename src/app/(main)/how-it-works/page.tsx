import type { Metadata } from "next";
import CoreStatementsSection from "@/components/homesections/CoreStatements";
import HowOxWorksSection from "@/components/homesections/HowOxWorks";
import WhatIsOxSection from "@/components/homesections/WhatIsOx";
import { OldVsOxSection } from "@/components/sections/OldVsNewModelSection";
import { ProtocolStackSection } from "@/components/sections/ProtocolStackSection";
import { MatchingLoopSection } from "@/components/sections/MatchingLoopSection";
import DigitalHumanBridgeSection from "@/components/sections/DigitalHumanBridgeSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "How OX Works — OX",
  description:
    "OX is a coordination layer between structured human intelligence and the systems that require it. Learn how the protocol works.",
};

const HowItWorksPage = () => {
  return (
    <div className="space-y-0">
      <Reveal id="what-is-ox">
        <WhatIsOxSection />
      </Reveal>
      <Reveal id="old-vs-ox" delay={150}>
        <OldVsOxSection />
      </Reveal>
      <Reveal id="protocol-stack" delay={300}>
        <ProtocolStackSection />
      </Reveal>
      <Reveal id="how-ox-works" delay={450}>
        <HowOxWorksSection />
      </Reveal>
      <Reveal id="matching-loop" delay={600}>
        <MatchingLoopSection />
      </Reveal>
      <Reveal id="digital-human-bridge" delay={750}>
        <DigitalHumanBridgeSection />
      </Reveal>
      <Reveal id="core-statements" delay={900}>
        <CoreStatementsSection />
      </Reveal>
    </div>
  );
};

export default HowItWorksPage;
