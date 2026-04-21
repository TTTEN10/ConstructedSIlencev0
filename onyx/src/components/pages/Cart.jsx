import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import FadeInView from '@/components/FadeInView';
import CartItem from '@/components/cart/CartItem';
import { useCart } from '@/components/hooks/useCart';

export default function Cart() {
  const { items, removeItem, setQuantity, subtotal, clear } = useCart();

  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-0 px-6 md:px-12 py-12">
        <FadeInView>
          <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Cart
          </span>
          <h1 className="font-playfair text-3xl md:text-4xl text-foreground mt-4 tracking-tight">
            Your selections
          </h1>
        </FadeInView>

        {items.length === 0 ? (
          <FadeInView delay={0.1}>
            <div className="mt-10 border border-white/10 p-10">
              <p className="font-inter text-sm text-muted-foreground">Your cart is empty.</p>
              <Link
                to="/collections"
                className="inline-flex mt-6 py-4 px-6 bg-foreground text-primary-foreground font-inter text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-500"
              >
                Browse collections
              </Link>
            </div>
          </FadeInView>
        ) : (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={() => removeItem(item.id)}
                  onSetQuantity={(q) => setQuantity(item.id, q)}
                />
              ))}
            </div>

            <aside className="lg:col-span-4">
              <div className="border border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Summary
                  </p>
                  <button
                    type="button"
                    className="font-inter text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground"
                    onClick={clear}
                  >
                    Clear
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">
                    Subtotal
                  </span>
                  <span className="font-inter text-xs text-secondary-foreground">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-8 w-full py-4 bg-foreground text-primary-foreground font-inter text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-500"
                  onClick={() => alert('Checkout requires a backend. Next step: connect Stripe Checkout server-side.')}
                >
                  Checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

