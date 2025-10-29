"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const shots = [
  { src: "/brainwave/curve.svg", title: "Commerce UI" },
  { src: "/brainwave/mesh-2.svg", title: "Analytics" },
  { src: "/brainwave/mesh-1.svg", title: "Chat / Realtime" },
];

export default function ShowcaseParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="work" ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
      <p className="mt-3 max-w-2xl text-slate-300/90">A few polished screens from recent deliveries. Replace with your real app shots.</p>
      <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div style={{ y: y1 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <Image src={shots[0].src} alt={shots[0].title} width={900} height={1200} className="h-80 w-full rounded-2xl object-cover" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <Image src={shots[1].src} alt={shots[1].title} width={900} height={1200} className="h-80 w-full rounded-2xl object-cover" />
        </motion.div>
        <motion.div style={{ y: y3 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <Image src={shots[2].src} alt={shots[2].title} width={900} height={1200} className="h-80 w-full rounded-2xl object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
