import type { Metadata } from "next";
import Link from "next/link";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import SectionCard from "@/components/SectionCard";
import WorkRequestExample from "@/components/WorkRequestExample";
import {
  DrillFlowchart,
  HumanInputMachineSelfFlowchart,
  ScaleScarcityFlowchart,
} from "@/components/diagrams";
import { TokenChart, WorkHoursChart } from "@/components/charts";

export const metadata: Metadata = {
  title: "Learn OX – Machine Self, Work Requests & Network",
  description:
    "Everything you need to understand OX: Machine Self, work requests, token value, 16 hours of work, and the network. Student-focused guide.",
};

const DRILL_STEPS = [
  {
    step: 1,
    title: "Connect",
    body: "Invite connections. Each connection who joins and completes at least one action unlocks rewards for you. Activate 2 in 24 hours for a boost.",
    cta: "Get the app to connect",
  },
  {
    step: 2,
    title: "Mine",
    body: "Complete 1-minute actions. Each answer adds foundations to your Machine Self and earns OXIT. Build toward 2,000 foundations—then your Machine Self expands automatically.",
    cta: "Start mining",
  },
  {
    step: 3,
    title: "Wallet",
    body: "Track your OXIT in the app. At 10,000 OXIT, convert to 1 OXME (on-chain). Withdraw to your crypto wallet on Arbitrum One, or sell for fiat.",
    cta: "Get the app",
  },
  {
    step: 4,
    title: "Earn",
    body: "Keep mining, keep connecting. Your Machine Self acts on your behalf—built from 16 hours of your verified work over time. The more you participate, the more you earn.",
    cta: "Join the network",
  },
];

