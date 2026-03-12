"use client";
import { useEffect, useState } from "react";

const RED = "#E8264A";
const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";

/* ---------------- DATA ---------------- */

const q1Items = [
  { name: "Builders", desc: "early participants building Machine Self" },
  { name: "Contributors", desc: "providing knowledge, context, decisions" },
  { name: "Workers (Digital)", desc: "digital task execution" },
  { name: "Workers (Physical)", desc: "real-world task execution" },
  { name: "Validators", desc: "confirming outcomes & AI outputs" },
  { name: "Specialists", desc: "domain experts, skilled professionals" },
];

const q2Items = [
  { name: "Operations", desc: "manufacturing, logistics, supply chains" },
  {
    name: "Marketplace Operators",
    desc: "e-commerce, gig platforms, procurement",
  },
  {
    name: "Enterprise Decision Systems",
    desc: "consulting, intelligence, analytics",
  },
  { name: "Service Providers", desc: "outsourcing, verification services" },
  {
    name: "Industry Verticals",
    desc: "retail, energy, healthcare, finance, defence",
  },
];

const q3Items = [
  { name: "Platform Developers", desc: "building on the network" },
  { name: "AI Developers", desc: "model builders, human-in-the-loop AI" },
  {
    name: "Robotics & Automation",
    desc: "robotics, drones, industrial automation",
  },
  { name: "Application Developers", desc: "startups building applications" },
  {
    name: "Integration Providers",
    desc: "APIs, enterprise system integrators",
  },
];

const q4Items = [
  { name: "Smart Cities", desc: "city governments, urban planning" },
  {
    name: "Public Infrastructure",
    desc: "transportation, energy grids, utilities",
  },
  {
    name: "Emergency & Response",
    desc: "disaster response, safety coordination",
  },
  { name: "Public Services", desc: "healthcare, education, social services" },
  {
    name: "National Systems",
    desc: "federal governments, national infrastructure",
  },
];

const fitsItems = [
  { label: "Humans supply capability", color: PINK },
  { label: "Enterprises create demand", color: PINK },
  { label: "Developers build on top", color: "rgba(255,255,255,0.3)" },
  { label: "Governments run public systems", color: PURPLE },
  { label: "Tokens fund & price the network", color: RED },
];

type QuadVariant = "q1" | "q2" | "q3" | "q4";

/* ---------------- CONFIG ---------------- */

const quadConfig: Record<
  QuadVariant,
  {
    topBar: string;
    labelColor: string;
    dotColor: string;
    label: string;
    title: string;
    items: typeof q1Items;
  }
> = {
  q1: {
    topBar: `linear-gradient(90deg,${RED},${PINK})`,
    labelColor: PINK,
    dotColor: PINK,
    label: "Human Participation Marketplace",
    title: "Individuals & Builders",
    items: q1Items,
  },
  q2: {
    topBar: `linear-gradient(90deg,${PINK},${PURPLE})`,
    labelColor: PINK,
    dotColor: PINK,
    label: "Enterprise & Commercial Marketplace",
    title: "Organisations & Business",
    items: q2Items,
  },
  q3: {
    topBar:
      "linear-gradient(90deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1))",
    labelColor: "rgba(255,255,255,0.35)",
    dotColor: "rgba(255,255,255,0.28)",
    label: "Developer & Technology Marketplace",
    title: "Developers & Builders",
    items: q3Items,
  },
  q4: {
    topBar: `linear-gradient(90deg,${PURPLE},rgba(123,31,162,0.3))`,
    labelColor: PURPLE,
    dotColor: PURPLE,
    label: "Government & Public Infrastructure",
    title: "Governments & Smart Cities",
    items: q4Items,
  },
};

/* ---------------- ITEM ---------------- */

function QuadItem({
  name,
  desc,
  dotColor,
}: {
  name: string;
  desc: string;
  dotColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-start gap-2.5 rounded-md px-2.5 py-2 transition-all"
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="mt-[5px] h-[6px] w-[6px] rounded-full"
        style={{
          background: dotColor,
          boxShadow: hovered ? `0 0 6px ${dotColor}` : "none",
        }}
      />
      <p className="text-[13px] leading-snug">
        <span className="font-semibold text-white/85">{name}</span>
        <span className="text-white/40"> — {desc}</span>
      </p>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function QuadCard({ variant }: { variant: QuadVariant }) {
  const cfg = quadConfig[variant];

  return (
    <div
      className="relative flex flex-col gap-1 overflow-hidden rounded-lg p-5"
      style={{
        background: "#0D0D2B",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{ background: cfg.topBar }}
      />

      <p
        className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{ color: cfg.labelColor }}
      >
        {cfg.label}
      </p>

      <p className="mb-3 border-b border-white/[0.06] pb-3 text-[15px] font-bold text-white">
        {cfg.title}
      </p>

      {cfg.items.map((it) => (
        <QuadItem
          key={it.name}
          name={it.name}
          desc={it.desc}
          dotColor={cfg.dotColor}
        />
      ))}
    </div>
  );
}

/* ---------------- FITS ITEM ---------------- */

function FitsItem({ label, color }: { label: string; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-2 transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-[7px] w-[7px] rounded-full"
        style={{
          background: color,
          boxShadow: hovered ? `0 0 10px ${color}` : "none",
        }}
      />

      <span className="text-[13px] text-white/60 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export function EcosystemMapSection() {
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
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 px-6 py-12"
      style={{ background: "#07071A", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* HEADER */}

      <div className="text-center" style={fadeIn(0)}>
        <span
          className="mb-3 inline-block rounded-sm px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{
            color: PINK,
            border: "1px solid rgba(255,45,107,0.3)",
            background: "rgba(255,45,107,0.07)",
          }}
        >
          Diagram 14 — Ecosystem Map
        </span>

        <h2 className="text-[clamp(22px,2.3vw,30px)] font-extrabold">
          Who the network{" "}
          <span
            style={{
              background: `linear-gradient(90deg,${RED},${PINK},${PURPLE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            serves.
          </span>
        </h2>
      </div>

      {/* GRID */}

      <div
        className="grid w-full max-w-[1100px] grid-cols-2 gap-4"
        style={fadeIn(70)}
      >
        <QuadCard variant="q1" />
        <QuadCard variant="q2" />
        <QuadCard variant="q3" />
        <QuadCard variant="q4" />
      </div>

      {/* HOW IT FITS */}

      <div
        className="w-full max-w-[1180px] rounded-lg"
        style={{
          background: "#0D0D2B",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 6px 30px rgba(0,0,0,0.25)",
          ...fadeIn(150),
        }}
      >
        <div className="hidden items-center gap-6 px-6 py-4 sm:flex">
          <p className="flex-shrink-0 border-r border-white/[0.08] pr-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
            How it fits
          </p>

          <div className="flex flex-1 items-center justify-between gap-6 whitespace-nowrap">
            {fitsItems.map((f, i) => (
              <div key={f.label} className="flex items-center gap-3">
                <FitsItem label={f.label} color={f.color} />

                {i < fitsItems.length - 1 && (
                  <span className="text-[16px] text-white/20">›</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <div
        className="max-w-[1100px] border-t border-white/[0.06] pt-4 text-center text-[13px] text-white/40"
        style={fadeIn(210)}
      >
        <strong className="text-white/70">
          All coordinated by one underlying system:
        </strong>{" "}
        A decentralised network of Machine Selves turning static big data into
        live human intelligence.
      </div>
    </section>
  );
}
