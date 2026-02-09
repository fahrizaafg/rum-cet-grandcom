import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import WhatsAppFloat from "./(components)/WhatsAppFloat";
import CartDrawer from "./(components)/CartDrawer";

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

// Metadata SEO Global
export const metadata: Metadata = {
  title: {
    template: '%s | Rumah Cetak Grandom',
    default: 'Rumah Cetak Grandom - Solusi Percetakan Profesional',
  },
  description: "Jasa percetakan berkualitas tinggi untuk undangan, spanduk, kartu nama, dan kebutuhan branding bisnis Anda. Cepat, murah, dan profesional.",
  keywords: ["percetakan", "cetak undangan", "digital printing", "spanduk", "kartu nama", "brosur", "percetakan murah"],
  authors: [{ name: "Rumah Cetak Grandom" }],
  openGraph: {
    title: 'Rumah Cetak Grandom - Solusi Cetak Kreatif & Cepat',
    description: 'Jasa percetakan berkualitas tinggi untuk undangan, spanduk, kartu nama, dan kebutuhan branding bisnis Anda.',
    url: 'https://rumah-cetak-grandom.vercel.app',
    siteName: 'Rumah Cetak Grandom',
    images: [
      {
        url: 'https://rumah-cetak-grandom.vercel.app/og-image.jpg', // Pastikan file ini ada di folder public nanti
        width: 1200,
        height: 630,
        alt: 'Rumah Cetak Grandom Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rumah Cetak Grandom - Solusi Cetak Kreatif & Cepat',
    description: 'Jasa percetakan berkualitas tinggi untuk undangan, spanduk, kartu nama, dan kebutuhan branding bisnis Anda.',
    images: ['https://rumah-cetak-grandom.vercel.app/og-image.jpg'],
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
        {/* Navbar Global */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-16 pb-24 relative">
          {children}
        </main>
        
        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />
        <CartDrawer />
        
        {/* Footer Global */}
        <Footer />
      </body>
    </html>
  );
}
