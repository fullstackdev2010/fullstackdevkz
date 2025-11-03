"use client";
import * as React from "react";

type Bobble = { x: number; y: number; w: number; h: number; rx?: number; rotate?: number };
type Photo = {
  href: string;            // image url (e.g. /demos/ubiscan/home.png)
  x: number; y: number;    // top-left in SVG coords
  w: number; h: number;    // size in SVG coords
  rx?: number;             // corner radius for rounded-rect clip
  rotate?: number;         // rotate angle (deg) around center
  overlay?: "none" | "cyan" | "violet" | "soft";  // optional color glaze
  opacity?: number;        // 0..1 opacity for the image
  alt?: string;            // accessibility label
  preserveAspectRatio?: "xMidYMid slice" | "xMidYMid meet" | "none";
  mixBlendMode?: "normal" | "screen" | "overlay" | "soft-light" | "multiply";
};

type Props = {
  className?: string;
  viewBox?: string;        // default "0 0 1600 900"
  variant?: "default" | "violet" | "cyan";
  bobbles?: Bobble[];
  photos?: Photo[];
  showDots?: boolean;
  showVignette?: boolean;
  showGrain?: boolean;
};

export default function UnifiedMeshGallery({
  className,
  viewBox = "0 0 1600 900",
  variant = "default",
  showDots = true,
  showVignette = true,
  showGrain = true,
  bobbles = [
    { x: 220, y: 160, w: 280, h: 420, rx: 36 },
    { x: 620, y: 220, w: 320, h: 480, rx: 36, rotate: -2 },
    { x: 1060, y: 180, w: 280, h: 420, rx: 36 },
  ],
  photos = [
    // examples — replace with your own
     { href: "/demos/iskra/home.png", x: 240, y: 180, w: 240, h: 360, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
    // { href: "/demos/secure-messaging/chat.png", x: 660, y: 240, w: 280, h: 440, rx: 28, overlay: "cyan", opacity: 0.95 },
    // { href: "/demos/iskra/product.png", x: 1080, y: 200, w: 240, h: 360, rx: 28, overlay: "violet", mixBlendMode: "soft-light" },
  ],
}: Props) {
  // Helper to build unique ids for clipPaths per photo
  const clipId = (i: number) => `clipPhoto_${i}`;
  const overlayId = (name: string) => `overlay_${name}`;

  return (
    <svg className={className} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        {/* Mesh gradients */}
        <radialGradient id="ballA" cx="50%" cy="50%" r="60%">
          <stop offset="0%"  stopColor={variant === "cyan"   ? "#67E8F9" : "#22D3EE"} stopOpacity="0.85"/>
          <stop offset="60%" stopColor={variant === "violet" ? "#C4B5FD" : "#A78BFA"} stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ballB" cx="50%" cy="50%" r="60%">
          <stop offset="0%"  stopColor="#A78BFA" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ballC" cx="50%" cy="50%" r="60%">
          <stop offset="0%"  stopColor="#67E8F9" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="#C4B5FD" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0"/>
        </radialGradient>

        {/* Subtle dot texture */}
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#334155" />
        </pattern>

        {/* Overlays for photos */}
        <linearGradient id={overlayId("soft")} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.00"/>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.06"/>
        </linearGradient>
        <linearGradient id={overlayId("cyan")} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.0"/>
        </linearGradient>
        <linearGradient id={overlayId("violet")} x1="1" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#A78BFA" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.0"/>
        </linearGradient>

        {/* Filters */}
        <filter id="blurA"><feGaussianBlur stdDeviation="55" /></filter>
        <filter id="blurB"><feGaussianBlur stdDeviation="45" /></filter>
        <filter id="blurC"><feGaussianBlur stdDeviation="35" /></filter>
        <filter id="glow"><feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#67E8F9" floodOpacity="0.8"/></filter>

        {/* Film grain (optional) */}
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.03"/>
          </feComponentTransfer>
          <feBlend mode="soft-light" in2="SourceGraphic"/>
        </filter>

        {/* Clip paths for photos (rounded rects) */}
        {photos.map((p, i) => (
          <clipPath id={clipId(i)} key={i}>
            <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={p.rx ?? 24}
              transform={p.rotate ? `rotate(${p.rotate} ${p.x + p.w/2} ${p.y + p.h/2})` : undefined}
            />
          </clipPath>
        ))}
      </defs>

      {/* Base */}
      <rect width="100%" height="100%" fill="#0B0F19"/>
      {showDots && <rect width="100%" height="100%" fill="url(#dots)" opacity="0.25"/>}

      {/* Mesh blobs */}
      <g opacity="0.9"  filter="url(#blurA)"><circle cx="450"  cy="640" r="520" fill="url(#ballA)"/></g>
      <g opacity="0.85" filter="url(#blurB)"><circle cx="1180" cy="340" r="420" fill="url(#ballB)"/></g>
      <g opacity="0.75" filter="url(#blurC)"><circle cx="900"  cy="720" r="300" fill="url(#ballC)"/></g>

      {/* Photo insets (clipped <image/>) */}
      {photos.map((p, i) => {
        const cx = p.x + p.w / 2;
        const cy = p.y + p.h / 2;
        const transform = p.rotate ? `rotate(${p.rotate} ${cx} ${cy})` : undefined;
        const par = p.preserveAspectRatio ?? "xMidYMid slice";
        const op = p.opacity ?? 1;
        const blend = p.mixBlendMode ?? "normal";
        const overlayFill =
          p.overlay === "cyan"   ? `url(#${overlayId("cyan")})` :
          p.overlay === "violet" ? `url(#${overlayId("violet")})` :
          p.overlay === "soft"   ? `url(#${overlayId("soft")})` : undefined;

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
              <rect x={p.x} y={p.y} width={p.w} height={p.h} fill={overlayFill} opacity="1"/>
            )}
          </g>
        );
      })}

      {/* Wireframe bobbles on top */}
      <g fill="none" stroke="#7dd3fc" strokeOpacity="0.22" strokeWidth="2" style={{ cursor: "pointer" }}>
        {bobbles.map((b, i) => (
          <rect
            key={i}
            x={b.x} y={b.y} width={b.w} height={b.h} rx={b.rx ?? 32}
            transform={b.rotate ? `rotate(${b.rotate} ${b.x + b.w/2} ${b.y + b.h/2})` : undefined}
            className="mesh-bobble"
          />
        ))}
      </g>

      {/* Subtle vignette + grain */}
      {showVignette && (
        <g pointerEvents="none">
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="60%" stopColor="#000" stopOpacity="0"/>
            <stop offset="100%" stopColor="#000" stopOpacity="0.35"/>
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#vignette)"/>
        </g>
      )}
      {showGrain && <rect width="100%" height="100%" filter="url(#grain)" opacity="0.4" />}

      <style>{`
        .mesh-bobble { transition: all 260ms ease; }
        .mesh-bobble:hover { stroke-opacity: 0.9; stroke-width: 3; filter: url(#glow); }
      `}</style>
    </svg>
  );
}
