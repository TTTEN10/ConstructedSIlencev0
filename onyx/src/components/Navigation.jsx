import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/components/hooks/useCart';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Cart', path: '/cart' },
  ];

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <Link to="/" className="z-50">
            <span className="font-playfair text-lg md:text-xl tracking-[0.3em] text-foreground">
              CONSTRUCTED SILENCE
            </span>
          </Link>

          <div className="z-50 flex items-center gap-6">
            <Link
              to="/cart"
              className="group inline-flex items-center gap-3"
              aria-label="Cart"
            >
              <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500 hidden md:block">
                Cart
              </span>
              <span
                id="cart-fly-target"
                data-cart-fly-target="true"
                className="relative inline-flex items-center justify-center w-6 h-6 border border-white/10 text-muted-foreground group-hover:text-foreground group-hover:border-white/20 transition-colors duration-500"
              >
                <span className="font-inter text-[10px] tracking-wider">
                  {cartCount}
                </span>
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-3"
              aria-label="Toggle menu"
            >
              <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500 hidden md:block">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-px bg-foreground transition-all duration-500 ${
                    isOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-foreground transition-all duration-500 ${
                    isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex items-center"
          >
            <div className="w-full px-12 md:px-24">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-baseline gap-6 py-4 border-b border-white/5 hover:border-white/20 transition-all duration-700"
                    >
                      <span className="font-inter text-xs text-muted-foreground tracking-wider">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-playfair text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight group-hover:tracking-wider transition-all duration-700">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-20 flex gap-12 font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground"
              >
                <span>Instagram</span>
                <span>Archive</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}