'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { products, Category as ProductCategory } from '../(data)/products';
import ProductCard from './ProductCard';
import CategoryFilter, { Category } from './CategoryFilter';

const categories: Category[] = [
  'Semua Produk',
  'Gantungan Kunci',
  'Merchandise',
  'Alat Tulis & Kantor',
  'Promosi & Event',
  'Jasa Cetak',
  'Lainnya'
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Semua Produk');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'Semua Produk' || product.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const searchMatch = 
        product.name.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower);

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  // Calculate counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(cat => counts[cat] = 0);
    const searchLower = searchQuery.toLowerCase();
    const productsMatchingSearch = products.filter(p => 
      p.name.toLowerCase().includes(searchLower) || 
      p.description.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower)
    );
    counts['Semua Produk'] = productsMatchingSearch.length;
    productsMatchingSearch.forEach(product => {
      if (counts[product.category] !== undefined) {
        counts[product.category]++;
      }
    });
    return counts;
  }, [searchQuery]);

  return (
    <div>
      {/* Minimalist Search & Filter */}
      <div className="mb-16 space-y-8">
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Cari koleksi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-10 py-4 bg-transparent border-b-2 border-gray-200 text-dark placeholder-muted focus:outline-none focus:border-primary font-display text-lg transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted hover:text-dark"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={categoryCounts}
        />
      </div>

      {/* Asymmetric Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 min-h-[400px]"
      >
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`${index % 2 === 1 ? 'md:mt-12' : ''}`}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="col-span-full flex flex-col items-center justify-center py-20 text-center"
            >
              <p className="text-xl text-slate-500 font-medium">Tidak ada produk yang ditemukan.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('Semua Produk');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
