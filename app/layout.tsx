import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { RouteTransition } from '@/components/motion/RouteTransition';

export const metadata: Metadata = {
  title: 'Fullstack Dev KZ — Mesh Mobile Craft',
  description: 'Expo + FastAPI + Next.js — mobile craftsmanship, poetic precision.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        <Navbar />
        <RouteTransition>
          {children}
        </RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
