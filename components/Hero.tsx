"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full flex items-center justify-center text-center overflow-hidden bg-[var(--accent-29)]">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(90%_60%_at_50%_10%,var(--accent-10),transparent_70%)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-28 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          We design & ship delightful mobile apps.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-violet-200"
        >
          Fullstack Dev KZ crafts iOS & Android products with elegant UX and rock-solid engineering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Link href="/contact" className="rounded-xl px-6 py-3 bg-fuchsia-600/90 hover:bg-fuchsia-500 text-white">
            Get a Quote
          </Link>
          <Link href="/case-studies" className="rounded-xl px-6 py-3 border border-white/20 hover:border-white/40 text-white">
            See Case Studies
          </Link>
        </motion.div>
        <div className="mt-10 text-sm text-violet-300">Swift • Kotlin • React Native • FastAPI • Firebase</div>
      </div>
    </section>
  );
}
