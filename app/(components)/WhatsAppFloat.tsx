'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative flex items-center justify-center">
        {/* Rotating Text Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-32 h-32 pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[10px] font-bold tracking-widest uppercase fill-orange-500">
              <textPath href="#circlePath" startOffset="0%">
                 • PREMIUM QUALITY • FAST RESPONSE • TRUSTED PRINT SHOP
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6289677104929'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-6 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm font-bold translate-x-2 group-hover:translate-x-0">
            Hubungi Kami
          </span>
        </a>
      </div>
    </div>
  );
}
