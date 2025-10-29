// NOTE: Add 'Releases' to the NAV.
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/releases", label: "Releases" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-[#1C1B33]/80 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white hover:opacity-90 mr-8">
          <span className="text-fuchsia-400">Fullstack</span> Dev KZ
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-violet-200 hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 inline-flex items-center rounded-xl px-4 py-2 bg-fuchsia-600/90 hover:bg-fuchsia-500 text-white">
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1C1B33] border-t border-white/10 px-4 py-4 space-y-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-violet-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 rounded-xl px-4 py-2 bg-fuchsia-600/90 text-white text_center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
