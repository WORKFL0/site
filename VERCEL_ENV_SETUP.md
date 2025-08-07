# 🚨 URGENT: Vercel Environment Variables Setup

## THE PROBLEM
The production site is crashing because environment variables are NOT configured in Vercel!

## IMMEDIATE ACTION REQUIRED

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Select your "site" project
3. Click on "Settings" tab
4. Click on "Environment Variables" in the left sidebar

### Step 2: Add These Environment Variables

Copy and paste each of these EXACTLY as shown:

#### RSS Feed Configuration (REQUIRED)
```
Name: RSS_USE_FALLBACK
Value: true
Environment: Production, Preview, Development
```

```
Name: RSS_PRIMARY_FEED
Value: https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168
Environment: Production, Preview, Development
```

#### Analytics IDs (OPTIONAL but recommended)
If you have these, add them:
```
#NEXT_PUBLIC_GA_ID
#NEXT_PUBLIC_GTM_ID
#NEXT_PUBLIC_CLARITY_ID
#NEXT_PUBLIC_LINKEDIN_PARTNER_ID
#NEXT_PUBLIC_FB_PIXEL_ID
```
NEXT_PUBLIC_HOTJAR_ID=6486977

import Hotjar from '@hotjar/browser';

const siteId = 6486977;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

#### Notion Integration (OPTIONAL)
Only if you want Notion to work:
```
Name: NOTION_API_KEY
Value: [Get your API key from Notion integrations]
Environment: Production, Preview, Development

Name: NOTION_BLOG_DATABASE_ID
Value: f87fb961e6b74bb1894949a89abf20a0
Environment: Production, Preview, Development
```

### Step 3: Redeploy
After adding the environment variables:
1. Go to the "Deployments" tab
2. Find the latest deployment
3. Click the three dots menu
4. Select "Redeploy"
5. Confirm the redeployment

## Alternative: Use Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add RSS_USE_FALLBACK production
# When prompted, enter: true

vercel env add RSS_PRIMARY_FEED production
# When prompted, enter: https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168

# Trigger redeployment
vercel --prod
```

## Why This Happened

The `.env.local` file is NOT uploaded to GitHub (it's in .gitignore for security).
Vercel doesn't have access to these variables unless you explicitly set them in the Vercel dashboard.

## Testing After Setup

1. Wait 2-3 minutes for deployment to complete
2. Visit https://workflo.it
3. The site should load without errors
4. Check that RSS feed displays (even if with fallback content)

## If Still Having Issues

1. Check deployment logs in Vercel dashboard
2. Make sure all variables are set for "Production" environment
3. Try clearing browser cache and hard refresh (Ctrl+Shift+R)
4. Contact support with deployment URL from Vercel

## Security Note

NEVER commit API keys or sensitive data to Git. Always use environment variables in Vercel dashboard for production secrets.