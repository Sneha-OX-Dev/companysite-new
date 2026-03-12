import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import SectionCard from "@/components/SectionCard";
import {
  HumanInputMachineSelfFlowchart,
  ProductStackFlowchart,
} from "@/components/diagrams";
import WorkRequestExample from "@/components/WorkRequestExample";

export const metadata: Metadata = {
  title: "Product – Machine Self, Human Think & Marketplace",
  description:
    "Explore OX: Machine Self, Human Think, Work Requests, and the marketplace. Built from 16 hours of your verified work. Solutions, not ads.",
};

export default function ProductPage() {
  return (
    <>
      <InnerPageLayout title="OX Product Overview">
        <div className="space-y-10">
          <p className="max-w-2xl text-base text-zinc-300">
            OX is a full stack: Machine Self working in the background, Human Think in the loop, and
            a marketplace and agency layer connecting you to the outside world. Each part has a clear
            job.
          </p>
          <SectionCard>
            <ProductStackFlowchart />
          </SectionCard>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard title="Machine Self">
              <div className="mt-4">
                <HumanInputMachineSelfFlowchart />
              </div>
              <p className="mt-4 text-base text-zinc-200">
                <GlossaryTerm termKey="machineSelf">Machine Self</GlossaryTerm>{" "}
                is the always-on side of OX. It is built from the equivalent of
                16 hours of your verified work —{" "}
                <GlossaryTerm termKey="mining">mining</GlossaryTerm>, evaluating
                signals and preparing opportunities so that your human time
                stays focused and calm.
              </p>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>
                  <strong className="text-white">
                    Acts as <GlossaryTerm termKey="clawd">Clawd</GlossaryTerm>
                  </strong>{" "}
                  — Your contextual AI that learns how you think and responds
                  only with your permission.
                </p>
                <p>
                  <strong className="text-white">AI node</strong> — You become a node in the network.
                  Your signals help the system; the system rewards you.
                </p>
                <p>
                  <strong className="text-white">Compute cloud</strong> — Your Machine Self runs in
                  the background, built from your equivalent of 16 hours of verified work over time. You stay in control.
                </p>
              </div>
            </SectionCard>
            <SectionCard title="Human Think">
              <p className="mt-3 text-base text-zinc-200">
                Human Think is where judgment, consent and creativity live. When something matters,
                the app brings it to you — not the other way around. You choose what to approve,
                learn or share, and your decisions train your Machine Self over time.
              </p>
            </SectionCard>
            <SectionCard title="Work Requests">
              <p className="mt-3 text-base text-zinc-200">
                Machine Self completes{" "}
                <GlossaryTerm termKey="workRequest">work requests</GlossaryTerm>{" "}
                on your behalf—mining actions, data evaluations, signal
                processing.                 Brands reach you through permissioned{" "}
                <GlossaryTerm termKey="machineSelf">Machine Selves</GlossaryTerm>
                : you get solutions, not just ads. A machine acting on your
                behalf. It earns for you.
              </p>
              <WorkRequestExample />
            </SectionCard>
            <SectionCard title="Social & Network">
              <p className="mt-3 text-base text-zinc-200">
                Monetise your network. Invite connections—earn ~1,000{" "}
                <GlossaryTerm termKey="oxit">OXIT</GlossaryTerm> per activation.
                Activate 2 in 24 hours for a boost. Everybody is an Influencer.
              </p>
            </SectionCard>
            <SectionCard title="Marketplace">
              <p className="mt-3 text-base text-zinc-200">
                The OX marketplace is where value moves. Brands, agencies and institutions can reach
                real people without buying raw data. Instead, they interact with Machine Selves who
                can choose when to participate and what to reveal.
              </p>
            </SectionCard>
            <SectionCard title="Future Work">
              <p className="mt-3 text-base text-zinc-200">
                We are expanding OX into more verticals and regions, adding new ways to earn, new
                formats for Machine Self interactions and more granular controls for what your Machine Self
                is allowed to do on your behalf.
              </p>
            </SectionCard>
          </div>
          <SectionCard title="Governments & NGOs">
            <p className="mt-3 text-base text-zinc-200">
              Governments & NGOs use OX for solutions for good—verified engagement, consented data,
              transparent incentives. Not just commerce: real impact with sovereignty by design.
            </p>
          </SectionCard>
          <SectionCard
            title="Agency & AI Services"
            className="bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60"
          >
            <p className="mt-3 text-base text-zinc-200">
              For enterprises, OX can operate as an agency-style partner: deploying AI-powered
              campaigns, analytics and customer journeys that respect sovereignty by design. The same
              rails that power the consumer app can be used to build custom experiences.
            </p>
          </SectionCard>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}

