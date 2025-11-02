import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';

export default function CaseCard({ href, title, summary, tags, thumb }: {
  href: string;
  title: string;
  summary: string;
  tags?: string[];
  thumb?: string;
}) {
  return (
    <Link href={href}>
      <GlassCard className="h-full transition-transform hover:-translate-y-0.5">
        {thumb && (
          <div className="mb-4 h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="h-full w-full bg-center bg-cover" style={{ backgroundImage: `url(${thumb})` }} />
          </div>
        )}
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{summary}</p>
        {tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(t => <span key={t} className="rounded-md border border-white/15 px-2 py-0.5 text-xs">{t}</span>)}
          </div>
        )}
      </GlassCard>
    </Link>
  );
}
