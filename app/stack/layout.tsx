import type { ReactNode } from "react";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <MeshWithPhotoInsets
        className="pointer-events-none absolute inset-0 w-full h-full"
        backgroundSrc="/brand/unified-mesh.svg"
        viewBox="0 0 1600 900"   // must match your mesh.svg viewBox
        photos={[
          // { href: "/demos/ubiscan/home.png",  x: 220,  y: 160, w: 260, h: 390, rx: 28, overlay: "soft",   mixBlendMode: "overlay" },
        ]}
      />
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg)]/30" />
      <div className="relative">{children}</div>
    </div>
  );
}
