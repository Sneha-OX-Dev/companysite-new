import type { Metadata } from "next";
import TheOnlyCryptoSection from "@/components/homesections/TheOnlyCrypto";
import TokenEconomySection from "@/components/homesections/TokenEconomy";
import TokenomicsSection from "@/components/homesections/TokenomicsSection";
import { Reveal } from "@/components/ui/Reveal";

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
      <Reveal id="token-economy" delay={150}>
        <TokenEconomySection />
      </Reveal>
      <Reveal id="tokenomics" delay={300}>
        <TokenomicsSection />
      </Reveal>
    </div>
  );
};

export default EarnPage;
