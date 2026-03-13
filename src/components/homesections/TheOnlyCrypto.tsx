"use client";
import SectionHeader from "@/components/Headings/SectionHeader";
import { PINK, PURPLE } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const stage1Steps = [
  {
    label: "Build Your Machine Self",
    sub: "16 hours · 2,000 data points · Stored on your phone",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      className="flex items-center gap-3 rounded-xl px-3 py-3 sm:px-4"
      style={{ background: `${color}0f`, border: `1px solid ${color}40` }}
    >
      <div
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md sm:h-8 sm:w-8"
        style={{ background: `${color}33`, border: `1px solid ${color}66` }}
      >
        {step.icon}
      </div>
      <div>
        <p className="text-[14px] font-bold text-white">{step.label}</p>
        <p className="text-[12px] text-white/60">{step.sub}</p>
      </div>
    </div>
  );
}

function PhoneClockIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none">
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
    <svg width="72" height="72" viewBox="0 0 64 64" fill="none">
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

function StageCard({
  stage,
  color,
  label,
  title,
  icon,
  description,
  steps,
  accentClass,
}: {
  stage: string;
  color: string;
  label: string;
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  steps: typeof stage1Steps;
  accentClass: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div
        className="relative overflow-hidden rounded-2xl p-5 sm:p-6"
        style={{
          background: `linear-gradient(135deg,${color}2e,${color === PINK ? PURPLE : PINK}1a)`,
          border: `1.5px solid ${color}`,
          boxShadow:
            color === PINK ? `0 0 32px rgba(255,45,107,0.2)` : undefined,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-[1.5px]"
          style={{
            background: `linear-gradient(90deg,transparent,${color},transparent)`,
          }}
        />
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base font-black text-white sm:h-10 sm:w-10"
            style={{
              background:
                color === PINK
                  ? `linear-gradient(135deg,${PINK},${PURPLE})`
                  : `linear-gradient(135deg,${PURPLE},${PINK})`,
              boxShadow: `0 0 16px ${color}80`,
            }}
          >
            {stage}
          </div>
          <div>
            <p
              className="text-[14px] font-black tracking-wide sm:text-[15px]"
              style={{ color }}
            >
              {label}
            </p>
            <p className="text-[14px] font-bold text-white sm:text-[13px]">
              {title}
            </p>
          </div>
        </div>
        <div className="my-4 flex justify-center">{icon}</div>
        <p className={`text-center text-[14px] leading-relaxed ${accentClass}`}>
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((s) => (
          <StepCard key={s.label} step={s} color={color} />
        ))}
      </div>
    </div>
  );
}
export default function TheOnlyCryptoSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const fadeIn = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(12px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  });

  return (
    <section
      id="two-stage-earning"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-20 text-white justify-center items-center"
    >
      <SectionHeader
        title="The Only Crypto You Mine With Your Time"
        subtitle="Every crypto network on earth wants your money. OX wants your time."
        align="center"
      />

      {/* Core explanation */}
      <p className="max-w-3xl text-[13px] leading-relaxed text-white/75 sm:text-[14px] mb-4">
        This is the only crypto network in the world where financial investment
        is not the entry point. You do not buy your way in. You build your way
        in. And while you build — you earn.
      </p>

      {/* Two columns — stacks on mobile */}
      <div
        className="flex w-full max-w-4xl flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-4"
        style={fadeIn(100)}
      >
        <StageCard
          stage="1"
          color={PINK}
          label="STAGE 1"
          title="Mine While You Build"
          icon={<PhoneClockIcon />}
          accentClass="text-white/70"
          description={
            <>
              Spend{" "}
              <span className="font-bold" style={{ color: PINK }}>
                4 minutes a day
              </span>{" "}
              completing your Machine Self.
              <br />
              16 hours of structured human capital. From day one — you mine.
            </>
          }
          steps={stage1Steps}
        />

        {/* Centre divider — hidden on mobile, shown on sm+ */}
        <div className="hidden w-14 shrink-0 flex-col items-center justify-center gap-3 sm:flex">
          <div
            className="w-px flex-1"
            style={{
              background: `linear-gradient(to bottom,transparent,${PINK}80,${PURPLE}80,transparent)`,
            }}
          />
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
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
          <p className="text-center text-[7px] uppercase leading-relaxed tracking-widest text-white/80">
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

        {/* Mobile divider */}
        <div className="flex items-center gap-3 sm:hidden">
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(to right,transparent,${PINK}80,${PURPLE}80,transparent)`,
            }}
          />
          <p className="text-[8px] uppercase tracking-widest text-white/70">
            Complete Machine Self
          </p>
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(to right,transparent,${PURPLE}80,${PINK}80,transparent)`,
            }}
          />
        </div>

        <StageCard
          stage="2"
          color={PURPLE}
          label="STAGE 2"
          title="Mine While You Work"
          icon={<BriefcaseIcon />}
          accentClass="text-white/70"
          description={
            <>
              Your Machine Self gets matched to{" "}
              <span className="font-bold text-purple-400">real paid work</span>.
              <br />
              Complete work. Earn more OXIT. The matching never stops.
            </>
          }
          steps={stage2Steps}
        />
      </div>

      {/* Bottom bar */}
      <div
        className="mt-6 flex w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl sm:mt-8"
        style={fadeIn(200)}
      >
        <div
          className="w-1 shrink-0"
          style={{ background: `linear-gradient(to bottom,${PINK},${PURPLE})` }}
        />
        <div
          className="flex flex-1 flex-wrap items-center justify-between gap-4 rounded-r-xl border border-white/[0.06] px-4 py-4 sm:px-6"
          style={{
            background:
              "linear-gradient(135deg,rgba(255,45,107,.08),rgba(123,31,162,.07))",
          }}
        >
          <p className="text-[11px] font-bold leading-relaxed text-white sm:max-w-xs sm:text-[13px]">
            Every other crypto: invest money. Hope the price rises.
            <br />
            OX: invest your time. Get matched to paid work. Earn.
          </p>
          <div className="flex flex-wrap gap-5 shrink-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-[14px] font-black sm:text-[16px]"
                  style={{
                    background: `linear-gradient(90deg,${PINK},${PURPLE})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[7px] uppercase tracking-widest text-white sm:text-[8px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:.9} }`}</style>

      {/* Token block */}
      <div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)] sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
          The token
        </p>
        <h3 className="mt-2 font-heading text-[20px] font-semibold tracking-[-0.02em] text-white sm:text-[22px]">
          Fixed conversion. Fixed supply. Human-mined.
        </h3>
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
            OXIT converts to OXME at a fixed, immutable rate.{" "}
            <span className="font-semibold text-white">1,000 OXIT</span> to{" "}
            <span className="font-semibold text-white">1 OXME</span>. Both
            tokens have a fixed total supply set at genesis. No additional
            tokens can ever be created. By anyone. Ever.
            <br />
            <br />
            The only way either token enters circulation is through{" "}
            <span className="font-semibold text-white">
              verified human participation
            </span>
            . Not capital. Not machines. People.
          </p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Rate
            </p>
            <p className="mt-1 bg-linear-to-r from-[#FF2D6B] via-[#c0255a] to-[#7B1FA2] bg-clip-text text-[26px] font-black tracking-[-0.04em] text-transparent">
              1,000 : 1
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-white/60">
              OXIT converts to OXME at a fixed, immutable rate.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison block */}
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            The comparison
          </p>
          <h3 className="mt-2 font-heading text-[18px] font-semibold tracking-[-0.02em] text-white sm:text-[20px]">
            Every other crypto
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
            Invest money. Hope the price rises.
          </p>
        </div>

        <div className="rounded-2xl border border-[#FF2D6B]/25 bg-black/35 p-6 shadow-[0_18px_60px_rgba(255,45,107,0.12)]">
          <p className="text-[16px] font-semibold uppercase tracking-[0.22em] text-[#FF9BB8]">
            OX
          </p>
          <h3 className="mt-2 font-heading text-[18px] font-semibold tracking-[-0.02em] text-white sm:text-[20px]">
            Invest your time. Earn the network.
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
            Get matched to paid work. Earn a scarce token backed by real human
            capital. The supply is fixed. The work keeps coming. The network
            grows every time another human agent joins.
          </p>
          <p className="mt-4 text-[13px] font-semibold text-white sm:text-[14px]">
            Bitcoin is mined with electricity.{" "}
            <span className="bg-linear-to-r from-[#FF2D6B] to-[#7B1FA2] bg-clip-text text-transparent">
              OX is mined with human TIME.
            </span>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Link
          href="#machine-self"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-[16px] font-semibold text-white shadow-[0_0_34px_rgba(255,45,107,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(255,45,107,0.9)]"
        >
          Build Your Machine Self. Start earning.
        </Link>
      </div>
    </section>
  );
}
