import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem({ item, onRemove, onSetQuantity }) {
  return (
    <div className="flex items-start justify-between gap-6 border border-white/10 p-4">
      <div className="min-w-0">
        <Link to={`/product?id=${encodeURIComponent(item.productId)}`} className="font-inter text-sm text-foreground hover:underline">
          {item.title}
        </Link>
        {item.variantTitle ? (
          <div className="mt-1 font-inter text-xs text-muted-foreground">{item.variantTitle}</div>
        ) : null}
        <div className="mt-3 flex items-center gap-3">
          <label className="font-inter text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Qty
          </label>
          <input
            inputMode="numeric"
            className="w-16 border border-white/10 bg-transparent px-3 py-1 font-inter text-xs text-foreground"
            value={item.quantity}
            onChange={(e) => onSetQuantity(Number(e.target.value))}
          />
          <button
            type="button"
            className="font-inter text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <div className="font-inter text-xs text-muted-foreground">
          {typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : '$0'}
        </div>
      </div>
    </div>
  );
}

