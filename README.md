# Hailey Powell Realty Website

Custom production-style Next.js website for a Boise-area real estate brand, designed around the Hailey Powell Realty logo palette (forest green + taupe neutrals) with reusable components and scalable content structure.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Brand Asset Notes

Logo and skyline placeholders are included in `/public` for local development:

- `/public/logo-primary.svg`
- `/public/logo-light.svg`
- `/public/logo-mark.svg`
- `/public/boise-skyline.svg`

> Replace these with the real brand assets when available. Keep filenames the same for zero-code swap, or update component references.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```txt
/app
/components
/data
/public
/utils
```

## Integration Placeholders Included

- IDX integration TODO in `components/SearchFilters.tsx`
- Google Reviews embed TODO in `app/reviews/page.tsx`
- Instagram URL replacement comments in footer + contact page
- Logo replacement comments in `components/LogoBlock.tsx`

## Customization Guide

- Update brand colors in `tailwind.config.ts` under `theme.extend.colors.brand`
- Swap typography in `app/layout.tsx`
- Edit listing data in `data/listings.ts`
- Edit testimonials in `data/testimonials.ts`
- Edit area content in `data/areas.ts`
