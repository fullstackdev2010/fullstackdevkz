// components/visuals/MeshWithPhotoInsets.tsx
"use client";
import * as React from "react";

type Photo = {
  href: string;            // e.g. /demos/uniscan/home.png
  x: number; y: number;    // top-left in SVG coords
  w: number; h: number;    // width/height in SVG coords
  rx?: number;             // rounded corners for clip
  rotate?: number;         // deg, around center of this rect
  overlay?: "none" | "soft" | "cyan" | "violet";
  opacity?: number;        // default 1
  alt?: string;
  preserveAspectRatio?: "xMidYMid slice" | "xMidYMid meet" | "none";
  mixBlendMode?: "normal" | "overlay" | "soft-light" | "screen" | "multiply";
};

type Props = {
  /** Path or URL to your background SVG (e.g. "/art/mesh.svg"). */
  backgroundSrc: string;
  /** Optional: size box for the whole composition (must match your background SVG’s viewBox). */
  viewBox?: string; // default "0 0 1600 900"
  className?: string;
  photos?: Photo[]; // defaults to []
  /** Optional vignette/grain over everything (visual polish). */
  showVignette?: boolean;
  showGrain?: boolean;
};

export default function MeshWithPhotoInsets({
  backgroundSrc,
  viewBox = "0 0 1600 900",
  className,
  photos = [],
  showVignette = true,
  showGrain = true,
}: Props) {
  const clipId = (i: number) => `clip_${i}`;

  return (
    // Forward layout/sizing classes (e.g., "absolute inset-0") to a wrapper
    // so the SVG can reliably fill 100% of that box.
    <div className={className}>
      <svg
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        // Make the SVG cover its parent box
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        className="block"
      >
        <defs>
          {/* Gentle overlays you can glaze over photos */}
          <linearGradient id="overlay_soft" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%"   stopColor="var(--accent-23)" stopOpacity="0.00"/>
            <stop offset="100%" stopColor="var(--accent-23)" stopOpacity="0.06"/>
          </linearGradient>
          <linearGradient id="overlay_cyan" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%"   stopColor="var(--accent-37)" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="0.00"/>
          </linearGradient>
          <linearGradient id="overlay_violet" x1="1" x2="0" y1="0" y2="1">
            <stop offset="0%"   stopColor="var(--accent-21)" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="0.00"/>
          </linearGradient>

          {/* Film grain (optional) */}
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.03"/>
            </feComponentTransfer>
            <feBlend mode="soft-light" in2="SourceGraphic"/>
          </filter>

          {/* Vignette (optional) */}
          <radialGradient id="vgn" cx="50%" cy="50%" r="70%">
            <stop offset="60%" stopColor="var(--accent-24)" stopOpacity="0"/>
            <stop offset="100%" stopColor="var(--accent-24)" stopOpacity="0.35"/>
          </radialGradient>

          {/* Rounded-rect clip paths for each photo */}
          {photos.map((p, i) => (
            <clipPath id={clipId(i)} key={i}>
              <rect
                x={p.x} y={p.y} width={p.w} height={p.h}
                rx={p.rx ?? 24}
                transform={p.rotate ? `rotate(${p.rotate} ${p.x + p.w/2} ${p.y + p.h/2})` : undefined}
              />
            </clipPath>
          ))}
        </defs>

        {/* Background: the external SVG */}
        <image
          href={backgroundSrc}
          x="0" y="0"
          width="100%" height="100%"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Foreground photos (clipped and optionally overlaid) */}
        {photos.map((p, i) => {
          const cx = p.x + p.w / 2;
          const cy = p.y + p.h / 2;
          const transform = p.rotate ? `rotate(${p.rotate} ${cx} ${cy})` : undefined;
          const par = p.preserveAspectRatio ?? "xMidYMid slice";
          const op = p.opacity ?? 1;
          const blend = p.mixBlendMode ?? "normal";
          const overlayFill =
            p.overlay === "cyan"   ? "url(#overlay_cyan)" :
            p.overlay === "violet" ? "url(#overlay_violet)" :
            p.overlay === "soft"   ? "url(#overlay_soft)" : undefined;

          return (
            <g key={i} clipPath={`url(#${clipId(i)})`} transform={transform}>
              <image
                href={p.href}
                x={p.x} y={p.y} width={p.w} height={p.h}
                preserveAspectRatio={par}
                opacity={op}
                style={{ mixBlendMode: blend as any }}
              />
              {overlayFill && (
                <rect x={p.x} y={p.y} width={p.w} height={p.h} fill={overlayFill} />
              )}
            </g>
          );
        })}

        {/* Optional polish overlays */}
        {showVignette && <rect width="100%" height="100%" fill="url(#vgn)" pointerEvents="none" />}
        {showGrain && <rect width="100%" height="100%" filter="url(#grain)" opacity="0.4" pointerEvents="none" />}
      </svg>
    </div>
  );
}
