"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";

export default function HeroWave() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/brainwave/mesh-1.svg"
        alt="Gradient mesh"
        width={1200}
        height={900}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        priority
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mobile apps with <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">speed</span> & polish
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-7 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            We design, build, and ship production-grade iOS/Android apps, powered by modern stacks and CI/CD that actually hums.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <GlassButton href="#work">See our work</GlassButton>
            <GlassButton href="#contact">Start a project</GlassButton>
          </div>
        </div>

        {/* Floating phone */}
        <motion.div
          className="relative mx-auto mt-16 h-[520px] w-[260px]"
          initial={{ opacity: 0, y: 30, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image src="/brainwave/phone-outline.svg" alt="Phone" fill className="object-contain" />
          <Image
            src="/brainwave/curve.svg"
            alt="UI"
            width={220}
            height={360}
            className="absolute left-1/2 top-[22%] -translate-x-1/2 rounded-2xl opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
