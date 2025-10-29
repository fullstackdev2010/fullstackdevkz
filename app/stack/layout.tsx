import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      <Image
        src="/brainwave/stack-mesh.svg"
        alt=""
        width={1600}
        height={900}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-[#0B0F19]/30" />
      <div className="relative">{children}</div>
    </div>
  );
}
