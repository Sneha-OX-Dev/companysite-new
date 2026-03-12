"use client";
import { useEffect, useState } from "react";

const RED = "#E8264A";
const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const leftRows = [
  { verb: "Predict", desc: "Probabilistic inference from historical data" },
  { verb: "Infer", desc: "Pattern-matching on aggregated behaviour" },
  { verb: "Forecast", desc: "Approximation — never confirmed truth" },
  {
    verb: "Route work blind",
    desc: "Broad targeting — high waste, low precision",
  },
];

const rightRows = [
  { verb: "Act", desc: "Real decisions from real people in real time" },
  { verb: "Decide", desc: "Verified consent — cryptographically bound" },
  { verb: "Execute", desc: "Physical and digital work — confirmed on-chain" },
  { verb: "Earn", desc: "OXIT rewarded for every verified contribution" },
];

const bridgeNodes = [
  {
    cap: "Demand enters",
    lines: ["Enterprise", "request"],
    type: "dim" as const,
  },
  {
    cap: "Machine Self",
    lines: ["Match", "Filter", "Contextualise"],
    type: "ms" as const,
  },
  {
    cap: "OX Verification",
    lines: ["Verify", "Consent", "Confirm"],
    type: "vx" as const,
  },
  {
    cap: "Settled on-chain",
    lines: ["Reward", "issued"],
    type: "dim" as const,
  },
];

const bottomPills = [
  {
    strong: "Systems gain certainty.",
    text: " Enterprises purchase verified outcomes — not user data.",
    color: "rgba(255,255,255,0.2)",
  },
  {
    strong: "Humans retain agency.",
    text: " Data never leaves the device. Only a consent signal is transmitted.",
    color: PINK,
  },
];

function PanelRow({
  verb,
  desc,
  isRight,
}: {
  verb: string;
  desc: string;
  isRight?: boolean;
}) {
  return (
    <div
      className="flex items-stretch gap-2.5 rounded-sm px-3 py-3"
      style={
        isRight
          ? {
              border: "1px solid rgba(255,45,107,0.12)",
              background: "rgba(255,45,107,0.03)",
            }
          : {
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
            }
      }
    >
      <div
        className="w-[3px] flex-shrink-0 self-stretch rounded-sm"
        style={{ background: isRight ? PINK : "rgba(255,255,255,0.15)" }}
      />
      <div>
        <p
          className="text-[13px] font-bold leading-tight mb-0.5 sm:text-[14px]"
          style={{ color: isRight ? "#fff" : "rgba(255,255,255,0.55)" }}
        >
          {verb}
        </p>
        <p className="text-[11px] leading-snug text-white/38 sm:text-[12px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Panel({
  tag,
  heading,
  rows,
  isRight,
}: {
  tag: string;
  heading: string;
  rows: typeof leftRows;
  isRight?: boolean;
}) {
  return (
    <div
      className="flex flex-col gap-2.5 p-4 sm:p-5"
      style={{
        background: "#0D0D2B",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: isRight ? "0 4px 4px 0" : "4px 0 0 4px",
        borderLeft: isRight ? "none" : undefined,
      }}
    >
      <p
        className="text-[14px] font-bold uppercase tracking-[0.2em] mb-0.5"
        style={{ color: isRight ? PINK : "rgba(255,255,255,0.35)" }}
      >
        {tag}
      </p>
      <p
        className="text-[14px] font-bold leading-snug mb-1 border-b border-white/[0.06] pb-3 "
        style={{ color: isRight ? "#fff" : "rgba(255,255,255,0.6)" }}
      >
        {heading}
      </p>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <PanelRow
            key={r.verb}
            verb={r.verb}
            desc={r.desc}
            isRight={isRight}
          />
        ))}
      </div>
    </div>
  );
}

function BridgeNode({ node }: { node: (typeof bridgeNodes)[0] }) {
  const styles = {
    ms: {
      border: `1.5px solid ${RED}`,
      background: "rgba(232,38,74,0.1)",
      capColor: RED,
    },
    vx: {
      border: `1.5px solid ${PURPLE}`,
      background: "rgba(123,31,162,0.1)",
      capColor: PURPLE,
    },
    dim: {
      border: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.02)",
      capColor: "rgba(255,255,255,0.3)",
    },
  }[node.type];

  return (
    <div
      className="relative z-10 w-full rounded-sm px-2.5 py-2 text-center my-1"
      style={{ border: styles.border, background: styles.background }}
    >
      <p
        className="text-[12px] font-bold uppercase tracking-[0.18em] mb-1 sm:text-[9px]"
        style={{ color: styles.capColor }}
      >
        {node.cap}
      </p>
      {node.lines.map((l) => (
        <p
          key={l}
          className="text-[11px] font-bold leading-snug sm:text-[12px]"
          style={{
            color: node.type === "dim" ? "rgba(255,255,255,0.45)" : "#fff",
          }}
        >
          {l}
        </p>
      ))}
    </div>
  );
}

