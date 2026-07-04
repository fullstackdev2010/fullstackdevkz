import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import CaseStudyTemplate2 from "@/components/work/CaseStudyTemplate2";
import { appSeoContent } from "@/lib/appSeoContent";

export const metadata = {
  title: "Docs Scan OCR Encrypt & Share On-device OCR Scanner",
  description:
    "High-speed scanning with on-device OCR, native modules, and encrypted results for privacy-sensitive workflows.",
  alternates: { canonical: "/work/uniscan" },
  keywords: [
    "offline OCR scanner",
    "private document scanner",
    "encrypted scanner app",
    "secure PDF scanner",
    "Android OCR app",
  ],
};

export default function Page() {
  const seo = appSeoContent.uniscan;

  return (
    <>
      <CaseStudyTemplate2
        title="Docs Scan OCR Encrypt & Share On-device OCR Scanner"
        tagline="High-speed scanning with on-device OCR, native modules, and encrypted results for privacy-sensitive workflows."
        palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
        heroImage="/demos/uniscan/01.jpg"
        privacyHref="/work/uniscan/privacy"
        privacyLabel="Privacy & Data Handling"
        kpis={[
          { label: "Scans / min", value: "45-60", note: "mid-range Android" },
          { label: "Latency (p50)", value: "<= 350 ms" },
          { label: "Coverage", value: "iOS / Android", note: "A/B device tests" },
        ]}
        gallery={[
          { src: "/demos/uniscan/02.jpg", platform: "android", alt: "Docs Scan OCR home screen" },
          { src: "/demos/uniscan/03.jpg", platform: "android", alt: "Docs Scan OCR document preview" },
          { src: "/demos/uniscan/04.jpg", platform: "android", alt: "Docs Scan OCR recognition result" },
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <AppSeoLandingSections {...seo} />
      </div>
    </>
  );
}
