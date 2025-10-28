// pages/api/commerce/charge.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { Charge } from 'coinbase-commerce-node'

Charge.init(process.env.COINBASE_COMMERCE_API_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { items, currency, amount } = req.body as {
    items: { id: string; title: string }[]
    currency: string
    amount: string
  }

  try {
    const charge = await Charge.create({
      name: 'Verse-n-Music order',
      description: items.map(i => i.title).join(', '),
      pricing_type: 'fixed_price',
      local_price: { amount, currency },
      metadata: { items: JSON.stringify(items) },
      redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop?status=paid&chargeId=${charge.id}`,
      cancel_url:  `${process.env.NEXT_PUBLIC_BASE_URL}/shop?status=cancelled`,
    })

    res.status(200).json({ hostedUrl: charge.hosted_url, chargeId: charge.id })
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}
