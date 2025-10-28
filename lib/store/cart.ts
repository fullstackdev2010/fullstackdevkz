
import { create } from 'zustand';
import { Track } from '@/lib/tracks';

interface CartStore {
  items: Track[];
  addToCart: (track: Track) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (track) =>
    set((state) =>
      state.items.some((t) => t.id === track.id)
        ? state
        : { items: [...state.items, track] }
    ),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((t) => t.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));
