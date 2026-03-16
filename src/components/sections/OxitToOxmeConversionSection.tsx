"use client";
import SectionHeader from "@/components/Headings/SectionHeader";
import { PINK, RED, PURPLE } from "@/lib/constants";
import { useEffect, useState } from "react";

const oxitFacts = [
  {
    key: "How it's earned",
    val: "Completing your Machine Self · Answering work requests · Verified participation",
  },
  {
    key: "Where it lives",
    val: "In-app balance on your phone — tracked per verified action",
  },
  {
    key: "Supply",
    val: "Issued proportionally to network activity — demand-side participation",
  },
];

const oxmeFacts = [
  {
    key: "How it's obtained",
    val: "Converted from OXIT at a fixed 1,000:1 rate — or acquired on secondary markets",
  },
  {
    key: "Where it lives",
    val: "On-chain · ERC-20 · Base network · Non-custodial wallet",
  },
  {
    key: "Supply",
    val: "1,371,000,000 OXME · Fixed at genesis · No new tokens can ever be created",
  },
];

const supplyStats = [
  { num: "1,371,000,000", label: "Total OXME supply · Fixed forever" },
  { num: "1,000 : 1", label: "OXIT to OXME · Immutable rate" },
  { num: "ERC-20", label: "Token standard · Base network" },
  { num: "75 / 15 / 10", label: "Users / Investors / Treasury" },
];

function FactRow({
  fact,
  color,
}: {
  fact: { key: string; val: string };
  color: string;
}) {
  return (
    <div
      className="flex items-stretch gap-2 rounded-sm p-2.5 text-left"
      style={{ border: `1px solid ${color}20`, background: `${color}08` }}
    >
      <div
        className="w-0.5 flex-shrink-0 self-stretch rounded-sm"
        style={{ background: color }}
      />
      <div>
        <p className="text-[16px] font-bold leading-snug text-white ">
          {fact.key}
        </p>
        <p className="mt-0.5 text-sm leading-snug text-white/55">
          {fact.val}
        </p>
      </div>
    </div>
  );
}

function TokenCard({
  badge,
  symbol,
  name,
  desc,
  facts,
  accentColor,
  isGradient,
}: {
  badge: string;
  symbol: string;
  name: string;
  desc: string;
  facts: typeof oxitFacts;
  accentColor: string;
  isGradient?: boolean;
}) {
  return (
    <div
      className="relative flex flex-1 flex-col items-center gap-3 overflow-hidden rounded-sm px-6 py-7 text-center sm:px-7 sm:py-9"
      style={{
        background: "#0D0D2B",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background: isGradient
            ? `linear-gradient(90deg,${PINK},${PURPLE})`
            : accentColor,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-50px] left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle,${accentColor}12 0%,transparent 70%)`,
        }}
      />

      <span
        className="rounded-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{
          color: accentColor,
          border: `1px solid ${accentColor}4d`,
          background: `${accentColor}12`,
        }}
      >
        {badge}
      </span>

      <p
        className="text-[clamp(52px,6vw,82px)] font-extrabold leading-none tracking-[-0.04em]"
        style={
          isGradient
            ? {
                background: `linear-gradient(135deg,${PINK},${PURPLE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            : { color: accentColor }
        }
      >
        {symbol}
      </p>

      <p className="text-sm font-bold text-white/65">{name}</p>
      <div
        className="h-0.5 w-9 rounded-sm"
        style={{ background: accentColor }}
      />
      <p className="max-w-[300px] text-sm leading-relaxed text-white/65">
        {desc}
      </p>

      <div className="mt-1 flex w-full flex-col gap-2">
        {facts.map((f) => (
          <FactRow key={f.key} fact={f} color={accentColor} />
        ))}
      </div>
    </div>
  );
}

export function OxitToOxmeConversionSection() {
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
      className="relative w-full px-4 py-16 sm:px-6 sm:py-24"
      style={{ background: "#07071A" }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10">
      {/* Header */}
      <SectionHeader
        pillText="Token Economy"
        title={
          <>
            One fixed rate.{" "}
            <em
              className="not-italic"
              style={{
                background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Immutable. Forever.
            </em>
          </>
        }
        style={fadeIn(0)}
      />

      {/* Conversion row */}
      <div className="relative z-10 w-full max-w-[1060px]" style={fadeIn(80)}>
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-0">
          <TokenCard
            badge="In-App Reward"
            symbol="OXIT"
            name="The earning token"
            desc="Earned every time a human makes a verified contribution to the OX network."
            facts={oxitFacts}
            accentColor={RED}
          />

          {/* Arrow + rate */}
          <div className="flex flex-row items-center justify-center gap-3 sm:flex-col sm:flex-shrink-0 sm:gap-3 sm:px-5">
            <div
              className="h-px w-10 sm:h-8 sm:w-px"
              style={{
                background:
                  "linear-gradient(to right,rgba(255,45,107,0.4),rgba(123,31,162,0.4))",
              }}
            />

            <div
              className="relative overflow-hidden rounded-sm px-5 py-4 text-center"
              style={{
                background: "#0D0D2B",
                border: "1px solid rgba(255,45,107,0.3)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
                }}
              />
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                Conversion Rate
              </p>
              <p
                className="text-[clamp(22px,2.6vw,34px)] font-extrabold leading-none tracking-[-0.03em]"
                style={{
                  background: `linear-gradient(90deg,${RED},${PINK})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1,000 : 1
              </p>
              <p className="mt-1.5 text-[12px] font-semibold text-white">
                OXIT → OXME
              </p>
            </div>

            <div
              className="h-px w-10 sm:h-8 sm:w-px"
              style={{
                background:
                  "linear-gradient(to right,rgba(255,45,107,0.4),rgba(123,31,162,0.4))",
              }}
            />
            <div
              className="h-0 w-0 rotate-90 sm:rotate-0"
              style={{
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: "8px solid rgba(123,31,162,0.6)",
              }}
            />
            <span
              className="whitespace-nowrap rounded-sm px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em]"
              style={{
                color: PINK,
                border: "1px solid rgba(255,45,107,0.25)",
                background: "rgba(255,45,107,0.06)",
              }}
            >
              Fixed Forever
            </span>
          </div>

          <TokenCard
            badge="Crypto Token"
            symbol="OXME"
            name="The value token"
            desc="The scarce, tradeable ERC-20 token on Base. Fixed supply. Set at genesis. Never changes."
            facts={oxmeFacts}
            accentColor={PURPLE}
            isGradient
          />
        </div>
      </div>

      {/* Supply row */}
      <div
        className="relative z-10 w-full max-w-[1060px] overflow-hidden rounded-sm"
        style={{
          ...fadeIn(160),
          background: "#0D0D2B",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.07] sm:grid-cols-4 sm:divide-y-0">
          {supplyStats.map((s) => (
            <div key={s.num} className="px-5 py-4 text-center">
              <p
                className="text-[clamp(14px,1.4vw,19px)] font-extrabold leading-tight tracking-[-0.02em]"
                style={{
                  background: `linear-gradient(90deg,${RED},${PINK})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </p>
              <p className="mt-1 text-[14px] leading-snug text-white">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div
        className="relative z-10 w-full max-w-[1060px] border-t border-white/[0.06] pt-3 text-center text-sm text-white/45"
        style={fadeIn(220)}
      >
        <strong className="font-semibold text-white/65">
          The conversion rate cannot be changed. Ever.
        </strong>{" "}
        Not by Oxygean. Not by token holders. Not by anyone. It is set at
        genesis and enforced by the smart contract.
      </div>
      </div>
    </section>
  );
}
