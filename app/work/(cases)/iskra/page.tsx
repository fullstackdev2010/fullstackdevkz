// app/work/iskra/page.tsx
import CaseStudyTemplate from '@/components/work/CaseStudyTemplate';

export default function Page() {
  return (     
    <CaseStudyTemplate
      title="Iskra Trade — Mobile Catalog & Orders"
      tagline="Iskra Trade — mobile sales app with a fast, clean backend."
      palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
      heroImage="/demos/iskra/01.jpg"
      privacyHref="/work/iskra/privacy"
      privacyLabel="Privacy & Data Handling"
      kpis={[ 
        { label: 'Customer satisfaction', value: '100%' },
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
