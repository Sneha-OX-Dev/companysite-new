import TheOnlyCryptoSection from "@/components/homesections/TheOnlyCrypto";
import TokenEconomySection from "@/components/homesections/TokenEconomy";
import TokenomicsSection from "@/components/homesections/TokenomicsSection";
import { CircularEconomySection } from "@/components/sections/CircularEconomySection";
import { HumanMiningSection } from "@/components/sections/HumanMiningSection";
import { OxitToOxmeConversionSection } from "@/components/sections/OxitToOxmeConversionSection";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earn — OX",
  description:
    "The only crypto you mine with your time. Discover how OX tokens reward structured human intelligence.",
};

const EarnPage = () => {
  return (
    <div className="space-y-0">
      <Reveal id="the-only-crypto">
        <TheOnlyCryptoSection />
      </Reveal>
      {/* <Reveal id="two-stage-earning" delay={150}>
        <TwoStageEarningSection />
      </Reveal> */}
      <Reveal id="token-economy" delay={300}>
        <TokenEconomySection />
      </Reveal>
      <Reveal id="circular-economy" delay={450}>
        <CircularEconomySection />
      </Reveal>
      <Reveal id="oxit-to-oxme" delay={600}>
        <OxitToOxmeConversionSection />
      </Reveal>
      <Reveal id="tokenomics" delay={750}>
        <TokenomicsSection />
      </Reveal>
      <Reveal id="human-mining" delay={900}>
        <HumanMiningSection />
      </Reveal>
    </div>
  );
};

export default EarnPage;
