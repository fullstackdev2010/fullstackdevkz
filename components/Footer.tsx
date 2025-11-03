"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[var(--accent-29)] text-center text-sm text-white/70 py-8 border-t border-fuchsia-700/20 mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Fullstack Dev KZ
        <br />
        Coded with inspiration
      </p>

      <div className="flex justify-center gap-6 text-lg text-white/60 hover:text-white">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-fuchsia-400 transition" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-fuchsia-400 transition" />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-fuchsia-400 transition" />
        </a>
        <a href="mailto:contact@verse-n-music.art">
          <FaEnvelope className="hover:text-fuchsia-400 transition" />
        </a>
      </div>
    </motion.footer>
  );
}
