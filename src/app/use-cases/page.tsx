import type { Metadata } from "next";
import {
  Brain,
  Building2,
  Clock,
  Code2,
  Landmark,
  Megaphone,
  Plug,
} from "lucide-react";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";
import SectionCard from "@/components/SectionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Use Cases – How OX Is Used",
  description:
    "See concrete commercial use cases for OX across industries, and how 16 hours of verified human input and continuous learning translate into value.",
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
            <SectionCard>
              <div className="flex items-center gap-2">
                <Building2 className="text-lg text-[var(--accent)]" />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                  Commercial Use Cases
                </h2>
              </div>
              <p className="mt-3 text-base text-zinc-200">
                OX can power transparent, privacy-preserving engagement for enterprises, institutions
                and agencies. Think verified attention, consented data and real reward flows instead
                of dark ads and opaque tracking.
              </p>
            </SectionCard>
            <SectionCard>
              <div className="flex items-center gap-2">
                <Clock className="text-lg text-[var(--accent)]" />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                  16 Hours of Work
                </h2>
              </div>
              <p className="mt-3 text-base text-zinc-200">
                Over time, you contribute the equivalent of 16 hours of verified work to build your
                Machine Self—answering questions, mining, and learning. You stay in control, and your
                Machine Self acts on your behalf once built.
              </p>
            </SectionCard>
            <SectionCard>
              <div className="flex items-center gap-2">
                <Brain className="text-lg text-[var(--accent)]" />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                  Continuously Learning
                </h2>
              </div>
              <p className="mt-3 text-base text-zinc-200">
                The more you interact with the app and your Machine Self, the better OX can filter noise
                from signal. This continuous learning loop makes recommendations sharper and rewards
                fairer over time.
              </p>
            </SectionCard>
            <SectionCard>
              <div className="flex items-center gap-2">
                <Plug className="text-lg text-[var(--accent)]" />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                  Plug &amp; Play
                </h2>
              </div>
              <p className="mt-3 text-base text-zinc-200">
                For product teams, OX aims to be plug-and-play: connect via APIs and SDKs, define the
                journeys you want to create, and let the network handle verification, incentives and
                settlement.
              </p>
            </SectionCard>
          </div>
          <SectionCard title="Partner Examples" className="bg-indigo-950/20">
            <div className="mt-4 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center">
              <div className="rounded-xl border border-indigo-900/60 bg-indigo-950/50 px-6 py-4 text-center">
                <span className="text-lg font-bold text-[var(--accent)]">OX</span>
                <p className="mt-1 text-xs text-zinc-400">Connective layer</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Landmark className="text-lg text-[var(--accent)]" />
                  <span className="text-xs text-zinc-400">Gov/NGO</span>
                </div>
                <span className="text-zinc-500" aria-hidden>↔</span>
                <div className="flex flex-col items-center gap-1">
                  <Megaphone className="text-lg text-[var(--accent)]" />
                  <span className="text-xs text-zinc-400">Brands</span>
                </div>
                <span className="text-zinc-500" aria-hidden>↔</span>
                <div className="flex flex-col items-center gap-1">
                  <Code2 className="text-lg text-[var(--accent)]" />
                  <span className="text-xs text-zinc-400">Developers</span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Card className="rounded-xl border-indigo-900/50 bg-indigo-950/30 p-4">
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                    <Landmark className="text-base text-[var(--accent)]" />
                    Governments &amp; NGOs
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-zinc-400">
                    Verified engagement for public campaigns. Consent-first data.
                    Transparent incentives. Solutions for good.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-indigo-900/50 bg-indigo-950/30 p-4">
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                    <Megaphone className="text-base text-[var(--accent)]" />
                    Brands &amp; Agencies
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-zinc-400">
                    Reach real people through Machine Selves. No raw data purchase.
                    Verified attention, consented engagement.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-indigo-900/50 bg-indigo-950/30 p-4">
                <CardHeader className="p-0 pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                    <Code2 className="text-base text-[var(--accent)]" />
                    Developers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-zinc-400">
                    Plug into OX via APIs. Define journeys, verification, incentives.
                    Build value-aware products.
                  </p>
                </CardContent>
              </Card>
            </div>
          </SectionCard>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}

