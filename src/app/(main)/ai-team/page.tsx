import type { Metadata } from "next";
import AiTeamSection from "@/components/homesections/AiTeamSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Team — OX",
  description:
    "Meet the AI team behind OX — the autonomous agents coordinating the Human Intelligence Protocol.",
};

const AiTeamPage = () => {
  return (
    <div className="space-y-0">
      <Reveal id="ai-team">
        <AiTeamSection />
      </Reveal>
    </div>
  );
};

export default AiTeamPage;
