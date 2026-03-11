# Hailey Powell Realty Website

A production-style Next.js real estate website tailored to Hailey Powell Realty with a Boise-first brand voice, reusable components, and a logo-driven design system.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS

## Brand System Notes

The visual palette is mapped directly from the Hailey Powell Realty logo:

- Forest green (`brand.forest`) as the primary accent
- Deeper pine (`brand.pine`) for headings and contrast
- Muted taupe (`brand.taupe`) for supporting accents
- Soft off-white (`brand.mist`) for section backgrounds

These values live in `tailwind.config.ts` and can be adjusted in one place.

## Logo + Asset Placeholders

Current placeholders are in `/public`:

- `logo-primary.svg`
- `logo-light.svg`
- `logo-mark.svg`
- `boise-skyline.svg`

> Replace these with your final exported files and keep filenames the same for a zero-code swap.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Commands

```bash
npm run build
npm run start
npm run lint
```

## Project Structure

```txt
/app
  /page.tsx
  /search-homes/page.tsx
  /featured-listings/page.tsx
  /boise-areas/page.tsx
  /boise-areas/boise/page.tsx
  /boise-areas/meridian/page.tsx
  /boise-areas/eagle/page.tsx
  /boise-areas/kuna/page.tsx
  /boise-areas/star/page.tsx
  /about/page.tsx
  /reviews/page.tsx
  /contact/page.tsx
  /layout.tsx
  /globals.css
/components
/data
/public
/utils
```

## Integration Placeholder Locations

- IDX integration TODO: `components/SearchFilters.tsx`
- Google Reviews embed TODO: `app/reviews/page.tsx`
- Instagram link replacement comments: `app/contact/page.tsx`, `components/Footer.tsx`
- Real logo asset replacement comment: `components/LogoBlock.tsx`
