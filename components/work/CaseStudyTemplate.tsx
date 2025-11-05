import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { DeviceFrame } from '@/components/ui/DeviceFrame';

export type KPI = { label: string; value: string; note?: string };

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
          <DeviceFrame platform={it.platform ?? 'android'} src={it.src} alt={it.alt ?? 'App screen'} width={320} height={640} />
        </GlassCard>
      ))}
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

export default function CaseStudyTemplate({
  title,
  tagline,
  heroImage = '/demos/uniscan/home.png',
  kpis = [],
  gallery = [],
}: {
  title: string;
  tagline: string;
  palette?: string[];
  heroImage?: string;
  kpis?: KPI[];
  gallery?: { src: string; alt?: string; platform?: 'ios'|'android' }[];
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground /></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border glass p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
              <p className="mt-3 text-[var(--muted)] max-w-prose">{tagline}</p>
              {kpis.length > 0 && <KPIStrip kpis={kpis} />}
            </div>
            <div className="flex justify-center">
              <DeviceFrame platform="android" src={heroImage} width={360} height={720} />
            </div>
          </div>
        </div>

        {gallery.length > 0 && <DeviceGallery items={gallery} />}

        <Section title="">
          <GlassCard>
            <p className="text-2xl">Overview</p><br></br>         
            <p className="text-[var(--muted)]">Iskra Trade is a modern mobile app for sales reps and buyers. Built with Expo (React Native) and a lightweight FastAPI backend, it brings your full product catalog to the phone, makes ordering painless, and keeps everything snappy even on shaky networks. Users sign in, browse a structured catalog (Electro / Hand Tools / Parts), search instantly, add items to a cart with quantity rules, place orders, and review order history — all tied to secure user identities and token-based sessions.</p>
          </GlassCard>
          <GlassCard>
            <p className="text-2xl">Who it’s for</p><br></br>                
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Field sales teams who need fast product lookup, stock/price visibility, and one-tap ordering on the go.</li>
              <li>Dealers & partners who reorder frequently and want a streamlined mobile experience.</li>
              <li>Operations that already maintain a price list / catalog and want a clean pipeline from phone → backend → accounting/export.</li>
            </ul>
          </GlassCard>
        </Section>

        <Section title="">
        <GlassCard>
          <p className="text-2xl">The challenge</p><br></br>             
          <p className="text-[var(--muted)]">Traditional mobile ordering tools are slow, fragile, or over-engineered. We needed:</p>
          <ul className="list-disc pl-5 text-[var(--muted)]">
            <li>A frictionless catalog UI with deep hierarchy (Electro / HandTools / Parts) and quick search.</li>
            <li>A rock-solid ordering flow that snapshots prices and quantities exactly as seen at the moment of purchase.</li>
            <li>Strong but simple auth that’s friendly on mobile (PIN/biometrics) yet secure (JWT + refresh).</li>
            <li>A lightweight backend that’s easy to deploy, integrates with existing databases, rate-limited, and CORS-safe.</li>
            <li>Operational hooks (scripts) to load catalogs, export orders, and keep data fresh without manual fiddling.</li>
          </ul>
        </GlassCard>
        <GlassCard>
          <p className="text-2xl">Our approach</p><br></br>
          <p className="text-[var(--muted)]">Mobile (Expo Router)</p>             
          <ul className="list-disc pl-5 text-[var(--muted)]">
            <li>Clean navigation: Tabbed app (home, elements, orders, profile) with dedicated auth flow (sign-in, sign-up, PIN setup/reset, PIN login).</li>
            <li>Catalog built for speed: Preloaded hierarchy per category via /trade endpoints; list → details with pictures and stock; instant search that queries article + description.</li>
            <li>Cart you can trust: One line per SKU (merged by code), stock-aware quantity limits, accurate totals.</li>
            <li>Orders without surprises: The app sends your current cart snapshot; the server re-computes the authoritative total server-side and persists a per-line snapshot (unit_final_price, line_total) so history is auditable.</li>
            <li>Offline-aware polish: Network status banner, resilient state, and UX that doesn’t break when a connection blips.</li>
            <li>Secure sessions that feel native: Tokens stored in SecureStore when available, fallback to AsyncStorage as needed, biometric-gated access (via expo-local-authentication) with a “skip once” escape hatch for edge cases.</li>
          </ul>
        </GlassCard>
        </Section>

        <Section title="">
         <GlassCard>
            <p className="text-2xl">Backend (FastAPI)</p><br></br>             
            <p className="text-[var(--muted)]">Tight, purposeful API:</p>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>/auth — login, refresh token rotation (hashed refresh tokens in DB), token invalidation.</li>
              <li>/trade — hierarchical catalog endpoints for Items/Tools/Parts, combined parts, full-text search.</li>
              <li>/orders — create/list/get with price snapshotting and authoritative totals.</li>
              <li>/categories — category codes (code/title/description).</li>
              <li>/pictures/file — serves product and manager images with fallbacks.</li>
            </ul>
            <p className="text-[var(--muted)]">Built-in correctness & safety:</p>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>SlowAPI rate limiting on hot routes (e.g., 30/min)</li>
              <li>Strict CORS, structured validation errors</li>
              <li>SQLAlchemy models for items, tools, parts, orders, users, refresh_tokens</li>
            </ul>
            <p className="text-[var(--muted)]">Ops ready scripts:</p>
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Loaders for items/tools/parts/users from your sources</li>
              <li>Order export to JSON for accounting/BI (scripts/loaders/export_orders.py) with idempotency (skips if the export already exists)</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <p className="text-2xl">Results</p><br></br>             
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Fast adoption by field teams: simple sign-in, PIN/biometric unlock, quick browse/search.</li>
              <li>Reduced ordering errors: server-side authoritative totals with per-line snapshots keep history consistent and auditable.</li>
              <li>Operational visibility: JSON exports of orders slot neatly into existing accounting and analytics flows.</li>
              <li>Low-friction maintenance: clear models, small FastAPI surface, and Expo tooling keep updates reliable.</li>
            </ul>
          </GlassCard>
        </Section>

        <div className="mt-16">
          <a href="/work" className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm">← Back to Work</a>
        </div>
      </div>
    </div>
  );
}
