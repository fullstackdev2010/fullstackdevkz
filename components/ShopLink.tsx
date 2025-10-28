'use client';

import { useCartStore } from '@/lib/store/cart';
import Link from 'next/link';

export function ShopLink() {
  const { items } = useCartStore();

  return (
    <Link
      href="/shop"
      className="relative inline-flex items-center group hover:text-white transition"
    >
      <span className="font-medium">Shop</span>

      {/* underline bar */}
      <span
        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-fuchsia-400
                   transition-all duration-300 group-hover:w-full"
      />

      {/* badge */}
      {items.length > 0 && (
        <span className="absolute -top-2 -right-3 text-xs bg-purple-600 text-white rounded-full px-1.5 py-0.5">
          {items.length}
        </span>
      )}
    </Link>
  );
}
