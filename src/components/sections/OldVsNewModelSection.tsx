"use client";
import { useEffect, useState } from "react";

const PINK = "#FF2D6B";
const RED = "#E8264A";
const PURPLE = "#7B1FA2";

const leftRows = [
  {
    title: "Centralised data ownership",
    desc: "Platform holds all participant data centrally — owned by the company, not the individual",
  },
  {
    title: "Platform extracts value from participants",
    desc: "Every gig platform, professional network, and task exchange takes a cut — participants are the product",
  },
  {
    title: "Ratings and reputation scores control access",
    desc: "Historical behaviour determines who gets work — not verified capability",
  },
  {
    title: "Platform owns the supply-demand relationship",
    desc: "The intermediary sits between every buyer and seller — and charges accordingly",
  },
  {
    title: "Data can be hacked, sold, or subpoenaed",
    desc: "Central databases are single points of failure for privacy, security, and trust",
  },
  {
    title: "Participants have no sovereignty",
    desc: "You participate on the platform's terms — your data, your identity, their asset",
  },
];

const rightRows = [
  {
    title: "Data never leaves the participant's device",
    desc: "Every Machine Self lives on the individual's phone — local, sovereign, unhackable at source",
  },
  {
    title: "Value flows back through the token economy",
    desc: "Tokens earned by participants — not extracted by a platform intermediary",
  },
  {
    title: "Matching based on verified, declared capability",
    desc: "2,000 human-created data points — not ratings, scores, or historical behaviour",
  },
  {
    title: "OX replaces the architecture entirely",
    desc: "OX does not compete with existing platforms. It replaces the architecture they are all built on",
  },
  {
    title: "One billion sovereign nodes — no central failure point",
    desc: "No database to hack, sell, or subpoena. Each Machine Self owned by the individual it represents",
  },
  {
    title: "Participants are sovereign economic actors",
    desc: "You own your Machine Self. You control your data. You set your consent. You earn the value.",
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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-1 cursor-default items-stretch gap-3 rounded-md px-3.5 py-3 transition-all duration-200"
      style={{
        border: isRight
          ? `1px solid ${hovered ? PINK + "55" : "rgba(255,45,107,0.1)"}`
          : `1px solid ${hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.05)"}`,
        background: isRight
          ? hovered
            ? "rgba(255,45,107,0.08)"
            : "rgba(255,45,107,0.025)"
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
          background: isRight
            ? hovered
              ? PINK
              : "rgba(255,45,107,0.6)"
            : hovered
              ? "rgba(255,255,255,0.45)"
              : "rgba(255,255,255,0.14)",
          boxShadow: hovered
            ? isRight
              ? `0 0 8px ${PINK}`
              : "0 0 8px rgba(255,255,255,0.3)"
            : "none",
        }}
      />
      <div>
        <p
          className="text-[13px] font-bold leading-snug mb-1 transition-colors duration-200 sm:text-[14px]"
          style={{
            color: isRight
              ? hovered
                ? "#fff"
                : "rgba(255,255,255,0.9)"
              : hovered
                ? "rgba(255,255,255,0.75)"
                : "rgba(255,255,255,0.45)",
          }}
        >
          {title}
        </p>
        <p className="text-[11px] leading-snug text-white/35 sm:text-[12px]">
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
      className="flex min-h-0 flex-1 flex-col gap-2 p-4 sm:p-5"
      style={{
        background: "#0D0D2B",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: isRight ? "0 6px 6px 0" : "6px 0 0 6px",
        borderLeft: isRight ? "none" : undefined,
      }}
    >
      <p
        className="mb-0.5 flex-shrink-0 text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]"
        style={{ color: isRight ? PINK : "rgba(255,255,255,0.28)" }}
      >
        {label}
      </p>
      <p
        className="flex-shrink-0 border-b border-white/[0.06] pb-3 text-[12px] font-bold leading-snug sm:text-[14px]"
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

function VSCentre() {
  return (
    <>
      {/* Desktop vertical */}
      <div className="relative hidden w-[56px] flex-shrink-0 items-center justify-center sm:flex">
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "6%",
            bottom: "6%",
            width: 1,
            background:
              "linear-gradient(180deg,transparent,rgba(255,45,107,0.3) 30%,rgba(255,45,107,0.3) 70%,transparent)",
          }}
        />
        <div
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-black"
          style={{
            background: "#07071A",
            border: "1px solid rgba(255,45,107,0.35)",
            color: PINK,
            boxShadow: `0 0 16px rgba(255,45,107,0.15)`,
          }}
        >
          VS
        </div>
      </div>

      {/* Mobile horizontal */}
      <div className="flex items-center gap-3 sm:hidden">
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right,transparent,rgba(255,45,107,0.3),transparent)",
          }}
        />
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black"
          style={{
            background: "#07071A",
            border: "1px solid rgba(255,45,107,0.35)",
            color: PINK,
          }}
        >
          VS
        </div>
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right,transparent,rgba(255,45,107,0.3),transparent)",
          }}
        />
      </div>
    </>
  );
}

