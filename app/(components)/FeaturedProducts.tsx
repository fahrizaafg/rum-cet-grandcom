'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Zap, Palette, Gift, Coffee } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BentoItem = ({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl group ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-sans">
            Pilihan terbaik untuk kebutuhan cetak personal dan bisnis Anda.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[600px]"
        >
          {/* 1. Main Star: Undangan & Stiker */}
          <BentoItem className="col-span-1 md:col-span-2 md:row-span-1 relative flex flex-col justify-center overflow-hidden">
             <div className="absolute top-4 right-4 z-20">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                FREE DESIGN
              </span>
            </div>
            <div className="flex flex-row h-full">
              <div className="w-1/2 p-6 flex flex-col justify-center z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Undangan & Stiker
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Cetak undangan pernikahan elegan dan stiker label kemasan.
                </p>
                <button className="flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all min-h-[44px]">
                  Lihat Detail <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="w-1/2 relative h-full">
                 <div className="absolute inset-0 bg-gradient-to-l from-orange-50/50 to-transparent z-0" />
                 {/* Placeholder for Product Image */}
                 <div className="w-full h-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Palette className="w-24 h-24 text-orange-200" />
                 </div>
              </div>
            </div>
          </BentoItem>

          {/* 2. Tall Box: Gantungan Kunci & Souvenir */}
          <BentoItem className="col-span-1 md:col-span-1 md:row-span-2 flex flex-col">
            <div className="p-6 flex-1 z-10">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Souvenir & Merch
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Gantungan kunci akrilik, pin, dan souvenir unik lainnya.
              </p>
              
              <div className="flex gap-2 mb-4">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <Star className="w-3 h-3 text-slate-400" />
                   </div>
                 ))}
              </div>
            </div>
            <div className="h-48 bg-slate-100 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <div className="grid grid-cols-2 gap-2 p-4 opacity-50">
                      <div className="w-12 h-12 rounded-lg bg-orange-200/50" />
                      <div className="w-12 h-12 rounded-lg bg-blue-200/50" />
                      <div className="w-12 h-12 rounded-lg bg-green-200/50" />
                      <div className="w-12 h-12 rounded-lg bg-purple-200/50" />
                   </div>
                </div>
            </div>
          </BentoItem>

          {/* 3. Small Box: Mug Custom */}
          <BentoItem className="col-span-1 md:col-span-1 md:row-span-1">
             <div className="h-full flex flex-col">
                <div className="h-32 bg-slate-50 flex items-center justify-center overflow-hidden">
                   <div className="group-hover:scale-110 transition-transform duration-500">
                      <Coffee className="w-16 h-16 text-slate-300" />
                   </div>
                </div>
                <div className="p-4 bg-white flex-1">
                   <h3 className="font-bold text-slate-800">Mug Custom</h3>
                   <p className="text-xs text-slate-500 mt-1">Mulai Rp 15rb</p>
                </div>
             </div>
          </BentoItem>

          {/* 4. Content Box: Text Only */}
          <BentoItem className="col-span-1 md:col-span-2 md:row-span-1 bg-slate-900 text-white !border-none !bg-slate-900">
            <div className="h-full flex flex-col justify-center p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-48 h-48" />
              </div>
              <div className="relative z-10 max-w-md">
                <div className="flex items-center gap-2 text-orange-400 mb-2 font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Premium Quality</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-white">
                  Kualitas Cetak Premium untuk Setiap Detail Karya Anda.
                </h3>
                <p className="text-slate-400 text-sm">
                  Menggunakan mesin terbaru untuk hasil warna yang tajam dan tahan lama.
                </p>
              </div>
            </div>
          </BentoItem>

          {/* 5. Small Box: Tumbler */}
          <BentoItem className="col-span-1 md:col-span-1 md:row-span-1">
             <div className="h-full flex flex-col">
                <div className="h-32 bg-slate-50 flex items-center justify-center overflow-hidden">
                   <div className="group-hover:scale-110 transition-transform duration-500">
                       <div className="w-12 h-24 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg shadow-sm" />
                   </div>
                </div>
                <div className="p-4 bg-white flex-1">
                   <h3 className="font-bold text-slate-800">Tumbler</h3>
                   <p className="text-xs text-slate-500 mt-1">Print UV / Grafir</p>
                </div>
             </div>
          </BentoItem>

        </motion.div>
      </div>
    </section>
  );
}
