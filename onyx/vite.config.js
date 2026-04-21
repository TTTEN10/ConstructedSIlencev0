import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

function stripeCheckoutDevApiPlugin({ stripeSecretKey }) {
  return {
    name: 'stripe-checkout-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/stripe/checkout', async (req, res) => {
        try {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Method not allowed' }))
            return
          }

          if (!stripeSecretKey) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing STRIPE_SECRET_KEY' }))
            return
          }

          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const bodyRaw = Buffer.concat(chunks).toString('utf8') || '{}'
          const body = JSON.parse(bodyRaw)
          const items = Array.isArray(body?.items) ? body.items : []
          const currency = typeof body?.currency === 'string' ? body.currency : 'USD'

          if (items.length === 0) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Cart is empty' }))
            return
          }

          const { default: Stripe } = await import('stripe')
          const stripe = new Stripe(stripeSecretKey, { apiVersion: '2026-01-28.clover' })

          const origin = req.headers.origin ?? 'http://localhost:3000'
          const line_items = items.map((item) => {
            const name = String(item?.name ?? 'Item')
            const quantity = Number(item?.quantity ?? 1)
            const unitAmount = Number(item?.price ?? 0)
            const unit_amount = Math.max(0, Math.round(unitAmount * 100))

            return {
              quantity: Math.max(1, Number.isFinite(quantity) ? quantity : 1),
              price_data: {
                currency,
                unit_amount,
                product_data: { name },
              },
            }
          })

          const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items,
            success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cart`,
          })

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ url: session.url }))
        } catch (e) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: e?.message ?? 'Stripe checkout failed' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
  logLevel: 'info',
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    stripeCheckoutDevApiPlugin({ stripeSecretKey: env.STRIPE_SECRET_KEY }),
    react(),
  ]
}
});