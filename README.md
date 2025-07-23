# Workflo Website (Next.js 14)

This repository contains the source code for **workflo.it** – the public marketing website for Workflo.

## Stack

* Next.js 14 (App Router, TypeScript)
* Tailwind CSS
* Sanity v4 – headless CMS (content, images)
* Deployed on [Vercel](https://vercel.com)

## Getting started locally

```bash
# Install dependencies
npm install      # or pnpm install

# Start the dev server
npm run dev

# The site is now running at http://localhost:3000
```

The Sanity Studio is embedded at `/studio` in development.

Environment variables expected in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
```

## Useful scripts

| Script            | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Run Next.js in development mode    |
| `npm run build`   | Create an optimised production build |
| `npm run start`   | Start the production server locally |
| `npm run lint`    | Run ESLint                         |
| `npm run typecheck` | Run TypeScript type-checking     |

## Deployment

Every push to `main` triggers an automatic deployment on Vercel.
The build output path is the repository root (no sub-directory).

## License

MIT © Workflo B.V. 