export default function LearnPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-heading text-3xl font-bold text-white text-balance md:text-4xl">
          Learn OX
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-400">
          Everything you need to understand OX. Machine Self, work requests,
          token value, and the network—in one place.
        </p>

        <div className="mt-12 space-y-16">
          {/* What is OX? - Definition first */}
          <SectionCard title="What is OX?" className="border-2 border-indigo-900/60">
            <p className="mt-3 text-base text-zinc-200">
              OX is a network where your{" "}
              <GlossaryTerm termKey="machineSelf">Machine Self</GlossaryTerm>{" "}
              learns from short answers, earns <GlossaryTerm termKey="oxit">OXIT</GlossaryTerm> for
              you and acts on your behalf—built from 16 hours of your verified work over time. Answer
              questions in the app, your AI learns, and you earn rewards. No crypto
              needed to start—convert to <GlossaryTerm termKey="oxme">OXME</GlossaryTerm> when
              you&apos;re ready.
            </p>
          </SectionCard>

          {/* Primary: Learn OX in 5 Minutes */}
          <SectionCard
            title="Learn OX in 5 Minutes"
            className="border-2 border-[var(--accent)]/40 bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60"
          >
            <p className="mt-2 text-sm text-zinc-400">
              Four steps to get started.
            </p>
            <div className="mt-4">
              <DrillFlowchart />
            </div>
            <div className="mt-8 space-y-6">
              {DRILL_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-sm font-bold text-[var(--accent)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.body}</p>
                    <Link
                      href="/#get-the-app"
                      className="mt-2 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      {item.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <h2 className="text-xl font-semibold text-zinc-300">Dive deeper</h2>

          {/* Machine Self */}
          <SectionCard title="Machine Self">
            <div className="mt-4">
              <HumanInputMachineSelfFlowchart />
            </div>
            <p className="mt-4 text-base text-zinc-200">
              Your <GlossaryTerm termKey="machineSelf">Machine Self</GlossaryTerm>{" "}
              is built from every answer and action you give. Each Machine Self is
              built from 16 hours of verified activity and 2,000 answers—verified
              human data points. Complete 2,000{" "}
              <GlossaryTerm termKey="foundation">foundations</GlossaryTerm>, and
              it expands into thousands of signals automatically. No extra work.
            </p>
            <p className="mt-3 text-sm font-medium text-[var(--accent)]">
              Self-Expanding. Acts Digitally. Executes Physically. Verifies Reality.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>
                <strong className="text-white">Searchable, Permissioned, Commercially Usable</strong> — Your
                Machine Self is an asset you control. Only with your permission can
                it participate in the marketplace.
              </li>
              <li>
                <strong className="text-white">Expands via device connections</strong> — Observes
                behaviour, learns continuously. Integrates IoT and external signals.
              </li>
              <li>
                <strong className="text-white">Triggers physical human work</strong> — Human confirms
                completion. Verifies reality. Your Machine Self acts on your behalf
                while you stay in control.
              </li>
            </ul>
          </SectionCard>

          {/* Work Requests */}
          <SectionCard title="Work Requests">
            <p className="mt-3 text-base text-zinc-200">
              <GlossaryTerm termKey="workRequest">Work requests</GlossaryTerm>{" "}
              are the tasks your Machine Self completes—
              <GlossaryTerm termKey="mining">mining</GlossaryTerm> actions, data
              evaluations, signal processing. Brands and institutions reach
              you through permissioned{" "}
              <GlossaryTerm termKey="machineSelf">Machine Selves</GlossaryTerm>{" "}
              : you get solutions, not just ads. Governments & NGOs use OX for
              verified engagement and consented data—solutions for good, not just
              commerce.
            </p>
            <p className="mt-3 text-base text-zinc-200">
              A machine acting on your behalf. It earns for you. Like ads, but
              you get solutions—and rewards.
            </p>
            <WorkRequestExample />
          </SectionCard>

          {/* Social & Connections */}
          <SectionCard title="Social & Connections">
            <p className="mt-3 text-base text-zinc-200">
              Everybody is an Influencer. Invite connections—earn ~1,000{" "}
              <GlossaryTerm termKey="oxit">OXIT</GlossaryTerm> per activation.
              Activate 2 in 24 hours for a boost. Builder levels: New builder → Builder → Architect →
              Pioneer → Champion → Legend → Master. OX Buzzers, Buzz Box—get ready to link up and
              spread the OX buzz.
            </p>
            <Link
              href="/#get-the-app"
              className="mt-4 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
            >
              Get the app to connect →
            </Link>
          </SectionCard>

          {/* Token Value */}
          <SectionCard title="Token Value Over Time">
            <p className="mt-2 text-sm text-zinc-400">
              1,000 <GlossaryTerm termKey="oxit">OXIT</GlossaryTerm> ≈ $0.50
              today. At 1B users (est.): ≈ $19. The network scales; value scales
              with it.
            </p>
            <div className="mt-6">
              <TokenChart />
            </div>
          </SectionCard>

          {/* 16 Hours of Work */}
          <SectionCard title="16 Hours of Work">
            <p className="mt-2 text-sm text-zinc-400">
              You contribute the equivalent of 16 hours of verified work to build
              your Machine Self. Here&apos;s how the network scales.
            </p>
            <div className="mt-6">
              <WorkHoursChart />
            </div>
          </SectionCard>

          {/* Network / 1B / Mission / Vision */}
          <SectionCard title="Network & 1B Connected Devices">
            <p className="mt-3 text-base font-medium text-zinc-200">
              1B digital users × 16 hours = 16B verified human hours.
            </p>
            <div className="mt-4">
              <ScaleScarcityFlowchart />
            </div>
            <p className="mt-4 text-base text-zinc-200">
              OX is designed for one billion connected users. 1.5M{" "}
              <GlossaryTerm termKey="citizen">citizens</GlossaryTerm> today.
              A billion in sight. The mobile app, referral mechanics, and mining
              flows are built to sustain scale—with fair economics for early
              adopters and late joiners alike.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4">
                <h3 className="text-sm font-semibold text-white">Vision</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Connect one billion people to a fair, human-first network where
                  your attention and presence are scarce, valuable resources.
                </p>
              </div>
              <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4">
                <h3 className="text-sm font-semibold text-white">Mission</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Give every person a Machine Self they train, own,
                  and control. Reward micro-actions without compromising rights.
                </p>
              </div>
            </div>
          </SectionCard>
        </div>

        <SectionCard className="mt-16 text-center">
          <h2 className="text-xl font-bold text-white">Ready to earn?</h2>
          <p className="mt-3 text-zinc-400">
            Get the app. Start mining. Join the network.
          </p>
          <Link
            href="/#get-the-app"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-600"
          >
            Get The App
          </Link>
        </SectionCard>
      </main>
      <GetTheAppSection />
      <Footer />
    </>
  );
}
