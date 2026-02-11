'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDownRight, Coffee, Stamp, Layers } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Text Animation Variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-secondary px-6 pt-24 pb-12 lg:pt-32">
      {/* Blueprint Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Decorative Serial Numbers - REMOVED */}


      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 h-full">
          
          {/* Headline - Top Left (Spans 8 cols) */}
          <div className="col-span-12 lg:col-span-9 relative">
            <motion.h1 
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-dark leading-[0.9] tracking-tighter"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {/* Line 1 */}
              <span className="block mb-2">
                {"Cetak Ide,".split("").map((char, index) => (
                  <motion.span key={index} variants={letter} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              
              {/* Line 2 with Outline Effect */}
              <span className="block text-transparent stroke-text-dark">
                {"Wujudkan".split("").map((char, index) => (
                  <motion.span key={index} variants={letter} className="inline-block" style={{ WebkitTextStroke: '2px #1A1A1A' }}>
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Line 3 */}
              <span className="block text-primary italic pr-4">
                {"Karya.".split("").map((char, index) => (
                  <motion.span key={index} variants={letter} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>

          {/* Floating Asset 1 - Top Right (Decorative) */}
          <div className="hidden lg:block lg:col-span-3 relative">
             <motion.div 
               style={{ y: y1, rotate }} 
               className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 z-20"
             >
               <Coffee className="w-20 h-20 text-dark opacity-80" strokeWidth={1} />
               <div className="absolute -bottom-4 -right-4 bg-dark text-white text-xs px-3 py-1 font-mono">FIG. 01</div>
             </motion.div>
          </div>

          {/* Spacer Row */}
          <div className="col-span-12 h-16 lg:h-32"></div>

          {/* Floating Asset 2 - Middle Left (Overlapping) */}
          <div className="hidden lg:block col-span-2 relative">
             <motion.div 
               style={{ y: y2 }} 
               className="absolute -top-24 left-12 w-40 h-56 bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center z-0"
             >
               <Layers className="w-16 h-16 text-primary opacity-60" />
             </motion.div>
          </div>

          {/* Sub-headline & CTA - Bottom Right (Spans 6 cols) */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col items-start lg:items-end text-left lg:text-right relative">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-sans text-lg md:text-xl text-muted max-w-md leading-relaxed mb-10"
            >
              Dari merchandise custom hingga kebutuhan kantor, kami memastikan kualitas cetak terbaik dengan sentuhan desain premium.
            </motion.p>

            {/* Organic CTA Button */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
              className="relative group"
            >
              <Link
                href="/layanan"
                className="relative z-10 flex items-center justify-center w-40 h-16 bg-primary text-white font-bold text-lg tracking-wide shadow-lg hover:bg-orange-600 transition-colors duration-300 shape-organic transform group-hover:rotate-3"
              >
                Mulai
                <ArrowDownRight className="ml-2 w-5 h-5" />
              </Link>
              {/* Button Shadow/Decor */}
              <div className="absolute inset-0 bg-dark w-40 h-16 translate-x-2 translate-y-2 -z-10 shape-organic opacity-20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
            </motion.div>
          </div>
          
          {/* Floating Asset 3 - Bottom Left */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-2 relative mt-8 lg:mt-0">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.4 }}
               className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm max-w-xs"
             >
               <div className="bg-orange-50 p-3 rounded-lg">
                 <Stamp className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <div className="text-xs font-bold text-muted uppercase tracking-wider">Status</div>
                 <div className="font-sans font-bold text-dark">Ready to Print</div>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
