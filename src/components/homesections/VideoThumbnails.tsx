"use client";

import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Dialog as DialogPrimitive } from "radix-ui";
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
const ReactPlayer = dynamic<PlayerProps>(() => import("react-player").then((m) => m.default as any), { ssr: false });

const OX_STORY_URL =
  "https://s3.eu-west-1.amazonaws.com/oxy.prod1.static-media/public-upload/2026-02-24/oxygean-video-feb-2026.mp4";

const AXIOM_URL =
  "https://s3.eu-west-1.amazonaws.com/oxy.prod1.static-media/public-upload/2026-02-24/oxygean-main-video.mp4";

const VIDEOS = [
  {
    id: "ox-story",
    label: "Watch the OX Story",
    src: OX_STORY_URL,
    thumbnail: "/images/home-section/hero1.png",
    accent: "border-white/20",
    ringColor: "border-white/40",
    glowBg: "bg-white/10",
  },
  {
    id: "axiom",
    label: "Meet Axiom",
    src: AXIOM_URL,
    thumbnail: "/images/agents/Axiom.jpeg",
    accent: "border-purple-500/30",
    ringColor: "border-purple-500/50",
    glowBg: "bg-purple-500/15",
  },
] as const;

function PlayCircle({ ringColor, glowBg }: { ringColor: string; glowBg: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full border bg-black/40 shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110",
        ringColor,
        glowBg
      )}
    >
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="currentColor"
        className="ml-1 text-white"
        aria-hidden
      >
        <path d="M0 0l14 8-14 8V0z" />
      </svg>
    </span>
  );
}

function VideoModal({
  src,
  open,
  onOpenChange,
}: {
  src: string;
  open: boolean;
  onOpenChange: ({ open }: { open: boolean }) => void;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => onOpenChange({ open: o })}>
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
          <DialogPrimitive.Title className="sr-only">Video</DialogPrimitive.Title>

          {/* Render only when open so the player mounts fresh each time */}
          {open && (
            <div className="overflow-hidden rounded-2xl">
                <ReactPlayer
                  src={src}
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

export default function VideoThumbnails() {
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);
  const current = VIDEOS.find((v) => v.id === activeVideo);

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-4">
        {VIDEOS.map(({ id, label, thumbnail, accent, ringColor, glowBg }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveVideo(id)}
            className={cn(
              "group relative w-full overflow-hidden rounded-2xl border bg-black/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              accent
            )}
          >
            {/* 4:5 thumbnail */}
            <div className="relative w-full overflow-hidden" style={{ paddingTop: "125%" }}>
              <Image
                src={thumbnail}
                alt={label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/25" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle ringColor={ringColor} glowBg={glowBg} />
              </div>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2 px-3 py-2.5">
              <span className={cn("h-1.5 w-1.5 rounded-full ring-1", glowBg, ringColor)} />
              <span className="truncate text-xs font-semibold text-white/70 transition-colors group-hover:text-white">
                {label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <VideoModal
          src={current.src}
          open={activeVideo !== null}
          onOpenChange={({ open }) => { if (!open) setActiveVideo(null); }}
        />
      )}
    </>
  );
}
