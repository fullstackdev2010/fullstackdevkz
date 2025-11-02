import clsx from "clsx";

export function GlassCard({ className, children, as: Tag = "div" as any }: {
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}) {
  return (
    <Tag
      className={clsx(
        "glass relative rounded-2xl border p-6 md:p-8",
        "shadow-[var(--shadow-md)]",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.06)" }} />
      {children}
    </Tag>
  );
}
