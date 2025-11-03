"use client";
import * as React from "react";

type Bobble = { x: number; y: number; w: number; h: number; rx?: number; rotate?: number };
type Props = {
  className?: string;
  variant?: "default" | "violet" | "cyan";
  bobbles?: Bobble[];
};

export default function UnifiedMesh({
  className,
  variant = "default",
  bobbles = [
    { x: 240, y: 180, w: 230, h: 440, rx: 36, rotate: 0 },
    { x: 1240, y: 160, w: 230, h: 440, rx: 36, rotate: 0 },
    { x: 740, y: 260, w: 230, h: 440, rx: 36, rotate: 0 },
  ],
}: Props) {
  return (
    <svg className={className} viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id="ballA" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={variant === "cyan" ? "var(--accent-34)" : "var(--accent-37)"} stopOpacity="0.85"/>
          <stop offset="60%" stopColor={variant === "violet" ? "var(--accent-36)" : "var(--accent-21)"} stopOpacity="0.45"/>
          <stop offset="100%" stopColor="var(--bg)" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ballB" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent-21)" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="var(--accent-37)" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="var(--bg)" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ballC" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent-34)" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="var(--accent-36)" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="var(--bg)" stopOpacity="0"/>
        </radialGradient>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="var(--surface-alt-1)" />
        </pattern>
        <filter id="blurA"><feGaussianBlur stdDeviation="55" /></filter>
        <filter id="blurB"><feGaussianBlur stdDeviation="45" /></filter>
        <filter id="blurC"><feGaussianBlur stdDeviation="35" /></filter>
        <filter id="glow"><feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="var(--accent-34)" floodOpacity="0.8"/></filter>
      </defs>

      <rect width="1600" height="900" fill="var(--bg)"/>
      <rect width="1600" height="900" fill="url(#dots)" opacity="0.28"/>

      <g opacity="0.9" filter="url(#blurA)"><circle cx="450" cy="640" r="520" fill="url(#ballA)"/></g>
      <g opacity="0.85" filter="url(#blurB)"><circle cx="1180" cy="340" r="420" fill="url(#ballB)"/></g>
      <g opacity="0.75" filter="url(#blurC)"><circle cx="900" cy="720" r="300" fill="url(#ballC)"/></g>

      <g fill="none" stroke="var(--muted-alt-10)" strokeOpacity="0.22" strokeWidth="2" style={{ cursor: "pointer" }}>
        {bobbles.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={b.rx ?? 32}
            transform={b.rotate ? `rotate(${b.rotate} ${b.x + b.w/2} ${b.y + b.h/2})` : undefined}
            className="mesh-bobble"
          />
        ))}
      </g>

      <style>{`
        .mesh-bobble { transition: all 260ms ease; }
        .mesh-bobble:hover { stroke-opacity: 0.9; stroke-width: 3; filter: url(#glow); }
      `}</style>
    </svg>
  );
}
