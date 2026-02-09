import ProductGrid from "../(components)/ProductGrid";
import FadeInUp from "../(components)/FadeInUp";

export const metadata = {
  title: 'Harga & Katalog',
  description: 'Daftar harga lengkap layanan percetakan dan produk custom kami.',
};

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <FadeInUp className="text-center mb-16 lg:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
            Penawaran Terbaik
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Katalog Produk & Harga
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Temukan berbagai solusi percetakan dengan harga transparan dan kualitas terbaik. Pilih kategori di bawah ini.
          </p>
        </FadeInUp>

        {/* Product Grid with Filters */}
        <FadeInUp delay={0.2}>
          <ProductGrid />
        </FadeInUp>
      </div>
    </div>
  );
}
