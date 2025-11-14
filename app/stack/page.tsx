// app/stack/page.tsx
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";

type Item = { label: string; notes?: string };
type Group = { title: string; items: Item[] };

const STACK: Group[] = [
  {
    title: "Mobile App (Expo + React Native)",
    items: [
      { label: "Expo (React Native), Expo Router", notes: "Tabbed navigation, auth flow, deep links" },
      { label: "TypeScript", notes: "Strict types end-to-end" },
      { label: "State & Data", notes: "Light, screen-scoped state; request/response typing" },
      { label: "UI", notes: "Tailwind-style classes, custom GlassCard, mesh visuals" },
    ],
  },
  {
    title: "Backend API (FastAPI)",
    items: [
      { label: "FastAPI", notes: "Tight routes, typed models & responses" },
      { label: "SQLAlchemy", notes: "ORM models: items/tools/parts/orders/users/tokens" },
      { label: "Auth", notes: "JWT access + hashed refresh tokens; rotation + invalidation" },
      { label: "CORS & Rate-limit", notes: "Strict CORS, SlowAPI on hot routes" },
    ],
  },
  {
    title: "Iskra — Domain Features",
    items: [
      { label: "Catalog", notes: "Hierarchical (Electro / HandTools / Parts) + instant search" },
      { label: "Orders", notes: "Server-authoritative totals, per-line price snapshots" },
      { label: "Export", notes: "JSON orders for accounting/BI; idempotent loaders" },
      { label: "Ops Scripts", notes: "Loaders for items/tools/parts/users, safe refresh" },
    ],
  },
  {
    title: "UNIScan — On-device Processing",
    items: [
      { label: "OCR (on device)", notes: "@react-native-ml-kit/text-recognition; Tesseract native bridge" },
      { label: "Model Packs", notes: "Bundled language data; local execution" },
      { label: "Security UX", notes: "Vault lock, screen-capture guard on sensitive views" },
      { label: "Exports", notes: "DOCX/PDF via expo-print; encrypted .uenc option" },
    ],
  },
  {
    title: "Security",
    items: [
      { label: "Vault", notes: "AES-256-GCM; keys in SecureStore where available" },
      { label: "Biometrics", notes: "Optional unlock via expo-local-authentication" },
      { label: "Sessions", notes: "Short-lived access token; hashed refresh tokens (server)" },
      { label: "Principles", notes: "Minimum data, no third-party ads/tracking SDKs" },
    ],
  },
  {
    title: "Storage & Files",
    items: [
      { label: "On device", notes: "expo-file-system + AsyncStorage fallbacks" },
      { label: "Server files", notes: "Static product/manager images with graceful fallbacks" },
      { label: "Retention", notes: "User-controlled; ops exports for accounting/BI" },
      { label: "Formats", notes: "Images, JSON, DOCX/PDF (UNIScan), encrypted archives" },
    ],
  },
  {
    title: "Tooling & Build",
    items: [
      { label: "TypeScript everywhere", notes: "Shared contracts for app/server" },
      { label: "Expo tooling", notes: "Build profiles; Android focus; fast local dev" },
      { label: "Lint & Format", notes: "ESLint + Prettier; consistent CI-ready style" },
      { label: "Testing surface", notes: "Screen logic + API integration points" },
    ],
  },
  {
    title: "Performance & UX",
    items: [
      { label: "Startup & LCP", notes: "Lean bundles, image sizing, mesh is GPU-friendly" },
      { label: "Network polish", notes: "Offline-aware hints; resilient transitions" },
      { label: "Deterministic visuals", notes: "Seeded meshes for consistent theming" },
      { label: "A11y & Readability", notes: "Contrast, hit areas, readable body copy" },
    ],
  },
];

function StackGroup({ title, items }: Group) {
  return (
    <GlassCard className="relative overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2 text-[var(--muted)]">
        {items.map((it, i) => (
          <li key={i} className="leading-relaxed">
            <span className="text-white">{it.label}</span>
            {it.notes ? <span className="ml-2 text-[var(--muted)]">— {it.notes}</span> : null}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Rounded glass container with mesh (same layout as home/work/services) */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 border glass">
          {/* Mesh background confined to this section */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/stack.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.7}
              opacity={0.95}
              palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
            />
          </div>
          {/* Foreground content INSIDE glass */}
          <div className="relative z-10">
            <header className="max-w-3xl">
              <h1 className="text-4xl font-semibold">Our Stack</h1>
              <p className="mt-3 text-[var(--muted)]">
                A pragmatic toolkit: fast mobile with Expo, a tight FastAPI backend, and on-device OCR for
                privacy-sensitive flows. Typed end-to-end and tuned for reliability.
              </p>
            </header>
            {/* divider */}
            <div className="mt-8 h-px w-full bg-white/10" />
            {/* groups grid */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {STACK.map((g) => (
                <StackGroup key={g.title} title={g.title} items={g.items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
