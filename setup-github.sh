#!/bin/bash

# Workflo Site - GitHub Setup Script
# This script connects your local repository to GitHub

echo "🚀 Setting up GitHub connection for Workflo Site"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the project root directory"
    echo "Please run this script from: /Users/florian/Library/CloudStorage/OneDrive-WorkfloB.V/Documenten/code/nextjs project"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git not initialized"
    echo "Run: git init"
    exit 1
fi

# Check current remotes
echo "📍 Current Git remotes:"
git remote -v

# Add GitHub remote if not exists
if ! git remote | grep -q "origin"; then
    echo "➕ Adding GitHub remote..."
    git remote add origin https://github.com/WORKFL0/site.git
else
    echo "✅ Origin remote already exists"
fi

# Show current branch
echo ""
echo "🌿 Current branch:"
git branch --show-current

# Show status
echo ""
echo "📊 Git status:"
git status --short

echo ""
echo "=============================================="
echo "✅ GitHub connection configured!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push -u origin main"
echo "2. If push fails: git push -f origin main (WARNING: overwrites remote)"
echo "3. Check deployment at: https://nextsite.workflo.it/"
echo ""
echo "For more details, see PROJECT_DOCUMENTATION.md"