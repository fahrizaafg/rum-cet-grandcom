'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../(store)/useCartStore';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Layanan', href: '/layanan' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Produk', href: '/produk' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { getTotalItems, toggleCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-sm py-0' 
          : 'bg-white/80 backdrop-blur-md border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-dark" onClick={closeMenu}>
                RumahCetak<span className="text-primary">Grandcom</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-bold transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-slate-900 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
            {/* Cart Button (Desktop) */}
            <button
              onClick={toggleCart}
              className="relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-orange-500 transition-colors group"
            >
              <ShoppingBag className="w-6 h-6 text-slate-700 group-hover:text-orange-500 transition-colors" />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm animate-in zoom-in duration-300">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <Link
              href="/kontak"
              className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-200/50"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Cart Button (Mobile) */}
            <button
              onClick={toggleCart}
              className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ShoppingBag className="w-6 h-6 text-slate-900" />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold flex items-center justify-center rounded-full shadow-sm">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-primary focus:outline-none p-2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/50 rounded-full"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl absolute w-full left-0 h-screen">
          <div className="px-6 py-8 space-y-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-bold ${
                  pathname === link.href ? 'text-primary' : 'text-slate-800'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
             <Link
                href="/kontak"
                className="mt-4 bg-primary text-white text-center font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors text-lg shadow-lg"
                onClick={closeMenu}
              >
                Hubungi Kami
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
