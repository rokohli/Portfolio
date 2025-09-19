# Rohan — Next.js Portfolio

Modern, accessible portfolio using **Next.js (App Router)** + **TypeScript** + **Tailwind**. Filled with resume content.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel)
```bash
npm i -g vercel
vercel
```
Connected GitHub repo to Vercel for auto-deploys.

## Customize
- Replace `public/assets/headshot.jpg` with your image (optimize ≤ 200 KB).
- The resume is at `public/assets/Rohan_Kohli_Resume.pdf`.
- Update links for GitHub/portfolio in `app/page.tsx`.
- Update `metadataBase` and OG fields in `app/layout.tsx` to your domain.
