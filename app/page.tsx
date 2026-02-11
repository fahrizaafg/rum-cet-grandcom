import dynamic from 'next/dynamic';
import Hero from "./(components)/Hero";
import ScrollingText from "./(components)/ScrollingText";

const FeaturedProducts = dynamic(() => import("./(components)/FeaturedProducts"), {
  loading: () => <div className="h-96 w-full bg-slate-50 animate-pulse rounded-xl" />
});
const ClientScaler = dynamic(() => import("./(components)/ClientScaler"));
const OrderStatus = dynamic(() => import("./(components)/OrderStatus"));

/**
 * Halaman Utama (Home)
 * Menampilkan Hero Section dan Daftar Layanan.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Hero />
      <ScrollingText />
      
      <FeaturedProducts />

      <ClientScaler />

      <OrderStatus />
    </div>
  );
}
