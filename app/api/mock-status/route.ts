import { NextResponse } from 'next/server';
import { getIntent } from '@/lib/mockStore';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';
  const it = getIntent(id);
  if (!it) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  return NextResponse.json({ ok: true, status: it.status });
}
