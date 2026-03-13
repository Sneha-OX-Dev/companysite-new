"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function Reveal({ children, className, delay = 0, id }: RevealProps) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        { "translate-y-0 opacity-100": visible, "translate-y-5 opacity-0": !visible },
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
