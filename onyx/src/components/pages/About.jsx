import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/Footer';
import FadeInView from '@/components/FadeInView';

const EDITORIAL_IMG = 'https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/45d694e97_generated_8f1d9e6f.png';
const PHILOSOPHY_IMG = 'https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/9403fcb2e_generated_a22ace57.png';

export default function About() {
  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12">
          <FadeInView>
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-muted-foreground">
              About
            </span>
          </FadeInView>
          <FadeInView delay={0.15}>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-foreground mt-6 tracking-tight max-w-4xl leading-none">
              The space between <span className="italic">silence</span> and form
            </h1>
          </FadeInView>
        </section>

        {/* Divider */}
        <div className="px-6 md:px-12">
          <div className="h-px bg-white/5" />
        </div>

        {/* Story section */}
        <section className="px-6 md:px-12 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <FadeInView>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={EDITORIAL_IMG}
                    alt="Constructed Silence studio detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeInView>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
              <FadeInView delay={0.2}>
                <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Origins
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl text-foreground mt-6 tracking-tight leading-tight">
                  Born from absence
                </h2>
                <p className="font-inter text-sm text-muted-foreground mt-8 leading-relaxed">
                  Constructed Silence was founded not from a desire to create more, but from the need 
                  to create less — with greater intention. Each collection is a study in 
                  reduction, an exercise in finding beauty through removal.
                </p>
                <p className="font-inter text-sm text-muted-foreground mt-6 leading-relaxed">
                  Our atelier operates at the intersection of sculptural form and human 
                  vulnerability. We build garments the way architects build shelter — 
                  with reverence for the body they protect and the space they inhabit.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative py-32 md:py-48">
          <div className="absolute inset-0">
            <img
              src={PHILOSOPHY_IMG}
              alt="Constructed Silence atmosphere"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
          </div>
          <div className="relative z-10 px-6 md:px-12 max-w-3xl">
            <FadeInView>
              <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Philosophy
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl text-foreground mt-8 tracking-tight leading-tight">
                We don't follow trends. We observe rituals.
              </h2>
              <p className="font-inter text-sm text-muted-foreground mt-10 leading-relaxed">
                Fashion as contemplation. Garments as architecture. Identity as the 
                space between what is worn and what is felt. Our work is not about 
                decoration — it is about the dignity of form.
              </p>
              <p className="font-playfair italic text-gold text-lg mt-12">
                "Constructed silence."
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 md:px-12 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                num: '01',
                title: 'Radical Reduction',
                text: 'We remove until only the essential remains. Every element must earn its place.',
              },
              {
                num: '02',
                title: 'Material Reverence',
                text: 'We work with fabrics that carry their own narrative — raw, honest, and enduring.',
              },
              {
                num: '03',
                title: 'Silent Identity',
                text: 'Our garments speak through their absence of noise. Identity is not displayed — it is inhabited.',
              },
            ].map((value, i) => (
              <FadeInView key={value.num} delay={i * 0.15}>
                <span className="font-inter text-xs text-muted-foreground tracking-wider">
                  {value.num}
                </span>
                <h3 className="font-playfair text-xl text-foreground mt-4">
                  {value.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground mt-4 leading-relaxed">
                  {value.text}
                </p>
              </FadeInView>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}