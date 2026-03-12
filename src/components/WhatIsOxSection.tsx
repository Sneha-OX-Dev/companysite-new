import Link from "next/link";
import { landing } from "@/content/landing";
import { Button } from "@/components/ui/button";
import { AnswerLearnEarnFlowchart } from "@/components/diagrams";

export default function WhatIsOxSection() {
  const { whatIsOx, entryPoint } = landing;

  return (
    <section className="border-y border-indigo-900/40 bg-indigo-950/20 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-2xl font-bold text-white text-balance sm:text-3xl">
          {whatIsOx.headline}
        </h2>
        <p className="mt-4 text-lg text-zinc-300">{whatIsOx.oneLiner}</p>
        <div className="mt-8">
          <AnswerLearnEarnFlowchart />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {whatIsOx.steps.map((step, index) => (
            <div
              key={step.label}
              className="rounded-xl border border-indigo-900/60 bg-indigo-950/30 px-4 py-5"
            >
              <span className="text-sm font-semibold text-[var(--accent)]">
                Step {index + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {step.label}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild className="rounded-full">
            <Link href={entryPoint.href}>{whatIsOx.cta}</Link>
          </Button>
          <Link
            href="/#get-the-app"
            className="text-sm font-medium text-[var(--accent)] hover:underline"
          >
            Get The App →
          </Link>
        </div>
      </div>
    </section>
  );
}
