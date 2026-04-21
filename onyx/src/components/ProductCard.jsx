import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, className = '' }) {
  return (
    <Link
      to={`/product?id=${product.id}`}
      className={`group block ${className}`}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-700" />
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <div>
          <h3 className="font-playfair text-base md:text-lg text-foreground group-hover:text-gold transition-colors duration-500">
            {product.name}
          </h3>
          <p className="font-inter text-xs text-muted-foreground mt-1 capitalize tracking-wider">
            {product.category}
          </p>
        </div>
        <span className="font-inter text-sm text-muted-foreground">
          ${product.price?.toLocaleString()}
        </span>
      </div>
    </Link>
  );
}