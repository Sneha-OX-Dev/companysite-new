import type { Metadata } from "next";
import HomeHero from "@/components/homesections/Hero";
import TractionSection from "@/components/homesections/Traction";
import MarqueeStrip from "@/components/MarqueeStrip";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "OX — You're alive in the network",
  description:
    "OX is the Human Intelligence Protocol. Systems stop guessing. Humans start earning.",
};

const HomePage = () => {
  return (
    <div className="space-y-0">
      <div id="hero">
        <HomeHero />
      </div>
      <Reveal id="traction">
        <TractionSection />
      </Reveal>
      <Reveal id="marquee" delay={150}>
        <MarqueeStrip />
      </Reveal>
    </div>
  );
};

export default HomePage;
