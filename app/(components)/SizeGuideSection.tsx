'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, CreditCard, Ruler, User } from 'lucide-react';
import FadeInUp from './FadeInUp';

type PaperSize = 'A3' | 'A4' | 'A5' | 'A6';

const SIZES: Record<PaperSize, { width: number; height: number; label: string; description: string }> = {
  A3: {
    width: 297,
    height: 420,
    label: '29.7 x 42 cm',
    description: 'Ukuran besar, cocok untuk poster dinding, kalender dinding, dan bagan organisasi.'
  },
  A4: {
    width: 210,
    height: 297,
    label: '21 x 29.7 cm',
    description: 'Standar dokumen, surat resmi, sertifikat, flyer, dan majalah.'
  },
  A5: {
    width: 148,
    height: 210,
    label: '14.8 x 21 cm',
    description: 'Setengah A4. Ideal untuk buku catatan, brosur lipat, dan flyer promosi praktis.'
  },
  A6: {
    width: 105,
    height: 148,
    label: '10.5 x 14.8 cm',
    description: 'Kecil dan ringkas. Populer untuk kartu pos, undangan kecil, dan stiker.'
  }
};

const KTP_SIZE = { width: 85.6, height: 53.98, label: '8.5 x 5.4 cm' }; // mm

export default function SizeGuideSection() {
  const [selectedSize, setSelectedSize] = useState<PaperSize>('A4');

  // Scale calculations
  // We use A3 as the container reference (100% width/height)
  const getWidthPct = (mm: number) => (mm / SIZES.A3.width) * 100;
  const getHeightPct = (mm: number) => (mm / SIZES.A3.height) * 100;

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Interactive Controls */}
          <div className="order-2 lg:order-1">
            <FadeInUp>
              <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold tracking-wider text-xs uppercase">
                <Ruler className="w-4 h-4" />
                <span>Panduan Ukuran</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pilih Ukuran yang Tepat
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Bingung membayangkan seberapa besar hasil cetak Anda? Gunakan panduan interaktif ini untuk membandingkan skala ukuran kertas standar.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {(Object.keys(SIZES) as PaperSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      relative py-3 px-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 group
                      ${selectedSize === size 
                        ? 'border-orange-500 bg-orange-50 text-orange-700' 
                        : 'border-slate-100 bg-white text-slate-600 hover:border-orange-200 hover:bg-orange-50/30'}
                    `}
                  >
                    <span className={`font-bold text-xl ${selectedSize === size ? 'text-orange-700' : 'text-slate-900'}`}>
                      {size}
                    </span>
                    {selectedSize === size && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute -top-2 -right-2 bg-orange-500 text-white p-1 rounded-full"
                      >
                        <Check className="w-3 h-3" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSize}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 font-sans">
                      {SIZES[selectedSize].label}
                    </h3>
                    <span className="text-slate-400 font-medium">/ {selectedSize}</span>
                  </div>
                  <p className="text-slate-600">
                    {SIZES[selectedSize].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <a 
                href="/produk" 
                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors group"
              >
                <span>Lihat Semua Produk dengan Ukuran Ini</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeInUp>
          </div>

          {/* Right: Visual Comparison Box */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeInUp delay={0.2} className="relative w-full max-w-[500px]">
              
              {/* Aspect Ratio Container (A3 Ratio) */}
              <div 
                className="relative w-full bg-slate-200 rounded-[2rem] p-8 shadow-inner border border-slate-300"
                style={{ aspectRatio: `${SIZES.A3.width} / ${SIZES.A3.height}` }}
              >
                
                {/* The "Canvas" - Represents A3 Paper Area */}
                <div className="relative w-full h-full bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200">
                  <div className="absolute inset-0 bg-slate-50/50 pattern-grid-lg opacity-50"></div>

                  {/* Papers Stack (Bottom-Left Aligned) */}
                  <div className="absolute bottom-0 left-0 w-full h-full">
                    
                    {/* Render All Sizes */}
                    {(['A3', 'A4', 'A5', 'A6'] as PaperSize[]).map((size, index) => {
                      const widthPct = getWidthPct(SIZES[size].width);
                      const heightPct = getHeightPct(SIZES[size].height);
                      const isSelected = selectedSize === size;
                      
                      // Z-Index: Larger sizes should be at the bottom (lower z-index)
                      // Order: A3 (0), A4 (1), A5 (2), A6 (3)
                      // Since we map A3, A4... index 0, 1... this works if we use index.
                      // But we want A3 at bottom.
                      const zIndex = index * 10;

                      // Styles based on paper size
                      const isA4 = size === 'A4';
                      const isA3 = size === 'A3';
                      
                      return (
                        <motion.div
                          key={size}
                          initial={false}
                          animate={{
                            backgroundColor: isSelected ? 'rgba(255, 95, 31, 0.05)' : (isA3 ? 'rgba(255,255,255,1)' : 'rgba(255, 255, 255, 0)'),
                            borderColor: isSelected 
                              ? 'rgba(255, 95, 31, 1)' // Orange when selected
                              : (isA4 ? 'rgba(251, 146, 60, 0.5)' : 'rgba(203, 213, 225, 0.6)'), // Orange-ish for A4, Slate for others
                            borderWidth: isSelected ? 2 : 1,
                            borderStyle: (isA4 && !isSelected) ? 'dashed' : 'solid',
                          }}
                          className={`absolute bottom-0 left-0 transition-all duration-500`}
                          style={{
                            width: `${widthPct}%`,
                            height: `${heightPct}%`,
                            zIndex: zIndex,
                          }}
                        >
                          {/* Label inside the box (top-right of the box) */}
                          <div className={`absolute top-2 right-2 text-[10px] font-bold ${isSelected ? 'text-orange-600' : 'text-slate-300'}`}>
                            {size}
                          </div>
                          
                          {/* Dimensions Label (Only for selected) */}
                          {isSelected && (
                            <motion.div 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }}
                              className="absolute -top-6 left-0 text-xs font-medium text-orange-600 whitespace-nowrap bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm"
                            >
                              {SIZES[size].label}
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Realistic KTP (Fixed/Overlay) - Bottom Left */}
                  <motion.div 
                    className="absolute z-50"
                    style={{
                        width: `${getWidthPct(KTP_SIZE.width)}%`,
                        height: `${getHeightPct(KTP_SIZE.height)}%`,
                        bottom: 0,
                        left: 0,
                    }}
                  >
                    <div className="w-full h-full rounded border border-slate-400 bg-transparent flex items-center justify-center">
                        <span className="text-[8px] font-bold text-slate-400">KTP</span>
                    </div>
                    
                    {/* Label above KTP (Centered, Text Only) */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-slate-500 whitespace-nowrap">
                        {KTP_SIZE.label}
                    </div>
                  </motion.div>

                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
