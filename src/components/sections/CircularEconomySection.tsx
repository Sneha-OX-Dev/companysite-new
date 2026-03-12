"use client";
import { useEffect, useState } from "react";

const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const leftCards = [
  {
    tag: "OXME IN →",
    title: "Organisations",
    desc: "Pay OXME to access verified human intelligence at scale",
  },
  {
    tag: "OXME IN →",
    title: "Research Bodies",
    desc: "Buy verified human data insights from the protocol",
  },
  {
    tag: "OXME IN →",
    title: "AI Companies",
    desc: "Pay for verified human-labelled training data",
  },
  {
    tag: "OXME IN →",
    title: "Investors",
    desc: "15% allocation. Fixed. No new minting ever.",
  },
];

const rightCards = [
  {
    tag: "← OXIT OUT",
    title: "Humans",
    desc: "Earn OXIT for every verified task and participation",
  },
  {
    tag: "1,000 : 1",
    title: "Conversion",
    desc: "1,000 OXIT = 1 OXME. Fixed rate. Immutable. Forever.",
  },
  {
    tag: "← OXME HELD",
    title: "Holders",
    desc: "Holding creates scarcity. More demand. Rising value.",
  },
  {
    tag: "75%",
    title: "User Programs",
    desc: "75% of all OXME reserved for the humans who mine it.",
  },
];

const stats = [
  { value: "1,371,000,000", label: "OXME · Fixed Forever" },
  { value: "1,000:1", label: "OXIT to OXME" },
  { value: "ERC-20", label: "Base Network" },
  { value: "75 / 15 / 10", label: "Users / Investors / Treasury" },
];

function EconomyCard({
  tag,
  title,
  desc,
  isRight,
}: {
  tag: string;
  title: string;
  desc: string;
  isRight?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cursor-default rounded-xl px-4 py-4 transition-all duration-200"
      style={{
        background: isRight
          ? hovered
            ? "linear-gradient(135deg,rgba(123,31,162,0.25),rgba(255,45,107,0.14))"
            : "linear-gradient(135deg,rgba(123,31,162,0.11),rgba(255,45,107,0.07))"
          : hovered
            ? "linear-gradient(135deg,rgba(255,45,107,0.2),rgba(123,31,162,0.14))"
            : "linear-gradient(135deg,rgba(255,45,107,0.11),rgba(123,31,162,0.07))",
        border: isRight
          ? `1px solid ${hovered ? PURPLE + "99" : "rgba(123,31,162,0.38)"}`
          : `1px solid ${hovered ? PINK + "99" : "rgba(255,45,107,0.38)"}`,
        transform: hovered
          ? isRight
            ? "translateX(-3px)"
            : "translateX(3px)"
          : "none",
        boxShadow: hovered
          ? isRight
            ? `0 6px 28px rgba(123,31,162,0.22)`
            : `0 6px 28px rgba(255,45,107,0.22)`
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="mb-2.5 inline-block rounded-full px-3 py-1 text-[11px] font-bold sm:text-[12px]"
        style={
          isRight
            ? {
                background: "rgba(123,31,162,0.22)",
                border: "1px solid rgba(123,31,162,0.45)",
                color: "#a855f7",
              }
            : {
                background: "rgba(255,45,107,0.16)",
                border: "1px solid rgba(255,45,107,0.35)",
                color: PINK,
              }
        }
      >
        {tag}
      </span>
      <p className="mb-1 text-[15px] font-extrabold text-white sm:text-[16px]">
        {title}
      </p>
      <p className="text-[13px] leading-snug text-white/45 sm:text-[14px]">
        {desc}
      </p>
    </div>
  );
}

function OrbitalCore() {
  return (
    <div
      className="relative flex flex-shrink-0 items-center justify-center"
      style={{ width: 290, height: 290 }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px dashed rgba(255,45,107,0.25)",
          animation: "oxSpin 22s linear infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          inset: 10,
          border: "1px solid rgba(123,31,162,0.2)",
          animation: "oxSpinRev 32s linear infinite",
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 290 290">
        <defs>
          <marker
            id="mh1"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill={PINK} opacity="0.9" />
          </marker>
          <marker
            id="mh2"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill={PURPLE} opacity="0.9" />
          </marker>
        </defs>
        <path
          d="M 145 10 A 135 135 0 0 1 280 145"
          stroke={PINK}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#mh1)"
          opacity="0.65"
          strokeDasharray="7 5"
        />
        <path
          d="M 280 145 A 135 135 0 0 1 10 145"
          stroke={PURPLE}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#mh2)"
          opacity="0.65"
          strokeDasharray="7 5"
        />
        <path
          d="M 10 145 A 135 135 0 0 1 145 10"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          strokeDasharray="4 4"
        />
      </svg>

      {[
        { size: 9, color: PINK, delay: "0s" },
        { size: 7, color: PURPLE, delay: "-1.67s" },
        { size: 6, color: "rgba(255,255,255,0.7)", delay: "-3.33s" },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: 0,
            height: 0,
            top: "50%",
            left: "50%",
            animation: "oxSpin 5s linear infinite",
            animationDelay: d.delay,
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: d.size,
              height: d.size,
              background: d.color,
              boxShadow: `0 0 10px ${d.color}`,
              marginTop: -d.size / 2,
              marginLeft: -d.size / 2,
              transform: "translateX(127px)",
            }}
          />
        </div>
      ))}

      <p
        className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40"
        style={{ top: 4, whiteSpace: "nowrap" }}
      >
        OXME Flows In
      </p>
      <p
        className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40"
        style={{ bottom: 4, whiteSpace: "nowrap" }}
      >
        OXIT Flows Out
      </p>

      <div
        className="relative z-10 flex flex-col items-center justify-center rounded-full"
        style={{
          width: 138,
          height: 138,
          background:
            "radial-gradient(circle at 38% 30%,#FF2D6B99 0%,#FF2D6B33 35%,#1a0028 65%,#07071A 100%)",
          border: "2.5px solid rgba(255,45,107,0.65)",
          boxShadow: `0 0 52px rgba(255,45,107,0.38),0 0 100px rgba(123,31,162,0.2),inset 0 2px 0 rgba(255,255,255,0.13)`,
          animation: "oxFloat 3s ease-in-out infinite",
        }}
      >
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            top: 12,
            left: 20,
            width: "36%",
            height: "24%",
            background: "rgba(255,255,255,0.18)",
            filter: "blur(5px)",
          }}
        />
        <p
          className="z-10 text-[34px] font-black text-white"
          style={{ textShadow: `0 0 22px ${PINK}`, letterSpacing: -2 }}
        >
          OX
        </p>
        <p className="z-10 text-[10px] uppercase tracking-[2px] text-white/45">
          Protocol
        </p>
        <div
          className="z-10 mt-2 rounded-lg px-2.5 py-0.5 text-[10px] font-bold"
          style={{
            background: "rgba(255,45,107,0.2)",
            border: "1px solid rgba(255,45,107,0.45)",
            color: PINK,
            whiteSpace: "nowrap",
          }}
        >
          FIXED SUPPLY
        </div>
      </div>
    </div>
  );
}

