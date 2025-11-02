"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function RevealOnScroll({ children, delay = 0, y = 20, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const ctrls = useAnimation();
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });

  useEffect(() => { if (inView) ctrls.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } }); }, [inView, ctrls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={ctrls} className={className}>
      {children}
    </motion.div>
  );
}
