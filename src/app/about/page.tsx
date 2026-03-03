import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About OX – Vision, Mission & Team",
  description:
    "Learn about OX’s vision, mission, and the team building a network for 1B connected users.",
};

export default function AboutPage() {
  return (
    <>
      <InnerPageLayout title="About OX">
        <div className="space-y-10">
          <p className="max-w-2xl text-base text-zinc-300">
            OX is a network for people, not profiles. The story starts with a simple idea: what if
            your digital self worked for you rather than for an ad auction?
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Vision
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                OX exists to connect one billion people to a fair, human-first network. A network
                where your attention, ideas and presence are treated as scarce, valuable resources —
                not free fuel for someone else&apos;s algorithm.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Mission
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                Our mission is to give every person a sovereign digital twin that they train, own and
                control. OX combines token incentives, continuous learning and privacy-preserving
                infrastructure so that every micro-action can be rewarded without compromising your
                rights.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                1B Connected Users
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                We design OX for scale from day one. The mobile app, referral mechanics and mining
                flows are built to sustain a billion connected users over time — with fair economics
                for early adopters and late joiners alike.
              </p>
            </section>
            <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/30 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Team &amp; Scale
              </h2>
              <p className="mt-3 text-base text-zinc-200">
                OX is built by a distributed team of engineers, designers, economists and
                psychologists. The same people shipping the Oxygean app, dashboard and APIs are the
                ones defining how mind-level intelligence should behave in the wild.
              </p>
            </section>
          </div>
          <section className="rounded-2xl border border-indigo-900/60 bg-gradient-to-r from-indigo-950/70 via-indigo-900/60 to-black/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              Press &amp; Whitepaper
            </h2>
            <p className="mt-3 text-base text-zinc-200">
              OX has been covered in industry and community channels focused on digital rights, web3
              and AI. For a deeper technical and economic view, you can always read the{" "}
              <a href="/whitepaper" className="text-[var(--accent)] underline-offset-2 hover:underline">
                OX whitepaper
              </a>
              .
            </p>
          </section>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}

