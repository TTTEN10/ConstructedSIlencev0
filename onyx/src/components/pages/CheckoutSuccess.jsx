import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import FadeInView from '@/components/FadeInView';

export default function CheckoutSuccess() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sessionId = params.get('session_id');

  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-0 px-6 md:px-12 py-16">
        <FadeInView>
          <h1 className="font-playfair text-3xl md:text-4xl text-foreground tracking-tight">
            Payment complete
          </h1>
        </FadeInView>

        <FadeInView delay={0.08}>
          <div className="mt-8 border border-white/10 p-10 max-w-2xl">
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Thank you. Your order is confirmed.
            </p>
            {sessionId ? (
              <p className="mt-4 font-inter text-xs text-muted-foreground">
                Session: <span className="text-foreground">{sessionId}</span>
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="inline-flex py-4 px-6 bg-foreground text-primary-foreground font-inter text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-500"
              >
                Continue shopping
              </Link>
              <Link
                to="/cart"
                className="inline-flex py-4 px-6 border border-white/10 text-foreground font-inter text-xs tracking-[0.2em] uppercase hover:border-white/20 transition-colors duration-500"
              >
                Back to cart
              </Link>
            </div>
          </div>
        </FadeInView>
      </main>
      <Footer />
    </div>
  );
}

