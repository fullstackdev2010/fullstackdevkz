// components/ui/GlassCard.tsx
import clsx from "clsx";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, children, ...rest }: Props) {
  return (
    <div className={clsx("glass relative rounded-2xl border p-6 md:p-8 shadow-[var(--shadow-md)]", className)} {...rest}>
      {/* Decorative inset highlight — must not intercept clicks */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-0"
        style={{ boxShadow: "inset 0 1px 0 var(--glass)" }}
        aria-hidden
      />
      {/* Real content sits above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
