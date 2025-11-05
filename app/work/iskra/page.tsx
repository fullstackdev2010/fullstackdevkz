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
    />
  );
}
