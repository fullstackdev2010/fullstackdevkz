import CaseStudyTemplate from '@/components/work/CaseStudyTemplate';

export default function Page() {
  return (
    <CaseStudyTemplate
      title="Iskra Trading — Mobile Catalog & Orders"
      tagline="Expo trading app with FastAPI backend, offline cart, ERP bridges, and a mesh-forward UX tuned for field performance."
      palette={['var(--brand-2)','var(--brand-1)','var(--brand-5)']}
      heroImage="/demos/iskra/home.png"
      kpis={[
        { label: 'Crash‑free sessions', value: '99.2%' },
        { label: 'LCP (mobile)', value: '≤ 2.3 s' },
        { label: 'Order throughput', value: '+28%', note: 'post‑launch' },
      ]}
      gallery={[
        { src: '/demos/iskra/home.png', platform: 'android', alt: 'Home (mesh hero)' },
        { src: '/demos/iskra/catalog.png', platform: 'android', alt: 'Catalog' },
        { src: '/demos/iskra/product.png', platform: 'android', alt: 'Product detail' },
      ]}
      challenge={<>
        Field sellers needed a fast, reliable catalog and order flow that works on flaky networks and syncs safely to the back office. The UI had to stay legible outdoors and preserve battery life during long routes.
      </>}
      approach={<>
        We built an Expo app with a resilient cart and background sync, bridged to a FastAPI backend. Mesh visuals were tuned for low motion on mobile. The backend offered stable IDs, idempotent order endpoints, and CSV/JSON export for ERP integration.
      </>}
      result={<>
        Orders flow smoothly even offline; sync is safe and transparent. Sellers report fewer retries and faster checkout times. The mesh styling kept the brand feel while meeting performance budgets.
      </>}
    />
  );
}
