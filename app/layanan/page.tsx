import { Metadata } from 'next';
import { Palette, Printer, Zap, Package, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import FadeInUp from '../(components)/FadeInUp';
import Accordion from '../(components)/Accordion';
import ServiceCard from '../(components)/ServiceCard';
import { services } from '../(data)/services';

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description: 'Solusi percetakan lengkap mulai dari desain profesional, cetak berkualitas tinggi, hingga hasil akhir yang memuaskan.',
};

export default function ServicesPage() {
  const pillars = [
    {
      icon: Palette,
      title: 'Professional Design',
      description: 'Belum punya desain? Tim kreatif kami siap membantu memvisualisasikan ide Anda menjadi desain yang menarik, komunikatif, dan siap cetak.',
    },
    {
      icon: Printer,
      title: 'High-Quality Print',
      description: 'Menggunakan mesin teknologi terbaru untuk memastikan akurasi warna yang presisi dan ketajaman gambar maksimal pada setiap lembar cetakan.',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Sistem kerja yang efisien dan terorganisir memungkinkan kami menyelesaikan pesanan Anda tepat waktu tanpa mengurangi kualitas hasil akhir.',
    },
    {
      icon: Package,
      title: 'Custom Solutions',
      description: 'Kami menerima berbagai permintaan kustomisasi, mulai dari jenis material, ukuran unik, hingga finishing khusus sesuai kebutuhan bisnis Anda.',
    },
  ];

  const materialEducation = [
    {
      title: 'Panduan Bahan Stiker',
      content: (
        <div className="space-y-4">
          <p>Pilih bahan stiker yang tepat sesuai penggunaan:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Stiker Vinyl (Best Seller)</strong>
                <span className="text-sm">Berbasis plastik, tahan air, tahan sobek, dan tahan cuaca. Cocok untuk label makanan dingin (frozen food), botol minuman, dan stiker outdoor.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Stiker Chromo</strong>
                <span className="text-sm">Berbasis kertas dengan permukaan licin (glossy). Harga lebih ekonomis. Cocok untuk label kemasan kering, stiker toples kue, atau branding kemasan sekali pakai. Tidak tahan air.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Stiker Transparan</strong>
                <span className="text-sm">Berbasis plastik bening. Memberikan kesan &quot;no-label look&quot; yang elegan. Cocok untuk botol minuman berwarna atau kemasan produk yang ingin menonjolkan isinya.</span>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Jenis Kertas Cetak (Undangan & Brosur)',
      content: (
        <div className="space-y-4">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Art Paper (120-150 gsm)</strong>
                <span className="text-sm">Kertas tipis dengan permukaan mengkilap (glossy). Standar untuk brosur, flyer, dan isi majalah. Warna hasil cetak sangat tajam dan cerah.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Art Carton (210-310 gsm)</strong>
                <span className="text-sm">Kertas tebal dan kaku dengan permukaan glossy. Pilihan utama untuk kartu nama, cover buku, undangan, dan paper bag. Terasa premium dan kokoh.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Ivory</strong>
                <span className="text-sm">Satu sisi glossy, satu sisi doff/matte. Sangat elegan untuk packaging kosmetik atau kotak makanan (food grade tersedia).</span>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Opsi Finishing Laminasi',
      content: (
        <div className="space-y-4">
          <p>Laminasi memberikan perlindungan ekstra dan sentuhan akhir yang berbeda:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-1">Laminasi Glossy</strong>
              <p className="text-sm">Memberikan efek mengkilap, memantulkan cahaya, dan membuat warna terlihat lebih tajam dan &quot;pop&quot;. Tahan air dan kotoran.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-1">Laminasi Doff (Matte)</strong>
              <p className="text-sm">Memberikan efek redup, lembut, dan elegan saat disentuh. Tidak memantulkan cahaya. Memberikan kesan eksklusif dan mewah.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Header */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeInUp className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-xs font-bold mb-6 tracking-widest uppercase">
              Our Expertise
            </span>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Lebih dari Sekadar Cetak,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Kami Mewujudkan Ide.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Dedikasi penuh pada kualitas dan detail. Kami menggabungkan kreativitas desain dengan teknologi cetak presisi untuk hasil yang memukau.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 2. Service Pillars */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <FadeInUp key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <pillar.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {pillar.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Moved from Home: Services Grid */}
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

      {/* 3. Material Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <FadeInUp>
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Kenali Bahan <br />
                  <span className="text-orange-500">Sebelum Mencetak</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Agar hasil cetak sesuai ekspektasi, penting untuk memilih material yang tepat. Kami sediakan panduan singkat untuk membantu Anda mengambil keputusan terbaik.
                </p>
                <div className="hidden lg:block relative aspect-square rounded-3xl overflow-hidden bg-slate-100">
                  {/* Decorative Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-orange-200">
                    <Package className="w-32 h-32 opacity-20" />
                  </div>
                </div>
              </FadeInUp>
            </div>
            <div className="lg:col-span-7">
              <FadeInUp delay={0.2}>
                <Accordion items={materialEducation} />
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeInUp className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="font-sans text-3xl md:text-5xl font-bold text-white mb-6">
                Siap Mewujudkan Ide Anda?
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Jangan ragu untuk bertanya. Konsultasikan kebutuhan cetak Anda secara gratis bersama tim ahli kami.
              </p>
              <a
                href="https://wa.me/6289677104929"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30 group"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Konsultasi Gratis via WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
