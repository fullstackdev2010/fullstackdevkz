import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import CaseStudyTemplate3 from "@/components/work/CaseStudyTemplate3";
import { appSeoContent } from "@/lib/appSeoContent";

export const metadata = {
  title: "Momentum TODO Focus, Routines & Streaks",
  description:
    "Momentum TODO productivity app with routines, streaks, offline storage and multilingual UI.",
  alternates: { canonical: "/work/todo" },
  keywords: [
    "Momentum TODO",
    "todo app Android",
    "routine planner",
    "task app with streaks",
    "offline todo app",
  ],
};

export default function Page() {
  const seo = appSeoContent.todo;

  return (
    <>
      <CaseStudyTemplate3
        title="Momentum TODO Focus, Routines & Streaks"
        tagline="Minimal productivity app with routines, streak tracking, offline storage, and multilingual UI built with Expo."
        palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
        heroImage="/demos/todo/01.jpg"
        privacyHref="/work/todo/privacy"
        privacyLabel="Privacy & Data Handling"
        kpis={[
          { label: "Platforms", value: "Android / iOS", note: "Expo native build" },
          { label: "Storage", value: "Local only", note: "AsyncStorage" },
          { label: "Languages", value: "10+", note: "i18n + RTL support" },
        ]}
        gallery={[
          { src: "/demos/todo/02.jpg", platform: "android", alt: "Momentum TODO home dashboard" },
          { src: "/demos/todo/03.jpg", platform: "android", alt: "Momentum TODO task preview" },
          { src: "/demos/todo/04.jpg", platform: "android", alt: "Momentum TODO routine result screen" },
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <AppSeoLandingSections {...seo} />
      </div>
    </>
  );
}
