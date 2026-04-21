import React from "react";
import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";

const COLLECTION_IMG_1 =
  "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/9c58b66ec_generated_472f3f88.png";
const COLLECTION_IMG_2 =
  "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/69fe6db27_generated_1d3f424e.png";

export default function CollectionHighlight() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 bg-background">
      <FadeInView>
        <div className="flex items-baseline justify-between mb-16 md:mb-24">
          <div>
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
              SS26 Collection
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-foreground mt-4 tracking-tight">
              Constructed Silence
            </h2>
          </div>
          <Link to="/collections" className="hidden md:flex items-center gap-4 group">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              View All
            </span>
            <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-500" />
          </Link>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
        <FadeInView className="md:col-span-7" delay={0.1}>
          <Link to="/collections" className="group block">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6] bg-card">
              <img
                src={COLLECTION_IMG_1}
                alt="Collection image one"
                className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Atelier Cut
                </span>
                <p className="mt-2 font-playfair text-2xl text-foreground">Silence as structure</p>
              </div>
            </div>
          </Link>
        </FadeInView>

        <FadeInView className="md:col-span-5" delay={0.2}>
          <Link to="/collections" className="group block h-full">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-card h-full">
              <img
                src={COLLECTION_IMG_2}
                alt="Collection image two"
                className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Reduced Volume
                </span>
                <p className="mt-2 font-playfair text-2xl text-foreground">Form beyond function</p>
              </div>
            </div>
          </Link>
        </FadeInView>
      </div>

      <div className="mt-12 md:hidden">
        <Link to="/collections" className="inline-flex items-center gap-4 group">
          <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500">
            View All
          </span>
          <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-500" />
        </Link>
      </div>
    </section>
  );
}
 