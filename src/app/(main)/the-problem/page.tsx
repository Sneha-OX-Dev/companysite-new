import type { Metadata } from "next";
import ProblemAndFixSection from "@/components/homesections/ProblemAndFix";
import WhyNowSection from "@/components/homesections/WhyNow";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Problem — OX",
  description:
    "AI systems are guessing. Human intelligence is wasted. OX is the fix — structured, verifiable, compensated.",
};

const TheProblemPage = () => {
  return (
    <div className="space-y-0">
      <Reveal id="why-now">
        <WhyNowSection />
      </Reveal>
      <Reveal id="problem-fix" delay={150}>
        <ProblemAndFixSection />
      </Reveal>
    </div>
  );
};

export default TheProblemPage;
