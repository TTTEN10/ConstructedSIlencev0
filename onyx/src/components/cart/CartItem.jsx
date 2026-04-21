import React from 'react';
import { Link } from 'react-router-dom';
import { X, Pencil } from 'lucide-react';

export default function CartItem({ item, onRemove, onSetQuantity }) {
  return (
    <div className="border border-white/10">
      <div className="flex items-start gap-5 p-5">
        <div className="w-20 h-28 bg-white/5 overflow-hidden shrink-0">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <Link
                to={`/product?id=${encodeURIComponent(item.productId)}`}
                className="block font-inter text-sm text-foreground hover:underline truncate"
              >
                {item.title}
              </Link>
              {item.variantTitle ? (
                <div className="mt-1 font-inter text-xs text-muted-foreground">
                  {item.variantTitle}
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                to={`/product?id=${encodeURIComponent(item.productId)}`}
                className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
              <button
                type="button"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Remove item"
                onClick={onRemove}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <label className="font-inter text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Quantity
              </label>
              <input
                inputMode="numeric"
                className="w-16 border border-white/10 bg-transparent px-3 py-1.5 font-inter text-xs text-foreground"
                value={item.quantity}
                onChange={(e) => onSetQuantity(Number(e.target.value))}
              />
            </div>

            <div className="shrink-0 text-right">
              <div className="font-inter text-xs text-muted-foreground">
                {typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : '$0'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

