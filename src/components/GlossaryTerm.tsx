"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { glossary } from "@/content/glossary";
import { cn } from "@/lib/utils";

type GlossaryTermProps = {
  termKey: keyof typeof glossary;
  children: React.ReactNode;
  className?: string;
};

export function GlossaryTerm({
  termKey,
  children,
  className,
}: GlossaryTermProps) {
  const entry = glossary[termKey];
  if (!entry) return <>{children}</>;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "cursor-help border-b border-dotted border-[var(--accent)]/50 transition hover:border-[var(--accent)]",
            className
          )}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs bg-zinc-900 text-zinc-100"
        sideOffset={6}
      >
        {entry.definition}
      </TooltipContent>
    </Tooltip>
  );
}
