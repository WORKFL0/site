# Vercel Deployment Guide

## Required Environment Variables

Add these environment variables in your Vercel project settings:

```
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
```

## Deployment Steps

1. Push this repository to GitHub
2. Connect your GitHub repository to Vercel
3. Add the environment variables above in Vercel project settings
4. Deploy

## Project Structure

- `/app` - Basic Next.js app directory
- `/site` - Complete production site with additional features
- `/agents` - Agent architecture system

## Important Notes

- The main application uses the root `package.json`
- The `/site` directory contains a more complete version with additional features
- Make sure to configure Sanity CMS with your actual project credentials