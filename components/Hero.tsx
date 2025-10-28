"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/background.jpg"
        alt="Poetic Reflection"
        layout="fill"
        objectFit="cover"
        className="opacity-80 z-0"
      />
      <div className="z-10 max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-bold mb-4 leading-tight text-white"
        >
          Discover the music and poetry<br />
          <span className="text-fuchsia-400">visually and mentally reflected</span>
        </motion.h1>
        <p className="text-lg text-violet-200 mb-8">
          A poetic journey by Franz Schopenhauer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/music">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-2 rounded-lg shadow-md">
              🎵 Music Catalog
            </button>
          </Link>
          <Link href="/poems">
            <button className="border border-fuchsia-400 text-fuchsia-300 px-6 py-2 rounded-lg hover:bg-fuchsia-800/20">
              📜 Poems
            </button>
          </Link>
          <Link href="/shop">
            <button className="text-purple-300 hover:text-white underline">
              🛒 Audio Shop
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
