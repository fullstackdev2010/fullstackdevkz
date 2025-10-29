"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, image }:{ title:string; subtitle?:string; image:string; }){
  return (
    <header className="relative overflow-hidden">
      <Image src={image} alt="" width={1600} height={800} className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70" priority/>
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</motion.h1>
        {subtitle && <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-4 max-w-3xl text-lg leading-7 text-slate-300">{subtitle}</motion.p>}
      </div>
    </header>
  );
}
