"use client";
import GlowCard from "@/components/ui/GlowCard";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  { title: "React Native / Expo", desc: "One codebase, App Store + Google Play." },
  { title: "Native Modules", desc: "Bridges for camera, Bluetooth, biometrics, and more." },
  { title: "Secure Auth", desc: "Passkeys, biometrics, OAuth, MFA flows." },
  { title: "API & Realtime", desc: "Socket.IO, GraphQL, gRPC, Server-Driven UI." },
  { title: "Performance", desc: "Hermes, profiling, bundle splitting, memory." },
  { title: "CI/CD", desc: "EAS, Fastlane, GitHub Actions, release channels." },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h2 className="text-3xl font-semibold text-white sm:text-4xl" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        What we excel at
      </motion.h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <GlowCard key={i} glowClassName="bg-cyan-500/20">
            <div className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 text-cyan-300" />
              <div>
                <h3 className="text-white font-medium">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-300/80">{it.desc}</p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
