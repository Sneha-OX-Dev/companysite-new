import type { Metadata } from "next";
import MarketplaceSegmentsSection from "@/components/homesections/MarketplaceSegmentsSection";
import NetworkScaleSection from "@/components/homesections/NetworkScaleSection";
import VisionSection from "@/components/homesections/VisionSection";
import WhoOxIsForSection from "@/components/homesections/WhoOxIsFor";
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
      <Reveal id="marketplace" delay={150}>
        <MarketplaceSegmentsSection />
      </Reveal>
      <Reveal id="network-scale" delay={300}>
        <NetworkScaleSection />
      </Reveal>
      <Reveal id="vision" delay={450}>
        <VisionSection />
      </Reveal>
    </div>
  );
};

export default MarketplacePage;
