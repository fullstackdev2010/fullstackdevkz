// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { RouteTransition } from '@/components/motion/RouteTransition';
import { RoutePaletteProvider } from '@/components/mesh/RoutePaletteProvider';
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, companyJsonLd } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: 'Custom Mobile & Web App Development | FullStack Dev KZ',
    template: '%s | FullStack Dev KZ',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Custom Mobile & Web App Development',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 360,
        height: 360,
        alt: 'FullStack Dev KZ custom software development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Custom Mobile & Web App Development',
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd) }}
        />
        <RoutePaletteProvider />
        <Navbar />
        <RouteTransition>{children}</RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
