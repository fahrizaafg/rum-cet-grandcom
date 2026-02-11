'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Ruler, 
  Search, 
  ChevronDown,
  Check,
  User,
  Laptop,
  CreditCard,
} from 'lucide-react';
import { products } from '../(data)/products';
import FadeInUp from './FadeInUp';

// --- Constants & Types ---

const PIXELS_PER_CM = 10; // Fixed Ratio: 1cm = 10px

// Reference Objects in PIXELS
const PERSON_HEIGHT_PX = 170 * PIXELS_PER_CM; // 1700px
const PERSON_WIDTH_PX = 50 * PIXELS_PER_CM;   // 500px (approx aspect ratio)

const ID_CARD_WIDTH_PX = 8.56 * PIXELS_PER_CM; // ~85.6px
const ID_CARD_HEIGHT_PX = 5.398 * PIXELS_PER_CM; // ~54px

const LAPTOP_WIDTH_PX = 30 * PIXELS_PER_CM; // 300px
const LAPTOP_HEIGHT_PX = 21 * PIXELS_PER_CM; // 210px

// Default Dimensions per Category (Fallback)
const CATEGORY_DEFAULTS: Record<string, { width: number, height: number, unit: 'cm' | 'm' }> = {
  'Gantungan Kunci': { width: 5, height: 5, unit: 'cm' },
  'Merchandise': { width: 10, height: 10, unit: 'cm' }, 
  'Alat Tulis & Kantor': { width: 21, height: 29.7, unit: 'cm' }, 
  'Promosi & Event': { width: 60, height: 160, unit: 'cm' }, 
  'Jasa Cetak': { width: 21, height: 29.7, unit: 'cm' }, 
  'Lainnya': { width: 10, height: 10, unit: 'cm' }
};

const FALLBACK_DIMENSIONS = { width: 21, height: 29.7, unit: 'cm' as const };

// Helper to convert all units to cm
const toCm = (value: number, unit: 'cm' | 'm' | 'mm') => {
  if (unit === 'm') return value * 100;
  if (unit === 'mm') return value / 10;
  return value;
};

// Helper to convert string to Title Case
const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

// --- SVG Components ---

const PersonSilhouette = ({ widthPx, heightPx }: { widthPx: number, heightPx: number }) => (
  <svg
    viewBox="0 0 100 340"
    preserveAspectRatio="xMidYMax meet"
    className="fill-slate-800 drop-shadow-md"
    style={{ width: widthPx, height: heightPx }}
  >
    {/* Head */}
    <circle cx="50" cy="35" r="25" />
    {/* Body with Legs */}
    <path d="M50,65 C75,65 85,80 85,110 L85,180 L75,180 L75,340 L55,340 L55,200 L45,200 L45,340 L25,340 L25,180 L15,180 L15,110 C15,80 25,65 50,65 Z" />
  </svg>
);

const IDCardVisual = ({ widthPx, heightPx }: { widthPx: number, heightPx: number }) => (
  <div 
    className="bg-slate-200 rounded-[6px] border border-slate-300 relative overflow-hidden shadow-sm flex flex-col justify-center p-[8%] gap-[12%]"
    style={{ width: widthPx, height: heightPx }}
  >
    {/* Skeleton Lines */}
    <div className="w-[70%] h-[8%] bg-slate-400 rounded-full" />
    <div className="w-[90%] h-[8%] bg-slate-400 rounded-full" />
    <div className="w-[50%] h-[8%] bg-slate-400 rounded-full" />
    
    <div className="absolute bottom-[8%] right-[8%] font-bold text-slate-400 tracking-wider" style={{ fontSize: `${Math.max(8, widthPx * 0.05)}px` }}>KTP</div>
  </div>
);

const LaptopVisual = ({ widthPx, heightPx }: { widthPx: number, heightPx: number }) => (
  <div 
    className="relative flex flex-col items-center justify-center bg-slate-800 rounded-md shadow-sm border border-slate-700"
    style={{ width: widthPx, height: heightPx }}
  >
    {/* Apple Logo Placeholder */}
    <div className="w-[12%] h-[12%] bg-slate-700 rounded-full mb-[2%]" />
    
    {/* Opening Lip/Gap */}
    <div className="absolute bottom-0 w-[20%] h-[4px] bg-slate-700 rounded-t-sm mb-[-1px]" />
    
    <div className="absolute bottom-[5%] font-medium text-slate-600 tracking-widest uppercase" style={{ fontSize: `${Math.max(8, widthPx * 0.035)}px` }}>MacBook Pro 13&quot;</div>
  </div>
);

