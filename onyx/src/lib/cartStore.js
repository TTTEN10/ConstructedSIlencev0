import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function clampQuantity(quantity) {
  if (!Number.isFinite(quantity)) return 1;
  return Math.max(1, Math.min(99, Math.floor(quantity)));
}

export const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, quantity = 1) => {
        const q = clampQuantity(quantity);
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, quantity: clampQuantity(i.quantity + q) } : i,
            ),
          });
          return;
        }
        set({ items: [...get().items, { ...item, quantity: q }] });
      },

      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),

      setQuantity: (id, quantity) => {
        const q = clampQuantity(quantity);
        set({
          items: get().items.map((i) => (i.id === id ? { ...i, quantity: q } : i)),
        });
      },

      clear: () => set({ items: [] }),
    }),
    {
      name: 'onyx.cart.v1',
      version: 1,
    },
  ),
);

