'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, Send, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useCartStore } from '../(store)/useCartStore';
import Image from 'next/image';
import ProductIcon from './ProductIcon';
import { products } from '../(data)/products';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice 
  } = useCartStore();
  
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  // Handle hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    useCartStore.persist.rehydrate();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Sort items alphabetically by name
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6289677104929'; // Use env var with fallback
    
    // Safety check: Don't proceed if cart is empty
    if (sortedItems.length === 0) return;

    const totalPrice = formatCurrency(getTotalPrice());
    
    let message = `Halo Percetakan Ibu, saya ingin memesan:\n\n`;
    
    sortedItems.forEach((item) => {
      const itemTotal = formatCurrency(item.price * item.quantity);
      message += `- ${item.name} (${item.quantity} pcs) - ${itemTotal}\n`;
    });
    
    message += `\nTotal: ${totalPrice}\n`;
    message += `Mohon informasi selanjutnya untuk pengiriman desain. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 rounded-xl">
                  <ShoppingBag className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Keranjang Belanja</h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {sortedItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Keranjang Kosong</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Belum ada produk yang dipilih. Yuk cari produk impianmu sekarang!
                  </p>
                  <button 
                    onClick={closeCart}
                    className="mt-6 px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Lanjut Belanja
                  </button>
                </div>
              ) : (
                sortedItems.map((item) => {
                  // Fallback to product data if iconName is missing in cart item (handle stale state)
                  const product = products.find(p => p.id === item.id);
                  const iconName = item.iconName || product?.iconName || 'Box';
                  
                  return (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-100 hover:shadow-sm transition-all"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <ProductIcon iconName={iconName} className="w-10 h-10 text-slate-400" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-slate-500 font-medium">
                          {formatCurrency(item.price)} <span className="text-xs text-slate-400">/ pcs</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 10)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-12 text-center text-xs font-bold text-slate-900 bg-transparent focus:outline-none cursor-text caret-slate-900 relative z-10"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 10)}
                            className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 flex items-center justify-center text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Hapus item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
              )}
            </div>

            {/* Discount Education Banner */}
            {sortedItems.length > 0 && (
               <div className="px-6 pb-2">
                 <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex gap-3 items-start">
                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-blue-800 font-semibold mb-1">Tips Hemat!</p>
                      <p className="text-xs text-blue-600 leading-relaxed">
                        Pesan lebih banyak untuk mendapatkan harga spesial. Diskon volume akan dihitung saat konsultasi via WhatsApp.
                      </p>
                    </div>
                 </div>
               </div>
            )}

            {/* Footer */}
            {sortedItems.length > 0 && (
              <div className="p-6 bg-white border-t border-slate-100 space-y-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <span>Total Item</span>
                    <span className="font-medium text-slate-900">
                      {sortedItems.reduce((acc, item) => acc + item.quantity, 0)} pcs
                    </span>
                  </div>

                  {/* Expandable Details Button */}
                  <div className="border-t border-dashed border-slate-200 pt-2">
                    <button 
                      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                      className="flex items-center gap-1 text-xs text-primary font-bold hover:underline focus:outline-none"
                    >
                      {isDetailsOpen ? 'Sembunyikan Rincian' : 'Lihat Rincian Harga'}
                      {isDetailsOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    
                    <AnimatePresence>
                      {isDetailsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 space-y-2 pb-2">
                            {sortedItems.map((item) => (
                              <div key={item.id} className="flex justify-between items-center text-[10px] text-slate-500 gap-2">
                                <div className="flex-1 flex items-center min-w-0">
                                  <span className="truncate text-slate-700 font-medium">{item.name}</span>
                                  <span className="whitespace-nowrap ml-1 text-slate-400">({item.quantity}pcs)</span>
                                </div>
                                <span className="font-bold text-slate-900 whitespace-nowrap">{formatCurrency(item.price * item.quantity)}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-slate-100">
                    <span className="text-slate-900">Total Harga</span>
                    <span className="text-primary">{formatCurrency(getTotalPrice())}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesanan ke WhatsApp
                </button>
                <p className="text-xs text-center text-slate-400">
                  Anda akan diarahkan ke WhatsApp untuk konfirmasi detail pesanan.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
