#!/usr/bin/env node

console.log('Vercel Deployment Checklist:');
console.log('============================');
console.log('');

const fs = require('fs');
const path = require('path');

// Check for essential files
const essentialFiles = [
  'package.json',
  'next.config.js',
  'vercel.json',
  'app/layout.tsx',
  'app/page.tsx'
];

console.log('1. Essential Files Check:');
essentialFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`   ${exists ? '✓' : '✗'} ${file}`);
});

console.log('');
console.log('2. Build Command Check:');
try {
  const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  console.log(`   Build command: ${vercelJson.buildCommand || 'default'}`);
  console.log(`   Output directory: ${vercelJson.outputDirectory || 'default'}`);
  console.log(`   Framework: ${vercelJson.framework || 'auto-detected'}`);
} catch (e) {
  console.log('   ✗ Could not read vercel.json');
}

console.log('');
console.log('3. Environment Variables:');
const envFiles = ['.env', '.env.local', '.env.production'];
envFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`   ${exists ? '✓' : '-'} ${file}`);
});

console.log('');
console.log('4. Recent Git Commits:');
console.log('   Run: git log --oneline -5');

console.log('');
console.log('5. Next Steps:');
console.log('   - Check Vercel dashboard for build logs');
console.log('   - Ensure project is connected to correct GitHub repo');
console.log('   - Verify domain configuration in Vercel');
console.log('   - Check if build is failing due to environment variables');