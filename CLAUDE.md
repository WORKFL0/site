# CLAUDE.md - Project Setup & Context

## 🚨 CRITICAL PROJECT CONTEXT

This is **NOT** a local-only Next.js site. This is a production deployment with the following architecture:

### Deployment Pipeline
- **Version Control**: Git repository (online)
- **Deployment Platform**: Vercel (automatic deployment on push)
- **Build Process**: Vercel builds from main branch
- **Production URL**: https://workflo.it

### Key Commands
```bash
# DO NOT use npm run build locally unless testing
# Vercel handles the build process

# For development:
npm run dev

# To deploy changes:
git add .
git commit -m "descriptive message"
git push origin main
# Vercel will automatically detect the push and deploy

# Type checking (RUN BEFORE COMMITTING):
npm run typecheck

# Linting (RUN BEFORE COMMITTING):
npm run lint
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14.1.0 (App Router)
- **Styling**: Tailwind CSS
- **Analytics**: 
  - Google Analytics
  - Microsoft Clarity
  - Hotjar
  - LinkedIn Insight
  - Facebook Pixel
  - Vercel Analytics
- **Forms**: HubSpot integration
- **Language**: TypeScript
- **Deployment**: Vercel

### CRM Integration (IN PROGRESS)
- **Platform**: Notion
- **Status**: Under development
- **Purpose**: Customer relationship management
- **Integration Type**: API-based
- **Current Issues**: Integration not yet complete

## Current Critical Issues

### 1. Site Loading Bug (PRODUCTION CRITICAL)
- **Symptom**: Site fails to load properly in production
- **Recent Fixes Attempted**:
  - Hydration mismatch resolution
  - Production crash fixes
  - ErrorBoundary removal from layout
  - RSS feed and company logos fixes
- **Status**: Ongoing investigation needed

### 2. Notion CRM Integration
- **Status**: In development
- **Next Steps**: API connection setup, data schema definition

## Project Structure
```
/app              - Next.js app router pages
/components       - React components
  /Analytics      - Tracking components
  /forms          - Form components including HubSpot
/context          - React context providers
/config           - Configuration files
  seo.config.ts   - SEO configuration
/public           - Static assets
/lib              - Utility functions
/types            - TypeScript type definitions
```

## Important Files
- `todo.md` - Contains all pending tasks (CHECK THIS REGULARLY)
- `app/layout.tsx` - Root layout with analytics and meta tags
- `app/page.tsx` - Homepage (currently being modified)
- `.env.local` - Environment variables (DO NOT COMMIT)

## Working Methodology

### Before Making Changes
1. Always check `todo.md` for current priorities
2. Verify current git status with `git status`
3. Pull latest changes with `git pull origin main`

### After Making Changes
1. Run `npm run typecheck` - MUST PASS
2. Run `npm run lint` - MUST PASS
3. Test locally with `npm run dev`
4. Commit with descriptive message
5. Push to trigger Vercel deployment

### Critical Reminders
- **NEVER** commit directly to production without testing
- **ALWAYS** check that typecheck and lint pass
- **MONITOR** Vercel deployment after pushing
- **CHECK** production site after deployment completes
- This is a client-facing production website for Workflo IT Services Amsterdam

## Environment Variables Required
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager
- `NEXT_PUBLIC_GA_ID` - Google Analytics
- `NEXT_PUBLIC_CLARITY_ID` - Microsoft Clarity
- `NEXT_PUBLIC_HOTJAR_ID` - Hotjar
- `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` - LinkedIn
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google verification
- Various other verification and API keys

## Support Contacts
- **Company**: Workflo B.V.
- **Location**: Amsterdam, Netherlands
- **Website**: https://workflo.it
- **Primary Services**: Managed IT, Cybersecurity, Cloud Services

## Next Immediate Actions
1. Read and analyze `todo.md` for all pending tasks
2. Fix production site loading issues
3. Complete Notion CRM integration
4. Address any TypeScript/build errors