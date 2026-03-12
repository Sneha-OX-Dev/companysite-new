"use client";
import { useEffect, useState } from "react";

const RED = "#E8264A";
const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const btcRows = [
  {
    key: "Entry point",
    val: "Capital — you need money to buy mining hardware and pay for electricity",
  },
  {
    key: "What does the work",
    val: "Machines — ASICs running computations 24 hours a day",
  },
  {
    key: "What is consumed",
    val: "Electricity — Bitcoin mining consumes more energy than many countries",
  },
  {
    key: "What is produced",
    val: "Proof of work — a mathematical solution with no real-world utility beyond the token",
  },
  {
    key: "Who benefits",
    val: "Those with the most capital and cheapest energy — highly centralised over time",
  },
];

const oxRows = [
  {
    key: "Entry point",
    val: "Time — 4 minutes a day. No money required. No hardware required.",
  },
  {
    key: "What does the work",
    val: "Humans — building their Machine Self and contributing verified intelligence to the network",
  },
  {
    key: "What is consumed",
    val: "Human capital — 16 hours of structured input stored as 2,000 data points",
  },
  {
    key: "What is produced",
    val: "Verified human intelligence — real utility for every system and organisation in the network",
  },
  {
    key: "Who benefits",
    val: "Every participant equally — the more humans who join, the more the network and every token is worth",
  },
];

function CardRow({
  rowKey,
  val,
  isOx,
}: {
  rowKey: string;
  val: string;
  isOx?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex cursor-default items-stretch gap-3 rounded-md px-3.5 py-3 transition-all duration-200"
      style={{
        border: isOx
          ? `1px solid ${hovered ? PINK + "55" : "rgba(255,45,107,0.12)"}`
          : `1px solid ${hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.05)"}`,
        background: isOx
          ? hovered
            ? "rgba(255,45,107,0.08)"
            : "rgba(255,45,107,0.03)"
          : hovered
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.02)",
        transform: hovered ? "translateX(3px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-[3px] flex-shrink-0 self-stretch rounded-sm transition-all duration-200"
        style={{
          background: isOx ? PINK : "rgba(255,255,255,0.15)",
          boxShadow: hovered ? (isOx ? `0 0 8px ${PINK}88` : "none") : "none",
        }}
      />
      <div>
        <p
          className="mb-1 text-[13px] font-bold leading-tight sm:text-[14px]"
          style={{ color: isOx ? "#fff" : "rgba(255,255,255,0.45)" }}
        >
          {rowKey}
        </p>
        <p className="text-[12px] leading-snug text-white/32 sm:text-[13px]">
          {val}
        </p>
      </div>
    </div>
  );
}

function MiningCard({ isOx }: { isOx?: boolean }) {
  const rows = isOx ? oxRows : btcRows;
  return (
    <div
      className="relative flex flex-col gap-4 overflow-hidden rounded-lg p-5 sm:p-6"
      style={{
        background: "#0D0D2B",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* top bar */}
      <div
        className="absolute left-0 right-0 top-0 h-[3px]"
        style={{
          background: isOx
            ? `linear-gradient(90deg,${RED},${PINK},${PURPLE})`
            : "rgba(255,255,255,0.2)",
        }}
      />
      {/* corner glow */}
      <div
        className="pointer-events-none absolute -bottom-14 -right-14 h-48 w-48 rounded-full"
        style={{
          background: isOx
            ? "radial-gradient(circle,rgba(255,45,107,0.09) 0%,transparent 70%)"
            : "radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 70%)",
        }}
      />

      {/* label */}
      <p
        className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]"
        style={{ color: isOx ? PINK : "rgba(255,255,255,0.3)" }}
      >
        {isOx ? "OX" : "Bitcoin"}
      </p>

      {/* headline */}
      <div>
        <p
          className="text-[clamp(22px,2.6vw,34px)] font-black leading-tight tracking-[-0.03em]"
          style={
            isOx
              ? {
                  background: `linear-gradient(90deg,${RED},${PINK})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : { color: "rgba(255,255,255,0.5)" }
          }
        >
          {isOx ? "Mined with" : "Mined with"}
          <br />
          {isOx ? "human intelligence." : "electricity."}
        </p>
        <p
          className="mt-2 border-b border-white/[0.06] pb-4 text-[13px] font-semibold leading-snug sm:text-[14px]"
          style={{
            color: isOx ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.35)",
          }}
        >
          {isOx
            ? "Human participation. Time and attention. Verified contribution."
            : "Machine computation. Energy consumption. Capital investment."}
        </p>
      </div>

      {/* rows */}
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <CardRow key={r.key} rowKey={r.key} val={r.val} isOx={isOx} />
        ))}
      </div>
    </div>
  );
}

export function HumanMiningSection() {
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
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 px-4 py-10 sm:px-8 sm:py-14"
      style={{ background: "#07071A", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* grid overlay */}
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
          Diagram 11 — Section 9 · Token Economy
        </span>
        <h2 className="text-[clamp(20px,2.4vw,32px)] font-extrabold leading-tight tracking-[-0.025em]">
          Two ways to mine a{" "}
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            scarce token.
          </em>
        </h2>
      </div>

      {/* ── CARDS ── */}
      <div
        className="relative z-10 grid w-full max-w-[1060px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        style={fadeIn(80)}
      >
        <MiningCard />
        <MiningCard isOx />
      </div>

      {/* ── STATEMENT ── */}
      <div
        className="relative z-10 w-full max-w-[1060px] overflow-hidden rounded-lg text-center"
        style={{
          background: "#0D0D2B",
          border: "1px solid rgba(255,45,107,0.22)",
          ...fadeIn(160),
        }}
      >
        {/* top gradient bar */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
          }}
        />
        <div className="px-6 py-5 sm:px-10 sm:py-6">
          <p className="text-[15px] font-bold leading-snug text-white sm:text-[17px]">
            Bitcoin is mined with electricity.{" "}
            <em
              className="not-italic"
              style={{
                background: `linear-gradient(90deg,${RED},${PINK})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OX is mined with human intelligence.
            </em>
          </p>
          <p className="mt-2 text-[13px] font-medium leading-relaxed text-white/45 sm:text-[14px]">
            The only way a token enters circulation is when a human being earns
            it. Not generated. Not purchased. Earned.
          </p>
        </div>
      </div>

      {/* ── CLOSING ── */}
      <div
        className="relative z-10 w-full max-w-[1060px] border-t border-white/[0.06] pt-4 text-center text-[12px] text-white/28 sm:text-[13px]"
        style={fadeIn(220)}
      >
        <strong className="font-semibold text-white/52">
          Fixed supply: 1,371,000,000 OXME.
        </strong>{" "}
        Set at genesis. No new tokens can ever be created. By anyone. Ever.
      </div>
    </section>
  );
}
