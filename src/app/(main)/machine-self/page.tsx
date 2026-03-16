import type { Metadata } from "next";
import MachineSelfSection from "@/components/homesections/MachineSelf";
import { PhoneSovereignNodeSection } from "@/components/sections/PhoneSoverignNodeSection";
import MachineSelfDiagramSection from "@/components/sections/MachineSelfSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Machine Self — OX",
  description:
    "Every person has a Machine Self — a permissioned digital agent owned by you that represents your identity, data, capabilities, and intelligence.",
};

const MachineSelfPage = () => {
  return (
    <div className="space-y-0">
      <Reveal id="machine-self">
        <MachineSelfSection />
      </Reveal>
      <Reveal id="phone-sovereign-node" delay={150}>
        <PhoneSovereignNodeSection />
      </Reveal>
      <Reveal id="machine-self-stats" delay={300}>
        <MachineSelfDiagramSection />
      </Reveal>
    </div>
  );
};

export default MachineSelfPage;
