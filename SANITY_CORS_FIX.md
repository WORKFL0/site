# Sanity CORS Configuration Fix

## Issue
The CORS origin `https://nextsite.workflo.it` is currently "Not Allowed" in your Sanity project settings.

## Solution

1. In your Sanity dashboard (where the screenshot was taken):
   - Click "Add CORS origin" button
   - Add: `https://nextsite.workflo.it`
   - Click "Allow"

2. Also add these origins for development:
   - `http://localhost:3000`
   - `https://*.vercel.app` (for preview deployments)

## Your Sanity Configuration

Based on your dashboard:
- **Project ID**: `jul5ogsa`
- **Dataset**: `production` (default)
- **API Version**: `2023-05-03`

## Update Environment Variables in Vercel

Make sure these exact values are in your Vercel environment variables:
```
SANITY_PROJECT_ID=jul5ogsa
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
```

## Note
You have API tokens created, but for public read access (which the site uses), you just need the CORS origins configured correctly.