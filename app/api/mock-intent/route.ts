import { NextResponse } from 'next/server';
import { createIntent } from '@/lib/mockStore';

export async function POST(req: Request) {
  const body = await req.json();
  const { chain = 'eth', asset = 'ETH', amount = '0.001', to } = body || {};
  const toAddress = to || (chain === 'eth' ? '0xDEMOeE...eEDEMO' : 'TDEMO...DEMO');
  const intent = createIntent({ chain, asset, amount, to: toAddress });
  return NextResponse.json(intent);
}
