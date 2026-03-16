import type { Metadata } from "next";
import MarketplaceSegmentsSection from "@/components/homesections/MarketplaceSegmentsSection";
import NetworkScaleSection from "@/components/homesections/NetworkScaleSection";
import VisionSection from "@/components/homesections/VisionSection";
import WhoOxIsForSection from "@/components/homesections/WhoOxIsFor";
import { EcosystemMapSection } from "@/components/sections/EcosystemMapSection";
import { NetworkScaleMilestonesSection } from "@/components/sections/NetworkScaleMilestonesSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "For Business — OX",
  description:
    "OX powers every business that runs on human judgment. Explore the marketplace segments and network scale.",
};

const MarketplacePage = () => {
  return (
    <div className="space-y-0">
      <Reveal id="who-ox-is-for">
        <WhoOxIsForSection />
      </Reveal>
      <Reveal id="ecosystem-map" delay={150}>
        <EcosystemMapSection />
      </Reveal>
      <Reveal id="marketplace" delay={300}>
        <MarketplaceSegmentsSection />
      </Reveal>
      <Reveal id="network-scale" delay={450}>
        <NetworkScaleSection />
      </Reveal>
      <Reveal id="network-scale-milestones" delay={600}>
        <NetworkScaleMilestonesSection />
      </Reveal>
      <Reveal id="vision" delay={750}>
        <VisionSection />
      </Reveal>
    </div>
  );
};

export default MarketplacePage;
