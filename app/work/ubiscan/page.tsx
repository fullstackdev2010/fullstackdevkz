import CaseStudyTemplate from '@/components/work/CaseStudyTemplate';

export default function Page() {
  return (
    <CaseStudyTemplate
      title="UbiScan — On‑device OCR Scanner"
      tagline="High‑speed scanning with on‑device OCR, native modules, and end‑to‑end encrypted results for privacy‑sensitive workflows."
      palette={['#7AA2FF','#8DF2D6','#FFB3EC']}
      heroImage="/demos/ubiscan/home.png"
      kpis={[
        { label: 'Scans / min', value: '45–60', note: 'mid‑range Android' },
        { label: 'Latency (p50)', value: '≤ 350 ms' },
        { label: 'Coverage', value: 'iOS / Android', note: 'A/B device tests' },
      ]}
      gallery={[
        { src: '/demos/ubiscan/home.png', platform: 'android', alt: 'Home' },
        { src: '/demos/ubiscan/preview.png', platform: 'android', alt: 'Preview' },
        { src: '/demos/ubiscan/result.png', platform: 'android', alt: 'Result' },
      ]}
      challenge={<>
        Field teams needed reliable scanning in low-connectivity environments with strict privacy constraints. Cloud OCR was not acceptable; all text had to stay on-device and be encrypted at rest.
      </>}
      approach={<>
        We integrated a native camera pipeline with a lightweight OCR engine, exposed via a typed hook in Expo. A ring-buffer throttled frames; target ROIs and zoom hints reduced work per frame. Results were encrypted on-device (AES‑GCM) before optional sync.
      </>}
      result={<>
        The app achieved sub‑second scan cycles on mainstream Android hardware with high recognition accuracy. The encryption & offline queue enabled safe operation even without network access.
      </>}
    />
  );
}