export function CircularEconomySection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const fadeIn = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(12px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  });

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 py-10 sm:px-8 sm:py-14"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%,#1e0535 0%,#07071A 65%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* grid */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.013) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.013) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── HEADER ── */}
      <div
        className="relative z-10 flex w-full flex-col items-center text-center"
        style={fadeIn(0)}
      >
        <div
          className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          style={{
            background: "rgba(255,45,107,.1)",
            border: "1px solid rgba(255,45,107,.3)",
          }}
        >
          <span
            className="h-[7px] w-[7px] rounded-full"
            style={{
              background: PINK,
              boxShadow: `0 0 9px ${PINK}`,
              animation: "oxPulse 2s infinite",
            }}
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[2.5px] sm:text-[12px]"
            style={{ color: PINK }}
          >
            Token Economy
          </span>
        </div>
        <h1 className="text-[clamp(24px,3.4vw,44px)] font-black tracking-tight text-white">
          Human-Mined Circular Economy
        </h1>
        <p className="mt-2 text-[12px] uppercase tracking-[1.5px] text-white/30 sm:text-[13px]">
          Organisations pay in · Humans earn out · Fixed supply · Growing demand
        </p>
      </div>

      {/* ── MAIN ROW ── */}
      <div
        className="relative z-10 flex w-full max-w-[1140px] flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-8"
        style={fadeIn(90)}
      >
        {/* Left */}
        <div className="flex w-full flex-col gap-3 sm:flex-1 sm:max-w-[230px]">
          <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-white/30 sm:text-right sm:text-[12px]">
            Demand Side
          </p>
          {leftCards.map((c) => (
            <EconomyCard key={c.title} {...c} />
          ))}
        </div>

        {/* Centre orb */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <OrbitalCore />
        </div>

        {/* Right */}
        <div className="flex w-full flex-col gap-3 sm:flex-1 sm:max-w-[230px]">
          <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-white/30 sm:text-left sm:text-[12px]">
            Supply Side
          </p>
          {rightCards.map((c) => (
            <EconomyCard key={c.title} {...c} isRight />
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="relative z-10 w-full max-w-[1140px] overflow-hidden rounded-xl shadow-2xl"
        style={fadeIn(170)}
      >
        <div className="flex overflow-hidden rounded-xl">
          <div
            className="w-[5px] flex-shrink-0"
            style={{
              background: `linear-gradient(to bottom,${PINK},${PURPLE})`,
            }}
          />
          <div
            className="flex flex-1 flex-col items-center gap-5 rounded-r-xl border border-white/[0.06] px-6 py-5 sm:flex-row sm:justify-between"
            style={{
              background:
                "linear-gradient(135deg,rgba(255,45,107,.09),rgba(123,31,162,.07))",
            }}
          >
            {/* Statement */}
            <p className="text-center text-[15px] font-extrabold leading-snug text-white sm:text-left sm:text-[16px] sm:max-w-[340px]">
              Organisations pay tokens to access the network. Humans earn those
              tokens by participating. Fixed supply. Growing demand.
            </p>

            {/* Stats — always centred */}
            <div className="flex w-full flex-wrap items-center justify-center gap-6 sm:w-auto sm:flex-nowrap sm:gap-8">
              {stats.map((s) => (
                <StatPill key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes oxSpin    { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes oxSpinRev { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes oxPulse   { 0%,100%{opacity:.35} 50%{opacity:.95} }
        @keyframes oxFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes oxShimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
      `}</style>
    </section>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex cursor-default flex-col items-center gap-1 transition-transform duration-150"
      style={{ transform: hovered ? "translateY(-3px)" : "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="text-[18px] font-black sm:text-[20px]"
        style={{
          background: `linear-gradient(90deg,${PINK},${PURPLE})`,
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "oxShimmer 3s linear infinite",
        }}
      >
        {value}
      </p>
      <p className="text-center text-[10px] uppercase tracking-[1px] text-white/35 sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}
