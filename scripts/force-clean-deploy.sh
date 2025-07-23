#!/bin/bash

echo "🔄 Forcing clean deployment..."
echo "================================"

# Show current git status
echo "📋 Git Status:"
git status --short

# Show what files exist in app/about
echo -e "\n📁 Files in app/about/:"
ls -la app/about/ || echo "Directory not found"

# Check if AboutPageServer.tsx exists anywhere
echo -e "\n🔍 Searching for AboutPageServer.tsx:"
find . -name "AboutPageServer.tsx" -type f 2>/dev/null | grep -v node_modules || echo "✅ No AboutPageServer.tsx found (good!)"

# Show recent commits that removed files
echo -e "\n📝 Recent commits removing files:"
git log --oneline -10 | grep -i "remove\|delete" || echo "No removal commits found"

# Verify the file is not in git
echo -e "\n🔍 Checking git for AboutPageServer:"
git ls-files | grep AboutPageServer || echo "✅ Not tracked in git (good!)"

echo -e "\n✨ Ready for deployment!"
echo "If Vercel still sees AboutPageServer.tsx, you need to:"
echo "1. Go to Vercel Dashboard"
echo "2. Settings → Git → Clear Build Cache"
echo "3. Redeploy"