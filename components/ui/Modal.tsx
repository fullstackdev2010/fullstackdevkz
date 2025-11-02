"use client";
import { useEffect } from 'react';
import clsx from 'clsx';

export function Modal({ open, onClose, title, children, footer }: {
  open: boolean; onClose: () => void; title?: string; children?: React.ReactNode; footer?: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={clsx(
        'relative z-10 w-[92vw] max-w-lg rounded-2xl glass border p-5 shadow-[var(--shadow-lg)]'
      )}>
        {title && <div className="text-lg font-medium">{title}</div>}
        <div className="mt-3">{children}</div>
        {footer && <div className="mt-5 flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
}
