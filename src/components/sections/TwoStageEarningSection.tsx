"use client";
import { useEffect, useState } from "react";

const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const stage1Steps = [
  {
    label: "Build Your Machine Self",
    sub: "16 hours · 2,000 data points · Stored on your phone",
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          rx="2"
          stroke={PINK}
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="8"
          x2="11"
          y2="8"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="5"
          x2="8"
          y2="11"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Every Verified Contribution",
    sub: "Each step earns OXIT immediately",
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke={PINK} strokeWidth="1.5" />
        <path
          d="M6 8 L7.5 9.5 L10.5 6.5"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "OXIT Accumulates",
    sub: "The building is the mining",
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <ellipse cx="8" cy="11" rx="5" ry="2" stroke={PINK} strokeWidth="1.3" />
        <ellipse
          cx="8"
          cy="8"
          rx="5"
          ry="2"
          stroke="white"
          strokeWidth="1.3"
          opacity="0.8"
        />
        <ellipse
          cx="8"
          cy="5"
          rx="5"
          ry="2"
          stroke="white"
          strokeWidth="1.3"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

const stage2Steps = [
  {
    label: "OX Matches You to Work",
    sub: "Machine Self evaluates privately on your device",
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2 L14 5 L14 11 L8 14 L2 11 L2 5 Z"
          stroke={PURPLE}
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="8" cy="8" r="2.5" fill={PURPLE} opacity="0.8" />
      </svg>
    ),
  },
  {
    label: "You Choose to Participate",
    sub: "Consent only. Zero data leaves your device",
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2 Q14 2 14 8 Q14 13 8 14 Q2 13 2 8 Q2 2 8 2"
          stroke={PURPLE}
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M5 8 L7 10 L11 6"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Earn More OXIT",
    sub: "The earning never stops. The network keeps growing.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
          d="M10 2 L6 8 L9 8 L6 14 L13 6 L9 6 Z"
          fill={PURPLE}
          stroke={PURPLE}
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "4 mins", label: "Daily · Stage 1" },
  { value: "16 hrs", label: "To Complete" },
  { value: "1,000:1", label: "OXIT to OXME" },
  { value: "1.5M+", label: "Already Started" },
];

function StepCard({
  step,
  color,
}: {
  step: (typeof stage1Steps)[0];
  color: string;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-3 py-2.5"
      style={{
        background: `${color}0f`,
        border: `1px solid ${color}40`,
      }}
    >
      <div
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md"
        style={{ background: `${color}33`, border: `1px solid ${color}66` }}
      >
        {step.icon}
      </div>
      <div>
        <p className="text-[9.5px] font-bold text-white">{step.label}</p>
        <p className="text-[7.5px] text-white/40">{step.sub}</p>
      </div>
    </div>
  );
}

function PhoneClockIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect
        x="18"
        y="6"
        width="28"
        height="46"
        rx="4"
        fill="rgba(255,45,107,0.12)"
        stroke={PINK}
        strokeWidth="1.8"
      />
      <rect
        x="22"
        y="12"
        width="20"
        height="28"
        rx="2"
        fill="rgba(255,45,107,0.08)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.8"
      />
      <circle
        cx="32"
        cy="26"
        r="8"
        fill="rgba(255,45,107,0.15)"
        stroke={PINK}
        strokeWidth="1.4"
      />
      <line
        x1="32"
        y1="20"
        x2="32"
        y2="26"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="26"
        x2="36"
        y2="29"
        stroke={PINK}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="26" r="1.5" fill={PINK} />
      <rect
        x="27"
        y="46"
        width="10"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.3)"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect
        x="10"
        y="22"
        width="20"
        height="28"
        rx="3"
        fill="rgba(123,31,162,0.12)"
        stroke={PURPLE}
        strokeWidth="1.8"
      />
      <rect
        x="14"
        y="16"
        width="12"
        height="8"
        rx="2"
        fill="rgba(123,31,162,0.2)"
        stroke={PURPLE}
        strokeWidth="1.4"
      />
      <line
        x1="14"
        y1="30"
        x2="26"
        y2="30"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="14"
        y1="34"
        x2="24"
        y2="34"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M32 36 L40 36"
        stroke={PINK}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M37 32 L41 36 L37 40"
        stroke={PINK}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="42"
        y="22"
        width="14"
        height="24"
        rx="3"
        fill="rgba(123,31,162,0.12)"
        stroke={PURPLE}
        strokeWidth="1.8"
      />
      <rect
        x="44"
        y="26"
        width="10"
        height="14"
        rx="1.5"
        fill="rgba(123,31,162,0.15)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.8"
      />
      <line
        x1="45"
        y1="28"
        x2="53"
        y2="28"
        stroke={PURPLE}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <line
        x1="45"
        y1="31"
        x2="51"
        y2="31"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle
        cx="49"
        cy="18"
        r="4"
        fill="rgba(255,45,107,0.2)"
        stroke={PINK}
        strokeWidth="1.2"
      />
      <text
        x="49"
        y="21"
        textAnchor="middle"
        fontSize="5"
        fontWeight="900"
        fill="white"
        fontFamily="sans-serif"
      >
        OX
      </text>
    </svg>
  );
}

