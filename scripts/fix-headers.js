const fs = require('fs');
const path = require('path');

// List of pages that need fixing
const pagesToFix = [
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/over-ons/page.tsx',
  'app/diensten/cloud/page.tsx',
  'app/diensten/cybersecurity/page.tsx',
  'app/diensten/managed-it/page.tsx',
  'app/diensten/connectivity/page.tsx',
  'app/diensten/mobile-device-management/page.tsx',
  'app/diensten/audio-visueel/page.tsx',
  'app/diensten/project-management/page.tsx',
  'app/diensten/it-consulting/page.tsx',
];

const projectRoot = '/Users/florian/Library/CloudStorage/OneDrive-WorkfloB.V/Documenten/code/nextjs project';

pagesToFix.forEach(pagePath => {
  const fullPath = path.join(projectRoot, pagePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if already fixed
    if (content.includes("import Header from '@/components/layout/Header'")) {
      console.log(`✓ ${pagePath} - already fixed`);
      return;
    }
    
    // Add 'use client' if not present
    if (!content.startsWith("'use client'")) {
      content = "'use client'\n\n" + content;
    }
    
    // Add imports
    if (!content.includes("import Header")) {
      content = content.replace(
        /export default function/,
        "import Header from '@/components/layout/Header'\nimport Footer from '@/components/layout/Footer'\n\nexport default function"
      );
    }
    
    // Replace inline header with Header component
    content = content.replace(
      /<header[\s\S]*?<\/header>/,
      '<Header />'
    );
    
    // Replace inline footer with Footer component
    content = content.replace(
      /<footer[\s\S]*?<\/footer>/,
      '<Footer />'
    );
    
    // Ensure Footer is added before closing div if not present
    if (!content.includes('<Footer />')) {
      content = content.replace(
        /(\s+)<\/div>\s*\)\s*}$/,
        '$1  <Footer />\n$1</div>\n  )\n}'
      );
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✓ ${pagePath} - fixed successfully`);
    
  } catch (error) {
    console.error(`✗ ${pagePath} - error: ${error.message}`);
  }
});

console.log('\nAll pages processed!');