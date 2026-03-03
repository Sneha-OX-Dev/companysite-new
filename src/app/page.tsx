import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import ValueSection from "@/components/ValueSection";
import StatsBar from "@/components/StatsBar";
import MindTwinSection from "@/components/MindTwinSection";
import MomentsSection from "@/components/MomentsSection";
import JoinSection from "@/components/JoinSection";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ValueSection />
      <StatsBar />
      <MindTwinSection />
      <MomentsSection />
      <JoinSection />
      <GetTheAppSection />
      <Footer />
    </>
  );
}
