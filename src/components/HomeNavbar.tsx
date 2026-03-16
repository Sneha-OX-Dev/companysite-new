"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_URL = "/ox.svg";

const navItems = [
  { label: "Overview", href: "/home", newHere: true },
  { label: "The Problem", href: "/the-problem" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Machine Self", href: "/machine-self" },
  { label: "Earn", href: "/earn" },
  { label: "For Business", href: "/marketplace" },
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
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full border-zinc-700 lg:hidden"
              aria-label="Toggle navigation"
            >
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs border-indigo-900/50 bg-background/[0.98] sm:max-w-sm"
          >
            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-zinc-200 transition hover:bg-indigo-950/50 hover:text-white"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.newHere && (
                      <Badge
                        variant="secondary"
                        className="bg-(--accent)/20 text-[10px] font-medium uppercase text-accent"
                      >
                        New here?
                      </Badge>
                    )}
                  </span>
                </Link>
              ))}
              <Separator className="my-4 bg-indigo-900/60" />
              <Button
                asChild
                className="rounded-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href="/home">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

