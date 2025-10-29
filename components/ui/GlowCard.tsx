"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  glowClassName?: string;
  children: React.ReactNode;
};

export default function GlowCard({ className, glowClassName, children }: Props) {
  return (
    <div className={cn("relative group rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 overflow-hidden", className)}>
      <motion.div
        className={cn("pointer-events-none absolute -inset-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl", glowClassName)}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        aria-hidden
      />
      {children}
    </div>
  );
}
