// components/ClientActiveNav.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientActiveNav() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const norm = (p: string) => (p && p !== "/" ? p.replace(/\/$/, "") : "/");
    const current = norm(pathname);

    // Clear previous state
    document
      .querySelectorAll('header a[aria-current="page"], footer a[aria-current="page"]')
      .forEach((el) => {
        el.removeAttribute("aria-current");
        el.classList.remove("underline", "underline-offset-8", "decoration-2");
      });

    const findMatches = (scope: ParentNode) =>
      Array.from(scope.querySelectorAll<HTMLAnchorElement>("a[href]")).filter((a) => {
        try {
          const url = new URL(a.href, location.origin);
          return norm(url.pathname) === current;
        } catch {
          return false;
        }
      });

    // Header + Footer processing
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header) {
      findMatches(header).forEach((a) => {
        // ⛔️ Skip the site brand/home link in the header
        const text = (a.textContent || "").trim();
        if (text === "Fullstack Dev KZ") return;

        a.setAttribute("aria-current", "page");
        a.classList.add("underline", "underline-offset-8", "decoration-2");
      });
    }

    if (footer) {
      findMatches(footer).forEach((a) => {
        a.setAttribute("aria-current", "page");
        a.classList.add("underline", "underline-offset-8", "decoration-2");
      });
    }
  }, [pathname]);

  return null;
}
