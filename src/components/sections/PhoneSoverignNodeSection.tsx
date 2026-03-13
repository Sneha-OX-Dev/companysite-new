"use client";
import { useEffect, useState } from "react";

const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const leftCards = [
  { label: "Your Identity", sub: "Biometric. Local. Never uploaded." },
  { label: "Machine Self", sub: "Your AI. Runs locally. 9 superpowers." },
  { label: "Your Data", sub: "2,000 data points. Sovereign. Yours." },
  { label: "Private Keys", sub: "Cryptographic. Non-custodial." },
];

const rightCards = [
  { label: "Consent Signal", sub: "Yes or no. That's all that leaves." },
  { label: "Verified Proof", sub: "Zero knowledge. No metadata." },
  { label: "Timestamp", sub: "When you participated. Nothing more." },
  { label: "OXIT Earned", sub: "On-chain. Immutable. Yours." },
];

const stats = [
  { value: "2,000", label: "Data Points" },
  { value: "4 mins", label: "Daily" },
  { value: "Zero", label: "Uploaded" },
];

function SideCard({
  label,
  sub,
  isLeft,
}: {
  label: string;
  sub: string;
  isLeft?: boolean;
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-2xl px-5 py-4"
      style={
        isLeft
          ? {
              background: "rgba(255,45,107,0.08)",
              border: "1px solid rgba(255,45,107,0.25)",
            }
          : {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
            }
      }
    >
      <p className="text-[14px] font-black text-white">{label}</p>
      <p className="text-[13px] leading-snug text-white/45">{sub}</p>
    </div>
  );
}

