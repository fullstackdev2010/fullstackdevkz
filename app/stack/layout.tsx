import type { ReactNode } from "react";
import UnifiedMesh from "@/components/visuals/UnifiedMeshGallery";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      <UnifiedMesh
        className="pointer-events-auto absolute inset-0 h-full w-full opacity-60"
        variant="default"
        bobbles={[{"x": 220, "y": 190, "w": 230, "h": 440, "rx": 36, "rotate": -2}, {"x": 760, "y": 280, "w": 230, "h": 440, "rx": 36, "rotate": 6}, {"x": 1200, "y": 170, "w": 230, "h": 440, "rx": 36, "rotate": -3}]}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#0B0F19]/30" />
      <div className="relative">{children}</div>
    </div>
  );
}
