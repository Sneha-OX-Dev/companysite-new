import { PINK } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { SectionTitle, Eyebrow, Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
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
  pillText,
  eyebrowText,
  title,
  subtitle,
  align = "center",
  className = "",
  style,
  children,
}: SectionHeaderProps) {
  const alignClasses =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div
      className={cn("flex flex-col gap-3", alignClasses, className)}
      style={style}
    >
      {eyebrowText && <Eyebrow>{eyebrowText}</Eyebrow>}

      {pillText && (
        <Badge variant="pill-accent" className="mb-1 gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: PINK,
              boxShadow: `0 0 8px ${PINK}`,
              animation: "pulse 2s infinite",
            }}
          />
          {pillText}
        </Badge>
      )}

      <SectionTitle>{title}</SectionTitle>

      {subtitle && <Muted>{subtitle}</Muted>}

      {children}
    </div>
  );
}
