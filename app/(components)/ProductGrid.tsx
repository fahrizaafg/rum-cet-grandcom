'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
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

const ITEMS_PER_PAGE = 12;

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Semua Produk');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset pagination when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

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

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the grid or window
    const gridElement = document.getElementById('product-grid');
    if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div id="product-grid" className="relative">
      {/* Minimalist Search & Filter */}
      <div className="mb-12 space-y-8">
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Cari koleksi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-10 py-4 bg-transparent border-b-2 border-gray-200 text-dark placeholder-muted focus:outline-none focus:border-primary font-sans text-lg transition-colors"
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

        {/* Info Text */}
        <div className="text-center text-sm text-slate-500 font-sans font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
            Menampilkan <span className="font-bold text-slate-900">{filteredProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}</span> - <span className="font-bold text-slate-900">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</span> dari <span className="font-bold text-slate-900">{filteredProducts.length}</span> produk
        </div>
      </div>

      {/* Asymmetric Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 min-h-[400px]"
      >
        <AnimatePresence mode="wait">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
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
              <p className="text-xl text-slate-500 font-sans font-medium">Tidak ada produk yang ditemukan.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('Semua Produk');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary font-sans font-bold hover:underline"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-20 flex flex-wrap justify-center items-center gap-3">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Previous Page"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Logic to show limited page numbers (e.g. 1, 2, 3 ... 10) can be added if needed
                // For now showing all since 138 / 12 = 12 pages, which fits on desktop but maybe crowded on mobile.
                // Let's implement a simple visible range or just show all for simplicity as requested "1, 2, 3...".
                // If pages > 7, use ellipsis? The user didn't explicitly ask for ellipsis but "1, 2, 3..." implies it.
                // For simplicity and robustness, let's just show all for now as 12 items is manageable, 
                // or just show a window if it gets too large. 12 pages is okay to wrap.
                
                return (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`
                                w-10 h-10 rounded-full font-sans font-bold text-sm transition-all
                                ${currentPage === page 
                                    ? 'bg-primary text-white shadow-lg shadow-orange-200 scale-110' 
                                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300'
                                }
                            `}
                        >
                            {page}
                        </button>
                    );
            })}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Next Page"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      )}

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
            <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-4 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-primary transition-colors duration-300 group"
                aria-label="Back to Top"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

