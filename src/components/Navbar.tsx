"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/6601f1ceaf0f5b2dda2239dd_ox.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Token", href: "/token" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "About", href: "/about" },
  { label: "Developers", href: "/developers" },
  { label: "Whitepaper", href: "/whitepaper" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-indigo-900/50 bg-gradient-to-b from-[#0f1424]/95 via-[#0f1424]/90 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src={LOGO_URL} alt="OX" width={32} height={32} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#get-the-app"
          className="hidden rounded-full bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-pink-400 md:inline-flex"
        >
          Get The App
        </Link>

        {/* Mobile menu button (hamburger icon) */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-indigo-900/50 bg-[#0f1424]/98 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-1 text-zinc-200 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#get-the-app"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold text-white hover:bg-pink-400"
              onClick={() => setOpen(false)}
            >
              Get The App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

