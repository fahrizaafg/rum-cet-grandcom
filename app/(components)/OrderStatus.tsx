'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CreditCard, Settings, Truck, Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Konsultasi Desain',
    description: 'Diskusikan ide Anda dengan tim desainer kami. Gratis konsultasi & revisi sampai cocok!',
    icon: MessageSquare,
  },
  {
    id: 2,
    title: 'Pembayaran',
    description: 'Lakukan pembayaran aman via transfer bank atau e-wallet. Konfirmasi mudah & cepat.',
    icon: CreditCard,
  },
  {
    id: 3,
    title: 'Proses Produksi',
    description: 'Pesanan Anda diproses dengan mesin canggih dan quality control ketat untuk hasil terbaik.',
    icon: Settings,
  },
  {
    id: 4,
    title: 'Pengiriman',
    description: 'Barang dikirim via ekspedisi terpercaya dengan packing aman atau bisa diambil di toko.',
    icon: Truck,
  },
];

export default function OrderStatus() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-4 block">
            Workflow
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Cara Pemesanan Mudah
          </h2>
          <p className="font-sans text-slate-500 max-w-2xl mx-auto">
            Ikuti 4 langkah sederhana ini untuk mendapatkan produk cetak impian Anda.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative group">
                  <motion.button
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    className={`w-full flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 ${
                      isActive ? 'bg-orange-50 scale-105 shadow-xl ring-2 ring-orange-100' : 'bg-white hover:bg-slate-50'
                    }`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                        isActive
                          ? 'bg-orange-500 text-white shadow-lg shadow-orange-200'
                          : 'bg-slate-100 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-500'
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-orange-200 text-orange-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        Step 0{step.id}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-orange-900' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    
                    {/* Mobile: Always show description if active, or purely interactive */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-slate-600 leading-relaxed overflow-hidden"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    
                    {!isActive && (
                      <p className="text-sm text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                        Klik untuk detail
                      </p>
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
