import GetTheAppSection from "@/components/GetTheAppSection";
import HomeHero from "@/components/homesections/Hero";
import HomeHowItWorks from "@/components/homesections/HomeHowItWorks";
import WhoOxIsForTeaser from "@/components/homesections/WhoOxIsForTeaser";
import MarqueeStrip from "@/components/MarqueeStrip";
import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OX — You're alive in the network",
  description:
    "OX is the Human Intelligence Protocol. Systems stop guessing. Humans start earning.",
};

const HomePage = () => {
  return (
    <div className="space-y-0">
      {/* Screen 1–3: Hero + Numbers + Pillars */}
      <div id="hero">
        <HomeHero />
      </div>

      {/* Screen 5: Who It Serves */}
      <Reveal id="who-ox-is-for" delay={150}>
        <WhoOxIsForTeaser />
      </Reveal>

      {/* Screen 6: How It Works */}
      <Reveal id="how-it-works" delay={200}>
        <HomeHowItWorks />
      </Reveal>

      <Reveal id="marquee" delay={250}>
        <MarqueeStrip />
      </Reveal>
      <Reveal id="get-the-app">
        <GetTheAppSection />
      </Reveal>
    </div>
  );
};

export default HomePage;
