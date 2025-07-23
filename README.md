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

# Configure Sanity CMS (required)
cp .env.local.example .env.local
# Edit .env.local with your Sanity project credentials

# Start the dev server
npm run dev

# The site is now running at http://localhost:3000
```

The Sanity Studio is embedded at `/studio` in development.

## Environment Variables Setup

**Required environment variables in `.env.local`:**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Optional (for authenticated requests):**
```env
SANITY_API_TOKEN=your-api-token
```

**📋 Need help setting up Sanity?** See the detailed [SANITY_SETUP.md](./SANITY_SETUP.md) guide.

## Useful scripts

| Script            | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Run Next.js in development mode    |
| `npm run build`   | Create an optimised production build |
| `npm run start`   | Start the production server locally |
| `npm run lint`    | Run ESLint                         |
| `npm run typecheck` | Run TypeScript type-checking     |

## Project Structure

```
/workspace/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   └── studio/           # Sanity Studio
├── lib/
│   └── sanity.ts         # Sanity client configuration
├── sanity.config.ts      # Sanity CMS configuration
├── .env.local           # Environment variables
└── package.json         # Dependencies and scripts
```

## Deployment

Every push to `main` triggers an automatic deployment on Vercel.
The build output path is the repository root (no sub-directory).

**Important:** Make sure to add your environment variables to your Vercel project settings.

## License

MIT © Workflo B.V. 
