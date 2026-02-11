import Hero from "./(components)/Hero";
import FeaturedProducts from "./(components)/FeaturedProducts";
import ClientScaler from "./(components)/ClientScaler";
import ScrollingText from "./(components)/ScrollingText";
import OrderStatus from "./(components)/OrderStatus";

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
