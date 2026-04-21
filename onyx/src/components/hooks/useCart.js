import { useCartStore } from '@/lib/cartStore';

export function useCart() {
  const items = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const clear = useCartStore((s) => s.clear);

  const subtotal = items.reduce((acc, item) => acc + (item.price ?? 0) * item.quantity, 0);
  const currency = items[0]?.currency ?? 'USD';

  return { items, addItem, removeItem, setQuantity, clear, subtotal, currency };
}

