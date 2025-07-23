#!/bin/bash

echo "🔧 Starting Vercel build script..."
echo "================================"

# Show current directory
echo "📁 Current directory: $(pwd)"
echo ""

# Remove any cached AboutPageServer.tsx
echo "🗑️  Removing AboutPageServer.tsx if it exists..."
rm -rf app/about/AboutPageServer.tsx || true
rm -rf ./app/about/AboutPageServer.tsx || true
rm -rf /vercel/path0/app/about/AboutPageServer.tsx || true

# Show what's in the about directory
echo ""
echo "📋 Contents of app/about/:"
ls -la app/about/ || echo "Directory not found"

# Check if the file still exists anywhere
echo ""
echo "🔍 Searching for AboutPageServer.tsx:"
find . -name "AboutPageServer.tsx" -type f 2>/dev/null | grep -v node_modules || echo "✅ No AboutPageServer.tsx found (good!)"

# Now run the actual build
echo ""
echo "🏗️  Running Next.js build..."
npm run build