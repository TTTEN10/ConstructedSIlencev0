import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { listProducts } from '@/lib/catalog';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import ProductCard from '@/components/ProductCard';
import FadeInView from '@/components/FadeInView';

export default function Collections() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => listProducts(),
  });

  return (
    <div className="noise-overlay">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
          <FadeInView>
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-muted-foreground">
              SS26
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-foreground mt-4 tracking-tight">
              Collections
            </h1>
            <p className="font-inter text-sm text-muted-foreground mt-6 max-w-md leading-relaxed">
              Each garment exists as a singular statement — constructed in silence, 
              designed to endure beyond season.
            </p>
          </FadeInView>
        </section>

        {/* Divider */}
        <div className="px-6 md:px-12">
          <div className="h-px bg-white/5" />
        </div>

        {/* Product grid */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-secondary" />
                  <div className="mt-5 h-4 w-32 bg-secondary" />
                  <div className="mt-2 h-3 w-20 bg-secondary" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <FadeInView>
              <div className="text-center py-24">
                <p className="font-playfair text-2xl text-foreground italic">
                  The collection is being prepared.
                </p>
                <p className="font-inter text-sm text-muted-foreground mt-4">
                  New pieces arriving soon.
                </p>
              </div>
            </FadeInView>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6">
              {products.map((product, i) => (
                <FadeInView key={product.id} delay={i * 0.08}>
                  <ProductCard
                    product={product}
                    className={i % 3 === 1 ? 'md:mt-16' : ''}
                  />
                </FadeInView>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}