import Image from "next/image";
import clsx from "clsx";

export type DeviceFrameProps = {
  platform?: "ios" | "android";
  src: string;            // image or poster
  alt?: string;
  videoSrc?: string;      // optional mp4/webm for short demo
  className?: string;
  width?: number;
  height?: number;
};

export function DeviceFrame({ platform = "ios", src, alt = "App demo", videoSrc, className, width = 360, height = 720 }: DeviceFrameProps) {
  return (
    <div className={clsx("relative", className)} style={{ width, height }}>
      {/* Body */}
      <div className="absolute inset-0 rounded-[36px] bg-black/85 border border-white/10 shadow-[var(--shadow-lg)]" />

      {/* Notch (iOS) or Camera punch (Android) */}
      {platform === "ios" ? (
        <div className="absolute left-1/2 top-2 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-black/80 border border-white/10" />
      ) : (
        <div className="absolute right-5 top-3 z-10 h-2 w-2 rounded-full bg-white/30" />
      )}

      {/* Screen */}
      <div className="absolute inset-1.5 overflow-hidden rounded-[28px] bg-black">
        {videoSrc ? (
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src={videoSrc} />
          </video>
        ) : (
          <Image src={src} alt={alt} fill priority className="object-cover" />
        )}
      </div>
    </div>
  );
}
