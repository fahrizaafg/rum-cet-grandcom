'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import WhatsAppFloat from "./(components)/WhatsAppFloat";
import CartDrawer from "./(components)/CartDrawer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLinksPage = pathname === '/links';

  if (isLinksPage) {
    return <>{children}</>;
  }

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-white text-primary px-4 py-2 rounded-md shadow-lg font-bold">
        Langsung ke konten
      </a>
      <Navbar />
      <main id="main" className="flex-grow pt-16 relative">
        {children}
      </main>
      <WhatsAppFloat />
      <CartDrawer />
      <Footer />
    </>
  );
}
