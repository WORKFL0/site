# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for your Workflo website.

## Step 1: Create a Sanity Account & Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project or use an existing one
3. Note down your **Project ID** from the project dashboard

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace the values:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

## Step 3: Get Your Sanity Project ID

### Option A: From Sanity Dashboard
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Copy the Project ID from the project settings

### Option B: Using Sanity CLI
1. Login to Sanity:
   ```bash
   npx sanity login
   ```

2. List your projects:
   ```bash
   npx sanity projects list
   ```

3. Copy the Project ID from the output

## Step 4: Configure CORS (Important!)

1. Go to your Sanity project dashboard
2. Navigate to **Settings** → **API** → **CORS Origins**
3. Add these origins:
   - `http://localhost:3000` (for development)
   - `https://your-domain.com` (for production)
   - `https://*.vercel.app` (if using Vercel)

## Step 5: Create an API Token (Optional)

If you need to write data from your Next.js app:

1. Go to **Settings** → **API** → **Tokens**
2. Create a new token with **Editor** permissions
3. Add it to your `.env.local`:
   ```env
   SANITY_API_TOKEN=your-api-token-here
   ```

## Step 6: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit the Sanity Studio:
   ```
   http://localhost:3000/studio
   ```

3. You should see the Sanity Studio interface

## Step 7: Create Content Schema

Edit `sanity.config.ts` to add your content types. Example:

```typescript
schema: {
  types: [
    {
      name: 'page',
      title: 'Page',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text'
        }
      ]
    }
  ],
}
```

## Troubleshooting

### Error: "Missing NEXT_PUBLIC_SANITY_PROJECT_ID"
- Make sure you created `.env.local` with the correct project ID
- Restart your development server after adding environment variables

### Studio not loading
- Check CORS settings in your Sanity project
- Verify your project ID is correct
- Make sure you're using the correct dataset name

### Can't write data
- Create an API token with write permissions
- Add the token to your `.env.local` file
- Use `sanityWriteClient` instead of `sanityClient` for write operations

## Next Steps

1. Add content types to your schema
2. Create content in the Sanity Studio
3. Fetch and display content in your Next.js pages
4. Deploy to production with proper environment variables