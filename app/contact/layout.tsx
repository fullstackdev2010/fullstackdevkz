import type { ReactNode } from "react";
import UnifiedMesh from "@/components/visuals/UnifiedMeshGallery";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      <UnifiedMesh
        className="pointer-events-auto absolute inset-0 h-full w-full opacity-60"
        variant="cyan"
        bobbles={[{"x": 240, "y": 200, "w": 240, "h": 460, "rx": 36, "rotate": 4}, {"x": 740, "y": 260, "w": 230, "h": 440, "rx": 36, "rotate": -2}, {"x": 1220, "y": 180, "w": 240, "h": 460, "rx": 36, "rotate": 0}]}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#0B0F19]/30" />
      <div className="relative">{children}</div>
    </div>
  );
}
