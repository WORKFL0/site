#!/bin/bash

# Fix all pages that import Header, Footer, or DangerTape
# These imports are causing the production crashes

echo "Fixing all pages with problematic imports..."

# List of all files that need fixing
files=(
  "app/contact/page.tsx"
  "app/diensten/page.tsx"
  "app/tarieven/page.tsx"
  "app/diensten/it-consulting/page.tsx"
  "app/diensten/cybersecurity/page.tsx"
  "app/diensten/cloud/page.tsx"
  "app/diensten/managed-it/page.tsx"
  "app/careers/page.tsx"
  "app/services/page.tsx"
  "app/about/page.tsx"
  "app/diensten/connectivity/page.tsx"
  "app/faq/page.tsx"
  "app/over-ons/page.tsx"
  "app/status/page.tsx"
  "app/internet-test/page.tsx"
  "app/case-studies/page.tsx"
  "app/diagnostics/page.tsx"
  "app/terms/page.tsx"
  "app/cookies/page.tsx"
  "app/privacy/page.tsx"
  "app/test-no-error/page.tsx"
  "app/test-header/page.tsx"
  "app/blog/[slug]/page.tsx"
  "app/it-health-check/page.tsx"
  "app/schedule/page.tsx"
  "app/calculator/page.tsx"
  "app/diensten/project-management/page.tsx"
  "app/diensten/audio-visueel/page.tsx"
  "app/diensten/mobile-device-management/page.tsx"
  "app/network-scan/page.tsx"
)

for file in "${files[@]}"; do
  echo "Processing $file..."
  
  # Comment out the problematic imports
  sed -i '' "s/^import Header from/@\/\/ import Header from/g" "$file"
  sed -i '' "s/^import Footer from/@\/\/ import Footer from/g" "$file"
  sed -i '' "s/^import DangerTape from/@\/\/ import DangerTape from/g" "$file"
  
  # Comment out the component usage
  sed -i '' "s/<Header \/>/{\/\* <Header \/> \*\/}/g" "$file"
  sed -i '' "s/<Header\/>/{\/\* <Header\/> \*\/}/g" "$file"
  sed -i '' "s/<Footer \/>/{\/\* <Footer \/> \*\/}/g" "$file"
  sed -i '' "s/<Footer\/>/{\/\* <Footer\/> \*\/}/g" "$file"
  sed -i '' "s/<DangerTape/{\/\* <DangerTape/g" "$file"
  sed -i '' "s/\/>$/\/> \*\/}/g" "$file"
done

echo "All pages fixed!"