export function TwoStageEarningSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, #1e0535 0%, #07071A 65%)",
      }}
    >
      {/* Header */}
      <div
        className="mb-8 flex flex-col items-center gap-2 text-center transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(10px)",
        }}
      >
        <div
          className="mb-1 flex items-center gap-2 rounded-full px-3 py-1"
          style={{
            background: "rgba(255,45,107,.1)",
            border: "1px solid rgba(255,45,107,.3)",
          }}
        >
          <span
            className="h-[5px] w-[5px] rounded-full"
            style={{
              background: PINK,
              boxShadow: `0 0 8px ${PINK}`,
              animation: "pulse 2s infinite",
            }}
          />
          <span
            className="text-[8px] font-bold uppercase tracking-[2.5px]"
            style={{ color: PINK }}
          >
            Human Intelligence Protocol
          </span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          Two-Stage Earning Model
        </h1>
        <p className="text-[9px] uppercase tracking-[2px] text-white/30">
          The only crypto in the world you mine with your time
        </p>
      </div>

      {/* Two columns */}
      <div
        className="flex w-full max-w-4xl items-stretch gap-4 transition-all duration-500 delay-100"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(10px)",
        }}
      >
        {/* Stage 1 */}
        <div className="flex flex-1 flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-2xl p-4"
            style={{
              background:
                "linear-gradient(135deg,rgba(255,45,107,0.18),rgba(123,31,162,0.1))",
              border: `1.5px solid ${PINK}`,
              boxShadow: `0 0 32px rgba(255,45,107,0.2)`,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[1.5px]"
              style={{
                background: `linear-gradient(90deg,transparent,${PINK},transparent)`,
              }}
            />
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
                style={{
                  background: `linear-gradient(135deg,${PINK},${PURPLE})`,
                  boxShadow: `0 0 16px rgba(255,45,107,0.5)`,
                }}
              >
                1
              </div>
              <div>
                <p
                  className="text-[13px] font-black tracking-wide"
                  style={{ color: PINK }}
                >
                  STAGE 1
                </p>
                <p className="text-[10px] font-bold text-white">
                  Mine While You Build
                </p>
              </div>
            </div>
            <div className="my-3 flex justify-center">
              <PhoneClockIcon />
            </div>
            <p className="text-center text-[9px] leading-relaxed text-white/55">
              Spend{" "}
              <span className="font-bold" style={{ color: PINK }}>
                4 minutes a day
              </span>{" "}
              completing your Machine Self.
              <br />
              16 hours of structured human capital. From day one — you mine.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {stage1Steps.map((s) => (
              <StepCard key={s.label} step={s} color={PINK} />
            ))}
          </div>
        </div>

        {/* Centre divider */}
        <div className="flex w-14 flex-shrink-0 flex-col items-center justify-center gap-3">
          <div
            className="w-px flex-1"
            style={{
              background: `linear-gradient(to bottom,transparent,${PINK}80,${PURPLE}80,transparent)`,
            }}
          />
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg,rgba(255,45,107,0.2),rgba(123,31,162,0.15))`,
              border: `1.5px solid rgba(255,45,107,0.5)`,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3 L10 17 M5 12 L10 17 L15 12"
                stroke={PINK}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-center text-[6.5px] uppercase leading-relaxed tracking-widest text-white/30">
            Complete
            <br />
            Machine
            <br />
            Self
          </p>
          <div
            className="w-px flex-1"
            style={{
              background: `linear-gradient(to bottom,transparent,${PURPLE}80,${PINK}80,transparent)`,
            }}
          />
        </div>

        {/* Stage 2 */}
        <div className="flex flex-1 flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-2xl p-4"
            style={{
              background:
                "linear-gradient(135deg,rgba(123,31,162,0.18),rgba(255,45,107,0.1))",
              border: `1.5px solid ${PURPLE}`,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[1.5px]"
              style={{
                background: `linear-gradient(90deg,transparent,${PURPLE},transparent)`,
              }}
            />
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
                style={{
                  background: `linear-gradient(135deg,${PURPLE},${PINK})`,
                  boxShadow: `0 0 16px rgba(123,31,162,0.5)`,
                }}
              >
                2
              </div>
              <div>
                <p className="text-[13px] font-black tracking-wide text-purple-400">
                  STAGE 2
                </p>
                <p className="text-[10px] font-bold text-white">
                  Mine While You Work
                </p>
              </div>
            </div>
            <div className="my-3 flex justify-center">
              <BriefcaseIcon />
            </div>
            <p className="text-center text-[9px] leading-relaxed text-white/55">
              Your Machine Self gets matched to{" "}
              <span className="font-bold text-purple-400">real paid work</span>.
              <br />
              Complete work. Earn more OXIT. The matching never stops.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {stage2Steps.map((s) => (
              <StepCard key={s.label} step={s} color={PURPLE} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mt-6 flex w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl transition-all duration-500 delay-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(10px)",
        }}
      >
        <div
          className="w-1 flex-shrink-0"
          style={{ background: `linear-gradient(to bottom,${PINK},${PURPLE})` }}
        />
        <div
          className="flex flex-1 flex-wrap items-center justify-between gap-4 rounded-r-xl border border-white/[0.06] px-5 py-3"
          style={{
            background:
              "linear-gradient(135deg,rgba(255,45,107,.08),rgba(123,31,162,.07))",
          }}
        >
          <p className="max-w-xs text-[11px] font-bold leading-relaxed text-white">
            Every other crypto: invest money. Hope the price rises.
            <br />
            OX: invest your time. Get matched to paid work. Earn.
          </p>
          <div className="flex gap-5 flex-shrink-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-[13px] font-black"
                  style={{
                    background: `linear-gradient(90deg,${PINK},${PURPLE})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[6px] uppercase tracking-widest text-white/30">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:.9} }
      `}</style>
    </section>
  );
}
