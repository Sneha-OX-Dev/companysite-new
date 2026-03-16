"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_URL = "/ox.svg";

const navItems = [
  { label: "Overview", href: "/home", newHere: true },
  { label: "The Problem", href: "/the-problem" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Machine Self", href: "/machine-self" },
  { label: "Earn", href: "/earn" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "AI Team", href: "/ai-team" },
];

export default function HomeNavbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-indigo-900/50 bg-linear-to-b from-background/95 via-background/90 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:gap-8">
        <Link href="/home" className="shrink-0">
          <Image src={LOGO_URL} alt="OX" width={32} height={32} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 lg:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
              {item.newHere && (
                <Badge
                  variant="secondary"
                  className="ml-1 bg-(--accent)/20 text-[10px] font-medium uppercase text-accent"
                >
                  New here?
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          size="sm"
          className="hidden shrink-0 rounded-full lg:inline-flex"
        >
          <Link href="/home">Get Started</Link>
        </Button>

        {/* Mobile/Tablet nav */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 rounded-full text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Toggle navigation"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="flex w-full max-w-sm flex-col border-white/[0.06] p-0 lg:hidden"
            style={{ background: "rgba(8, 10, 22, 0.97)", backdropFilter: "blur(40px)" }}
          >
            {/* Top accent line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <Link href="/home" onClick={() => setSheetOpen(false)} className="flex items-center gap-2.5">
                <Image src={LOGO_URL} alt="OX" width={28} height={28} />
                <span className="text-sm font-bold tracking-widest text-white/80 uppercase">Oxygean</span>
              </Link>
              <button
                onClick={() => setSheetOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200",
                    "text-white/60 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  {/* Left accent */}
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-px scale-y-0 rounded-full bg-gradient-to-b from-primary to-brand-purple opacity-0 transition-all duration-200 group-hover:scale-y-100 group-hover:opacity-100" />
                  <span className="font-mono text-xs text-white/20">0{i + 1}</span>
                  <span className="text-base font-medium">{item.label}</span>
                  {item.newHere && (
                    <Badge
                      variant="secondary"
                      className="ml-auto bg-primary/20 text-[9px] font-semibold uppercase tracking-wider text-primary"
                    >
                      New
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="border-t border-white/[0.06] px-6 py-6 space-y-3">
              <Button
                asChild
                variant="accent"
                size="pill"
                className="w-full justify-center"
                onClick={() => setSheetOpen(false)}
              >
                <Link href="/home">Build Your Machine Self</Link>
              </Button>
              <p className="text-center text-[11px] text-white/30 tracking-wide">
                1.5 million people have already started
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
