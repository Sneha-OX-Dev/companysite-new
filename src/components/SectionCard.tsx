import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SectionCardProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Card>;

function SectionCard({
  title,
  className,
  children,
  ...props
}: SectionCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border-indigo-900/60 bg-indigo-950/30 p-6 md:p-8",
        className
      )}
      {...props}
    >
      {title && (
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn("p-0", title && "pt-0")}>{children}</CardContent>
    </Card>
  );
}

export default SectionCard;
