# Roadmap — luxury fashion web

## 🧭 PHASE 0 — STRATEGIC FOUNDATION (DON’T SKIP)

Before touching code, lock these:

1. Product & catalog definition  
Number of SKUs (10 vs 500 changes architecture)  
Variants (size, color, limited editions)  
Inventory model (finite drops vs continuous stock)

2. Experience definition  
Is it:  
“Gallery with checkout”  
or full e-commerce?  
Define:  
browsing depth  
friction level (luxury = less but intentional)

3. Legal / business  
Terms & conditions  
Refund policy  
GDPR compliance (critical in France)

Deploy early (even ugly)

### Technical decisions to lock (Phase 0)

- **Catalog source of truth**: Static (local JSON) → CMS (Sanity/Contentful) → headless commerce (later).
- **SKU scale**:
  - **≤ 50 SKUs**: can start with simple API route + static caching.
  - **50–500+ SKUs**: add search/filter strategy, pagination, caching, image pipeline, and webhooks/invalidation.
- **Variant model**: Decide if Stripe price is per variant, per product, or per “inventory item”.
- **Inventory strategy**:
  - **Finite drops**: strict stock checks + “sold out” UX + low-latency updates.
  - **Continuous stock**: backorder rules + fulfillment states.
- **Checkout mode**: Stripe Checkout (fastest) vs Payment Element (more control).
- **Compliance**:
  - Cookie consent + analytics gating (if any).
  - Data retention policy and “delete my data” path.

### Deliverables (Phase 0)

- Written product rules (SKUs/variants/inventory) + UX positioning (“gallery with checkout” vs full ecom).
- Stripe account created, tax/shipping approach decided, webhook endpoints planned.
- Legal pages drafts ready to publish (even placeholder).
- A deployment target chosen (Vercel recommended for Next.js).

## 🧱 PHASE 1 — PROJECT SETUP & BASE ARCHITECTURE

### Goal

Stand up the Next.js (App Router) TypeScript app with Tailwind, strict env validation, and the repo structure aligned with separation of concerns.

### Implementation checklist

- **Scaffold**: Next.js App Router + TypeScript + Tailwind.
- **Folder boundaries**:
  - `components/` UI only
  - `lib/` logic + integrations
  - `app/api/` backend endpoints
- **Env validation**: create `config/env.ts` using Zod; fail fast on missing Stripe keys.
- **Basic layout**: `app/layout.tsx`, `app/globals.css`, `components/layout/Navbar.tsx`, `Footer.tsx`.
- **State**: decide **Zustand** (recommended) or React Context; create `store/` and `hooks/`.

### Definition of done

- `pnpm dev` (or `npm run dev`) starts cleanly.
- One deployed environment exists (preview or prod), even with placeholder pages.
- `documentation/REPO_SYNTAX_TREE.md` updated to reflect reality.

## 🗂️ PHASE 2 — CATALOG DATA LAYER (PRODUCTS, COLLECTIONS, EDITORIAL)

### Goal

Make product pages real with a stable data contract and scalable fetching strategy.

### Implementation options

- **Option A (fast start)**: local `lib/products/*.ts` + `app/api/products/route.ts`.
- **Option B (CMS)**: Sanity/Contentful integration under `lib/cms/` with typed mappers into `types/product.ts`.

### Technical instructions

- Define `types/product.ts` (product, variant, media, collection).
- Add `lib/validations.ts` (Zod schemas) matching the types for runtime safety.
- Implement `app/product/[slug]/page.tsx` using Server Components; keep UI in `components/product/*`.
- Add caching strategy:
  - `fetch(..., { next: { revalidate: N } })` for semi-static catalog
  - On-demand revalidation if CMS is used (later)

### Definition of done

- Homepage/collections/editorial pages render from the same data contract.
- Product detail page supports variants and “sold out” states.

## 🛒 PHASE 3 — CART & CLIENT-SIDE STATE

### Goal

Create a robust cart model that supports variants, quantities, and prices, and can feed Stripe checkout reliably.

### Technical instructions

- Use **Zustand** in `store/cartStore.ts` (or Context if explicitly chosen).
- Cart item must include: `productId`, `variantId`, `quantity`, `unitAmount`, `currency`, `name`, `image`, `stripePriceId` (or mapping key).
- Persist cart to `localStorage` (client-only) with versioning/migrations.
- Implement UI:
  - `components/cart/CartDrawer.tsx`, `CartItem.tsx`
  - `app/cart/page.tsx` (review & edit)

### Definition of done

- Cart survives refresh.
- Variant/quantity edits are correct and validated (no negative quantities).

## 💳 PHASE 4 — STRIPE CHECKOUT (API + WEBHOOKS)

### Goal

Ship payments end-to-end with Stripe Checkout + webhook confirmation.

### Technical instructions

- **Server SDK** in `lib/stripe/server.ts`; never expose secret key client-side.
- Implement:
  - `app/api/stripe/checkout/route.ts` to create a Checkout Session
  - `app/api/stripe/webhook/route.ts` to verify signature + process events
- Add pages:
  - `app/checkout/page.tsx` (CTA that calls checkout API)
  - `app/success/page.tsx` (reads session id, shows confirmation)
- Webhook processing should be **idempotent** (store processed event ids if you add a DB later).

### Definition of done

- Test mode checkout works.
- Webhook verifies signatures and handles `checkout.session.completed`.

## ✨ PHASE 5 — MOTION, MICRO-INTERACTIONS, LUXURY POLISH

### Goal

Add intentional animation without hurting performance.

### Technical instructions

- Prefer **Framer Motion** for UI transitions; use **GSAP** for complex timelines/parallax.
- Keep animation components in `components/animation/*`.
- Lazy-load heavy animation code on pages that need it.

### Definition of done

- Motion feels consistent and does not block interaction.
- Lighthouse/INP remains healthy on key pages.

## 🚀 PHASE 6 — PERFORMANCE, EDGE-READINESS, SEO, LAUNCH OPS

### Goal

Make it fast, indexable, and operable.

### Technical instructions

- Use Server Components for catalog rendering; minimize client JS.
- Optimize media: `next/image`, responsive sizes, modern formats.
- Add SEO metadata in App Router (per-page `generateMetadata`).
- Make APIs edge-ready where appropriate (avoid Node-only dependencies in edge routes).
- Observability: basic logging + error reporting plan.

### Definition of done

- Core pages pass performance budget targets.
- Production deploy checklist exists (env vars, webhook secrets, domains, redirects).

