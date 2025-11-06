"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

type Chain = 'eth' | 'tron';

export default function CheckoutDemo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState<any | null>(null);
  const [status, setStatus] = useState<'idle'|'pending'|'confirmed'>('idle');
  const intervalRef = useRef<number | null>(null);

  const addressUri = useMemo(() => {
    if (!intent) return '';
    if (intent.chain === 'eth') {
      return `ethereum:${intent.to}?value=${intent.amount}`;
    }
    return `tron:${intent.to}?amount=${intent.amount}`;
  }, [intent]);

  function reset() {
    setIntent(null);
    setStatus('idle');
  }

  async function start(chain: Chain) {
    setLoading(true);
    try {
      const res = await fetch('/api/mock-intent', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ chain, asset: chain === 'eth' ? 'ETH' : 'TRX', amount: chain === 'eth' ? '0.001' : '25' }),
      });
      const data = await res.json();
      setIntent(data);
      setStatus('pending');
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (status !== 'pending' || !intent) return;
    const tick = async () => {
      const r = await fetch(`/api/mock-status?id=${intent.id}`);
      const j = await r.json();
      if (j?.status === 'confirmed') {
        setStatus('confirmed');
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    intervalRef.current = window.setInterval(tick, 1200);
    return () => { if (intervalRef.current) window.clearInterval(intervalRef.current); };
  }, [status, intent]);

  return (
    <div className="glass rounded-2xl border p-5">
      <div className="flex items-center justify-between gap-4">
      </div>

      <Modal open={open} onClose={() => { setOpen(false); reset(); }} title="Pay with crypto (demo)"
        footer={<>
          {status === 'confirmed'
            ? <Button variant="glow" size="sm" onClick={() => { setOpen(false); reset(); }}>Done</Button>
            : <Button variant="outline" size="sm" onClick={() => { setOpen(false); reset(); }}>Cancel</Button>}
        </>}
      >
        {!intent && <div className="text-sm text-[var(--muted)]">Preparing intent…</div>}
        {intent && (
          <div className="space-y-3">
            <div className="text-sm">Chain: <span className="text-[var(--muted)] uppercase">{intent.chain}</span></div>
            <div className="text-sm">Asset: <span className="text-[var(--muted)]">{intent.asset}</span></div>
            <div className="text-sm">Amount: <span className="text-[var(--muted)]">{intent.amount}</span></div>
            <div className="text-sm break-all">To: <span className="text-[var(--muted)]">{intent.to}</span></div>
            <div className="text-xs text-[var(--muted)]">URI: {addressUri}</div>
            <div className="mt-3 rounded-xl border border-white/15 p-3 text-center">
              {status === 'pending' && <span>Waiting for confirmation…</span>}
              {status === 'confirmed' && <span className="font-medium">Payment confirmed ✓</span>}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
