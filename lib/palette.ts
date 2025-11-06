export type Palette = [string,string,string,string?,string?];

export function getRoutePalette(pathname: string): Palette {
  const map: Record<string, Palette> = {
    '/': ['var(--brand-1)','var(--brand-2)','var(--brand-3)','var(--brand-4)','var(--brand-5)'],
    '/work': ['var(--brand-2)','var(--brand-1)','var(--brand-5)'],
    '/services': ['var(--brand-3)','var(--brand-1)','var(--brand-2)'],
    '/about': ['var(--brand-4)','var(--brand-1)','var(--brand-3)'],
    '/stack': ['var(--brand-1)','var(--brand-5)','var(--brand-3)'],
    '/contact': ['var(--brand-2)','var(--brand-3)','var(--brand-1)'],
  };
  const entries = Object.entries(map).sort((a,b)=>b[0].length - a[0].length);
  for (const [prefix, pal] of entries) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) return pal;
  }
  return ['var(--brand-1)','var(--brand-2)','var(--brand-3)','var(--brand-4)','var(--brand-5)'];
}
