import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product – Machine Self, Human Think & Marketplace",
  description:
    "Explore how OX combines Machine Self, Human Think, and the OX marketplace to turn your digital presence into value.",
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
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Machine Self
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                Machine Self is the always-on side of OX. It represents the 16 hours of work your
                digital self can do in the background — mining, evaluating signals and preparing
                opportunities so that your human time stays focused and calm.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Human Think
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                Human Think is where judgment, consent and creativity live. When something matters,
                the app brings it to you — not the other way around. You choose what to approve,
                learn or share, and your decisions train your MindTwin over time.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Marketplace
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                The OX marketplace is where value moves. Brands, agencies and institutions can reach
                real people without buying raw data. Instead, they interact with sovereign twins who
                can choose when to participate and what to reveal.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Future Work
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                We are expanding OX into more verticals and regions, adding new ways to earn, new
                formats for MindTwin interactions and more granular controls for what your digital
                self is allowed to do on your behalf.
              </p>
            </section>
          </div>
          <section className="rounded-2xl border border-indigo-900/60 bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              Agency &amp; AI Services
            </h2>
            <p className="mt-3 text-base text-zinc-200">
              For enterprises, OX can operate as an agency-style partner: deploying AI-powered
              campaigns, analytics and customer journeys that respect sovereignty by design. The same
              rails that power the consumer app can be used to build custom experiences.
            </p>
          </section>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}

