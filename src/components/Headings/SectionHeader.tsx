import { PINK } from "@/lib/constants";
import type { CSSProperties, ReactNode } from "react";

type SectionHeaderProps = {
  /** Small pill label above the title (e.g. "Human Intelligence Protocol") */
  pillText?: string;
  /** Optional tiny eyebrow / diagram label above the pill */
  eyebrowText?: string;
  /** Main section title */
  title: string;
  /** Optional subtitle / description line */
  subtitle?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Optional custom className for outer wrapper */
  className?: string;
  /** Optional style (e.g. fadeIn animation) */
  style?: CSSProperties;
  /** Optional children rendered below the subtitle (e.g. badges) */
  children?: ReactNode;
};

export default function SectionHeader({
  pillText = "Human Intelligence Protocol",
  eyebrowText,
  title,
  subtitle,
  align = "center",
  className = "",
  style,
  children,
}: SectionHeaderProps) {
  const alignClasses =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div
      className={`mb-8 flex flex-col gap-2 sm:mb-10 ${alignClasses} ${className}`}
      style={style}
    >
      {eyebrowText && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 sm:text-[11px]">
          {eyebrowText}
        </p>
      )}

      {pillText && (
        <div
          className="mb-1 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          style={{
            background: "rgba(255,45,107,.1)",
            border: "1px solid rgba(255,45,107,.3)",
          }}
        >
          <span
            className="h-[5px] w-[5px] rounded-full"
            style={{
              background: PINK,
              boxShadow: `0 0 8px ${PINK}`,
              animation: "pulse 2s infinite",
            }}
          />
          <span
            className="text-[9px] font-bold uppercase tracking-[2.5px] text-[var(--accent)] sm:text-[10px]"
          >
            {pillText}
          </span>
        </div>
      )}

      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[10px] uppercase tracking-[2px] text-white/35 sm:text-[11px]">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}
