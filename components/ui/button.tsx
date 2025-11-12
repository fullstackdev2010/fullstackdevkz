// components/ui/Button.tsx
import clsx from 'clsx';
import type React from 'react';

type Variant = 'glass' | 'glow' | 'outline' | 'soft';
type Size = 'sm' | 'md' | 'lg';

type OwnProps<T extends React.ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

export type ButtonProps<T extends React.ElementType = 'button'> =
  OwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof OwnProps<T>>;

export function Button<T extends React.ElementType = 'button'>({
  as,
  variant = 'glass',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? 'button') as React.ElementType;

  const sizeClass: Record<Size, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const variantClass: Record<Variant, string> = {
    glass:
      'glass border-white/20 hover:bg-white/10',
    glow:
      'bg-white/10 border border-white/20 shadow-[0_0_0_1px_var(--accent-8),0_10px_40px_var(--accent-15)] hover:shadow-[0_0_0_1px_var(--accent-12),0_16px_60px_var(--accent-2)]',
    outline:
      'border border-white/25 hover:bg-white/5',
    soft:
      'bg-white/[.07] hover:bg-white/[.12]',
  };

  return (
    <Tag
      {...(rest as Record<string, unknown>)}
      className={clsx(
        'inline-flex items-center rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
        sizeClass[size],
        variantClass[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
