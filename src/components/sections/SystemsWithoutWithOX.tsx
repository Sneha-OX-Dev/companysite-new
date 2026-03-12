"use client";
import { useEffect, useState } from "react";

const PINK = "#FF2D6B";
const RED = "#E8264A";
const PURPLE = "#7B1FA2";

const leftRows = [
  {
    title: "Systems infer human intent",
    desc: "Probabilistic guesswork from historical data — never confirmed truth",
  },
  {
    title: "AI guesses at context",
    desc: "Pattern-matching on aggregated, stale behaviour signals",
  },
  {
    title: "Machines operate without human confirmation",
    desc: "No verified physical action — outcomes assumed, not settled",
  },
  {
    title: "Centralised data farms approximate reality",
    desc: "Extracted, held centrally — always behind the present moment",
  },
  {
    title: "Consent is assumed or bypassed",
    desc: "Data used without explicit, structured, individual permission",
  },
  {
    title: "Outcomes are probabilistic",
    desc: "Every result is an estimate — misallocation and waste baked in",
  },
];

const rightRows = [
  {
    title: "Systems access real human intent",
    desc: "Live, declared, structured intelligence — directly from the individual",
  },
  {
    title: "AI coordinates with verified humans",
    desc: "Machine Self delivers live, consent-bound, locally evaluated human truth",
  },
  {
    title: "Machines trigger and verify physical human action",
    desc: "Real work completed, confirmed on-chain, rewarded immediately",
  },
  {
    title: "Distributed Machine Selves deliver reality",
    desc: "One billion sovereign nodes — each live, each local, each authoritative",
  },
  {
    title: "Consent is explicit, cryptographic, sovereign",
    desc: "Every interaction permission-based — owned and controlled by the individual",
  },
  {
    title: "Outcomes are verified and settled on-chain",
    desc: "Deterministic eligibility — precision routing, zero guesswork, zero waste",
  },
];

function PanelRow({
  title,
  desc,
  isRight,
}: {
  title: string;
  desc: string;
  isRight?: boolean;
}) {
  return (
    <div
      className="flex flex-1 items-stretch gap-2.5 rounded-sm px-3.5 py-3"
      style={
        isRight
          ? {
              border: "1px solid rgba(255,45,107,0.12)",
              background: "rgba(255,45,107,0.03)",
            }
          : {
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.02)",
            }
      }
    >
      <div
        className="w-[3px] flex-shrink-0 self-stretch rounded-sm"
        style={{ background: isRight ? PINK : "rgba(255,255,255,0.12)" }}
      />
      <div>
        <p
          className="text-[12px] font-bold leading-snug sm:text-[13px]"
          style={{ color: isRight ? "#fff" : "rgba(255,255,255,0.45)" }}
        >
          {title}
        </p>
        <p className="mt-0.5 text-[11px] leading-snug text-white/30 sm:text-[12px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Panel({
  label,
  heading,
  rows,
  isRight,
}: {
  label: string;
  heading: string;
  rows: typeof leftRows;
  isRight?: boolean;
}) {
  return (
    <div
      className="flex min-h-0 flex-1 flex-col gap-2 p-5"
      style={{
        background: "#0D0D2B",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: isRight ? "0 4px 4px 0" : "4px 0 0 4px",
        borderLeft: isRight ? "none" : undefined,
      }}
    >
      <p
        className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.2em]"
        style={{ color: isRight ? PINK : "rgba(255,255,255,0.28)" }}
      >
        {label}
      </p>
      <p
        className="border-b border-white/[0.06] pb-3 text-[12px] font-bold leading-snug sm:text-[13px]"
        style={{ color: isRight ? "#fff" : "rgba(255,255,255,0.45)" }}
      >
        {heading}
      </p>
      <div className="mt-1 flex flex-1 flex-col gap-2">
        {rows.map((r) => (
          <PanelRow
            key={r.title}
            title={r.title}
            desc={r.desc}
            isRight={isRight}
          />
        ))}
      </div>
    </div>
  );
}

