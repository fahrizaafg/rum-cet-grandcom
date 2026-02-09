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
      <Navbar />
      <main className="flex-grow pt-16 pb-24 relative">
        {children}
      </main>
      <WhatsAppFloat />
      <CartDrawer />
      <Footer />
    </>
  );
}
