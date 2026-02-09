'use client';

import { useState } from 'react';
import { Product } from '../(data)/products';
import { Tag, ArrowUpRight, Zap, CheckCircle, Package, ShoppingCart } from 'lucide-react';
import ProductIcon from './ProductIcon';
import { useCartStore } from '../(store)/useCartStore';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [qty, setQty] = useState(100);
  const { addToCart } = useCartStore();
  
  // Calculate price logic
  const calculatePrice = () => {
    if (product.basePrice === 0) return null;
    
    let discount = 0;
    if (qty >= 1000) discount = 0.10; // 10% off
    else if (qty >= 500) discount = 0.05; // 5% off
    
    const total = product.basePrice * qty * (1 - discount);
    return total;
  };

  const calculatedPrice = calculatePrice();
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAddToCart = () => {
    if (!calculatedPrice) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.basePrice * (1 - (qty >= 1000 ? 0.10 : qty >= 500 ? 0.05 : 0)), // Apply discount to unit price
      quantity: qty,
      image: product.image,
      iconName: product.iconName
    });
  };

  return (
    <div className="group relative h-full flex flex-col">
      {/* Visual Depth Container - Floating Effect */}
      <div className="relative mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
        
        {/* Abstract Background Shape */}
        <div className={`absolute inset-0 bg-gray-200/50 rounded-3xl transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-500 -z-10 ${index % 2 === 0 ? 'rotate-3' : '-rotate-2'}`}></div>
        
        {/* Main Card Container */}
        <div className="relative aspect-square md:aspect-[4/5] w-full bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
          
          {/* Icon/Image Placeholder Area */}
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
             <div className="relative z-10 p-8 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-500">
               <ProductIcon iconName={product.iconName} className="w-16 h-16 text-dark/80" />
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/30 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Organic Price Tag */}
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-flex items-center px-4 py-2 bg-primary text-white text-xs font-bold tracking-wide uppercase shape-organic shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
              {product.priceSimulated}
            </span>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="flex flex-col flex-grow px-2">
        <div className="flex items-start justify-between mb-2">
           <span className="text-xs font-bold tracking-widest uppercase text-muted border-b border-primary/30 pb-1">
             {product.category}
           </span>
        </div>
        
        <h3 className="font-display text-2xl md:text-3xl font-bold text-dark mb-3 leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-6 font-sans">
          {product.description}
        </p>
        
        {/* Quick Pricing Calculator */}
        {product.basePrice > 0 && (
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 relative z-20">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase">Estimasi Harga</span>
              <span className="text-lg font-bold text-primary tabular-nums animate-in fade-in duration-300">
                {calculatedPrice ? formatCurrency(calculatedPrice) : '-'}
              </span>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 mb-4 relative z-30">
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 0))}
                className="flex-1 w-full px-4 py-2 text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-text caret-slate-900 relative z-30"
                placeholder="Jumlah"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="text-sm font-bold text-slate-500">pcs</span>
            </div>

            {/* Micro-Copy Conversion Boosters */}
            <div className="space-y-1.5 border-t border-slate-200/60 pt-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Zap className="w-3 h-3 text-orange-500" />
                <span>Estimasi selesai 1-2 hari kerja</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Gratis revisi desain 2x</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Package className="w-3 h-3 text-blue-500" />
                <span>Packing aman bubble wrap</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Minimalist CTA */}
        <div className="mt-auto">
          <button 
            onClick={handleAddToCart}
            disabled={!calculatedPrice}
            className="w-full inline-flex items-center justify-center py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all group/link disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Pesan Sekarang
            <ShoppingCart className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
