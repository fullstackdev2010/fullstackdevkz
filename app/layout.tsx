import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { RoutePaletteProvider } from '@/components/mesh/RoutePaletteProvider';

export const metadata: Metadata = {
  title: 'Fullstack Dev KZ — Mesh Mobile Craft',
  description: 'Expo + FastAPI + Next.js — mobile craftsmanship, poetic precision.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Fullstack Dev KZ',
    description: 'Mesh aesthetics, robust engineering.',
    url: 'https://example.com',
    siteName: 'Fullstack Dev KZ',
    images: [{ url: '/api/og?title=Fullstack%20Dev%20KZ', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fullstack Dev KZ',
    description: 'Mesh aesthetics, robust engineering.',
    images: ['/api/og?title=Fullstack%20Dev%20KZ'],
    creator: '@fullstackdevkz'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        <RoutePaletteProvider />
        <Navbar />
        <RouteTransition>
          {children}
        </RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
