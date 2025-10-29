// app/page.tsx
import HeroWave from "@/components/sections/HeroWave";
import Capabilities from "@/components/sections/Capabilities";
import ShowcaseParallax from "@/components/sections/ShowcaseParallax";
import ProcessRoadmap from "@/components/sections/ProcessRoadmap";
import LogosMarquee from "@/components/sections/LogosMarquee";
import CTASection from "@/components/sections/CTASection";

export default function Page() {
  return (
    <main className="bg-[#0B0F19]">
      <HeroWave />
      <LogosMarquee />
      <Capabilities />
      <ShowcaseParallax />
      <ProcessRoadmap />
      <CTASection />
    </main>
  );
}
