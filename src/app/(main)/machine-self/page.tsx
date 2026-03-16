import type { Metadata } from "next";
import MachineSelfSection from "@/components/homesections/MachineSelf";
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
    </div>
  );
};

export default MachineSelfPage;
