# Workflo Site - Complete Project Documentation

## Project Information

- **GitHub Repository**: https://github.com/WORKFL0/site
- **Live Site**: https://nextsite.workflo.it/
- **Local Project Path**: `/Users/florian/Library/CloudStorage/OneDrive-WorkfloB.V/Documenten/code/nextjs project`
- **Environment File**: `.env.production`

## Project Structure

```
/nextjs project/
├── /app/                    # Next.js App Router
├── /site/                   # Complete production site (main application)
├── /agents/                 # Agent architecture system
├── /grapics/               # Graphics and media assets
├── package.json            # Root package configuration
├── next.config.js          # Next.js configuration
├── .env.production         # Production environment variables
└── vercel.json            # Vercel deployment configuration
```

## Git Setup Instructions

### 1. Connect to GitHub Repository

Since you already have a Git repository initialized, connect it to GitHub:

```bash
# Navigate to project directory
cd "/Users/florian/Library/CloudStorage/OneDrive-WorkfloB.V/Documenten/code/nextjs project"

# Add GitHub remote
git remote add origin https://github.com/WORKFL0/site.git

# Verify remote was added
git remote -v
```

### 2. Push to GitHub

```bash
# Push your main branch to GitHub
git push -u origin main

# If the above fails because GitHub has a different default branch:
git push -u origin main:main
```

### 3. If You Need to Force Push (Use Carefully!)

If GitHub already has content and you want to replace it:

```bash
# Force push to overwrite remote (WARNING: This will replace everything on GitHub)
git push -f origin main
```

## Environment Configuration

### Local Development (.env.local)

Create `.env.local` for local development:

```bash
# Copy production env to local
cp .env.production .env.local
```

### Production Environment (.env.production)

Your production environment file is located at:
`/Users/florian/Library/CloudStorage/OneDrive-WorkfloB.V/Documenten/code/nextjs project/.env.production`

Required environment variables:
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
# Add other production variables as needed
```

## Vercel Deployment Instructions

### 1. Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (nextsite.workflo.it)
3. Go to Settings → Environment Variables
4. Add all variables from your `.env.production` file

### 2. Connect GitHub to Vercel

If not already connected:

1. In Vercel Dashboard → Import Project
2. Select "Import Git Repository"
3. Choose: https://github.com/WORKFL0/site
4. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 3. Deployment Configuration

The `vercel.json` file in your project root handles deployment settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

## Development Workflow

### 1. Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

### 2. Making Changes

```bash
# Create a new branch for features
git checkout -b feature/your-feature-name

# Make your changes, then:
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin feature/your-feature-name
```

### 3. Deploying Updates

#### Option A: Automatic Deployment (Recommended)
Push to main branch → Vercel automatically deploys

```bash
# Merge to main and push
git checkout main
git merge feature/your-feature-name
git push origin main
```

#### Option B: Manual Deployment
Use Vercel CLI:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel --prod
```

## Important Notes

### File Sync Issues
Due to OneDrive sync, some files may timeout when Git tries to read them. If you encounter issues:

1. Pause OneDrive sync temporarily
2. Run Git commands
3. Resume OneDrive sync

### Site Directory
The `/site` directory contains the complete production-ready application. This is the main application that should be deployed.

### Backup Strategy
1. Regular commits to GitHub
2. OneDrive provides additional backup
3. Consider periodic manual backups of `.env` files

## Quick Commands Reference

```bash
# Navigate to project
cd "/Users/florian/Library/CloudStorage/OneDrive-WorkfloB.V/Documenten/code/nextjs project"

# Check status
git status

# View recent commits
git log --oneline -5

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Run development server
npm run dev

# Build for production
npm run build
```

## Troubleshooting

### Git Push Rejected
If `git push` is rejected:
```bash
# Pull changes first
git pull origin main --rebase

# Then push
git push origin main
```

### Build Failures
1. Check Node.js version: `node --version` (should be 18.x or higher)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check environment variables in Vercel

### OneDrive Sync Issues
If files timeout during Git operations:
1. Right-click OneDrive icon → Pause syncing → 2 hours
2. Complete Git operations
3. Resume OneDrive sync

## Contact & Support

For deployment issues:
- Check Vercel deployment logs
- Verify environment variables
- Ensure GitHub repository is accessible

---

Last updated: August 2025