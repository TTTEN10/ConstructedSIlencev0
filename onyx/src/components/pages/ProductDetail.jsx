import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/lib/catalog';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import FadeInView from '@/components/FadeInView';
import { motion } from 'framer-motion';
import { useCart } from '@/components/hooks/useCart';

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const [selectedSize, setSelectedSize] = useState(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const { addItem } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => (productId ? getProductById(productId) : null),
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="noise-overlay min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-screen">
          <div className="w-6 h-6 border border-white/20 border-t-white/80 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="noise-overlay min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="font-playfair text-2xl text-foreground italic">Piece not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
          {/* Image */}
          <div
            className="md:col-span-7 relative overflow-hidden cursor-crosshair"
            onMouseEnter={() => setImageZoomed(true)}
            onMouseLeave={() => setImageZoomed(false)}
          >
            <motion.div
              animate={{ scale: imageZoomed ? 1.08 : 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[70vh] md:h-screen sticky top-0"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0">
            <FadeInView>
              <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {product.collection || 'SS26'}
              </span>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h1 className="font-playfair text-3xl md:text-4xl text-foreground mt-4 tracking-tight">
                {product.name}
              </h1>
            </FadeInView>

            <FadeInView delay={0.2}>
              <span className="font-inter text-lg text-muted-foreground mt-4 block">
                ${product.price?.toLocaleString()}
              </span>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="w-12 h-px bg-white/10 my-8" />
            </FadeInView>

            {product.description && (
              <FadeInView delay={0.35}>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {product.description}
                </p>
              </FadeInView>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <FadeInView delay={0.4}>
                <div className="mt-8">
                  <span className="font-inter text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Size
                  </span>
                  <div className="flex gap-3 mt-4">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center font-inter text-xs tracking-wider border transition-all duration-500 ${
                          selectedSize === size
                            ? 'border-foreground text-foreground bg-foreground/5'
                            : 'border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </FadeInView>
            )}

            {/* Add to cart */}
            <FadeInView delay={0.5}>
              <button
                className="mt-10 w-full py-4 bg-foreground text-primary-foreground font-inter text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-500"
                onClick={() => {
                  addItem(
                    {
                      id: `${product.id}:${selectedSize ?? 'OS'}`,
                      productId: product.id,
                      title: product.name,
                      variantTitle: selectedSize ? `Size ${selectedSize}` : 'One Size',
                      price: product.price ?? 0,
                      currency: 'USD',
                    },
                    1,
                  );
                }}
              >
                Add to Cart
              </button>
            </FadeInView>

            <FadeInView delay={0.6}>
              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">Category</span>
                    <span className="font-inter text-xs text-secondary-foreground capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">Collection</span>
                    <span className="font-inter text-xs text-secondary-foreground">{product.collection || 'SS26'}</span>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}