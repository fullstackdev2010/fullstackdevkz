"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { ShopLink } from "@/components/ShopLink"; // ✅ import

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1C1B33]/95 shadow-2xl backdrop-blur-sm" : "bg-[#1C1B33]"
      } border-b border-fuchsia-700/20`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="FS Logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <div className="text-white leading-tight">
            <div className="text-xl font-serif font-semibold tracking-wide">
              Franz Schopenhauer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-white/80 items-center">
          <Link href="/music" className="relative group hover:text-white transition">
            Music
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/poems" className="relative group hover:text-white transition">
            Poems
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <ShopLink />
          <Link href="/services" className="relative group hover:text-white transition">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1C1B33] border-t border-fuchsia-700/20 px-6 pb-4 text-white/80 text-sm space-y-3">
          <Link href="/music" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Music
          </Link>
          <Link href="/poems" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Poems
          </Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Shop
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Services
          </Link>
        </div>
      )}
    </header>
  );
}
