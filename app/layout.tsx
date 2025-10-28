import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppShell from "@/components/AppShell"; // ← we’ll move the logic there

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verse & Music – Franz Schopenhauer",
  description: "Poetry and music visually and mentally reflected",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
