"use client";
import Carousel from '@/components/ui/Carousel';
import { DeviceFrame } from '@/components/ui/DeviceFrame';

export default function DeviceCarousel({ shots }: { shots: { src: string; alt?: string; platform?: 'ios'|'android' }[] }) {
  return (
    <Carousel
      auto
      interval={3800}
      items={shots.map((s, idx) => ({
        key: String(idx) + (s.src || ''),
        node: (
          <div className="flex items-center justify-center p-6 min-h-[520px]">
            <DeviceFrame platform={s.platform ?? 'android'} src={s.src} alt={s.alt ?? ''} width={320} height={640} />
          </div>
        )
      }))}
    />
  );
}
