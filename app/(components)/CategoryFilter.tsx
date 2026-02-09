'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export type Category = 
  | 'Semua Produk'
  | 'Gantungan Kunci'
  | 'Merchandise'
  | 'Alat Tulis & Kantor'
  | 'Promosi & Event'
  | 'Jasa Cetak'
  | 'Lainnya';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  counts 
}: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to active element on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedCategory]);

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mask-gradient px-1 snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          const count = counts[category] || 0;
          
          return (
            <motion.button
              key={category}
              data-active={isActive}
              onClick={() => onSelectCategory(category)}
              whileTap={{ scale: 0.95 }}
              className={`
                flex-shrink-0 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border snap-center whitespace-nowrap
                ${isActive 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-orange-100' 
                  : 'bg-white text-slate-600 border-gray-200 hover:border-primary hover:text-primary hover:bg-orange-50'
                }
              `}
            >
              {category}
              {count > 0 && (
                <span className={`ml-2 text-xs py-0.5 px-1.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-slate-500'}`}>
                  {count}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
