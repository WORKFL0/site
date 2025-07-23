# Developer Note

The Next.js 14 website project has been successfully restored and is ready for development.

## Project Structure

The website is built with:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Sanity v4 CMS

## Getting Started

```bash
npm install

# IMPORTANT: Configure Sanity CMS
cp .env.local.example .env.local
# Edit .env.local with your Sanity project ID

npm run dev
```

The site runs at http://localhost:3000
The Sanity Studio is embedded at http://localhost:3000/studio

## Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Get your Sanity Project ID from [sanity.io/manage](https://sanity.io/manage)
3. Update the environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

**📋 For detailed setup instructions, see [SANITY_SETUP.md](./SANITY_SETUP.md)**

## Testing Sanity Integration

- Visit `/example` to see a working example of Sanity data fetching
- Visit `/studio` to access the Sanity CMS admin interface

*Repository: https://github.com/WORKFL0/site*