function PhoneVisual() {
  const PHONE_W = 160;
  const PHONE_H = 340;
  const ORBIT_R = 120;

  return (
    <div
      className="relative flex flex-shrink-0 items-center justify-center"
      style={{ width: PHONE_W + ORBIT_R * 2 + 20, height: PHONE_H + 80 }}
    >
      {/* orbit rings */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: ORBIT_R * 2,
          height: ORBIT_R * 2,
          border: "1px solid rgba(255,45,107,0.2)",
          animation: "spin 18s linear infinite",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: ORBIT_R * 2 + 70,
          height: ORBIT_R * 2 + 70,
          border: "1px dashed rgba(123,31,162,0.14)",
          animation: "spin 28s linear infinite reverse",
        }}
      />

      {/* orbit dots */}
      {[
        {
          size: 10,
          color: PINK,
          shadow: PINK,
          anim: "orbitdot 7s linear infinite",
        },
        {
          size: 8,
          color: PURPLE,
          shadow: PURPLE,
          anim: "orbitdot2 7s linear infinite",
        },
        {
          size: 6,
          color: "white",
          shadow: "transparent",
          anim: "orbitdot3 7s linear infinite",
          opacity: 0.6,
        },
      ].map((d, i) => (
        <div key={i} className="absolute left-1/2 top-1/2 h-0 w-0">
          <div
            className="absolute rounded-full"
            style={{
              width: d.size,
              height: d.size,
              background: d.color,
              boxShadow: `0 0 ${d.size + 4}px ${d.shadow}`,
              margin: -(d.size / 2),
              opacity: d.opacity ?? 1,
              animation: d.anim,
            }}
          />
        </div>
      ))}

      {/* phone body */}
      <div
        className="relative z-10 flex flex-col"
        style={{
          width: PHONE_W,
          height: PHONE_H,
          background: "linear-gradient(160deg,#1a0030,#0D0D2B)",
          borderRadius: 30,
          border: `2.5px solid rgba(255,45,107,0.8)`,
          boxShadow: `0 0 60px rgba(255,45,107,0.4), 0 0 120px rgba(123,31,162,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
          animation: "float 3.5s ease-in-out infinite",
        }}
      >
        {/* notch */}
        <div
          className="absolute left-1/2 top-[10px] h-[5px] w-[40px] -translate-x-1/2 rounded-full"
          style={{ background: "rgba(0,0,0,0.9)" }}
        />

        {/* screen content */}
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4">
          {/* scanline */}
          <div
            className="absolute inset-x-0 h-px"
            style={{
              background: `linear-gradient(90deg,transparent,${PINK},transparent)`,
              animation: "scanline 2.5s ease-in-out infinite",
              opacity: 0.6,
            }}
          />

          <p
            className="text-[9px] font-bold uppercase tracking-[2px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Machine Self
          </p>

          <p
            className="text-[28px] font-black tracking-tight"
            style={{ color: PINK }}
          >
            2,400 OXIT
          </p>

          {/* progress bars */}
          <div className="flex w-full flex-col gap-2 px-2">
            {[
              {
                lbl: "IQ",
                w: "78%",
                grad: `linear-gradient(90deg,${PINK},${PURPLE})`,
              },
              {
                lbl: "EQ",
                w: "65%",
                grad: `linear-gradient(90deg,${PINK},${PURPLE})`,
              },
              {
                lbl: "XP",
                w: "90%",
                grad: "linear-gradient(90deg,#FFD700,#FF2D6B)",
              },
            ].map((b) => (
              <div key={b.lbl} className="flex items-center gap-2">
                <span className="w-5 text-[9px] text-white/40">{b.lbl}</span>
                <div
                  className="flex-1 rounded-full"
                  style={{ height: 3, background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="rounded-full"
                    style={{ width: b.w, height: "100%", background: b.grad }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* home bar */}
        <div
          className="absolute bottom-[8px] left-1/2 h-[4px] w-10 -translate-x-1/2 rounded-full"
          style={{ background: "rgba(255,255,255,0.18)" }}
        />

        {/* SOVEREIGN badge */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white"
          style={{
            top: -18,
            background: `linear-gradient(135deg,${PINK},${PURPLE})`,
            boxShadow: `0 0 20px rgba(255,45,107,0.7)`,
            whiteSpace: "nowrap",
          }}
        >
          SOVEREIGN
        </div>
      </div>
    </div>
  );
}

export function PhoneSovereignNodeSection() {
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
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden px-6 py-12 sm:px-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%,#1e0535 0%,#07071A 65%)",
      }}
    >
      {/* Header */}
      <div className="text-center" style={fadeIn(0)}>
        <h1 className="text-[clamp(28px,4vw,52px)] font-black tracking-tight text-white">
          Your Phone Is a Sovereign Node
        </h1>
        <p className="mt-2 text-[11px] uppercase tracking-[3px] text-white/30">
          Not a client. Not a terminal. A node.
        </p>
      </div>

      {/* 3-col layout */}
      <div
        className="flex w-full max-w-[1200px] flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-6"
        style={fadeIn(100)}
      >
        {/* Left cards */}
        <div className="flex w-full flex-col gap-3 sm:flex-1">
          <p
            className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]"
            style={{ color: PINK }}
          >
            Stays On Device
          </p>
          {leftCards.map((c) => (
            <SideCard key={c.label} {...c} isLeft />
          ))}
        </div>

        {/* Centre phone */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <PhoneVisual />
        </div>

        {/* Right cards */}
        <div className="flex w-full flex-col gap-3 sm:flex-1">
          <p className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px] text-white/35">
            Signal Only — To Network
          </p>
          {rightCards.map((c) => (
            <SideCard key={c.label} {...c} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex w-full max-w-[900px] overflow-hidden rounded-2xl shadow-2xl"
        style={fadeIn(200)}
      >
        <div
          className="w-1 flex-shrink-0"
          style={{ background: `linear-gradient(to bottom,${PINK},${PURPLE})` }}
        />
        <div
          className="flex flex-1 flex-wrap items-center justify-between gap-4 rounded-r-2xl border border-white/[0.07] px-6 py-4"
          style={{
            background: `linear-gradient(135deg,rgba(255,45,107,.1),rgba(123,31,162,.08))`,
          }}
        >
          <p className="text-[15px] font-black leading-snug text-white">
            Your phone is not a window into OX. It{" "}
            <em className="not-italic" style={{ color: PINK }}>
              is
            </em>{" "}
            OX.
          </p>
          <div className="flex gap-7 flex-shrink-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-[18px] font-black"
                  style={{
                    background: `linear-gradient(90deg,${PINK},${PURPLE})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% auto",
                    animation: "shimmer 3s linear infinite",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[9px] uppercase tracking-widest text-white/30">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.8;transform:scale(1.15)} }
        @keyframes shimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes scanline { 0%{top:5%} 100%{top:90%} }
        @keyframes orbitdot { from{transform:rotate(0deg) translateX(120px) rotate(0deg)} to{transform:rotate(360deg) translateX(120px) rotate(-360deg)} }
        @keyframes orbitdot2 { from{transform:rotate(120deg) translateX(120px) rotate(-120deg)} to{transform:rotate(480deg) translateX(120px) rotate(-480deg)} }
        @keyframes orbitdot3 { from{transform:rotate(240deg) translateX(120px) rotate(-240deg)} to{transform:rotate(600deg) translateX(120px) rotate(-600deg)} }
      `}</style>
    </section>
  );
}
