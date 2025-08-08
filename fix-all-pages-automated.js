const fs = require('fs');
const path = require('path');

// List of all files that need fixing
const files = [
  "app/contact/page.tsx",
  "app/diensten/page.tsx",
  "app/tarieven/page.tsx",
  "app/diensten/it-consulting/page.tsx",
  "app/diensten/cybersecurity/page.tsx",
  "app/diensten/managed-it/page.tsx",
  "app/careers/page.tsx",
  "app/services/page.tsx",
  "app/about/page.tsx",
  "app/diensten/connectivity/page.tsx",
  "app/faq/page.tsx",
  "app/over-ons/page.tsx",
  "app/status/page.tsx",
  "app/internet-test/page.tsx",
  "app/case-studies/page.tsx",
  "app/diagnostics/page.tsx",
  "app/terms/page.tsx",
  "app/cookies/page.tsx",
  "app/privacy/page.tsx",
  "app/test-no-error/page.tsx",
  "app/test-header/page.tsx",
  "app/blog/[slug]/page.tsx",
  "app/it-health-check/page.tsx",
  "app/schedule/page.tsx",
  "app/calculator/page.tsx",
  "app/diensten/project-management/page.tsx",
  "app/diensten/audio-visueel/page.tsx",
  "app/diensten/mobile-device-management/page.tsx",
  "app/network-scan/page.tsx"
];

console.log('Starting to fix all pages with problematic imports...\n');

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic imports
    if (content.includes("import Header from") || 
        content.includes("import Footer from") || 
        content.includes("import DangerTape from")) {
      
      console.log(`Fixing ${file}...`);
      
      // Replace imports
      content = content.replace(
        /import Header from ['"]@\/components\/layout\/Header['"]/g,
        "// import Header from '@/components/layout/Header' // REPLACED\nimport StaticHeader from '@/components/StaticHeader'"
      );
      
      content = content.replace(
        /import Footer from ['"]@\/components\/layout\/Footer['"]/g,
        "// import Footer from '@/components/layout/Footer' // REPLACED\nimport StaticFooter from '@/components/StaticFooter'"
      );
      
      content = content.replace(
        /import DangerTape from ['"]@?\/?(components\/)?DangerTape['"]/g,
        "// import DangerTape from '@/components/DangerTape' // REPLACED\nimport StaticDangerTape from '@/components/StaticDangerTape'"
      );
      
      // Replace component usage
      content = content.replace(/<Header\s*\/>/g, '<StaticHeader />');
      content = content.replace(/<Footer\s*\/>/g, '<StaticFooter />');
      
      // Replace DangerTape with any props
      content = content.replace(/<DangerTape[^>]*\/>/g, '<StaticDangerTape />');
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${file}`);
    } else {
      console.log(`⏭️  Skipping ${file} - no problematic imports found`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log('\n✨ All pages have been processed!');
console.log('Now commit and push these changes to fix the production errors.');