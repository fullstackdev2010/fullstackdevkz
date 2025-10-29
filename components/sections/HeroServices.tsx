"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Server, Lock, Rocket } from "lucide-react";

const pills = [
  { icon: Smartphone, label: "RN/Expo" },
  { icon: Server, label: "FastAPI/Node" },
  { icon: Lock, label: "E2EE/Passkeys" },
  { icon: Rocket, label: "CI/CD" },
];

export default function HeroServices(){
  return (
    <header className="relative overflow-hidden">
      <Image
        src="/brainwave/services-hero.svg"
        alt="Services Hero"
        width={1600}
        height={800}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        priority
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-lg leading-7 text-slate-300"
        >
          End‑to‑end mobile delivery without the clutter—design, build, release, iterate.
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-3">
          {pills.map(({icon:Icon, label}) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur">
              <Icon className="h-4 w-4 text-cyan-300" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
