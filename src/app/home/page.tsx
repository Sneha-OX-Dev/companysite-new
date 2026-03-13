import Hero from "@/components/homesections/Hero";
import TheOnlyCryptoSection from "@/components/homesections/TheOnlyCrypto";
import TractionSection from "@/components/homesections/Traction";
import MarqueeStrip from "@/components/MarqueeStrip";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TheOnlyCryptoSection />
      <MarqueeStrip />
      <TractionSection />
    </div>
  );
};

export default HomePage;
