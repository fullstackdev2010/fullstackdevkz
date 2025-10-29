"use client";
import { motion } from "framer-motion";

const steps = [
  ["01", "Scope & UX", "We workshop the problem and design the core flows."],
  ["02", "MVP Sprint", "Ship a clickable prototype and then a working app."],
  ["03", "Scale & QA", "Hardening, test automation, release and observability."],
];

export default function ProcessRoadmap() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.h2 className="text-3xl font-semibold text-white sm:text-4xl" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        Delivery process
      </motion.h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {steps.map(([id, title, body]) => (
          <motion.div key={id} className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <div className="text-sm text-slate-400">{id}</div>
            <div className="mt-2 text-xl font-medium text-white">{title}</div>
            <p className="mt-2 text-slate-300/90">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
