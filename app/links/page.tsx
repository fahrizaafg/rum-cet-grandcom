'use client';

import { motion, Variants } from 'framer-motion';
import { 
  Printer, 
  MessageCircle, 
  MapPin, 
  ShoppingBag, 
  ExternalLink,
  Home
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Data sourced from project files
const CONTACT_INFO = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6289677104929',
  address_map: 'https://www.google.com/maps/search/?api=1&query=Jl.+Moch.+Toha+Gg.+Pa+Iri+No.5c,+Karasak,+Kec.+Astanaanyar,+Kota+Bandung,+Jawa+Barat+40243',
  shopee: 'https://shopee.co.id/rumahcetak_grandcom',
  instagram: 'https://instagram.com/rumah_cetak_grandcom',
};

const LINKS = [
  {
    title: 'Beranda Rumah Cetak',
    url: '/',
    icon: Home,
    filled: true,
  },
  {
    title: 'Katalog Produk Lengkap',
    url: '/produk',
    icon: Printer,
    filled: false,
  },
  {
    title: 'Chat Admin via WhatsApp',
    url: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20jasa%20cetak%20di%20Rumah%20Cetak%20Grandom`,
    icon: MessageCircle,
    filled: false,
  },
  {
    title: 'Lokasi Toko (Google Maps)',
    url: CONTACT_INFO.address_map,
    icon: MapPin,
    filled: false,
  },
  {
    title: 'Kunjungi Shopee Kami',
    url: CONTACT_INFO.shopee,
    icon: ShoppingBag,
    filled: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as any,
    },
  },
};

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <motion.div 
        className="w-full max-w-md mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <div className="w-24 h-24 bg-white rounded-full mx-auto shadow-lg flex items-center justify-center border-4 border-orange-50 mb-4 overflow-hidden">
            {/* Fallback to Icon if no logo image */}
            <Printer className="w-10 h-10 text-orange-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
            Rumah Cetak Grandom
          </h1>
          <p className="text-slate-500 font-medium text-sm px-4">
            Solusi Percetakan Profesional & Merchandise Custom
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('/') ? '_self' : '_blank'}
              rel={link.url.startsWith('/') ? '' : 'noopener noreferrer'}
              variants={itemVariants}
              className={`group flex items-center justify-between w-full p-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 ${
                link.filled 
                  ? 'bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 hover:shadow-orange-500/30' 
                  : 'bg-white border-2 border-orange-500 text-slate-900 hover:bg-orange-500 hover:text-white hover:shadow-orange-200/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <link.icon className={`w-6 h-6 transition-colors ${link.filled ? 'text-white' : 'group-hover:text-white'}`} />
                <span className="text-sm sm:text-base">{link.title}</span>
              </div>
              {!link.url.startsWith('/') && (
                <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${link.filled ? 'text-white' : ''}`} />
              )}
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="text-center">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} Rumah Cetak Grandom
          </p>
          <p className="text-slate-300 text-[10px] mt-1">
            Built by Fahriza
          </p>
        </motion.footer>
      </motion.div>
    </main>
  );
}
