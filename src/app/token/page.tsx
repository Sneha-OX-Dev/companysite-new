import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";
import {
  AllocationChart,
  EmissionsChart,
  TokenChart,
} from "@/components/charts";
import {
  EarnConvertWithdrawFlowchart,
  ScaleScarcityFlowchart,
  TokenCaptureLoopFlowchart,
} from "@/components/diagrams";
import SectionCard from "@/components/SectionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Token & Tokenomics – OX",
  description:
    "Understand OXIT and OXME: in-app rewards, on-chain token, 1:1000 conversion. Today 1k OXIT ≈ $0.50. At 1B users (est.): ≈ $19.",
};

export default function TokenPage() {
  return (
    <>
      <InnerPageLayout title="OX Token &amp; Tokenomics">
        <div className="space-y-10">
          <p className="max-w-2xl text-base text-zinc-300">
            The OX token is how we keep incentives honest. It ties together
            mining, referrals and participation in a way that rewards
            contribution instead of extraction.
          </p>

          <Card className="border-2 border-[var(--accent)]/40 bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60">
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Quick Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <EarnConvertWithdrawFlowchart />
            </CardContent>
          </Card>

          <SectionCard title="Token Value Over Time">
            <p className="mt-2 text-sm text-zinc-400">
              Today: 1,000 OXIT ≈ $0.50. At 1B users (est.): ≈ $19. The more
              citizens join, the more value the network holds.
            </p>
            <div className="mt-6">
              <TokenChart />
            </div>
          </SectionCard>

          <SectionCard title="OXIT Value by User Milestone">
            <p className="mt-2 text-sm text-zinc-400">
              10,000 OXIT = 1 OXME. Illustrative projections.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-900/60">
                    <th className="py-3 text-left font-semibold text-zinc-300">Users</th>
                    <th className="py-3 text-right font-semibold text-zinc-300">1k OXIT ≈</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  {[
                    { users: "0.1M", value: "$0.50" },
                    { users: "1M", value: "$0.80" },
                    { users: "10M", value: "$1.50" },
                    { users: "100M", value: "$3.80" },
                    { users: "250M", value: "$5.70" },
                    { users: "500M", value: "$11.10" },
                    { users: "1B", value: "$19" },
                    { users: "2B", value: "$38.80" },
                  ].map((row) => (
                    <tr key={row.users} className="border-b border-indigo-900/40">
                      <td className="py-2.5">{row.users}</td>
                      <td className="py-2.5 text-right font-medium text-zinc-200">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Illustrative. Not financial advice.
            </p>
          </SectionCard>

          <SectionCard title="OXIT & OXME">
            <p className="mt-3 text-base text-zinc-200">
              <strong className="text-white">OXIT</strong> is the in-app reward
              unit—earned by mining, referrals, and connections.{" "}
              <strong className="text-white">OXME</strong> is the on-chain crypto
              (Arbitrum One, fixed supply ~1.37B). Convert at 10,000 OXIT → 1
              OXME (1:1000 ratio). You earn OXIT every day; when ready, convert
              to OXME in your wallet.
            </p>
          </SectionCard>

          <Card className="border-indigo-900/60 bg-indigo-950/30">
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                How Value Flows
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
            <ol className="space-y-3 text-base text-zinc-200">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">1</span>
                You mine (1-min actions) → earn OXIT
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">2</span>
                You connect (referrals) → earn OXIT
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">3</span>
                OXIT accumulates → convert at 10,000 to OXME
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">4</span>
                OXME → withdraw (Arbitrum) or sell for fiat
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">5</span>
                More users → more value (1B scenario)
              </li>
            </ol>
            </CardContent>
          </Card>

          <SectionCard title="Dynamic Growth System">
            <ol className="mt-4 space-y-3 text-base text-zinc-200">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">1</span>
                Users mine their Machine Self
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">2</span>
                Digital paid commercial 1-minute actions
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">3</span>
                New users onboarding
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">4</span>
                Drives upward pressure on price and utility of OXME
              </li>
            </ol>
          </SectionCard>

          <SectionCard title="Token Capture Loop">
            <p className="mt-2 text-sm text-zinc-400">
              Work Becomes Infrastructure. Infrastructure Generates Demand. Token Captures Value.
            </p>
            <div className="mt-6">
              <TokenCaptureLoopFlowchart />
            </div>
          </SectionCard>

          <SectionCard title="Scale & Scarcity Engine">
            <p className="mt-2 text-sm text-zinc-400">
              1B users → 1B wallets → 16B stored human hours.
            </p>
            <div className="mt-6">
              <ScaleScarcityFlowchart />
            </div>
          </SectionCard>

          <SectionCard title="Token Emissions & Infinite Halving">
            <p className="mt-2 text-sm text-zinc-400">
              Fixed supply with infinite halving. Emissions decline over time, ensuring scarcity.
            </p>
            <div className="mt-6">
              <EmissionsChart />
            </div>
          </SectionCard>

          <SectionCard title="OXME Token Allocation">
            <p className="mt-2 text-sm text-zinc-400">
              Fixed supply: 1.37B OXME
            </p>
            <div className="mt-6">
              <AllocationChart />
            </div>
            <ul className="mt-4 space-y-2 text-base text-zinc-200">
              <li>15% Investor overview</li>
              <li>Founder / Investor: 210M</li>
              <li>10% Commission: 140M</li>
              <li>Mining revenues (remainder)</li>
            </ul>
          </SectionCard>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <SectionCard title="Token Overview">
              <div className="space-y-4">
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
              </div>
            </SectionCard>
            <SectionCard title="Value Proposition">
              <ul className="mt-4 space-y-2 text-base text-zinc-200">
                <li>Enterprises &amp; governments get transparent economics and aligned incentives.</li>
                <li>Users see fair rewards and clear visibility into how value is created.</li>
                <li>Developers get predictable primitives to build value-aware products.</li>
              </ul>
            </SectionCard>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard title="Sovereignty">
              <p className="mt-3 text-base text-zinc-200">
                The token is not a license to own people&apos;s data. It is a coordination tool for
                sovereign agents. Data remains under the control of the user and their Machine Self. OX
                only moves value when the human in the loop agrees.
              </p>
            </SectionCard>
            <SectionCard
              title="Whitepaper"
              className="bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60"
            >
              <p className="mt-3 text-base text-zinc-200">
                For a detailed breakdown of mechanics and parameters, read the{" "}
                <a href="/whitepaper" className="text-[var(--accent)] underline-offset-2 hover:underline">
                  OX whitepaper
                </a>
                . It covers the economic model, technical architecture and long-term roadmap for the
                network.
              </p>
            </SectionCard>
          </div>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}

