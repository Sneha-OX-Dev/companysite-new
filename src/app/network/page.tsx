import type { Metadata } from "next";
import Link from "next/link";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";
import {
  TokenChart,
  UsersChart,
  WorkHoursChart,
  WorkRequestsChart,
} from "@/components/charts";
import { ScaleScarcityFlowchart } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Network & Stats – OX",
  description:
    "See the OX network in numbers: users, work done, token value, and work requests. 1.5M citizens. A billion in sight.",
};

export default function NetworkPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-heading text-3xl font-bold text-white text-balance md:text-4xl">
          Network &amp; Stats
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-400">
          The OX network in numbers. 1B digital users × 16 hours = 16B verified
          human hours. Your Machine Self does up to 16 hours of work per day.
          This is the work the network does.
        </p>

        <div className="mt-12 space-y-16">
          <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-[var(--accent)]">
              Token Value Over Time
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              1,000 OXIT ≈ $0.50 today. At 1B users (est.): ≈ $19. The more
              citizens join, the more value the network holds.
            </p>
            <div className="mt-6">
              <TokenChart />
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-[var(--accent)]">
              Users &amp; Network Growth
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              1.5M citizens. A billion in sight. The network is designed for
              scale—fair economics for early adopters and late joiners alike.
            </p>
            <div className="mt-6">
              <UsersChart />
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-[var(--accent)]">
              16 Hours of Work
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Your Machine Self works up to 16 hours per day in the
              background—mining, evaluating signals, preparing opportunities.
              Here&apos;s the work the network does.
            </p>
            <div className="mt-6">
              <WorkHoursChart />
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-[var(--accent)]">
              Work Requests
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              A machine acting on your behalf. It earns for you. Like ads, but
              you get solutions—and rewards. Every completed action is a work
              request fulfilled.
            </p>
            <div className="mt-6">
              <WorkRequestsChart />
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-[var(--accent)]">
              Scale &amp; Scarcity Engine
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              1B users → 1B wallets → 16B stored human hours.
            </p>
            <div className="mt-6">
              <ScaleScarcityFlowchart />
            </div>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-indigo-900/60 bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Join the network</h2>
          <p className="mt-3 text-zinc-400">
            You make the difference. Get the app to earn OXME and become part of
            the network.
          </p>
          <Link
            href="/#get-the-app"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-600"
          >
            Get The App
          </Link>
        </section>
      </main>
      <GetTheAppSection />
      <Footer />
    </>
  );
}
