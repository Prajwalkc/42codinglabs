# 42 Coding Labs website

Marketing site for 42 Coding Labs, a software studio in Kathmandu. Next.js 14 (App Router), TypeScript and Tailwind, exported as a static site and deployed on Vercel from `main`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
```

## Contact form

The form posts to Formspree. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_ENDPOINT`; on Vercel add the same variable under Project Settings > Environment Variables. Without it, the form shows a "not connected yet" message and sends nothing.

## Structure

- `app/layout.tsx`: Poppins font, metadata, nav, footer, scroll reveals, no-flash light/dark theme.
- `app/page.tsx`: homepage, composed from `components/site/*` sections.
- `app/work`, `app/pricing`, `app/blog`: placeholder pages until real content exists.
- `components/site/Logo.tsx`: the 42 mark (flat-cut 42 on a horizon line with a teal block cursor).
- `app/globals.css`: design tokens and all component styles. Teal `#2BD4C0` is only for the cursor and small accents; the violet gradient sits behind things, never on the 42.

## Brand rules

- Use the logo mark only as a logo (nav, footer, icons) and in two decorative spots (big footer mark, end of the reel). Write "42 Coding Labs" as text everywhere else.
- Testimonials and the reel are marked as placeholders. Replace them with real reviews and footage before removing the labels.
