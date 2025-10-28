// pages/api/commerce/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { Webhook } from 'coinbase-commerce-node'
import getRawBody from 'raw-body'

// turn off automatic body parsing
export const config = { api: { bodyParser: false } }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const signature = req.headers['x-cc-webhook-signature'] as string
  const raw = await getRawBody(req)

  let event
  try {
    event = Webhook.verifyEvent(raw, signature, process.env.COINBASE_COMMERCE_WEBHOOK_SECRET!)
  } catch {
    return res.status(400).send('Webhook signature mismatch')
  }

  // Only act on confirmed charges
  if (event.type === 'charge:confirmed') {
    const charge = event.data
    const items: { id: string; title: string }[] = JSON.parse(charge.metadata.items)
    // TODO: save to your database:
    //    Order.create({ chargeId: charge.id, items, paidAt: charge.timed_events.confirmed_at })
  }

  res.status(200).send('ok')
}
