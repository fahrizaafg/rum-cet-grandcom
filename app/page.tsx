import Hero from "./(components)/Hero";
import ServiceCard from "./(components)/ServiceCard";
import FeaturedProducts from "./(components)/FeaturedProducts";
import ScrollingText from "./(components)/ScrollingText";
import OrderStatus from "./(components)/OrderStatus";
import FadeInUp from "./(components)/FadeInUp";
import { services } from "./(data)/services";

/**
 * Halaman Utama (Home)
 * Menampilkan Hero Section dan Daftar Layanan.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Hero />
      <ScrollingText />
      
      <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <FadeInUp className="text-center mb-20 lg:mb-24">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 tracking-tight">
              Layanan Unggulan
            </h2>
            <p className="font-sans text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Kami menggabungkan teknologi modern dengan sentuhan artistik untuk memenuhi kebutuhan branding Anda.
            </p>
          </FadeInUp>
          
          {/* Services Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {services.map((service, index) => (
              <FadeInUp key={service.id} delay={index * 0.1} className={index % 2 === 1 ? "md:mt-12" : ""}>
                <ServiceCard service={service} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      <OrderStatus />
    </div>
  );
}
