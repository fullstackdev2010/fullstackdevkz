// app/work/(cases)/layout.tsx
import MeshBackground from '@/components/mesh/MeshBackground';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <MeshBackground
        className="pointer-events-none absolute inset-0 -z-10"
        seed="work-cases"
        palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
        brightness={0.95}
        opacity={0.85}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bg)]/20 via-transparent to-transparent" />
      {children}
    </div>
  );
}
