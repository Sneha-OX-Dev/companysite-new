import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Use Cases – How OX Is Used",
  description:
    "See concrete commercial use cases for OX across industries, and how 16 hours of background work and continuous learning translate into value.",
};

export default function UseCasesPage() {
  return (
    <>
      <InnerPageLayout title="OX Use Cases">
        <div className="space-y-10">
          <p className="max-w-2xl text-base text-zinc-300">
            OX is already running in the wild through the Oxygean app. Here&apos;s how the same rails
            show up as concrete use cases for different partners.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Commercial Use Cases
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                OX can power transparent, privacy-preserving engagement for enterprises, institutions
                and agencies. Think verified attention, consented data and real reward flows instead
                of dark ads and opaque tracking.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                16 Hours of Work
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                Every day, your digital self can do up to sixteen hours of background work — scanning
                offers, learning your preferences and preparing actions. You stay in control, but you
                don&apos;t have to do the heavy lifting yourself.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Continuously Learning
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                The more you interact with the app and your MindTwin, the better OX can filter noise
                from signal. This continuous learning loop makes recommendations sharper and rewards
                fairer over time.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Plug &amp; Play
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                For product teams, OX aims to be plug-and-play: connect via APIs and SDKs, define the
                journeys you want to create, and let the network handle verification, incentives and
                settlement.
              </p>
            </section>
          </div>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}

