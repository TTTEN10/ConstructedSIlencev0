import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import FadeInView from '@/components/FadeInView';
import CartItem from '@/components/cart/CartItem';
import { useCart } from '@/components/hooks/useCart';

export default function Cart() {
  const { items, removeItem, setQuantity, subtotal, clear, currency } = useCart();
  const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency });
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleCheckout = async () => {
    if (items.length === 0 || isCheckingOut) return;
    setIsCheckingOut(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, currency }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Failed to start checkout');
      if (!data?.url) throw new Error('Missing Stripe Checkout URL');
      window.location.assign(data.url);
    } catch (e) {
      alert(e?.message ?? 'Checkout failed');
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-0 px-6 md:px-12 py-12">
        <FadeInView>
          <h1 className="font-playfair text-3xl md:text-4xl text-foreground tracking-tight">
            Cart
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
            <section className="lg:col-span-8">
              <FadeInView delay={0.05}>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Home delivery
                    </span>
                    <div className="mt-4 h-px w-16 bg-white/10" />
                  </div>
                  <button
                    type="button"
                    className="font-inter text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground"
                    onClick={clear}
                  >
                    Remove all
                  </button>
                </div>
              </FadeInView>

              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={() => removeItem(item.id)}
                    onSetQuantity={(q) => setQuantity(item.id, q)}
                  />
                ))}
              </div>
            </section>

            <aside className="lg:col-span-4">
              <FadeInView delay={0.1}>
                <div className="border border-white/10 p-6">
                  <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Order summary
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">
                        Subtotal
                      </span>
                      <span className="font-inter text-xs text-secondary-foreground">
                        {formatter.format(subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">
                        Shipping
                      </span>
                      <span className="font-inter text-xs text-secondary-foreground">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 border border-white/10 font-inter text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                            Express
                          </span>
                          Free
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">
                        Est. duties/taxes
                      </span>
                      <span className="font-inter text-xs text-muted-foreground">
                        To be calculated
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">
                        Est. sales tax
                      </span>
                      <span className="font-inter text-xs text-muted-foreground">
                        To be calculated
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-xs text-muted-foreground uppercase tracking-wider">
                        Total
                      </span>
                      <span className="font-inter text-xs text-secondary-foreground">
                        {formatter.format(subtotal)}
                      </span>
                    </div>

                    <div className="mt-6 flex gap-2">
                      <input
                        className="flex-1 border border-white/10 bg-transparent px-3 py-3 font-inter text-xs text-foreground placeholder:text-muted-foreground"
                        placeholder="Promo Code"
                        aria-label="Promo code"
                      />
                      <button
                        type="button"
                        className="px-5 border border-white/10 font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors duration-500"
                        onClick={() => {}}
                      >
                        Apply
                      </button>
                    </div>

                    <button
                      type="button"
                      className="mt-6 w-full py-4 bg-foreground text-primary-foreground font-inter text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                      onClick={handleCheckout}
                      disabled={items.length === 0 || isCheckingOut}
                    >
                      {isCheckingOut ? 'Redirecting…' : 'Proceed to checkout'}
                    </button>

                    <div className="mt-8 space-y-3">
                      <button
                        type="button"
                        className="w-full text-left font-inter text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Need help?
                      </button>
                      <Link
                        to="/return-policy"
                        className="block w-full text-left font-inter text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Return policy
                      </Link>
                      <div className="pt-4 border-t border-white/5">
                        <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                          Payment methods
                        </p>
                        <p className="mt-3 font-inter text-xs text-muted-foreground leading-relaxed">
                          We accept all major credit/debit cards and PayPal.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="w-full text-left font-inter text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Secure payment
                      </button>
                      <button
                        type="button"
                        className="w-full text-left font-inter text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

