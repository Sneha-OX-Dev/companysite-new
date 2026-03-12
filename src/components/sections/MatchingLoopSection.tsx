"use client";
import Image from "next/image";
import { useState } from "react";

const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const steps = [
  {
    id: 1,
    title: "Work Request",
    sub: "Enters OX Framework",
    detail:
      "An organisation posts structured demand into the OX network. The city never sleeps. The signal goes up.",
  },
  {
    id: 2,
    title: "Machine Self",
    sub: "Evaluates On-Device",
    detail:
      "Human intelligence fused with AI. Your Machine Self privately checks eligibility on your phone. Nothing leaves.",
  },
  {
    id: 3,
    title: "Anonymous Hand",
    sub: "Raised — Not Named",
    detail:
      "Eligible Machine Selves raise a hand. The organisation sees a count. Never a person. Never a name.",
  },
  {
    id: 4,
    title: "Consent Signal",
    sub: "Only — Transmitted",
    detail:
      "Only your yes travels. No data. No identity. A verified biometric signal — not you.",
  },
  {
    id: 5,
    title: "Verified Outcome",
    sub: "Confirmed by Network",
    detail:
      "Work complete. The OX network verifies. Deterministic, confirmed, settled on-chain.",
  },
  {
    id: 6,
    title: "OXIT Rewarded",
    sub: "Instantly Issued",
    detail:
      "OXIT lands in your account. 1,000 OXIT = 1 OXME. Fixed supply. Scarce. Mined by you.",
  },
];

const tokenStats = [
  { label: "In-App Reward", value: "OXIT", sub: "Earned per verified action" },
  { label: "Fixed Rate", value: "1,000 : 1", sub: "OXIT converts to OXME" },
  { label: "Crypto Token", value: "OXME", sub: "1,371,000,000 · Forever" },
];

const STEP_ICONS: Record<number, React.ReactNode> = {
  1: (
    <Image
      src="/icons/icon-work-request.png"
      alt="Work Request"
      width={160}
      height={160}
      className="h-28 w-28 object-contain mix-blend-screen"
    />
  ),
  2: (
    <Image
      src="/icons/image.png"
      alt="Machine Self"
      width={114}
      height={114}
      className="h-24 w-24 rounded-full object-cover"
    />
  ),
  3: (
    <Image
      src="/icons/icon-anonymous-hand.png"
      alt="Anonymous Hand"
      width={160}
      height={160}
      className="h-28 w-28 object-contain mix-blend-screen"
    />
  ),
  4: (
    <Image
      src="/icons/icon-consent-signal.png"
      alt="Consent Signal"
      width={160}
      height={160}
      className="h-28 w-28 object-contain mix-blend-screen"
    />
  ),
  5: (
    <Image
      src="/icons/icon-verified-outcome.png"
      alt="Verified Outcome"
      width={160}
      height={160}
      className="h-28 w-28 object-contain mix-blend-screen"
    />
  ),
  6: (
    <Image
      src="/icons/coins@3x.png"
      alt="OXIT Rewarded"
      width={160}
      height={160}
      className="h-28 w-28 object-contain mix-blend-screen"
    />
  ),
};

function StepNode({
  step,
  active,
  onClick,
  index,
}: {
  step: (typeof steps)[0];
  active: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* node */}
      <div
        className="relative cursor-pointer"
        style={{
          width: 116,
          height: 116,
          animation: active ? "bob 2.4s ease-in-out infinite" : undefined,
          flexShrink: 0,
        }}
        onClick={onClick}
      >
        {/* glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -20,
            filter: "blur(10px)",
            animation: `pulse 3s ${index * 0.4}s infinite`,
            background: `radial-gradient(circle,${PINK}${active ? "55" : "22"} 0%,transparent 68%)`,
          }}
        />

        {/* ring animations when active */}
        {active &&
          [0, 0.6, 1.2].map((d) => (
            <div
              key={d}
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: -8,
                border: "1.5px solid rgba(255,45,107,0.45)",
                animation: `ring 2s ${d}s infinite`,
              }}
            />
          ))}

        {/* spinning border */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            padding: 2,
            animation: `spin ${7 + index}s linear infinite`,
            background: active
              ? `conic-gradient(from 0deg,${PINK},${PURPLE},${PINK})`
              : `conic-gradient(from 0deg,${PINK}88,${PURPLE}55,${PINK}88)`,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{ background: "#07071A" }}
          />
        </div>

        {/* sphere */}
        <div
          className="absolute rounded-full flex items-center justify-center overflow-visible transition-all duration-300"
          style={{
            inset: 3,
            background: active
              ? `radial-gradient(circle at 36% 28%,${PINK}FF 0%,${PINK}99 30%,#2a003a 65%,#140022 100%)`
              : `radial-gradient(circle at 36% 28%,${PINK}CC 0%,${PINK}55 30%,#1a0028 65%,#0D0D2B 100%)`,
            boxShadow: active
              ? `0 0 60px ${PINK}AA,0 0 100px ${PINK}33,inset 0 2px 0 rgba(255,255,255,0.3)`
              : `0 0 28px ${PINK}44,0 6px 24px rgba(0,0,0,0.7),inset 0 1px 0 rgba(255,255,255,0.18)`,
          }}
        >
          {/* sheen */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: 6,
              left: 10,
              width: "40%",
              height: "28%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              filter: "blur(5px)",
            }}
          />
          {/* depth */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 0,
              left: 0,
              right: 0,
              height: "36%",
              borderRadius: "0 0 50% 50%",
              background: "rgba(0,0,0,0.4)",
            }}
          />
          {/* icon */}
          <div className="relative z-10 opacity-90">{STEP_ICONS[step.id]}</div>
        </div>

        {/* number badge */}
        <div
          className="absolute z-10 flex items-center justify-center rounded-full text-[10px] font-black text-white"
          style={{
            top: -3,
            right: -3,
            width: 22,
            height: 22,
            background: `linear-gradient(135deg,${PINK},${PURPLE})`,
            border: "2px solid #07071A",
            boxShadow: "0 0 10px rgba(255,45,107,.6)",
          }}
        >
          {step.id}
        </div>
      </div>

      {/* stem */}
      <div
        className="w-0.5 h-3 mt-0.5"
        style={{
          background: `linear-gradient(to bottom,${PINK}77,transparent)`,
        }}
      />

      {/* label */}
      <div className="text-center px-1" style={{ maxWidth: 120 }}>
        <p
          className="text-[13px] font-black mb-0.5 transition-colors duration-300"
          style={{ color: active ? PINK : "#fff" }}
        >
          {step.title}
        </p>
        <p className="text-[11px] text-white/40 leading-snug">{step.sub}</p>
      </div>

      {/* detail card */}
      {active && (
        <div
          className="mt-3 text-[12px] leading-relaxed text-white/85 text-center px-3 py-3"
          style={{
            maxWidth: 140,
            background: `linear-gradient(135deg,rgba(255,45,107,0.13),rgba(123,31,162,0.1))`,
            border: `1px solid ${PINK}44`,
            borderTop: `2px solid ${PINK}`,
            borderRadius: "0 0 14px 14px",
            backdropFilter: "blur(14px)",
          }}
        >
          {step.detail}
        </div>
      )}
    </div>
  );
}