function Bridge() {
  return (
    <>
      {/* Desktop vertical bridge */}
      <div
        className="relative hidden sm:flex flex-col items-center justify-center px-2"
        style={{ width: 148 }}
      >
        {/* spine */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-sm"
          style={{
            top: "8%",
            bottom: "8%",
            background: `linear-gradient(180deg,transparent 0%,${RED} 15%,${PINK} 45%,${PURPLE} 80%,transparent 100%)`,
          }}
        />
        {bridgeNodes.map((n, i) => (
          <div key={n.cap} className="w-full">
            <BridgeNode node={n} />
            {i < bridgeNodes.length - 1 && (
              <p
                className="relative z-10 text-center text-[11px] py-0.5"
                style={{ color: "rgba(255,45,107,0.6)" }}
              >
                ↓
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile horizontal bridge */}
      <div
        className="flex sm:hidden w-full flex-col gap-2 rounded-sm p-3"
        style={{
          background: "#0D0D2B",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">
          OX Bridge
        </p>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {bridgeNodes.map((n, i) => (
            <div key={n.cap} className="flex items-center gap-2 flex-shrink-0">
              <div
                className="rounded-sm px-2.5 py-2 text-center"
                style={{
                  border:
                    n.type === "ms"
                      ? `1.5px solid ${RED}`
                      : n.type === "vx"
                        ? `1.5px solid ${PURPLE}`
                        : "1px solid rgba(255,255,255,0.08)",
                  background:
                    n.type === "ms"
                      ? "rgba(232,38,74,0.1)"
                      : n.type === "vx"
                        ? "rgba(123,31,162,0.1)"
                        : "rgba(255,255,255,0.02)",
                }}
              >
                <p
                  className="text-[8px] font-bold uppercase tracking-wider mb-0.5"
                  style={{
                    color:
                      n.type === "ms"
                        ? RED
                        : n.type === "vx"
                          ? PURPLE
                          : "rgba(255,255,255,0.3)",
                  }}
                >
                  {n.cap}
                </p>
                {n.lines.map((l) => (
                  <p
                    key={l}
                    className="text-[11px] font-bold leading-snug"
                    style={{
                      color:
                        n.type === "dim" ? "rgba(255,255,255,0.45)" : "#fff",
                    }}
                  >
                    {l}
                  </p>
                ))}
              </div>
              {i < bridgeNodes.length - 1 && (
                <p
                  className="text-[11px] flex-shrink-0"
                  style={{ color: "rgba(255,45,107,0.6)" }}
                >
                  →
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function DigitalHumanBridgeSection() {
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
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 py-10 sm:px-8 sm:py-12"
      style={{ background: "#07071A", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* grid overlay
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }} */}
      {/* /> */}
      {/* centre glow */}
      <div
        className="pointer-events-none fixed"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle,rgba(232,38,74,0.07) 0%,transparent 70%)",
        }}
      />
      {/* Header */}
      <div className="relative z-10 text-center" style={fadeIn(0)}>
        <span
          className="mb-3 inline-block rounded-sm px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.22em] sm:text-[10.5px]"
          style={{
            color: PINK,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.07)",
          }}
        >
          Diagram 8 — Digital vs Human Bridge
        </span>
        <h2 className="text-[clamp(17px,2vw,24px)] font-extrabold leading-tight tracking-[-0.025em]">
          Where systems stop predicting — and start{" "}
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            knowing.
          </em>
        </h2>
      </div>
      {/* Main columns */}
      <div className="relative z-10 w-full max-w-[1060px]" style={fadeIn(80)}>
        {/* Desktop 3-col */}
        <div
          className="hidden sm:grid"
          style={{ gridTemplateColumns: "1fr 148px 1fr" }}
        >
          <Panel
            tag="Digital & AI Systems"
            heading="What systems do without OX"
            rows={leftRows}
          />
          <Bridge />
          <Panel
            tag="Human Participants"
            heading="What humans provide through OX"
            rows={rightRows}
            isRight
          />
        </div>

        {/* Mobile stack */}
        <div className="flex flex-col gap-4 sm:hidden">
          <Panel
            tag="Digital & AI Systems"
            heading="What systems do without OX"
            rows={leftRows}
          />
          <Bridge />
          <Panel
            tag="Human Participants"
            heading="What humans provide through OX"
            rows={rightRows}
            isRight
          />
        </div>
      </div>
      {/* Bottom pills */}
      <div
        className="relative z-10 grid w-full max-w-[1060px] grid-cols-1 gap-3 sm:grid-cols-2"
        style={fadeIn(160)}
      >
        {bottomPills.map((p) => (
          <div
            key={p.strong}
            className="flex items-stretch gap-3 rounded-sm px-4 py-3"
            style={{
              background: "#0D0D2B",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-[3px] flex-shrink-0 self-stretch rounded-sm"
              style={{ background: p.color }}
            />
            <p className="text-[14px] leading-relaxed text-white/60">
              <strong className="font-bold text-white">{p.strong}</strong>
              {p.text}
            </p>
          </div>
        ))}
      </div>
      {/* Closing */}
      <div
        className="relative z-10 w-full max-w-[1060px] border-t border-white/[0.07] pt-4 text-center text-[14px] leading-relaxed text-white/38"
        style={fadeIn(220)}
      >
        <strong className="font-semibold text-white/65">
          This is not better data.
        </strong>{" "}
        This is a different category of input entirely. The difference between a
        weather forecast and looking out the window.
      </div>
    </section>
  );
}
