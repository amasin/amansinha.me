# amansinha.me

Professional product-management portfolio for Aman Sinha. The site presents measurable platform impact, selected case studies, product principles, career history, credentials, and a printable résumé.

## What is included

- Outcome-led portfolio homepage
- Four product case studies with route-specific social metadata
- Detailed, print-friendly résumé
- Responsive and accessible layout
- Open Graph image, sitemap, robots metadata, and Person structured data
- Cloudflare Worker-compatible build through vinext and the Cloudflare Vite plugin

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

## Deploy to Cloudflare Workers

The repository uses the Cloudflare Vite plugin. Its production build writes the Worker bundle, browser assets, and generated deployment configuration under `dist/`.

From a connected Cloudflare account:

```bash
npm run deploy
```

For Workers Builds in the Cloudflare dashboard, connect this GitHub repository and use:

- Production branch: `main`
- Build command: `npm ci && npm run build`
- Deploy command: `npx wrangler deploy`

After the first deployment, attach `amansinha.me` as the Worker custom domain in Cloudflare.

## Main content locations

- `app/page.tsx` — portfolio homepage
- `app/work/case-studies.ts` — authoritative case-study content
- `app/resume/page.tsx` — résumé
- `app/globals.css` — visual system and responsive/print styles
- `public/og.png` — social preview image

