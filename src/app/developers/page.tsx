import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Developers – Build on OX",
  description:
    "Information for developers, engineers and AI builders who want to integrate OX into their products.",
};

export default function DevelopersPage() {
  return (
    <>
      <InnerPageLayout title="Developers &amp; Builders">
        <div className="space-y-10">
          <p className="max-w-2xl text-base text-zinc-300">
            If you can read an API and ship a build, you can build on OX. Start with the primitives
            the Oxygean app already uses and layer your own journeys on top.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                API &amp; SDK Overview
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                OX exposes APIs that mirror what the Oxygean app already does today: onboarding,
                mining flows, referrals, reward accounting and basic analytics. As the network grows,
                these primitives will be wrapped into public SDKs and reference integrations.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Integration Patterns
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                Typical integrations include: embedding OX-powered rewards into existing apps,
                connecting enterprise systems to OX identity and value rails, and building AI agents
                that respect user sovereignty by default.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Machine Self &amp; Human Think
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                Developers can think in two layers: Machine Self endpoints that run in the background
                on behalf of a user, and Human Think endpoints that surface decisions and actions for
                review. This separation keeps UX clean while preserving explicit consent.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Docs &amp; Sandbox
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                The first public docs and sandbox endpoints will focus on read-only access to
                anonymised metrics and testnets for token flows. As these stabilise, we will open
                write paths and more advanced AI interfaces.
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

