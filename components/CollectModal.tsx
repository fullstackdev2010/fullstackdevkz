"use client";

import { useCollectModal } from "@/hooks/useCollectModal";
import { Dialog } from "@headlessui/react";
import { useCartStore } from '@/lib/store/cart';
import { tracks } from '@/lib/tracks'; // so we can find the track by title

export default function CollectModal() {
  const { isOpen, close, trackTitle } = useCollectModal();
  const { addToCart } = useCartStore();

  const handleConfirm = () => {
    const track = tracks.find(t => t.title === trackTitle); 
    if (track) {
      addToCart(track);
    }
    close();
    alert("Crypto Collect coming soon...");
  };

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-[#1C1B33] text-white p-6 rounded-xl max-w-md w-full shadow-lg border border-pink-400/30">
          <Dialog.Title className="text-xl font-bold mb-4 text-fuchsia-400">💰 Collect Track</Dialog.Title>
          <p className="mb-4 text-white/80">
            Would you like to collect <strong>{trackTitle}</strong>?<br />
            This feature will support crypto payment.
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={close}
              className="px-4 py-2 rounded bg-pink-600 hover:bg-pink-700 transition text-white"
            >
              Close
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition"
            >
              Confirm
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
