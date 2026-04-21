import React from "react";
import FadeInView from "@/components/FadeInView";

const EDITORIAL_IMG =
  "https://media.base44.com/images/public/69e6667de9328af8a3eca2c5/45d694e97_generated_8f1d9e6f.png";

export default function EditorialSection() {
  return (
    <section className="relative py-24 md:py-40 bg-card">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">
        <div className="md:col-span-5 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
          <FadeInView>
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Editorial
            </span>
          </FadeInView>

          <FadeInView delay={0.15}>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mt-8 tracking-tight leading-tight">
              The quiet architecture of cloth
            </h2>
          </FadeInView>

          <FadeInView delay={0.3}>
            <p className="font-inter text-sm text-muted-foreground mt-8 leading-relaxed max-w-md">
              Each piece begins as a meditation on form — a dialogue between body and textile, between
              structure and surrender. We do not design for the moment. We design for the silence
              between moments.
            </p>
          </FadeInView>

          <FadeInView delay={0.45}>
            <p className="font-playfair text-lg italic text-gold mt-12">"Form beyond function."</p>
          </FadeInView>
        </div>

        <div className="md:col-span-7 relative overflow-hidden">
          <FadeInView className="h-full">
            <div className="h-[60vh] md:h-full">
              <img
                src={EDITORIAL_IMG}
                alt="Editorial image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background/50 via-background/10 to-transparent" />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

