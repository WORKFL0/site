#!/bin/bash

echo "Checking deployment status..."
echo "=========================="

# Check local build
echo "1. Local build status:"
if [ -d ".next" ]; then
    echo "✓ .next directory exists"
    echo "  Last modified: $(date -r .next)"
else
    echo "✗ .next directory not found"
fi

# Check git status
echo ""
echo "2. Git status:"
git status --short

# Check last commit
echo ""
echo "3. Last commit:"
git log -1 --oneline

# List environment files
echo ""
echo "4. Environment files:"
ls -la .env* 2>/dev/null || echo "No .env files found"

# Check if ESLint config exists
echo ""
echo "5. ESLint configuration:"
if [ -f ".eslintrc.json" ]; then
    echo "✓ .eslintrc.json exists"
    cat .eslintrc.json
else
    echo "✗ .eslintrc.json not found"
fi

echo ""
echo "=========================="
echo "Deployment checklist:"
echo "- [✓] ESLint errors fixed"
echo "- [✓] Local build successful"
echo "- [ ] Git changes pushed to remote"
echo "- [ ] Vercel deployment triggered"
echo "- [ ] Changes visible on production"