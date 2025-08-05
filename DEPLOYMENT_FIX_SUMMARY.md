# Deployment Fix Summary

## Issues Fixed

### 1. Wrong Build Directory
**Problem**: Vercel was trying to build from the root directory, but the actual Next.js app is in `/site`
**Solution**: Updated `vercel.json` to use `"rootDirectory": "site"`

### 2. Missing Dependencies
**Problem**: Root `package.json` had minimal dependencies
**Solution**: Updated with all required dependencies from the site directory

### 3. Missing TypeScript Config
**Problem**: `next-env.d.ts` was missing in the site directory
**Solution**: Created the file with proper Next.js TypeScript references

### 4. Node Version
**Problem**: Build requires Node 20+ (specified in package.json engines)
**Solution**: Added `.nvmrc` file specifying Node version 20

## Vercel Configuration

The deployment now uses this structure:
```
/nextjs project/
  vercel.json        # Points to site directory
  .nvmrc            # Node 20
  /site/            # <-- Actual Next.js app
    package.json    # Complete dependencies
    next.config.js  # Next.js config
    /app/          # App Router pages
    /components/   # React components
    /lib/          # Utilities
```

## Environment Variables Required

Make sure these are set in Vercel:
- `SANITY_PROJECT_ID`
- `SANITY_DATASET` (usually "production")
- `SANITY_API_VERSION` (usually "2023-05-03")

## What Happens Now

1. Vercel will detect the new push
2. It will read `vercel.json` and build from `/site` directory
3. It will use Node 20 (from `.nvmrc`)
4. It will install all dependencies from `/site/package.json`
5. It will run `next build` in the `/site` directory

The deployment should now succeed! 🚀