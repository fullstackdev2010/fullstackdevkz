// app/contact/page.tsx
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";

export default function Page() {
  return (
    <section className="relative min-h-screen">
      
      {/* Background confined to this section so it won't cover the global footer */}
      <MeshWithPhotoInsets
        className="pointer-events-none absolute inset-0 z-0"
        backgroundSrc="/brand/unified-mesh.svg"
        viewBox="0 0 1600 900" // must match your mesh.svg viewBox
        photos={[
          // { href: "/demos/uniscan/01.jpg", x: 220, y: 160, w: 260, h: 390, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
        ]}
      />

      {/* Content sits above mesh + tint */}
      <main className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl font-semibold">Coming soon</h1>
        <p className="mt-4 text-[var(--muted)]">We’re crafting this page with mesh and care.</p>
      </main>
    </section>
  );
}
  