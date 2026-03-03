import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/6601f1ceaf0f5b2dda2239dd_ox.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Terms", href: "/term-conditions" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-indigo-900/50 bg-gradient-to-b from-[#0f1424]/95 via-[#0f1424]/90 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src={LOGO_URL} alt="OX" width={32} height={32} />
          {/* <span className="text-sm font-semibold tracking-wide text-white">
            OX
          </span> */}
        </Link>

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

        <Link
          href="#get-the-app"
          className="hidden rounded-full bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-pink-400 md:inline-flex"
        >
          Get The App
        </Link>
      </div>
    </header>
  );
}

