import CaseStudyTemplate from '@/components/work/CaseStudyTemplate';

export default function Page() {
  return (
    <CaseStudyTemplate
      title="Iskra Trading — Mobile Catalog & Orders"
      tagline="Iskra Trade — mobile sales app with a fast, clean backend."
      palette={['var(--brand-2)','var(--brand-1)','var(--brand-5)']}
      heroImage="/demos/iskra/home.jpg"
      kpis={[
        { label: 'Crash‑free sessions', value: '99.2%' },
        { label: 'LCP (mobile)', value: '≤ 2.3 s' },
        { label: 'Order throughput', value: '+28%', note: 'post‑launch' },
      ]}
      gallery={[
        { src: '/demos/iskra/02.jpg', platform: 'android', alt: 'Home (mesh hero)' },
        { src: '/demos/iskra/03.jpg', platform: 'android', alt: 'Catalog' },
        { src: '/demos/iskra/07.jpg', platform: 'android', alt: 'Product detail' },
      ]}

      overview={<>
        Iskra Trade is a modern mobile app for sales reps and buyers. Built with Expo (React Native) and a lightweight FastAPI backend, it brings your full product catalog to the phone, makes ordering painless, and keeps everything snappy even on shaky networks. Users sign in, browse a structured catalog (Electro / Hand Tools / Parts), search instantly, add items to a cart with quantity rules, place orders, and review order history — all tied to secure user identities and token-based sessions.
      </>}

      challenge={<>
        Traditional mobile ordering tools are slow, fragile, or over-engineered. We needed:
        <li>A frictionless catalog UI with deep hierarchy (Electro / HandTools / Parts) and quick search.</li>
        A rock-solid ordering flow that snapshots prices and quantities exactly as seen at the moment of purchase.
        Strong but simple auth that’s friendly on mobile (PIN/biometrics) yet secure (JWT + refresh).
        A lightweight backend that’s easy to deploy, integrates with existing databases, rate-limited, and CORS-safe.
        Operational hooks (scripts) to load catalogs, export orders, and keep data fresh without manual fiddling.
      </>}
      approach={<>
        Mobile (Expo Router)
        Clean navigation: Tabbed app (home, elements, orders, profile) with dedicated auth flow (sign-in, sign-up, PIN setup/reset, PIN login).
        Catalog built for speed: Preloaded hierarchy per category via /trade endpoints; list → details with pictures and stock; instant search that queries article + description.
        Cart you can trust: One line per SKU (merged by code), stock-aware quantity limits, accurate totals.
        Orders without surprises: The app sends your current cart snapshot; the server re-computes the authoritative total server-side and persists a per-line snapshot (unit_final_price, line_total) so history is auditable.
        Offline-aware polish: Network status banner, resilient state, and UX that doesn’t break when a connection blips.
        Secure sessions that feel native: Tokens stored in SecureStore when available, fallback to AsyncStorage as needed, biometric-gated access (via expo-local-authentication) with a “skip once” escape hatch for edge cases.
      </>}
      result={<>
        Orders flow smoothly even offline; sync is safe and transparent. Sellers report fewer retries and faster checkout times. The mesh styling kept the brand feel while meeting performance budgets.
      </>}
    />
  );
}
