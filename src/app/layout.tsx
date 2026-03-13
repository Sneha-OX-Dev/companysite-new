import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oxygean – You're alive in the network",
  description:
    "Evolved digital engagement using web3 technologies. OX puts you in control—shaping, training, and owning your personal intelligence.",
  icons: {
    icon: "/ox.svg",
    shortcut: "/ox.svg",
    apple: "/ox.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <TooltipProvider>
          {/* <Navbar /> */}
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
