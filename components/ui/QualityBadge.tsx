import Image from "next/image";
import clsx from "clsx";

type QualityBadgeProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: 64,
  md: 76,
  lg: 92,
};

export function QualityBadge({ className, size = "md" }: QualityBadgeProps) {
  const px = sizes[size];

  return (
    <Image
      src="/brand/fullstackdevkz-badge.png"
      alt="Fullstack Dev KZ mobile craftsmanship quality sign"
      width={px}
      height={px}
      className={clsx(
        "shrink-0 rounded-full border border-white/20 shadow-[0_12px_38px_rgba(0,0,0,0.35)]",
        className,
      )}
    />
  );
}
