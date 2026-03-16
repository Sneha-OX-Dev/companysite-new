"use client";

import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Dialog as DialogPrimitive } from "radix-ui";
import { Badge } from "@/components/ui/badge";
import { Eyebrow, Body, Muted, DisplayText } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type PlayerProps = {
  src: string;
  playing?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  playsinline?: boolean;
  style?: React.CSSProperties;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPlayer = dynamic<PlayerProps>(
  () => import("react-player").then((m) => m.default as any),
  { ssr: false }
);

const AXIOM_VIDEO_URL =
  "https://s3.eu-west-1.amazonaws.com/oxy.prod1.static-media/public-upload/2026-02-24/oxygean-main-video.mp4";

type Agent = {
  name: string;
  role: string;
  department: string;
  imageSrc: string;
  languages: string[];
  accent: string;
  border: string;
  tag: string;
  function: string;
  [key: string]: unknown;
};

function LanguageBadge({ languages }: { languages: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {languages.map((lang) => (
        <Badge
          key={lang}
          variant="outline"
          className="border-white/10 bg-white/[0.05] text-foreground/50 font-semibold tracking-wide"
        >
          {lang}
        </Badge>
      ))}
    </div>
  );
}

function VideoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[min(95vw,420px)] -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-black shadow-2xl ring-1 ring-white/10",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          )}
        >
          <DialogPrimitive.Title className="sr-only">Meet Axiom</DialogPrimitive.Title>

          {open && (
            <div className="overflow-hidden rounded-2xl">
              <ReactPlayer
                src={AXIOM_VIDEO_URL}
                autoPlay
                muted
                controls
                width="100%"
                height="100%"
                style={{ display: "block", aspectRatio: "9/16" }}
                playsinline
              />
            </div>
          )}

          <DialogPrimitive.Close className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/80 hover:text-white">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
              <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default function AxiomCard({ axiom }: { axiom: Agent }) {
  const [videoOpen, setVideoOpen] = React.useState(false);

  return (
    <>
      <div
        className={cn(
          "glass-card glass-card-accent-pink group relative overflow-hidden transition-all duration-300",
          axiom.border
        )}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary opacity-[0.07] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-purple opacity-[0.07] blur-[90px]" />

        <div className="relative grid lg:grid-cols-[420px_1px_1fr]">
          {/* Image with play button overlay */}
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-0">
            <Image
              src={axiom.imageSrc}
              alt={axiom.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay for play button readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Play button */}
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play Axiom video"
              className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full border border-white/20 bg-black/50 px-4 py-2.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/90 shadow-[0_0_12px_rgba(255,45,107,0.6)]">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="currentColor"
                  className="ml-0.5 text-white"
                  aria-hidden
                >
                  <path d="M0 0l10 6-10 6V0z" />
                </svg>
              </span>
              <span className="text-xs font-semibold tracking-wide">
                Meet Axiom
              </span>
            </button>
          </div>

          {/* Vertical divider */}
          <div className="hidden bg-gradient-to-b from-transparent via-white/[0.07] to-transparent lg:block" />

          {/* Info */}
          <div className="flex flex-col justify-center gap-7 p-8 lg:p-10">
            <div>
              <Eyebrow className={cn(axiom.tag)}>{axiom.role}</Eyebrow>
              <DisplayText
                className={cn(
                  "mt-2 bg-gradient-to-r bg-clip-text text-display leading-none tracking-tight text-transparent",
                  axiom.accent
                )}
              >
                {axiom.name}
              </DisplayText>
              <Muted className="mt-2">{axiom.department}</Muted>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            <div>
              <Eyebrow className="mb-3">Function</Eyebrow>
              <Body className="text-foreground/70">{axiom.function}</Body>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            <div>
              <Eyebrow className="mb-3">Languages</Eyebrow>
              <LanguageBadge languages={axiom.languages} />
            </div>

            <Badge variant="pill-accent" className="gap-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_6px_rgba(255,45,107,0.9)]" />
              Primary AI voice
            </Badge>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
