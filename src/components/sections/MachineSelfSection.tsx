"use client";

import { cn } from "@/lib/utils";

const RED = "#E8264A";
const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const card1Points = [
  "Identity and personal context",
  "Skills, expertise, and capabilities",
  "Behavioural and cognitive signals",
  "Environmental and location context",
  "Unique and unknowable personal intelligence",
];

const card2Points = [
  "A fully matchable Machine Self",
  "Eligibility across all network work types",
  "A sovereign digital economic agent",
  "Continuous passive earning capability",
  "Permanent participation in the OX network",
];

const card3Points = [
  "OXIT for every verified contribution",
  "Progress toward a complete Machine Self",
  "Matched commercial work opportunities",
  "Scarce tokens that grow with the network",
  "A machine that earns even while you sleep",
];

const statCards = [
  {
    accent: RED,
    accentClass: "bg-[#E8264A]",
    label: "Data Points",
    value: "2,000",
    valueStyle: { color: RED },
    sub: "human-created data points",
    body: "Directly provided by you. Not inferred. Not approximated. Not guessable by any AI.",
    note: "Stored only on your device. Never transmitted without your consent.",
    topBar: "bg-[#E8264A]",
  },
  {
    accent: PINK,
    accentClass: "bg-[#FF2D6B]",
    label: "Total Build Time",
    value: "16",
    valueStyle: { color: PINK },
    sub: "hours of structured human capital",
    body: "A genuine representation of who you are. Built once. Working for you continuously.",
    note: "Pre-invested capital stored in your Machine Self — permanently matchable to any work in the network.",
    topBar: "bg-[#FF2D6B]",
  },
  {
    accent: PURPLE,
    accentClass: "bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2]",
    label: "Daily Commitment",
    value: "4",
    valueStyle: {
      background: "linear-gradient(135deg,#FF2D6B,#7B1FA2)",
      WebkitBackgroundClip: "text" as const,
      WebkitTextFillColor: "transparent" as const,
    },
    sub: "minutes of daily activity",
    body: "From the moment you start — you mine. Every verified contribution earns OXIT.",
    note: "The building is the mining. The earning never stops.",
    topBar: "bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2]",
  },
];

const detailCols = [
  { color: RED, label: "What the 2,000 points cover", points: card1Points },
  { color: PINK, label: "What the 16 hours produces", points: card2Points },
  { color: PURPLE, label: "What 4 minutes a day earns", points: card3Points },
];

function BulletItem({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-start gap-2 text-[14px] leading-snug text-white/60 ">
      <div
        className="mt-[6px] h-[5px] w-[5px] flex-shrink-0 rounded-full"
        style={{ background: color }}
      />
      {text}
    </div>
  );
}

export default function MachineSelfSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#07071A] px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
      {/* grid bg */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.013)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.013)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* HEADER */}
      <div className="relative z-10 text-center">
        <div className="mb-2 inline-block rounded px-3 py-[3px] text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF2D6B] border border-[#ff2d6b50] bg-[#ff2d6b12] sm:text-[10px]">
          Diagram 6 — Section 7 · Your Machine Self
        </div>
        <h2 className="text-[clamp(17px,2vw,26px)] font-extrabold tracking-[-0.025em]">
          Three numbers. One{" "}
          <span className="bg-gradient-to-r from-[#E8264A] via-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
            sovereign economic asset.
          </span>
        </h2>
      </div>

      {/* STAT CARDS */}
      <div className="relative z-10 grid w-full max-w-[1060px] grid-cols-1 gap-4 sm:grid-cols-3">
        {statCards.map((c) => (
          <div
            key={c.label}
            className="relative overflow-hidden rounded bg-[#0D0D2B] border border-white/10 p-5 text-center sm:p-6"
          >
            <div className={cn("absolute inset-x-0 top-0 h-[3px]", c.topBar)} />

            <p
              className="text-[14px] font-bold uppercase tracking-[0.2em]"
              style={{ color: c.accent }}
            >
              {c.label}
            </p>

            <p
              className="text-[clamp(44px,5.5vw,72px)] font-extrabold leading-none"
              style={c.valueStyle}
            >
              {c.value}
            </p>

            <p className="text-[14px] font-semibold text-white/60 ">{c.sub}</p>

            <div
              className="mx-auto my-2.5 h-[2px] w-8 rounded-full"
              style={{ background: c.accent }}
            />

            <p className="text-[14px] leading-relaxed text-white/60 ">
              {c.body}
            </p>

            <p className="mt-1.5 text-[14px] italic text-white/30 ">{c.note}</p>
          </div>
        ))}
      </div>

      {/* DETAIL SECTION */}
      <div className="relative z-10 grid w-full max-w-[1060px] grid-cols-1 gap-5 rounded bg-[#0D0D2B] border border-white/10 p-5 sm:grid-cols-3 sm:gap-4 sm:p-6">
        {detailCols.map((col) => (
          <div key={col.label} className="flex flex-col gap-2">
            <p
              className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[14px]"
              style={{ color: col.color }}
            >
              {col.label}
            </p>
            {col.points.map((pt) => (
              <BulletItem key={pt} text={pt} color={col.color} />
            ))}
          </div>
        ))}
      </div>

      {/* STATEMENT */}
      <div className="relative z-10 w-full max-w-[1060px] overflow-hidden rounded border border-[#ff2d6b40] bg-[#ff2d6b12] p-4 text-center sm:p-5">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E8264A] via-[#FF2D6B] to-[#7B1FA2]" />
        <p className="text-[15px] font-bold ">
          Built once. Working continuously.{" "}
          <span className="text-[#FF2D6B]">
            On your terms. Under your consent. Earning on your behalf.
          </span>
        </p>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 w-full max-w-[1060px] border-t border-white/10 pt-3 text-center text-[11px] text-white/40 sm:text-[12px]">
        <strong className="text-white/60">
          YOUR DATA NEVER LEAVES YOUR DEVICE.
        </strong>{" "}
        The machine may optimise execution — never the human. Consent defines
        the ceiling of autonomy.
      </div>
    </div>
  );
}
