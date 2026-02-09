import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, ShoppingBag } from 'lucide-react';
import FadeInUp from "../(components)/FadeInUp";
import MapSection from "../(components)/MapSection";

export const metadata = {
  title: 'Kontak',
  description: 'Hubungi kami untuk konsultasi dan pemesanan layanan percetakan.',
};

/**
 * Halaman Kontak
 * Menampilkan informasi kontak, jam operasional, dan peta lokasi.
 */
export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <FadeInUp className="text-center mb-16 lg:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
            Siap Membantu
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan atau ingin memesan? Kami siap membantu Anda mewujudkan kebutuhan percetakan Anda.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Section */}
          <FadeInUp delay={0.2} className="space-y-8 h-full">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 hover:shadow-xl transition-shadow duration-500 h-full">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Informasi Kontak</h2>
              <div className="space-y-8">
                
                {/* Alamat */}
                <div className="flex items-start group">
                  <div className="bg-orange-50 p-4 rounded-2xl mr-6 flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Alamat</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Jl. Moch. Toha Gg. Pa Iri No.5c, Karasak<br />
                      Kec. Astanaanyar, Kota Bandung, Jawa Barat 40243
                    </p>
                  </div>
                </div>
                
                {/* Telepon */}
                <div className="flex items-start group">
                  <div className="bg-orange-50 p-4 rounded-2xl mr-6 flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Telepon / WhatsApp</h3>
                    <p className="text-slate-600">0896-7710-4929</p>
                    <p className="text-slate-600">0813-2131-4744</p>
                  </div>
                </div>

                {/* Social Media & Marketplace */}
                <div className="flex flex-col sm:flex-row items-start group w-full overflow-hidden">
                  <div className="bg-orange-50 p-4 rounded-2xl mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="w-full min-w-0">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Online Shop & Social</h3>
                    <div className="flex flex-col gap-3 mt-2 w-full">
                      <a href="https://instagram.com/rumah_cetak_grandcom" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-primary transition-all group/item w-full max-w-full overflow-hidden">
                        <div className="bg-white p-2 rounded-lg shadow-sm group-hover/item:text-primary text-slate-400 transition-colors flex-shrink-0">
                            <Instagram className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover/item:text-primary text-sm sm:text-base truncate block flex-1">@rumah_cetak_grandcom</span>
                      </a>
                      <a href="https://instagram.com/undanganmanis" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-primary transition-all group/item w-full max-w-full overflow-hidden">
                        <div className="bg-white p-2 rounded-lg shadow-sm group-hover/item:text-primary text-slate-400 transition-colors flex-shrink-0">
                            <Instagram className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover/item:text-primary text-sm sm:text-base truncate block flex-1">@undanganmanis</span>
                      </a>
                      <a href="https://shopee.co.id/rumahcetak_grandcom" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-primary transition-all group/item w-full max-w-full overflow-hidden">
                        <div className="bg-white p-2 rounded-lg shadow-sm group-hover/item:text-primary text-slate-400 transition-colors flex-shrink-0">
                            <ShoppingBag className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover/item:text-primary text-sm sm:text-base truncate block flex-1">Rumah Cetak Grandcom</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start group">
                  <div className="bg-orange-50 p-4 rounded-2xl mr-6 flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Clock className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Jam Operasional</h3>
                    <p className="text-slate-600">Senin - Jumat: 08:00 - 17:00</p>
                    <p className="text-slate-600">Sabtu: 08:00 - 14:00</p>
                    <p className="text-slate-600">Minggu: Tutup</p>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp CTA Button */}
              <div className="mt-12">
                <a
                  href="https://wa.me/6289677104929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Hubungi via WhatsApp Sekarang
                </a>
              </div>
            </div>
          </FadeInUp>

          {/* Map Section */}
          <FadeInUp delay={0.4} className="h-full">
            <MapSection />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
