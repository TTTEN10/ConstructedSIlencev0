import React from "react";
import FadeInView from "@/components/FadeInView";

const PHILOSOPHY_IMG =
  "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/9403fcb2e_generated_a22ace57.png";

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={PHILOSOPHY_IMG}
          alt="Fashion runway atmosphere"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 md:py-48 flex flex-col items-center text-center">
        <FadeInView>
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Philosophy
          </span>
        </FadeInView>

        <FadeInView delay={0.2}>
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-foreground mt-10 tracking-tight leading-tight max-w-4xl">
            We believe in the <span className="italic">poetry</span> of restraint
          </h2>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="font-inter text-sm md:text-base text-muted-foreground mt-10 leading-relaxed max-w-xl">
            Not more, but less. Not louder, but quieter. Every seam is a decision. 
            Every absence, intentional. What remains is essential.
          </p>
        </FadeInView>

        <FadeInView delay={0.6}>
          <div className="mt-16 w-px h-16 bg-white/10" />
        </FadeInView>

        <FadeInView delay={0.7}>
          <p className="font-playfair italic text-gold text-lg mt-8">
            "A study in restraint."
          </p>
        </FadeInView>
      </div>
    </section>
  );
}