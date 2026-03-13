import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function PageTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "font-heading text-display font-black tracking-[-0.05em] text-foreground leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-heading text-headline font-black tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-title font-black tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Hero/section subhead — one step below PageTitle/SectionTitle.
 * Use for supporting lines (e.g. "1.5 million people have already started.").
 */
export function Subhead({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-subhead font-semibold leading-snug text-foreground/75",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Large display text for stats, callouts, and hero numbers.
 * Pass responsive size via className when a custom scale is needed.
 * Gradient text pattern is also applied via className.
 */
export function DisplayText({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("font-black tracking-tight leading-tight text-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Small neutral eyebrow label rendered above a heading.
 * Defaults to text-foreground/50.
 */
export function Eyebrow({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-widest text-foreground/50",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Body({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-body-lg leading-relaxed text-foreground/70", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Muted({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-relaxed text-foreground/50", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Accent-coloured section label (e.g. "TOKENOMICS", "BRIDGE").
 * Pass the accent colour via className (e.g. className="text-primary/60").
 */
export function Label({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xs font-bold uppercase tracking-widest", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Label that introduces a card or section — text-sm so it is never smaller than body.
 * Use for card titles (e.g. "Downloads", "What's happening") and section labels (e.g. "Join the network").
 */
export function SectionLabel({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm font-bold uppercase tracking-widest leading-snug", className)}
      {...props}
    >
      {children}
    </p>
  );
}
