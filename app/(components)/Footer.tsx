import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: Brand & Address */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="block mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Rumah Cetak Grandcom" 
                  width={200} 
                  height={60} 
                  className="h-[60px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </Link>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Creative Studio & Digital Printing.
                <br />
                Mewujudkan ide kreatif Anda menjadi produk cetak berkualitas premium.
              </p>
            </div>
            
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                Jl. Moch. Toha Gg. Pa Iri No.5c, Karasak<br />
                Kec. Astanaanyar, Kota Bandung<br />
                Jawa Barat 40243
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Menu Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/layanan" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-200 rounded-full group-hover:bg-orange-500 transition-colors" />
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-200 rounded-full group-hover:bg-orange-500 transition-colors" />
                  Galeri Portfolio
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-200 rounded-full group-hover:bg-orange-500 transition-colors" />
                  Daftar Produk
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-200 rounded-full group-hover:bg-orange-500 transition-colors" />
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Operational Hours */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Jam Operasional</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Senin - Jumat</p>
                  <p className="text-slate-500">08.00 - 17.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0 opacity-50" />
                <div>
                  <p className="font-semibold text-slate-800">Sabtu</p>
                  <p className="text-slate-500">09.00 - 15.00 WIB</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-400">
                  *Minggu & Tanggal Merah Libur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-orange-200/50 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Rumah Cetak Grandcom. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="https://instagram.com/rumah_cetak_grandcom" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Instagram</a>
             <a href="https://shopee.co.id/rumahcetak_grandcom" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Shopee</a>
             <a href="https://wa.me/6289677104929" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
