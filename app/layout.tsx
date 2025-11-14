import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { RoutePaletteProvider } from '@/components/mesh/RoutePaletteProvider';

export const metadata: Metadata = {
  title: 'FDKZ — Mobile Precision Craft',
  description: 'Expo + FastAPI + Next.js — mobile craftsmanship with true coding precision.',
  metadataBase: new URL('https://www.fullstackdev.kz'),
  openGraph: {
    title: 'Fullstack Dev KZ',
    description: 'Mobile craftsmanship, robust engineering.',
    url: 'https://www.fullstackdev.kz',
    siteName: 'Fullstack Dev KZ',
    images: [{ url: '/api/og?title=Fullstack%20Dev%20KZ', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fullstack Dev KZ',
    description: 'Mobile craftsmanship, robust engineering.',
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
