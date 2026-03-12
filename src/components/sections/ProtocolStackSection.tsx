"use client";
import { useEffect, useState } from "react";

const PINK = "#FF2D6B";
const RED = "#E8264A";
const PURPLE = "#7B1FA2";

const LAYER_COLORS = {
  5: "#E8264A",
  4: "#F0364F",
  3: "#FF2D6B",
  2: "#B03AA0",
  1: "#7B1FA2",
} as const;

type LayerNum = 5 | 4 | 3 | 2 | 1;

const layers: {
  num: LayerNum;
  title: string;
  sub: string;
  doesItems: string[];
  factText: string;
}[] = [
  {
    num: 5,
    title: "Machine Self Layer",
    sub: "The source of all intelligence in the network",
    doesItems: [
      "Stores 2,000 human-created data points locally on the participant's phone",
      "Acts as a sovereign digital agent — owned by the individual, unguessable by AI",
      "Never transmitted, never centralised, never hackable at source",
    ],
    factText:
      "2,000 data points · 16 hours to build · 4 minutes per day · Lives only on your phone",
  },
  {
    num: 4,
    title: "Consent & Permission Layer",
    sub: "Every interaction is permission-based",
    doesItems: [
      "Individual decides what participates, what earns, and what stays private",
      "Consent is explicit, structured, and cryptographically enforced",
      "Only consent signals transmitted — never raw data",
    ],
    factText:
      "Consent defines the ceiling of autonomy · The machine may optimise execution — never the human",
  },
  {
    num: 3,
    title: "Matching & Eligibility Layer",
    sub: "Private on-device evaluation — no data leaves",
    doesItems: [
      "Enterprise demand enters — Machine Self evaluates privately on device",
      "Only eligible participants see the opportunity to opt in",
      "Deterministic eligibility — not probabilistic, not estimated",
    ],
    factText:
      "No central matching engine · Zero data leaves the device · Precision routing, zero waste",
  },
  {
    num: 2,
    title: "Verification & Confirmation Layer",
    sub: "Outcomes settled — not approximated",
    doesItems: [
      "Work is completed — physical and digital actions confirmed by the network",
      "AI agents orchestrate, route tasks, and validate outcomes",
      "Results are cryptographically confirmed — not estimated, not inferred",
    ],
    factText:
      "Enterprises purchase verified outcomes — not user data · Not reach · Not probability",
  },
  {
    num: 1,
    title: "Token Settlement Layer",
    sub: "Value flows directly — no intermediary",
    doesItems: [
      "Every verified contribution rewarded immediately in OXIT on-chain",
      "Organisations pay in tokens — participants earn in tokens",
      "Circular economy runs automatically — no platform intermediary",
    ],
    factText:
      "ERC-20 on Base · Fixed supply 1,371,000,000 OXME · 1,000 OXIT = 1 OXME · Set at genesis",
  },
];

