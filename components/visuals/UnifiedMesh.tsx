"use client";
import * as React from "react";

type Props = { className?: string; variant?: "default" | "violet" | "cyan" };

export default function UnifiedMesh({ className, variant = "default" }: Props) {
  return (
    <svg className={className} viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id="ballA" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={variant === "cyan" ? "#67E8F9" : "#22D3EE"} stopOpacity="0.85"/>
          <stop offset="60%" stopColor={variant === "violet" ? "#C4B5FD" : "#A78BFA"} stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ballB" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ballC" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="#C4B5FD" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0"/>
        </radialGradient>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#334155" />
        </pattern>
        <filter id="blurA"><feGaussianBlur stdDeviation="55" /></filter>
        <filter id="blurB"><feGaussianBlur stdDeviation="45" /></filter>
        <filter id="blurC"><feGaussianBlur stdDeviation="35" /></filter>
        <filter id="glow"><feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#67E8F9" floodOpacity="0.8"/></filter>
      </defs>

      <rect width="1600" height="900" fill="#0B0F19"/>
      <rect width="1600" height="900" fill="url(#dots)" opacity="0.28"/>

      <g opacity="0.9" filter="url(#blurA)"><circle cx="450" cy="640" r="520" fill="url(#ballA)"/></g>
      <g opacity="0.85" filter="url(#blurB)"><circle cx="1180" cy="340" r="420" fill="url(#ballB)"/></g>
      <g opacity="0.75" filter="url(#blurC)"><circle cx="900" cy="720" r="300" fill="url(#ballC)"/></g>

      {/* Interactive bobbles */}
      <g fill="none" stroke="#7dd3fc" strokeOpacity="0.2" strokeWidth="2" style={{ cursor: "pointer" }}>
        <rect x="240" y="180" width="230" height="440" rx="36" className="mesh-bobble"/>
        <rect x="1240" y="160" width="230" height="440" rx="36" className="mesh-bobble"/>
        <rect x="740" y="260" width="230" height="440" rx="36" className="mesh-bobble"/>
      </g>

      <style>{`
        .mesh-bobble { transition: all 260ms ease; }
        .mesh-bobble:hover { stroke-opacity: 0.85; stroke-width: 3; filter: url(#glow); }
      `}</style>
    </svg>
  );
}