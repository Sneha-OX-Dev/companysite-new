"use client";
import { useEffect, useState } from "react";

const RED = "#E8264A";
const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

const milestones = [
  {
    id: "m1",
    label: "Milestone 1",
    number: "10M",
    unit: "Machine Selves",
    color: RED,
    topBar: RED,
    glowColor: "rgba(232,38,74,0.08)",
    position: "16.5%",
    items: [
      {
        strong: "Network effect takes hold.",
        rest: " Matching precision increases with every new participant.",
      },
      {
        strong: null,
        rest: "Enterprise demand begins routing at meaningful scale.",
      },
      {
        strong: null,
        rest: "Token scarcity becomes structurally significant.",
      },
      {
        strong: null,
        rest: "Geographic and domain coverage begins to diversify.",
      },
    ],
  },
  {
    id: "m2",
    label: "Milestone 2",
    number: "100M",
    unit: "Machine Selves",
    color: PINK,
    topBar: PINK,
    glowColor: "rgba(255,45,107,0.08)",
    position: "50%",
    items: [
      {
        strong: "Global coordination layer operational.",
        rest: " Any geography, any domain, any work type.",
      },
      {
        strong: null,
        rest: "Enterprises can route at national and continental scale.",
      },
      {
        strong: null,
        rest: "OX becomes a credible replacement for centralised data infrastructure.",
      },
      {
        strong: null,
        rest: "Token demand outpaces new supply entering circulation.",
      },
    ],
  },
  {
    id: "m3",
    label: "Milestone 3",
    number: "1B",
    unit: "Machine Selves",
    color: PURPLE,
    topBar: `linear-gradient(90deg,${PINK},${PURPLE})`,
    glowColor: "rgba(123,31,162,0.08)",
    position: "83.5%",
    items: [
      {
        strong: "Universal deployment on smartphones globally.",
        rest: " The protocol layer the world runs on.",
      },
      {
        strong: null,
        rest: "One billion sovereign economies — each connected, each earning.",
      },
      {
        strong: null,
        rest: "AI, business, government, and society operating on OX infrastructure.",
      },
      {
        strong: null,
        rest: "The planet reorganises around individual intelligence.",
      },
    ],
  },
];

const stats = [
  { num: "1,371,000,000", label: "OXME total fixed supply — set at genesis" },
  { num: "16 hours", label: "Human capital pre-invested per Machine Self" },
  { num: "4 minutes", label: "Daily activity to build a Machine Self" },
  { num: "2,000", label: "Human-created data points per Machine Self" },
];

function MilestoneCard({
  m,
  delay,
}: {
  m: (typeof milestones)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), delay);
  }, [delay]);

  return (
    <div
      className="relative flex cursor-default flex-col gap-4 overflow-hidden rounded-lg p-5 transition-all duration-250 sm:p-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transition: `opacity 0.45s ease, transform 0.45s ease, border-color 0.2s, box-shadow 0.2s`,
        background: "#0D0D2B",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 6px 32px rgba(0,0,0,0.35)` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top bar */}
      <div
        className="absolute left-0 right-0 top-0 h-[3px]"
        style={{ background: m.topBar }}
      />

      {/* bg glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full"
        style={{
          background: `radial-gradient(circle,${m.glowColor} 0%,transparent 70%)`,
        }}
      />

      {/* number block */}
      <div>
        <p
          className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]"
          style={{ color: m.color }}
        >
          {m.label}
        </p>
        <p
          className="text-[clamp(32px,3.8vw,52px)] font-black leading-none tracking-[-0.03em]"
          style={{ color: m.color }}
        >
          {m.number}
        </p>
        <p className="mt-1 text-[13px] font-semibold text-white/42 sm:text-[14px]">
          {m.unit}
        </p>
      </div>

      {/* divider */}
      <div className="h-[2px] w-8 rounded-sm" style={{ background: m.color }} />

      {/* unlocks */}
      <div>
        <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25 sm:text-[10px]">
          What this unlocks
        </p>
        <div className="flex flex-col gap-2.5">
          {m.items.map((it, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div
                className="mt-[6px] h-[5px] w-[5px] flex-shrink-0 rounded-full transition-all duration-150"
                style={{
                  background: m.color,
                  boxShadow: hovered ? `0 0 6px ${m.color}` : "none",
                }}
              />
              <p className="text-[12px] leading-snug text-white/55 sm:text-[13px]">
                {it.strong && (
                  <strong className="font-semibold text-white/88">
                    {it.strong}
                  </strong>
                )}
                {it.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ num, label }: { num: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cursor-default rounded-md px-4 py-4 text-center transition-all duration-200 sm:px-5 sm:py-5"
      style={{
        background: "#0D0D2B",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.06)"}`,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 6px 24px rgba(0,0,0,0.3)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="mb-1.5 text-[clamp(15px,1.6vw,22px)] font-extrabold tracking-[-0.02em]"
        style={{
          background: `linear-gradient(90deg,${RED},${PINK})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {num}
      </p>
      <p className="text-[11px] leading-snug text-white/32 sm:text-[12px]">
        {label}
      </p>
    </div>
  );
}

function ProgressTrack() {
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    setTimeout(() => setFilled(true), 300);
  }, []);

  return (
    <div className="relative w-full" style={{ margin: "36px 0" }}>
      {/* track bg */}
      <div
        className="relative h-[4px] w-full overflow-hidden rounded-sm"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-sm"
          style={{
            width: filled ? "100%" : "0%",
            background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
            transition: "width 1.2s ease 0.3s",
          }}
        />
      </div>
      {/* milestone dots */}
      {milestones.map((m) => (
        <div
          key={m.id}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: m.position,
            width: 18,
            height: 18,
            background: m.color,
            border: "2.5px solid #07071A",
            zIndex: 2,
            boxShadow: `0 0 12px ${m.color}88`,
          }}
        />
      ))}
    </div>
  );
}

export function NetworkScaleMilestonesSection() {
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
          className="mb-3 inline-block rounded-sm px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]"
          style={{
            color: PINK,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.07)",
          }}
        >
          Diagram 13 — Section 13 · Network Effects & Scale
        </span>
        <h2 className="text-[clamp(20px,2.4vw,32px)] font-extrabold leading-tight tracking-[-0.025em]">
          The network grows every time another{" "}
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            human agent joins.
          </em>
        </h2>
      </div>

      {/* ── PROGRESS TRACK ── */}
      <div className="relative z-10 w-full max-w-[1060px]" style={fadeIn(80)}>
        <ProgressTrack />
      </div>

      {/* ── MILESTONE CARDS ── */}
      <div
        className="relative z-10 grid w-full max-w-[1060px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
        style={fadeIn(120)}
      >
        {milestones.map((m, i) => (
          <MilestoneCard key={m.id} m={m} delay={160 + i * 60} />
        ))}
      </div>

      {/* ── STATS ROW ── */}
      <div
        className="relative z-10 grid w-full max-w-[1060px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        style={fadeIn(320)}
      >
        {stats.map((s) => (
          <StatCard key={s.label} num={s.num} label={s.label} />
        ))}
      </div>

      {/* ── CLOSING ── */}
      <div
        className="relative z-10 w-full max-w-[1060px] border-t border-white/[0.06] pt-4 text-center text-[12px] leading-relaxed text-white/30 sm:text-[13px]"
        style={fadeIn(380)}
      >
        <strong className="font-semibold text-white/60">
          Under network effect principles, network value scales with participant
          density.
        </strong>{" "}
        Each Machine Self adds declared truth, permission boundaries, regulatory
        eligibility, and reliability history.
      </div>
    </section>
  );
}