// --- Main Component ---

export default function InteractiveProductScaler() {
  // --- State ---
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all unique categories
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    products.forEach(p => cats.add(p.category));
    return Array.from(cats).sort();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Produk');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');

  // --- Filter Logic ---
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter out products without explicit dimensions
    filtered = filtered.filter(p => {
        if (p.dimensions) return true;
        if (p.variants && p.variants.some(v => v.dimensions)) return true;
        return false;
    });

    if (selectedCategory !== 'Semua Produk') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Set default product when filtered list changes
  useEffect(() => {
    if (filteredProducts.length > 0) {
      const exists = filteredProducts.find(p => p.id === selectedProductId);
      if (!exists) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setSelectedProductId(filteredProducts[0].id);
      }
    } else {
      setSelectedProductId('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts]); // Removed selectedProductId to avoid loop, but we need to check if selectedProductId is valid

  const selectedProduct = useMemo(() => 
    products.find(p => p.id === selectedProductId), 
  [selectedProductId]);

  const productVariants = useMemo(() => {
    if (!selectedProduct?.variants) return [];
    return selectedProduct.variants;
  }, [selectedProduct]);

  // Auto-select first variant
  useEffect(() => {
    if (productVariants.length > 0) {
        const exists = productVariants.find(v => v.id === selectedVariantId);
        if (!exists) setSelectedVariantId(productVariants[0].id);
    } else {
      setSelectedVariantId('');
    }
  }, [productVariants, selectedVariantId]);

  const selectedVariant = useMemo(() => 
    productVariants.find(v => v.id === selectedVariantId),
  [productVariants, selectedVariantId]);

  // Determine current dimensions
  const currentDimensions = useMemo(() => {
    if (selectedVariant?.dimensions) return selectedVariant.dimensions;
    if (selectedProduct?.dimensions) return selectedProduct.dimensions;
    if (selectedProduct) {
       const def = CATEGORY_DEFAULTS[selectedProduct.category];
       if (def) return def;
    }
    return FALLBACK_DIMENSIONS;
  }, [selectedProduct, selectedVariant]);

  // --- Fixed Scale Logic ---
  
  const widthPx = toCm(currentDimensions.width, currentDimensions.unit) * PIXELS_PER_CM;
  const heightPx = toCm(currentDimensions.height, currentDimensions.unit) * PIXELS_PER_CM;

  // Comparison Context
  const comparisonContext = useMemo(() => {
    const maxDim = Math.max(widthPx, heightPx);
    // Thresholds in PX: 15cm = 150px, 60cm = 600px
    if (maxDim <= 150) return 'small'; // ID Card
    if (maxDim <= 600) return 'medium'; // Laptop
    return 'large'; // Person
  }, [widthPx, heightPx]);

  // Viewport/Container Scaling
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      // Determine content dimensions based on context + product size
      // We use fixed padding subtraction from container size for safer scaling
      let contentWidth = 0;
      let contentHeight = 0;

      if (comparisonContext === 'large') {
        contentHeight = Math.max(PERSON_HEIGHT_PX, heightPx);
        contentWidth = PERSON_WIDTH_PX + widthPx + 100; // 100px gap
      } else if (comparisonContext === 'medium') {
        contentHeight = Math.max(LAPTOP_HEIGHT_PX, heightPx);
        contentWidth = LAPTOP_WIDTH_PX + widthPx + 80; // 80px gap
      } else {
        contentHeight = Math.max(ID_CARD_HEIGHT_PX, heightPx);
        contentWidth = ID_CARD_WIDTH_PX + widthPx + 50; // 50px gap
      }

      // Padding configuration
      const PADDING_X = 100;
      const PADDING_Y = 150; // 50px bottom margin + 100px top buffer for safety

      // Calculate available space
      const availableWidth = containerWidth - PADDING_X;
      const availableHeight = containerHeight - PADDING_Y;

      // Calculate scale to fit content into available space
      const scaleX = availableWidth / contentWidth;
      const scaleY = availableHeight / contentHeight;
      
      // Use the smaller scale to fit everything, max 1 (don't zoom in past 100%)
      setScale(Math.min(scaleX, scaleY, 1)); 
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [comparisonContext, widthPx, heightPx]);


  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden" id="interactive-scaler">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold tracking-wider text-xs uppercase">
              <Ruler className="w-4 h-4" />
              <span>Interactive Product Scaler</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Visualisasi Ukuran Real
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Bandingkan ukuran produk kami dengan objek sehari-hari secara akurat.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Controls (Left Side) */}
          <div className="lg:col-span-4 space-y-6">
            <FadeInUp delay={0.1}>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <label htmlFor="product-search" className="sr-only">Cari produk</label>
                <input
                    id="product-search"
                    type="text"
                    placeholder="Cari produk (contoh: Banner, Stiker)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-slate-800"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              </div>

              {/* Category Filter */}
              <div className="space-y-2 mb-6">
                <label htmlFor="category-select" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori</label>
                <div className="relative">
                  <select
                    id="category-select"
                    aria-label="Kategori"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
                  >
                    <option value="Semua Produk">Semua Produk</option>
                    {allCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Product List */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Daftar Produk ({filteredProducts.length})
                </label>
                <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredProducts.length > 0 ? (
                      filteredProducts.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setSelectedProductId(p.id)}
                          className={`
                            w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 flex items-center justify-between group
                            ${selectedProductId === p.id
                              ? 'bg-orange-50 border-orange-500 text-orange-700 shadow-sm' 
                              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-200 hover:bg-orange-50/50'}
                          `}
                        >
                          <span className="font-medium truncate text-sm">{p.name}</span>
                          {selectedProductId === p.id && <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />}
                        </button>
                      ))
                  ) : (
                      <div className="text-center py-8 text-slate-400 text-sm italic border-2 border-dashed border-slate-100 rounded-xl">
                          Tidak ada produk ditemukan
                      </div>
                  )}
                </div>
              </div>

              {/* Variant Selector */}
              {productVariants.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pilih Varian</label>
                  <div className="flex flex-wrap gap-2">
                    {productVariants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`
                          px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200
                          ${selectedVariantId === v.id
                            ? 'bg-slate-800 border-slate-800 text-white shadow-md' 
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}
                        `}
                      >
                        {toTitleCase(v.name)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Dimensions Info */}
              <div className="bg-slate-900 rounded-xl p-5 mt-8 flex items-center justify-between text-white shadow-lg">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Dimensi Terpilih</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold font-mono">
                      {currentDimensions.width} x {currentDimensions.height}
                    </span>
                    <span className="text-sm font-medium text-orange-400">{currentDimensions.unit}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                       {comparisonContext === 'large' ? <User className="w-5 h-5"/> : comparisonContext === 'medium' ? <Laptop className="w-5 h-5"/> : <CreditCard className="w-5 h-5"/>}
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase">{comparisonContext} SCALE</span>
                </div>
              </div>

            </FadeInUp>
          </div>

          {/* Visualizer (Right Side) */}
          <div className="lg:col-span-8 h-full">
            <FadeInUp delay={0.2} className="h-full">
              <div 
                ref={containerRef}
                className="relative w-full min-h-[600px] bg-slate-50 rounded-[2rem] border border-slate-200 shadow-inner overflow-hidden flex items-end justify-center"
              >
                
                {/* Canvas Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
                
                {/* Scale Indicator */}
                <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Zoom: {(scale * 100).toFixed(0)}%</span>
                </div>

                {/* SCENE CONTAINER (Scaled) */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <div 
                    style={{ 
                      transform: `scale(${scale})`,
                      transformOrigin: 'bottom center',
                      display: 'flex',
                      alignItems: 'flex-end',
                      gap: comparisonContext === 'small' ? '50px' : '100px', // Spacing between reference and product
                      marginBottom: '50px' // Floor padding
                    }}
                    className="transition-transform duration-500 ease-out will-change-transform relative"
                  >
                      
                      {/* Floor Line */}
                      <div 
                        className="absolute bottom-0 left-[-500%] right-[-500%] bg-slate-300" 
                        style={{ height: `${1/scale}px` }} 
                      />

                      {/* REFERENCE OBJECT */}
                      <div className="flex-shrink-0 relative opacity-50">
                        {comparisonContext === 'large' && (
                            <div className="relative">
                              <PersonSilhouette widthPx={PERSON_WIDTH_PX} heightPx={PERSON_HEIGHT_PX} />
                              <div className="absolute -left-8 top-0 bottom-0 border-l-2 border-slate-300 flex flex-col justify-between py-1">
                                <span className="text-2xl font-bold text-slate-500 -ml-12 bg-slate-50 px-2 rounded">170cm</span>
                              </div>
                            </div>
                        )}
                        {comparisonContext === 'small' && (
                            <div className="relative">
                              <IDCardVisual widthPx={ID_CARD_WIDTH_PX} heightPx={ID_CARD_HEIGHT_PX} />
                              <div className="absolute -bottom-8 w-full text-center text-sm font-bold text-slate-500">Standard Card</div>
                            </div>
                        )}
                        {comparisonContext === 'medium' && (
                            <div className="relative">
                              <LaptopVisual widthPx={LAPTOP_WIDTH_PX} heightPx={LAPTOP_HEIGHT_PX} />
                              <div className="absolute -bottom-8 w-full text-center text-sm font-bold text-slate-500">Laptop 13"</div>
                            </div>
                        )}
                      </div>

                      {/* PRODUCT OBJECT */}
                      <motion.div
                        layout
                        className="bg-orange-500/10 border-4 border-orange-500 flex items-center justify-center backdrop-blur-[1px] shadow-sm relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          width: widthPx,
                          height: heightPx,
                          opacity: 1,
                          scale: 1
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      >
                        {/* Product Label */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center z-20 pointer-events-none">
                          <div style={{ transform: `scale(${1/scale})` }} className="flex flex-col items-center justify-center">
                              <span className="text-orange-800 font-bold text-[14px] bg-white p-2 rounded shadow-sm backdrop-blur-sm max-w-[150px] whitespace-normal flex-shrink-0 mx-auto leading-tight">
                                {selectedProduct?.name}
                              </span>
                              {selectedVariant && (
                                <span className="text-orange-700 text-[12px] mt-1 font-medium bg-white/80 p-1.5 rounded max-w-[150px] whitespace-normal flex-shrink-0 mx-auto leading-tight">
                                  {toTitleCase(selectedVariant.name)}
                                </span>
                              )}
                          </div>
                        </div>
                        
                        {/* RULER LINES (Dimensions) */}
                        {/* Height Ruler (Right) */}
                        <div className="absolute -right-12 top-0 bottom-0 border-r border-slate-400 flex flex-col justify-center items-end pr-2">
                          <div style={{ transform: `scale(${1/scale})`, transformOrigin: 'right center' }}>
                             <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-1 text-[12px] font-mono text-slate-500 font-bold whitespace-nowrap rotate-90 origin-center">
                                 {currentDimensions.height} {currentDimensions.unit}
                             </span>
                          </div>
                          {/* Ticks */}
                          <div className="absolute top-0 right-[-1px] w-2 h-[1px] bg-slate-400" />
                          <div className="absolute bottom-0 right-[-1px] w-2 h-[1px] bg-slate-400" />
                        </div>

                        {/* Width Ruler (Bottom) */}
                        <div className="absolute -bottom-12 left-0 right-0 border-b border-slate-400 flex flex-row justify-center items-start pt-2">
                          <div style={{ transform: `scale(${1/scale})`, transformOrigin: 'top center' }}>
                             <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-1 text-[12px] font-mono text-slate-500 font-bold whitespace-nowrap">
                                 {currentDimensions.width} {currentDimensions.unit}
                             </span>
                          </div>
                          {/* Ticks */}
                          <div className="absolute left-0 bottom-[-1px] h-2 w-[1px] bg-slate-400" />
                          <div className="absolute right-0 bottom-[-1px] h-2 w-[1px] bg-slate-400" />
                        </div>

                      </motion.div>
  
                  </div>
                </div>

              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
