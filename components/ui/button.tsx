import clsx from 'clsx';

type Variant = 'glass' | 'glow' | 'outline' | 'soft';
type Size = 'sm' | 'md' | 'lg';

export function Button({ as: Tag = 'a' as any, href, onClick, children, variant='glass', size='md', className }: {
  as?: any; href?: string; onClick?: any; children?: React.ReactNode; variant?: Variant; size?: Size; className?: string;
}) {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base',
  }[size];
  const variants = {
    glass: 'glass border-white/20 hover:bg-white/10',
    glow: 'bg-white/10 border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,.1),0_10px_40px_rgba(124,164,255,.35)] hover:shadow-[0_0_0_1px_rgba(255,255,255,.15),0_16px_60px_rgba(124,164,255,.5)]',
    outline: 'border border-white/25 hover:bg-white/5',
    soft: 'bg-white/[.07] hover:bg-white/[.12]',
  }[variant];
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
        sizes,
        variants,
        className
      )}
    >
      {children}
    </Tag>
  );
}
