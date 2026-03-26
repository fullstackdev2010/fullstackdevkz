// components/work/CaseStudyTemplate3.tsx
import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { DeviceFrame } from '@/components/ui/DeviceFrame';
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import Link from "next/link";
import { TODO_PLAY_URL } from "@/lib/constants";

export type KPI = { label: string; value: string; note?: string };

// NEW: explicit props type so we can add a design-appropriate Privacy link
type CaseStudyTemplateProps = {
  title: string;
  tagline: string;
  palette?: string[];
  heroImage?: string;
  kpis?: KPI[];
  gallery?: { src: string; alt?: string; platform?: 'ios'|'android' }[];
  /**
   * Optional privacy link. If provided, a subtle CTA button will be shown
   * in the hero. Point this at /work/(cases)/iskra/privacy for Iskra.
   */
  privacyHref?: string;
  privacyLabel?: string;
};

export function KPIStrip({ kpis }: { kpis: KPI[] }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {kpis.map((k) => (
        <GlassCard key={k.label}>
          <div className="text-sm text-[var(--muted)]">{k.label}</div>
          <div className="mt-1 text-2xl font-semibold">{k.value}</div>
          {k.note && <div className="text-xs mt-1 text-[var(--muted)]">{k.note}</div>}
        </GlassCard>
      ))}
    </div>
  );
}

export function DeviceGallery({ items }: { items: { src: string; alt?: string; platform?: 'ios'|'android' }[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <GlassCard key={i} className="p-4 flex items-center justify-center">
          <DeviceFrame platform={it.platform ?? 'android'} src={it.src} alt={it.alt ?? 'App screen'} width={320} height={640} contentScale = {0.95}/>
        </GlassCard>
      ))}
    </div>
  );
}

function DescriptionCard({
  children,
}: {
  seed: string;
  palette?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border glass p-6 md:p-8">
      {/* Full-bleed mesh background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <MeshBackground
          brightness={0.6}
          opacity={0.95}
          seed="Iskra Trade — Mobile Catalog & Orders"
          palette={['#7AA2FF', '#8DF2D6', '#96ABFF']}
          static
        />
      </div>

      {/* Content above mesh */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyTemplate3({
  title,
  tagline,
  palette,
  heroImage = '/demos/todo/01.jpg',
  kpis = [],
  gallery = [],
  // NEW: privacy link (optional)
  privacyHref,
  privacyLabel = 'Privacy Policy',
  }: CaseStudyTemplateProps) {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border glass p-8 md:p-12">
          {/* Mesh background confined to this section */}
            <MeshWithPhotoInsets
              className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
              backgroundSrc="/brand/main.webp"
              viewBox="0 0 1600 900"  // must match your mesh.svg viewBox
              photos={[
                // { href: "/demos/uniscan/01.jpg", x: 220, y: 160, w: 260, h: 390, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
              ]}
            />
          {/* Mesh background scoped to the hero card, like on app/page.tsx */}
            <div className="absolute inset-0">
              <MeshBackground
                brightness={0.8} 
                opacity={0.95}
                seed={title}          
                palette={palette}    
                static               
              />
            </div>
          <div className="relative z-10 grid min-w-0 gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
              <p className="mt-3 text-[var(--muted)] max-w-prose">{tagline}</p>
              {kpis.length > 0 && <KPIStrip kpis={kpis} />}
              {/* NEW: subtle hero CTA for privacy */}
              <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={TODO_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/25 transition"
              >
                📲 Download on Google Play
              </Link>

              {privacyHref && (
                <Link
                  href={privacyHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/5 transition"
                >
                  {privacyLabel}
                </Link>
              )}
            </div>
            </div>
            <div className="flex justify-center min-w-0">
              <DeviceFrame
                platform="android"
                src={heroImage}
                width={320}
                height={640}
                contentScale = {0.95}
              />
            </div>
          </div>
        </div>

        {gallery.length > 0 && <DeviceGallery items={gallery} />}

        <Section title="">
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">Overview</p><br></br>         
            <p className="text-[var(--muted)]">Momentum TODO is a minimal productivity app - tasks, routines, streaks, statistics. Designed for focus and consistency, no accounts, no cloud, no clutter. Fully offline-first architecture, all data stored locally.</p>
          </DescriptionCard>
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">Targeted audience</p><br></br>                
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>People who want simple task tracking.</li>
              <li>Users who prefer offline apps.</li>
              <li>Productivity enthusiasts.</li>
              <li>Users who dislike subscription apps.</li>
            </ul>
          </DescriptionCard>
        </Section>
        <Section title="">
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">The challenge</p><br></br>             
            <p className="text-[var(--muted)]">Build a clean productivity app without complexity. Keep UI fast on low-end devices. Support multiple languages including RTL. Implement routines & streak engine without backend.</p>
          </DescriptionCard>
          <DescriptionCard seed={title} palette={palette}>
          <p className="text-2xl">Our approach</p><br></br>           
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Offline-first architecture</li>
              <li>Zustand state store</li>
              <li>AsyncStorage persistence</li>            
              <li>Modular UI system</li>
              <li>Custom theming engine</li>
              <li>Full i18n integration</li>               
            </ul>
          </DescriptionCard>
        </Section>
        <Section title="">
         <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">The stack</p><br></br>             
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Expo / React Native</li>
              <li>TypeScript</li>
              <li>Zustand</li>
              <li>AsyncStorage</li>
              <li>i18next</li>
              <li>RevenueCat</li>       
            </ul>
          </DescriptionCard>
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">Results</p><br></br>             
            <p className="text-[var(--muted)]">Smooth performance even on older devices. Fully offline functionality. 9 languages supported. Pro features via in-app purchase. Clean UI with consistent design.</p>
          </DescriptionCard>
        </Section>
        <div className="mt-16">
          <a href="/work" className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm">← Back to Work</a>
        </div>
      </div>
    </div>
  );
}
