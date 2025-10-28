'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';

interface ChargeItem {
  id: string;
  title: string;
}

interface PayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  items: ChargeItem[];
  total: number; // total price in your chosen unit (e.g. ETH-equivalent or just count)
}

export function PayModal({
  isOpen,
  onClose,
  onSuccess,
  items,
  total,
}: PayModalProps) {
  const [currency, setCurrency] = useState<'BTC'|'ETH'|'SOL'|'BNB'|'XRP'|'USDT'|'USDC'|'DOGE'>('BTC');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch('/api/commerce/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          currency,
          amount: total.toString(),
        }),
      });
      if (!resp.ok) {
        throw new Error((await resp.json()).error || resp.statusText);
      }
      const { hostedUrl } = await resp.json();
      // redirect the user to Coinbase's hosted checkout
      window.location.href = hostedUrl;
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'Checkout failed');
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

        <div className="relative z-10 bg-white rounded-xl p-6 max-w-md w-full space-y-4 shadow-xl">
          <Dialog.Title className="text-xl font-semibold text-purple-700">
            Checkout
          </Dialog.Title>

          {/* Currency selector */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Select currency</label>
            <select
              value={currency}
              onChange={e => setCurrency(e.target.value as any)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            >
              {['BTC','ETH','SOL','BNB','XRP','USDT','USDC','DOGE'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Summary */}
          <p className="text-sm text-gray-800">
            You’re about to pay <strong>{total} USD</strong> (in {currency}) for{" "}
            {items.length} item{items.length > 1 ? 's' : ''}.
          </p>

          {error && (
            <div className="text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}

          <div className="flex space-x-2">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded disabled:opacity-50"
            >
              {loading ? 'Redirecting…' : `Pay with ${currency}`}
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
