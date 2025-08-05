# Workflo Site - Deployment Checklist

## Pre-Deployment Checklist

### 1. Local Testing
- [ ] Run `npm run build` successfully
- [ ] Test build with `npm run start`
- [ ] Check for TypeScript errors: `npm run type-check`
- [ ] Run linting: `npm run lint`

### 2. Environment Variables
- [ ] `.env.production` file exists and is complete
- [ ] All required Sanity variables are set:
  - [ ] `SANITY_PROJECT_ID`
  - [ ] `SANITY_DATASET`
  - [ ] `SANITY_API_VERSION`
- [ ] Environment variables are added to Vercel dashboard

### 3. Git Repository
- [ ] All changes committed: `git status`
- [ ] Latest code pushed to GitHub: `git push origin main`
- [ ] No merge conflicts

## Deployment Steps

### Option 1: Automatic Deployment (via GitHub push)

```bash
# 1. Ensure you're on main branch
git checkout main

# 2. Pull latest changes
git pull origin main

# 3. Push your changes
git push origin main

# 4. Monitor deployment at Vercel dashboard
```

### Option 2: Manual Deployment (Vercel CLI)

```bash
# 1. Install Vercel CLI (if not installed)
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod
```

## Post-Deployment Verification

### 1. Site Functionality
- [ ] Visit https://nextsite.workflo.it/
- [ ] Check homepage loads correctly
- [ ] Verify images are loading
- [ ] Test navigation between pages
- [ ] Check responsive design on mobile

### 2. Sanity CMS Integration
- [ ] Content from Sanity loads properly
- [ ] Images from CDN display correctly
- [ ] Dynamic content updates work

### 3. Performance
- [ ] Run Lighthouse test
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Verify no console errors in browser

## Rollback Procedure

If issues occur after deployment:

### Via Vercel Dashboard
1. Go to Vercel Dashboard → Your Project
2. Navigate to "Deployments" tab
3. Find previous working deployment
4. Click "..." menu → "Promote to Production"

### Via Git
```bash
# Find previous working commit
git log --oneline -10

# Revert to previous commit
git revert HEAD
git push origin main
```

## Common Issues & Solutions

### Build Failures
- **Issue**: Build fails on Vercel but works locally
- **Solution**: Check Node.js version in `package.json` engines field

### Environment Variables
- **Issue**: Features not working in production
- **Solution**: Verify all env variables are set in Vercel dashboard

### Image Loading
- **Issue**: Images not displaying
- **Solution**: Check `next.config.js` for proper domain configuration

## Emergency Contacts

- **Vercel Status**: https://vercel.com/status
- **GitHub Status**: https://www.githubstatus.com/
- **Sanity Status**: https://status.sanity.io/

---

Remember: Always test in development before deploying to production!