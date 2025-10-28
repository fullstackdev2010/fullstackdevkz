'use client';

import { useState } from 'react';

const SUPPORTED_CURRENCIES = [
  'BTC','ETH','SOL','BNB','XRP','USDT','USDC','DOGE',
] as const;
type Currency = typeof SUPPORTED_CURRENCIES[number];

export default function CryptoPaymentOptions() {
  const [amount, setAmount] = useState<string>('');
  const [loadingCurrency, setLoadingCurrency] = useState<Currency | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handlePayment(currency: Currency) {
    // validate
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    setError(null);
    setLoadingCurrency(currency);

    try {
      const resp = await fetch('/api/commerce/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [],          // empty = a “donation” flow
          currency,           // e.g. 'BTC', 'ETH', etc.
          amount: amount,     // USD amount as string
        }),
      });

      if (!resp.ok) {
        const data = await resp.json();
        throw new Error(data.error || resp.statusText);
      }

      const { hostedUrl } = await resp.json();
      window.location.href = hostedUrl;
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'Payment failed.');
      setLoadingCurrency(null);
    }
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl text-pink-200 mb-4 text-center">
        Crypto Payment Options
      </h2>
      <p className="text-white/70 text-center mb-6 max-w-2xl mx-auto">
      You can support my work or purchase a custom creation using major cryptocurrencies.
        Choose between Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Binance Coin (BNB), XRP (XRP),
        Tether (USDT), USDC, Dogecoin. Enter an amount (USD) below and choose your currency.
      </p>

      {/* Amount input */}
      <div className="flex justify-center mb-4">
        <input
          type="number"
          min="0"
          step="any"
          placeholder="Amount (USD)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          disabled={!!loadingCurrency}
          className="w-48 px-4 py-2 rounded border border-gray-300 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50"
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      {/* Currency buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        {SUPPORTED_CURRENCIES.map((c) => (
          <button
            key={c}
            onClick={() => handlePayment(c)}
            disabled={!!loadingCurrency}
            className={`px-4 py-2 rounded text-white transition ${
              loadingCurrency === c
                ? 'bg-purple-600 opacity-50 cursor-wait'
                : 'bg-[#1C1B33] border border-pink-300/30 hover:bg-pink-500/20'
            }`}
          >
            {loadingCurrency === c ? 'Redirecting…' : `Pay with ${c}`}
          </button>
        ))}
      </div>
    </div>
  );
}