export function OldVsOxSection() {
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
      {/* grid */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.013) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.013) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center" style={fadeIn(0)}>
        <span
          className="mb-2 inline-block rounded-sm px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]"
          style={{
            color: PINK,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.07)",
          }}
        >
          Diagram 9 — Section 6 · What Is OX
        </span>
        <h2 className="text-[clamp(17px,1.9vw,24px)] font-extrabold leading-tight tracking-[-0.025em]">
          A different architecture{" "}
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            to every existing marketplace.
          </em>
        </h2>
      </div>

      {/* Main columns */}
      <div
        className="relative z-10 flex w-full max-w-[1080px] flex-1 flex-col sm:flex-row"
        style={{ minHeight: 0, ...fadeIn(70) }}
      >
        {/* Mobile */}
        <div className="flex flex-col gap-4 sm:hidden">
          <Panel
            label="The Old Model"
            heading="Centralised. Extractive. Platform takes the value."
            rows={leftRows}
          />
          <VSCentre />
          <Panel
            label="The OX Model"
            heading="Decentralised. Consent-based. Value flows back to participants."
            rows={rightRows}
            isRight
          />
        </div>

        {/* Desktop */}
        <div className="hidden flex-1 sm:flex" style={{ minHeight: 0 }}>
          <Panel
            label="The Old Model"
            heading="Centralised. Extractive. Platform takes the value."
            rows={leftRows}
          />
          <VSCentre />
          <Panel
            label="The OX Model"
            heading="Decentralised. Consent-based. Value flows back to participants."
            rows={rightRows}
            isRight
          />
        </div>
      </div>

      {/* Bottom pills */}
      <div
        className="relative z-10 grid w-full max-w-[1080px] grid-cols-1 gap-3 sm:grid-cols-[1fr_56px_1fr]"
        style={fadeIn(140)}
      >
        <BottomPill
          strong="Old architecture:"
          text=" every existing human coordination marketplace extracts value from participants and holds their data centrally."
        />
        <div className="hidden sm:block" />
        <BottomPill
          strong="OX architecture:"
          text=" structured participation, not surveillance. Value flows back to the people who built the network."
          isRight
        />
      </div>

      {/* Closing */}
      <div
        className="relative z-10 w-full max-w-[1080px] border-t border-white/[0.06] pt-3 text-center text-[11px] text-white/28 sm:text-[12px]"
        style={fadeIn(180)}
      >
        <strong className="font-semibold text-white/55">
          OX does not compete with these platforms.
        </strong>{" "}
        It replaces the architecture they are all built on.
      </div>
    </section>
  );
}

function BottomPill({
  strong,
  text,
  isRight,
}: {
  strong: string;
  text: string;
  isRight?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-stretch gap-3 rounded-md px-4 py-3.5 transition-all duration-200 cursor-default"
      style={{
        background: isRight
          ? hovered
            ? "rgba(255,45,107,0.08)"
            : "rgba(255,45,107,0.04)"
          : hovered
            ? "rgba(255,255,255,0.05)"
            : "#0D0D2B",
        border: isRight
          ? `1px solid ${hovered ? PINK + "55" : "rgba(255,45,107,0.15)"}`
          : `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered
          ? isRight
            ? `0 8px 30px rgba(255,45,107,0.15)`
            : "0 8px 30px rgba(0,0,0,0.3)"
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-[3px] flex-shrink-0 self-stretch rounded-sm transition-all duration-200"
        style={{
          background: isRight ? PINK : "rgba(255,255,255,0.2)",
          boxShadow: hovered ? (isRight ? `0 0 8px ${PINK}` : "none") : "none",
        }}
      />
      <p className="text-[12px] leading-relaxed text-white/45 sm:text-[13px]">
        <strong className="font-bold text-white">{strong}</strong>
        {text}
      </p>
    </div>
  );
}
