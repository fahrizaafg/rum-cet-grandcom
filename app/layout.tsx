import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import JsonLd from "./(components)/JsonLd";

// Configure Fonts
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

// Viewport Configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

// Metadata SEO Global
const SITE_URL = 'https://grandcom.biz.id';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Rumah Cetak Grandcom',
    default: 'Rumah Cetak Grandcom - Solusi Percetakan Profesional',
  },
  description: "Jasa percetakan berkualitas tinggi untuk undangan, spanduk, kartu nama, dan kebutuhan branding bisnis Anda. Cepat, murah, dan profesional.",
  keywords: ["percetakan", "cetak undangan", "digital printing", "spanduk", "kartu nama", "brosur", "percetakan murah"],
  authors: [{ name: "Rumah Cetak Grandcom" }],
  icons: {
    icon: '/images/logo.png?v=1',
    apple: '/images/logo.png?v=1',
  },
  openGraph: {
    title: 'Rumah Cetak Grandcom - Solusi Cetak Kreatif & Cepat',
    description: 'Jasa percetakan berkualitas tinggi untuk undangan, spanduk, kartu nama, dan kebutuhan branding bisnis Anda.',
    url: SITE_URL,
    siteName: 'Rumah Cetak Grandcom',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rumah Cetak Grandcom — digital printing Bandung',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rumah Cetak Grandcom - Solusi Cetak Kreatif & Cepat',
    description: 'Jasa percetakan berkualitas tinggi untuk undangan, spanduk, kartu nama, dan kebutuhan branding bisnis Anda.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-secondary selection:bg-primary selection:text-white overflow-x-hidden">
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
                try {
                  if (!window.trustedTypes.defaultPolicy) {
                    window.trustedTypes.createPolicy('default', {
                      createHTML: (string) => string,
                      createScript: (string) => string,
                      createScriptURL: (string) => string,
                    });
                  }
                } catch (e) {
                  console.warn('Trusted Types policy creation failed', e);
                }
              }
            `
          }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