export function SystemsWithoutWithOX() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(10px)",
    transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
  });

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-3 px-6 py-6 sm:px-10 sm:py-8"
      style={{ background: "#07071A", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* grid overlay */}
      {/* <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.013) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.013) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      /> */}

      {/* Header */}
      <div className="relative z-10 text-center" style={fadeIn(0)}>
        <span
          className="mb-2 inline-block rounded-sm px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]"
          style={{
            color: PINK,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.07)",
          }}
        >
          Diagram 4 — Section 5 · The Fix
        </span>
        <h2 className="text-[clamp(15px,1.7vw,22px)] font-extrabold leading-tight tracking-[-0.025em]">
          From probability to certainty.{" "}
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            From extraction to participation.
          </em>
        </h2>
      </div>

      {/* Main columns */}
      <div
        className="relative z-10 flex w-full max-w-[1060px] flex-1 flex-col sm:flex-row"
        style={{ minHeight: 0, ...fadeIn(80) }}
      >
        {/* Mobile */}
        <div className="flex flex-col gap-4 sm:hidden">
          <Panel
            label="Systems Without OX"
            heading="Inference-bound. Approximate. Wasteful."
            rows={leftRows}
          />
          <div className="flex items-center gap-3">
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(255,45,107,0.25),transparent)",
              }}
            />
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-black"
              style={{
                background: "#07071A",
                border: "1px solid rgba(255,45,107,0.3)",
                color: PINK,
              }}
            >
              VS
            </div>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(255,45,107,0.25),transparent)",
              }}
            />
          </div>
          <Panel
            label="Systems With OX"
            heading="Eligibility-aware. Verified. Precise."
            rows={rightRows}
            isRight
          />
        </div>

        {/* Desktop */}
        <div className="hidden flex-1 sm:flex" style={{ minHeight: 0 }}>
          <Panel
            label="Systems Without OX"
            heading="Inference-bound. Approximate. Wasteful."
            rows={leftRows}
          />

          {/* Centre VS divider — wider gap */}
          <div className="relative flex w-[72px] flex-shrink-0 items-center justify-center">
            <div
              className="absolute inset-y-[8%] left-1/2 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg,transparent,rgba(255,45,107,0.25) 30%,rgba(255,45,107,0.25) 70%,transparent)",
              }}
            />
            <div
              className="relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full text-[10px] font-black"
              style={{
                background: "#07071A",
                border: "1px solid rgba(255,45,107,0.3)",
                color: PINK,
              }}
            >
              VS
            </div>
          </div>

          <Panel
            label="Systems With OX"
            heading="Eligibility-aware. Verified. Precise."
            rows={rightRows}
            isRight
          />
        </div>
      </div>

      {/* Bottom pills */}
      <div
        className="relative z-10 grid w-full max-w-[1060px] grid-cols-1 gap-3 sm:grid-cols-[1fr_72px_1fr]"
        style={fadeIn(160)}
      >
        <div
          className="rounded-sm px-4 py-3 text-[11px] leading-relaxed text-white/45 sm:text-[12px]"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            background: "#0D0D2B",
          }}
        >
          <strong className="font-bold text-white">Old model:</strong> extract
          data from humans, infer intent, approximate outcomes, keep the value.
        </div>
        <div className="hidden sm:block" />
        <div
          className="rounded-sm px-4 py-3 text-[11px] leading-relaxed text-white/45 sm:text-[12px]"
          style={{
            border: "1px solid rgba(255,45,107,0.15)",
            background: "rgba(255,45,107,0.04)",
          }}
        >
          <strong className="font-bold text-white">OX model:</strong> coordinate
          directly with humans, verify intent, confirm outcomes, return the
          value.
        </div>
      </div>

      {/* Closing */}
      <div
        className="relative z-10 w-full max-w-[1060px] border-t border-white/[0.06] pt-3 text-center text-[11px] text-white/28 sm:text-[12px]"
        style={fadeIn(220)}
      >
        <strong className="font-semibold text-white/55">
          This is not better data.
        </strong>{" "}
        This is a different category of input entirely — the difference between
        a weather forecast and looking out the window.
      </div>
    </section>
  );
}
