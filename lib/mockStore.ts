type Intent = {
  id: string;
  chain: 'eth' | 'tron';
  asset: string;
  amount: string;
  to: string;
  createdAt: number;
  status: 'pending' | 'confirmed';
};

const store = new Map<string, Intent>();

export function createIntent(data: Omit<Intent, 'id'|'createdAt'|'status'>): Intent {
  const id = Math.random().toString(36).slice(2);
  const intent: Intent = { id, createdAt: Date.now(), status: 'pending', ...data };
  store.set(id, intent);
  return intent;
}

export function getIntent(id: string): Intent | undefined {
  const it = store.get(id);
  if (!it) return undefined;
  // Auto-confirm after 6 seconds for demo
  if (Date.now() - it.createdAt > 6000 && it.status !== 'confirmed') {
    it.status = 'confirmed';
    store.set(id, it);
  }
  return it;
}
