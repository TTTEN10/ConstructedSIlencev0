import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_IMAGE = 'https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/8759c02ae_generated_174a6a4f.png';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: loaded ? 0.7 : 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={HERO_IMAGE}
          alt="Avant-garde fashion"
          className="w-full h-full object-cover object-top"
          onLoad={() => setLoaded(true)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-8xl text-foreground tracking-tight leading-none">
            Silence.
            <br />
            <span className="italic">Form.</span>
            <br />
            Identity.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12"
        >
          <Link
            to="/collections"
            className="inline-flex items-center gap-4 group"
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-700">
              Explore
            </span>
            <span className="w-12 h-px bg-muted-foreground group-hover:w-20 group-hover:bg-foreground transition-all duration-700" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 right-6 md:right-12"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-muted-foreground rotate-90 origin-center translate-y-4">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-muted-foreground mt-6"
          />
        </div>
      </motion.div>
    </section>
  );
}