# Vercel Build Troubleshooting Guide

## Common Build Issues and Solutions

### 1. TypeScript Errors

**Problem**: Build fails with TypeScript errors
```
Type error: Property 'x' does not exist on type 'y'
```

**Solution**:
- Run `npm run typecheck` locally to catch errors before deploying
- Check that all props are properly typed in components
- Ensure server components pass correct props to client components

### 2. Environment Variables

**Problem**: Build fails with missing environment variables
```
Error: Missing required environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID
```

**Solution**:
1. Copy `.env.local.example` to `.env.local` for local development
2. In Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.local.example`
   - Ensure they're available for Production/Preview/Development as needed

### 3. Module Not Found Errors

**Problem**: 
```
Module not found: Can't resolve '@/components/...'
```

**Solution**:
- Check that the file path is correct and file exists
- Verify tsconfig.json paths configuration
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### 4. Memory Issues

**Problem**: Build fails with heap out of memory
```
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
```

**Solution**:
- Already configured in vercel.json with increased memory
- For local builds: `NODE_OPTIONS="--max-old-space-size=4096" npm run build`

### 5. Sanity Connection Issues

**Problem**: Build fails when fetching data from Sanity
```
Error: Failed to fetch content from Sanity
```

**Solution**:
- Verify Sanity project ID and dataset are correct
- Check CORS settings in Sanity dashboard include your Vercel domains
- Ensure API token has read permissions
- Test connection: `npm run verify`

### 6. Build Timeout

**Problem**: Build exceeds Vercel's time limit

**Solution**:
- Optimize imports to reduce bundle size
- Enable SWC minification in next.config.js
- Consider static generation for more pages
- Use dynamic imports for large components

## Debugging Steps

1. **Run Local Verification**:
   ```bash
   npm run verify
   ```
   This runs linting, type checking, and a test build.

2. **Check Build Logs**:
   - In Vercel dashboard, go to your deployment
   - Click on "View Function Logs" or "Build Logs"
   - Look for the first error message

3. **Test Production Build Locally**:
   ```bash
   npm run build
   npm run start
   ```

4. **Clear Caches**:
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   ```

5. **Verbose Build Output**:
   ```bash
   npm run build:verbose
   ```

## Vercel-Specific Settings

Our `vercel.json` includes:
- Amsterdam region (ams1) for better performance
- Increased memory allocation
- Security headers
- Optimized install command

## Getting Help

1. Check Vercel status: https://www.vercel-status.com/
2. Review Next.js docs: https://nextjs.org/docs
3. Contact Workflo DevOps team

## Quick Fixes Checklist

- [ ] All TypeScript errors resolved (`npm run typecheck`)
- [ ] ESLint passing (`npm run lint`)
- [ ] Environment variables set in Vercel
- [ ] Latest dependencies installed
- [ ] No uncommitted changes affecting build
- [ ] Sanity connection working
- [ ] Build succeeds locally