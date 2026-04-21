# Repo syntax tree guide (keep updated)

This file is the **authoritative** tree guide for this repo.

## Rule

After **each** terminal command you run (scaffold/install/dev/build/test/lint/generate/deploy/etc.), **update the tree below** to reflect the repo’s current structure.

## Target structure (guide)

```text
luxury-fashion-web/
│
├── src/
│   └── app/                      # Next.js App Router
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
│       │
│       ├── (marketing)/
│       │   ├── collections/
│       │   │   └── page.tsx
│       │   ├── editorial/
│       │   │   └── page.tsx
│       │   └── about/
│       │       └── page.tsx
│       │
│       ├── product/
│       │   └── [slug]/
│       │       └── page.tsx
│       │
│       ├── cart/
│       │   └── page.tsx
│       │
│       ├── checkout/
│       │   └── page.tsx
│       │
│       ├── success/
│       │   └── page.tsx
│       │
│       └── api/
│           └── products/
│               └── route.ts
│           └── stripe/
│               ├── checkout/
│               │   └── route.ts
│               └── webhook/
│                   └── route.ts
│
├── components/                   # Reusable UI components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── onyx/                     # Onyx theme sections (ported)
│   ├── product/
│   │   └── AddToCart.tsx
│   ├── cart/
│   │   └── CartItem.tsx
│   └── animation/
│       ├── FadeIn.tsx
│       ├── Parallax.tsx
│       └── Reveal.tsx
│
├── lib/                          # Core logic & integrations
│   └── stripe/
│       ├── helpers.ts
│       └── server.ts
│   ├── products.ts
│   └── validations.ts
│
├── store/                        # State management
│   └── cartStore.ts
├── hooks/                        # Custom React hooks
│   └── useCart.ts
├── styles/
├── config/
│   └── env.ts
├── types/
│   └── product.ts
│   └── cart.ts
├── scripts/
│
├── public/
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

workspace root (this repo)

```text
ecom/
├── .cursor/
├── documentation/
├── onyx/
│   └── (Vite app)                  # active
└── project1/
```

## Notes (current state)

- `luxury-fashion-web/` now uses **Onyx** design tokens (dark palette, gold accent, Playfair + Inter) via `src/app/globals.css`.
- `components/UI/` contains many **importable `.jsx` UI primitives**.
- Onyx-inspired sections were added under `components/onyx/` and are used on the homepage.

