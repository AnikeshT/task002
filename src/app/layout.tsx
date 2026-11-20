import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CookieBanner } from '@/components/common/CookieBanner';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'KAIROS',
    'Haute Experiential Journeys',
    'Kyoto Zen Sanctuaries',
    'Patagonia Private Catamaran Fjords',
    'Swiss Alpine Chalets Zermatt',
    'Svalbard Ice Yacht',
    'staging.klnk.tv',
  ],
  authors: [{ name: 'KAIROS Journeys International SA' }],
  creator: 'KAIROS',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'KAIROS Journeys Beyond the Window',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.conciergePhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue du Rhône 42',
      addressLocality: 'Geneva',
      postalCode: '1204',
      addressCountry: 'CH',
    },
    priceRange: '€€€€',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-paper-light antialiased flex flex-col justify-between">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
