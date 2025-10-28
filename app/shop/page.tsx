'use client';

import { useState } from 'react';
import { tracks } from '@/lib/tracks';
import { poems } from '@/lib/poems';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { PayModal } from '@/components/PayModal';
import Footer from '@/components/Footer';

export default function ShopPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { items: cartItems, addToCart, removeFromCart, clearCart } = useCartStore();

  const isInCart = (id: string) => cartItems.some((t) => t.id === id);

  // ✅ Combine tracks and poems into one shopItems array
  const shopItems = [...poems, ...tracks];

  // Sum up USD prices from your cartItems
  const totalUsd = cartItems.reduce((sum, x) => sum + x.priceUsd, 0);

  return (
    <div className="p-6 space-y-8">
      <header className="flex items-center justify-between pb-4 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-purple-700">Audio & Verses Shop</h1>
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-purple-600" />
          <span className="text-sm text-gray-700">Wallet: 0xMocked</span>
        </div>
      </header>

      {/* ✅ Success banner */}
      {paymentSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded shadow text-sm">
          ✅ Payment received! Thank you.
        </div>
      )}

      <p className="text-lg italic text-gray-400">
        Collect melodies and verses that echo your soul.
      </p>

      {/* 🛒 Cart Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-700">🛒 Your Collection</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items collected yet.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="border p-4 rounded-lg bg-gradient-to-br from-white via-fuchsia-50 to-purple-100 shadow transition"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 2,
                      delay: index * 0.1,
                    },
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <div className="text-sm text-purple-600">{item.priceUsd} USD</div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* 💸 Pay All Button */}
            <div className="flex justify-end pt-4">
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
              >
                Pay All ({cartItems.length} item{cartItems.length > 1 ? 's' : ''})
                Pay All (${totalUsd.toFixed(2)})
              </Button>
            </div>
          </>
        )}
      </section>

      {/* 🎵 Track and 📖 Poem Catalog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t mt-6">
        {shopItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg p-4 bg-gradient-to-br from-white via-fuchsia-50 to-purple-100 hover:shadow-2xl transition duration-300">
              <CardContent className="space-y-3">
                <h2 className="text-xl font-semibold">{item.title}</h2>

                {/* 🎵 Audio player OR 📖 PDF preview */}
                {item.filename.endsWith('.mp3') ? (
                  <audio controls className="w-full rounded-lg">
                    <source src={`/audio/${item.filename}`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <div className="w-full bg-purple-100 text-purple-700 p-4 rounded-lg text-sm font-serif">
                    📖 PDF Document
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-md text-purple-700">{item.priceUsd} USD</span>
                  {isInCart(item.id) ? (
                    <span className="text-gray-500 text-sm">In Cart</span>
                  ) : (
                    <Button
                      onClick={() => addToCart(item)}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Collect
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 🧾 Payment Modal */}
      <PayModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        items={cartItems}                       // ← pass the cart items
        total={totalUsd}                        // ← pass your USD total here
        onSuccess={() => {
          clearCart();
          setPaymentSuccess(true);
          setTimeout(() => setPaymentSuccess(false), 5000);
        }}
      />
      <Footer/>
    </div>
    
  );
}
