"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GlassButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-md hover:bg-white/10 transition"
      >
        {children}
      </Link>
    </motion.div>
  );
}
