import type { Metadata } from "next";
import CoreStatementsSection from "@/components/homesections/CoreStatements";
import HowOxWorksSection from "@/components/homesections/HowOxWorks";
import WhatIsOxSection from "@/components/homesections/WhatIsOx";
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
      <Reveal id="how-ox-works" delay={150}>
        <HowOxWorksSection />
      </Reveal>
      <Reveal id="core-statements" delay={300}>
        <CoreStatementsSection />
      </Reveal>
    </div>
  );
};

export default HowItWorksPage;