function hex2rgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function LayerRow({
  layer,
  delay,
}: {
  layer: (typeof layers)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const color = LAYER_COLORS[layer.num];

  useEffect(() => {
    setTimeout(() => setVisible(true), delay);
  }, [delay]);

  return (
    <div
      className="grid gap-2 transition-all duration-200 sm:gap-3"
      style={{
        gridTemplateColumns: "52px 1fr",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(8px)",
        transition: `opacity 0.4s ease, transform 0.4s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* layer number badge */}
      <div
        className="flex items-center justify-center rounded-md text-[clamp(18px,2.2vw,28px)] font-black tracking-[-0.03em]"
        style={{
          background: hex2rgba(color, hovered ? 0.18 : 0.12),
          color,
          border: `1px solid ${hex2rgba(color, hovered ? 0.35 : 0.2)}`,
          boxShadow: hovered ? `0 0 16px ${hex2rgba(color, 0.25)}` : "none",
          transition: "all 0.2s",
        }}
      >
        {layer.num}
      </div>

      {/* right content — stacked on mobile, 3-col on desktop */}
      <div
        className="grid gap-2 sm:gap-3"
        style={{ gridTemplateColumns: "1fr" }}
      >
        {/* mobile: just name + fact */}
        <div className="flex flex-col gap-2 sm:hidden">
          <NameCell layer={layer} hovered={hovered} color={color} />
          <FactCell layer={layer} hovered={hovered} color={color} />
        </div>

        {/* desktop: name | does | fact */}
        <div
          className="hidden gap-3 sm:grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          <NameCell layer={layer} hovered={hovered} color={color} />
          <DoesCell layer={layer} hovered={hovered} />
          <FactCell layer={layer} hovered={hovered} color={color} />
        </div>
      </div>
    </div>
  );
}

function NameCell({
  layer,
  hovered,
  color,
}: {
  layer: (typeof layers)[0];
  hovered: boolean;
  color: string;
}) {
  return (
    <div
      className="relative flex flex-col justify-center gap-1 overflow-hidden rounded-md px-4 py-3"
      style={{
        background: "#0D0D2B",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        transition: "border-color 0.2s",
      }}
    >
      {/* left accent bar */}
      <div
        className="absolute bottom-0 left-0 top-0 w-[3px] rounded-l-md"
        style={{ background: color }}
      />
      <p className="text-[16px] font-extrabold leading-snug text-white ">
        {layer.title}
      </p>
      <p className="text-[14px] leading-snug text-white/35 ">{layer.sub}</p>
    </div>
  );
}

function DoesCell({
  layer,
  hovered,
}: {
  layer: (typeof layers)[0];
  hovered: boolean;
}) {
  return (
    <div
      className="flex flex-col justify-center gap-1.5 rounded-md px-4 py-3"
      style={{
        background: "rgba(255,255,255,0.015)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
        transition: "border-color 0.2s",
      }}
    >
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/22 ">
        What it does
      </p>
      {layer.doesItems.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="mt-[5px] h-[4px] w-[4px] flex-shrink-0 rounded-full bg-white/22" />
          <p className="text-[16px] leading-snug text-white/40">{item}</p>
        </div>
      ))}
    </div>
  );
}

function FactCell({
  layer,
  hovered,
  color,
}: {
  layer: (typeof layers)[0];
  hovered: boolean;
  color: string;
}) {
  return (
    <div
      className="flex flex-col justify-center gap-1 rounded-md px-4 py-3"
      style={{
        background: hex2rgba(color, hovered ? 0.08 : 0.05),
        border: `1px solid ${hex2rgba(color, hovered ? 0.25 : 0.15)}`,
        boxShadow: hovered ? `0 0 20px ${hex2rgba(color, 0.1)}` : "none",
        transition: "all 0.2s",
      }}
    >
      <p
        className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color }}
      >
        Key fact
      </p>
      <p className="text-[16px] font-semibold leading-snug text-white/48">
        {layer.factText}
      </p>
    </div>
  );
}

export function ProtocolStackSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(8px)",
    transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
  });

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 py-10 sm:px-8 sm:py-12"
      style={{ background: "#07071A", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* grid overlay */}
      {/* <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.012) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      /> */}

      {/* ── HEADER ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={fadeIn(0)}
      >
        <span
          className="mb-3 inline-block rounded-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]"
          style={{
            color: PINK,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.07)",
          }}
        >
          Diagram 12 — Section 6 · What Is OX
        </span>
        <h2 className="text-[clamp(18px,2.1vw,28px)] font-extrabold leading-tight tracking-[-0.025em]">
          The OX{" "}
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Protocol Stack
          </em>{" "}
          — five layers. One unified system.
        </h2>
      </div>

      {/* ── FLOW LABELS ── */}
      <div
        className="relative z-10 flex w-full max-w-[1080px] justify-between px-1"
        style={fadeIn(60)}
      >
        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/20 sm:text-[10px]">
          ↑ &nbsp;Human intelligence flows up through the stack
        </p>
        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/20 sm:text-[10px]">
          Enterprise demand flows down through the stack &nbsp;↓
        </p>
      </div>

      {/* ── STACK ── */}
      <div
        className="relative z-10 flex w-full max-w-[1080px] flex-col gap-2.5"
        style={fadeIn(100)}
      >
        {layers.map((layer, i) => (
          <LayerRow key={layer.num} layer={layer} delay={100 + i * 50} />
        ))}
      </div>

      {/* ── CLOSING ── */}
      <div
        className="relative z-10 w-full max-w-[1080px] border-t border-white/[0.06] pt-4 text-center text-[12px] leading-relaxed text-white/28 sm:text-[13px]"
        style={fadeIn(400)}
      >
        <strong className="font-bold text-white/52">
          Without structured human participation, AI remains inference-bound.
        </strong>{" "}
        With OX, AI becomes eligibility-aware and precision-routed.
      </div>
    </section>
  );
}
