'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollingText() {
  return (
    <section className="py-8 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span 
                className="text-6xl md:text-8xl font-display font-bold px-4 text-transparent hover:text-orange-500 transition-colors duration-300 cursor-default"
                style={{ WebkitTextStroke: '1px #cbd5e1' }}
              >
                CETAK UNDANGAN • MERCHANDISE • STIKER • KALENDER • KAOS CUSTOM •
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
