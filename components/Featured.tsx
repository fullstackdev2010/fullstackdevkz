import { Smartphone, Layers, ServerCog, Beaker, Palette } from "lucide-react";
import Link from "next/link";

const items = [
  { icon: Smartphone, title: "iOS Development", points: ["Swift/SwiftUI", "Push, IAP, Keychain", "App Store delivery"], href: "/services" },
  { icon: Smartphone, title: "Android Development", points: ["Kotlin/Jetpack", "Material 3, Firebase", "Play Console release"], href: "/services" },
  { icon: Layers, title: "Cross-platform", points: ["React Native / Expo", "Fast iteration", "Native polish"], href: "/services" },
  { icon: ServerCog, title: "Backend & APIs", points: ["FastAPI / Node", "PostgreSQL", "Auth & Payments"], href: "/services" },
  { icon: Palette, title: "UI/UX & Prototyping", points: ["Click-through prototypes", "Design systems", "Usability testing"], href: "/services" },
  { icon: Beaker, title: "QA & Release", points: ["CI/CD pipelines", "Test automation", "Analytics setup"], href: "/services" },
];

export default function Featured() {
  return (
    <section className="py-16 bg-[var(--accent-28)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-white mb-6">Featured Services</h2>
        <p className="text-violet-200 mb-10 max-w-3xl">From discovery to launch, we build mobile apps that feel effortless and perform beautifully.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, points, href }) => (
            <Link key={title} href={href} className="group block rounded-2xl border border-white/10 bg-[var(--bg-alt-12)] p-5 hover:border-fuchsia-400/40 transition">
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-fuchsia-300" />
                <h3 className="text-white text-lg font-medium">{title}</h3>
              </div>
              <ul className="mt-3 text-violet-200 text-sm space-y-1.5 list-disc list-inside">
                {points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
              <span className="mt-4 inline-block text-fuchsia-300 text-sm">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