function Arrow({ index }: { index: number }) {
  return (
    <div className="flex-shrink-0 pb-12 pt-1">
      <svg width="36" height="16" viewBox="0 0 36 16">
        <defs>
          <linearGradient id={`ag${index}`} x1="0%" x2="100%">
            <stop offset="0%" stopColor={PINK} stopOpacity="0.8" />
            <stop offset="100%" stopColor={PURPLE} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <line
          x1="2"
          y1="8"
          x2="26"
          y2="8"
          stroke={`url(#ag${index})`}
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <polygon points="24,4 36,8 24,12" fill={PURPLE} opacity="0.9" />
      </svg>
    </div>
  );
}

export function MatchingLoopSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-x-hidden px-4 py-12 sm:px-8"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%,#1e0535 0%,#07071A 65%)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-5 py-1.5"
          style={{
            background: "rgba(255,45,107,.1)",
            border: "1px solid rgba(255,45,107,.3)",
          }}
        >
          <span
            className="h-[7px] w-[7px] rounded-full"
            style={{
              background: PINK,
              boxShadow: `0 0 12px ${PINK}`,
              animation: "pulse 2s infinite",
            }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-[3px]"
            style={{ color: PINK }}
          >
            Human Intelligence Protocol
          </span>
        </div>
        <h1 className="text-[clamp(26px,4vw,48px)] font-black tracking-tight text-white">
          The Matching Loop
        </h1>
        <p className="text-[11px] uppercase tracking-[2.5px] text-white/35">
          Six steps · Zero data exposed · Click any node
        </p>
      </div>

      {/* Steps — horizontal scroll on mobile, full row on desktop */}
      <div className="w-full max-w-[1080px]">
        {/* Desktop */}
        <div className="hidden sm:flex w-full items-start">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-1 justify-center">
                <StepNode
                  step={s}
                  active={active === i}
                  onClick={() => toggle(i)}
                  index={i}
                />
              </div>
              {i < 5 && <Arrow index={i} />}
            </div>
          ))}
        </div>

        {/* Mobile — 2-col grid */}
        <div className="grid grid-cols-2 gap-6 sm:hidden">
          {steps.map((s, i) => (
            <div key={s.id} className="flex justify-center">
              <StepNode
                step={s}
                active={active === i}
                onClick={() => toggle(i)}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom statement bar */}
      <div className="flex w-full max-w-[700px] overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="w-[5px] flex-shrink-0"
          style={{ background: `linear-gradient(to bottom,${PINK},${PURPLE})` }}
        />
        <div
          className="flex flex-1 flex-col gap-1 rounded-r-2xl border border-white/[0.07] px-6 py-5"
          style={{
            background: `linear-gradient(135deg,rgba(255,45,107,.1),rgba(123,31,162,.08))`,
          }}
        >
          <p className="text-[15px] font-black leading-snug text-white sm:text-[17px]">
            The organisation gets certainty. You keep everything else.
          </p>
          <p className="text-[10px] uppercase tracking-[2px] text-white/30 sm:text-[11px]">
            No data leaves your device at any point in this loop
          </p>
        </div>
      </div>

      {/* Token stats bar */}
      <div
        className="flex w-full max-w-[700px] overflow-hidden rounded-2xl"
        style={{
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {tokenStats.map((t, i) => (
          <div
            key={t.label}
            className="flex flex-1 flex-col items-center gap-1 px-4 py-4 text-center sm:px-7"
            style={{
              borderRight:
                i < 2 ? "1px solid rgba(255,255,255,0.07)" : undefined,
            }}
          >
            <p className="text-[12px] uppercase tracking-[2px] text-white/28">
              {t.label}
            </p>
            <p
              className="text-[17px] font-black sm:text-[20px]"
              style={{
                background: `linear-gradient(90deg,${PINK},#c0255a,${PURPLE})`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}
            >
              {t.value}
            </p>
            <p className="text-[12px] text-white/28 ">{t.sub}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.9;transform:scale(1.2)} }
        @keyframes ring { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(2.5);opacity:0} }
        @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes shimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
        @keyframes fadein { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
