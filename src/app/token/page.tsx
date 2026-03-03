import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Token & Tokenomics – OX",
  description:
    "Understand how the OX token fits into the ecosystem, including tokenomics, value proposition, and sovereignty.",
};

export default function TokenPage() {
  return (
    <>
      <InnerPageLayout title="OX Token &amp; Tokenomics">
        <div className="space-y-10">
          <p className="max-w-2xl text-base text-zinc-300">
            The OX token is how we keep incentives honest. It ties together mining, referrals and
            participation in a way that rewards contribution instead of extraction.
          </p>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <section className="space-y-4 rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Token Overview
              </h2>
              <p className="text-base text-zinc-200">
                The OX token underpins incentives across the OX network. It connects everyday
                actions in the app — mining, referrals, participation — with long term value and
                shared ownership in the ecosystem.
              </p>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Tokenomics
              </h3>
              <p className="text-base text-zinc-200">
                OX tokenomics are designed to reward early participation without locking out future
                citizens. Emissions, supply schedules and sinks are tuned to encourage healthy
                network growth, not pure speculation.
              </p>
            </section>
            <section className="space-y-4 rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Value Proposition
              </h2>
              <ul className="mt-2 space-y-2 text-base text-zinc-200">
                <li>Enterprises &amp; governments get transparent economics and aligned incentives.</li>
                <li>Users see fair rewards and clear visibility into how value is created.</li>
                <li>Developers get predictable primitives to build value-aware products.</li>
              </ul>
            </section>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Sovereignty
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                The token is not a license to own people&apos;s data. It is a coordination tool for
                sovereign agents. Data remains under the control of the user and their MindTwin. OX
                only moves value when the human in the loop agrees.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Whitepaper
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                For a detailed breakdown of mechanics and parameters, read the{" "}
                <a href="/whitepaper" className="text-[var(--accent)] underline-offset-2 hover:underline">
                  OX whitepaper
                </a>
                . It covers the economic model, technical architecture and long-term roadmap for the
                network.
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

