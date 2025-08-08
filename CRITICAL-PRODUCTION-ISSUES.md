# 🚨 CRITICAL PRODUCTION ISSUES & SOLUTIONS

## ⚠️ MUST READ BEFORE MAKING CHANGES

This document contains critical information about production crashes that have occurred and their solutions. **Read this before making any changes to the codebase to avoid repeating the same mistakes.**

---

## 🔴 THE MAIN PROBLEM: Dynamic Imports Cause Production Crashes

### What Happened (January 2025)
The production site (https://nextsite.workflo.it) was showing "Oops! Something went wrong" errors on ALL pages. This took multiple days to fix and caused significant frustration.

### Root Cause
**Dynamic imports using `next/dynamic` were causing memory leaks and crashes in production.**

The following pattern was BREAKING production:
```typescript
// ❌ DO NOT DO THIS - CAUSES PRODUCTION CRASHES
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false
})
```

### Why It Broke
1. Dynamic imports with `ssr: false` were causing hydration mismatches
2. Multiple dynamic imports on the same page created memory leaks
3. The error would sometimes take longer to appear, making it hard to debug
4. Even components that seemed to work locally would crash in production

---

## ✅ THE SOLUTION: Use Static Components

### What We Did to Fix It
1. **Created static versions** of all shared components:
   - `components/StaticHeader.tsx` - Static header without dynamic imports
   - `components/StaticFooter.tsx` - Static footer without dynamic imports  
   - `components/StaticDangerTape.tsx` - Static danger tape without dynamic imports

2. **Replaced ALL dynamic imports** in 30+ pages with static imports:
```typescript
// ✅ CORRECT - Use static imports
import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import StaticDangerTape from '@/components/StaticDangerTape'
```

3. **Fixed components were:**
   - All `/diensten/*` pages (cloud, managed-it, cybersecurity, connectivity, etc.)
   - All legal pages (privacy, terms, cookies)
   - Contact, About, FAQ, and other informational pages
   - All test and diagnostic pages

---

## 📋 RULES TO FOLLOW

### ✅ DO:
1. **Use static imports** for all shared components (Header, Footer, etc.)
2. **Test in production** after deploying - local testing is not enough
3. **Use the Static components** we created (StaticHeader, StaticFooter, etc.)
4. **Keep components simple** - avoid complex state management in shared components

### ❌ DON'T:
1. **Don't use `next/dynamic`** for Header, Footer, or other shared components
2. **Don't use `ssr: false`** unless absolutely necessary
3. **Don't trust local testing only** - production behaves differently
4. **Don't add complex animations** to critical layout components

---

## 🔧 COMPONENTS THAT ARE SAFE

These components have been tested and work in production:

### Static Components (SAFE TO USE):
- `StaticHeader` - Simple header with navigation
- `StaticFooter` - Simple footer with links
- `StaticDangerTape` - Animated danger tape (CSS only)

### Components to Be Careful With:
- `HubSpotContactForm` - May need to be static
- `NewsletterForm` - Has caused SSR issues
- `NewsFeed` - RSS feed component has issues
- Any component using `localStorage` or `window` object

---

## 🐛 DEBUGGING PRODUCTION CRASHES

If you see "Oops! Something went wrong" in production:

1. **Check for dynamic imports first** - This is usually the cause
2. **Look for components using:**
   - `window` object without checks
   - `localStorage` without SSR safety
   - `document` object in initial render
   - Hooks in non-component functions

3. **Create a debug page** to test components in isolation:
   - See `app/page-simple-debug.tsx` for example
   - Test each component separately
   - Check browser console for errors

4. **Common error messages:**
   - "Hydration mismatch" - Server and client render differently
   - "Cannot read property of undefined" - Usually SSR issue
   - "localStorage is not defined" - Needs client-side check

---

## 📝 CHECKLIST BEFORE DEPLOYING

Before pushing to production, check:

- [ ] No `next/dynamic` imports for Header/Footer/shared components
- [ ] All pages use StaticHeader and StaticFooter
- [ ] No direct `window` or `localStorage` usage without checks
- [ ] Tested locally with `npm run build` (no errors)
- [ ] Checked that typecheck passes: `npm run typecheck`
- [ ] Verified no console errors in browser

---

## 🚀 EMERGENCY FIX PROCEDURE

If production is down:

1. **Immediate fix:** Remove ALL dynamic imports
2. **Replace with static versions** of components
3. **Test the specific broken page URL** in production
4. **Commit with clear message** about what was fixed
5. **Document the issue** in this file

---

## 📊 CRASH HISTORY

### January 8, 2025 - Major Production Crash
- **Issue:** All pages showing "Oops! Something went wrong"
- **Cause:** Dynamic imports with `ssr: false`
- **Fix:** Replaced with static components
- **Affected:** 30+ pages
- **Downtime:** Multiple hours over several days
- **Commits:** See commits from b257ee0c to f6360a87

### Previous Issues
- **HelloSection crash:** Dynamic import with framer-motion
- **NewsletterForm crash:** localStorage usage without SSR check
- **NewsFeed crash:** RSS feed component with SSR issues

---

## 💡 LESSONS LEARNED

1. **Production is different from local** - Always test in production
2. **Dynamic imports are dangerous** - Use sparingly and carefully
3. **Simple is better** - Static components are more reliable
4. **Document everything** - Future developers need to know these issues
5. **Keep backups** - Always have a working version to roll back to

---

## 🔗 USEFUL COMMANDS

```bash
# Check for dynamic imports in the codebase
grep -r "dynamic from 'next/dynamic'" app/

# Find all Header/Footer imports
grep -r "import.*Header from" app/
grep -r "import.*Footer from" app/

# Test build locally
npm run build
npm run typecheck

# Check production
curl https://nextsite.workflo.it

# View recent commits
git log --oneline -20

# Rollback if needed
git revert HEAD
git push origin main
```

---

## 👥 CONTACTS

If production is down and you can't fix it:
- **Florian:** Primary contact
- **Check GitHub:** https://github.com/WORKFL0/site
- **Production URL:** https://nextsite.workflo.it
- **Vercel Dashboard:** Check deployment logs

---

**REMEMBER:** When in doubt, use static components. It's better to have a working site with less features than a broken site with fancy animations.