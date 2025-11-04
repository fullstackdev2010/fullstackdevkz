"use client";
import Image from "next/image";
import clsx from "clsx";

type DeviceFrameProps = {
  platform?: "android" | "ios";
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  contentScale?: number; // NEW: scales the inner picture without scaling the bezel
};

export function DeviceFrame({
  platform = "android",
  src,
  width = 360,
  height = 720,
  alt = "Demo",
  className,
  contentScale = 1,
}: DeviceFrameProps) {
  // Simple bezel styling to match typical mock frames
  const bezel = clsx(
    "relative overflow-hidden rounded-[2.25rem] border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.4)]",
    platform === "ios" ? "p-5" : "p-4",
    className
  );

  // Inner safe area where the screen content lives
  return (
    <div className={bezel} style={{ width, height }}>
      {/* Screen background for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Scaled content wrapper (does NOT change bezel size) */}
      <div
        className="absolute inset-0 grid place-items-center"
        style={{ transform: `scale(${Math.max(0.6, Math.min(1.2, contentScale))})` }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* Optional platform details (camera notch, etc.) could go here if desired */}
    </div>
  );
}

export default DeviceFrame;
