export type Palette = [string,string,string,string?,string?];

export function getRoutePalette(pathname: string): Palette {
  const map: Record<string, Palette> = {
    '/': ['#7AA2FF','#8DF2D6','#FFB3EC','#C2FF7A','#FFD07A'],
    '/work': ['#8DF2D6','#7AA2FF','#FFD07A'],
    '/services': ['#FFB3EC','#7AA2FF','#8DF2D6'],
    '/about': ['#C2FF7A','#7AA2FF','#FFB3EC'],
    '/blog': ['#FFD07A','#7AA2FF','#8DF2D6'],
    '/stack': ['#7AA2FF','#FFD07A','#FFB3EC'],
    '/contact': ['#8DF2D6','#FFB3EC','#7AA2FF'],
  };
  const entries = Object.entries(map).sort((a,b)=>b[0].length - a[0].length);
  for (const [prefix, pal] of entries) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) return pal;
  }
  return ['#7AA2FF','#8DF2D6','#FFB3EC','#C2FF7A','#FFD07A'];
}
