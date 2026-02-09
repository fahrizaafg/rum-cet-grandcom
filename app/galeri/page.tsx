import Gallery from "../(components)/Gallery";
import FadeInUp from "../(components)/FadeInUp";

export const metadata = {
  title: 'Galeri',
  description: 'Lihat hasil karya percetakan kami yang berkualitas tinggi.',
};

/**
 * Halaman Galeri
 * Menampilkan portofolio hasil cetakan.
 */
export default function GalleryPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <FadeInUp className="text-center mb-16 lg:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
            Portofolio Kami
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Galeri Karya
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Portofolio hasil kerja kami yang menunjukkan kualitas dan dedikasi kami dalam setiap cetakan.
          </p>
        </FadeInUp>
        
        {/* Gallery Grid Component */}
        <FadeInUp delay={0.2}>
          <Gallery />
        </FadeInUp>
      </div>
    </div>
  );
}
