"use client";
import { landing } from "@/content/landing";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PINK = "#FF2D6B";
const PURPLE = "#7B1FA2";
const RED = "#E8264A";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

function SocialButton({
  id,
  href,
  label,
}: {
  id: string;
  href: string;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
      style={{
        background: hovered
          ? `linear-gradient(135deg,${PINK},${PURPLE})`
          : "rgba(255,255,255,0.06)",
        border: `1px solid ${hovered ? "transparent" : "rgba(255,255,255,0.1)"}`,
        color: hovered ? "#fff" : "rgba(255,255,255,0.5)",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? `0 6px 20px rgba(255,45,107,0.35)` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {SOCIAL_ICONS[id] ?? null}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-[14px] transition-all duration-150"
      style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.45)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="h-[1px] flex-shrink-0 transition-all duration-150"
        style={{
          width: hovered ? 14 : 6,
          background: hovered
            ? `linear-gradient(90deg,${PINK},${PURPLE})`
            : "rgba(255,255,255,0.2)",
        }}
      />
      {children}
    </Link>
  );
}

function TelegramButton({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-200"
      style={{
        background: hovered
          ? `linear-gradient(135deg,${RED},${PINK},${PURPLE})`
          : `linear-gradient(135deg,rgba(255,45,107,0.15),rgba(123,31,162,0.15))`,
        border: `1px solid ${hovered ? "transparent" : "rgba(255,45,107,0.3)"}`,
        boxShadow: hovered ? `0 6px 24px rgba(255,45,107,0.35)` : "none",
        transform: hovered ? "translateY(-1px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* telegram icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.88 13.47l-2.967-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.95l-.527-.861z" />
      </svg>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#07071A", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* grid overlay */}
      {/* <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.012) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      /> */}

      {/* top glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 600,
          height: 300,
          background: `radial-gradient(ellipse at 50% 0%,rgba(255,45,107,0.07) 0%,transparent 70%)`,
        }}
      />

      {/* top gradient border */}
      <div
        className="absolute left-0 right-0 top-0 h-[1px]"
        style={{
          background: `linear-gradient(90deg,transparent,${PINK}55,${PURPLE}55,transparent)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 md:py-20">
        {/* ── MAIN ROW ── */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* LEFT — brand block */}
          <div className="flex flex-col gap-5 md:max-w-[280px]">
            {/* logo */}
            <Link href="/" className="inline-block">
              <Image
                src="https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/6601f1ceaf0f5b2dda2239dd_ox.svg"
                alt="OX"
                width={48}
                height={48}
              />
            </Link>

            {/* taglines */}
            <div className="space-y-2">
              <p className="text-[16px] font-semibold leading-snug text-white/80">
                {landing.footer.taglineBanner}
              </p>
              <p className="text-[14px] leading-snug text-white/40">
                {landing.footer.tagline}
              </p>
            </div>

            {/* company address */}
            {landing.footer.company && (
              <div
                className="rounded-lg px-4 py-3 text-[14px] leading-relaxed text-white/30"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="font-semibold text-white/50">
                  {landing.footer.company.name}
                </p>
                <p>{landing.footer.company.addressLine1}</p>
                <p>{landing.footer.company.addressLine2}</p>
              </div>
            )}

            {/* social */}
            <div>
              <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.18em] text-white/30">
                {landing.footer.interact}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {landing.footer.social.map((item) => (
                  <SocialButton
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            {/* telegram CTA */}
            <TelegramButton
              href={landing.footer.telegram.href}
              label={landing.footer.telegram.label}
            />
          </div>

          {/* RIGHT — nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10">
            {landing.footer.columns.map((column, i) => (
              <nav key={i} className="flex flex-col gap-3">
                {/* accent entry point on first column */}
                {i === 0 && (
                  <Link
                    href={landing.entryPoint.href}
                    className="mb-1 text-[14px] font-bold transition-colors duration-150 hover:text-white"
                    style={{ color: PINK }}
                  >
                    {landing.entryPoint.label}
                  </Link>
                )}
                {/* col heading — first item styled as heading */}
                {column.map((link, j) =>
                  j === 0 ? (
                    <p
                      key={link.label}
                      className="mb-1 text-[14px] font-bold uppercase tracking-[0.18em] text-white/25"
                    >
                      {link.label}
                    </p>
                  ) : (
                    <FooterLink key={link.label} href={link.href}>
                      {link.label}
                    </FooterLink>
                  ),
                )}
              </nav>
            ))}
          </div>
        </div>

        {/* ── STAT BAR ── */}
        <div
          className="mt-14 grid grid-cols-2 gap-3 rounded-xl px-6 py-5 sm:grid-cols-4"
          style={{
            background:
              "linear-gradient(135deg,rgba(255,45,107,0.06),rgba(123,31,162,0.06))",
            border: "1px solid rgba(255,45,107,0.12)",
          }}
        >
          {[
            { val: "1,371,000,000", label: "Fixed OXME Supply" },
            { val: "1,000 : 1", label: "OXIT to OXME Rate" },
            { val: "2,000", label: "Data Points per Self" },
            { val: "ERC-20", label: "Base Network" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <p
                className="text-[18px] font-black tracking-[-0.02em]"
                style={{
                  background: `linear-gradient(90deg,${PINK},${PURPLE})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.val}
              </p>
              <p className="text-[14px] uppercase tracking-[1px] text-white/30">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ──  just addedingtt*/}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-[14px] text-white/28">
            {landing.footer.copyright}
          </p>
          <div className="flex items-center gap-1.5">
            <div
              className="h-[6px] w-[6px] rounded-full"
              style={{ background: PINK, boxShadow: `0 0 8px ${PINK}` }}
            />
            <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-white/25">
              Human Intelligence Protocol
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
