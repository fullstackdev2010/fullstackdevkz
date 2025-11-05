import CaseStudyTemplate2 from '@/components/work/CaseStudyTemplate2';

export default function Page() {
  return (
    <CaseStudyTemplate2
      title="UNIScan — On‑device OCR Scanner"
      tagline="High‑speed scanning with on‑device OCR, native modules, and end‑to‑end encrypted results for privacy‑sensitive workflows."
      palette={['var(--brand-1)','var(--brand-2)','var(--brand-3)']}
      heroImage="/demos/uniscan/01.jpg"
      kpis={[
        { label: 'Scans / min', value: '45–60', note: 'mid‑range Android' },
        { label: 'Latency (p50)', value: '≤ 350 ms' },
        { label: 'Coverage', value: 'iOS / Android', note: 'A/B device tests' },
      ]}
      gallery={[
        { src: '/demos/uniscan/02.jpg', platform: 'android', alt: 'Home' },
        { src: '/demos/uniscan/03.jpg', platform: 'android', alt: 'Preview' },
        { src: '/demos/uniscan/04.jpg', platform: 'android', alt: 'Result' },
      ]}
    />
  );
}
