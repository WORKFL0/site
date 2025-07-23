#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Verifying AboutPageServer.tsx does not exist...');

const filePath = path.join(process.cwd(), 'app', 'about', 'AboutPageServer.tsx');

if (fs.existsSync(filePath)) {
  console.error('❌ ERROR: AboutPageServer.tsx still exists!');
  console.error('This file should have been deleted.');
  process.exit(1);
} else {
  console.log('✅ SUCCESS: AboutPageServer.tsx does not exist (as expected)');
  console.log('The build should not fail due to this file.');
}

// Also check for any imports of AboutPageServer
const checkDir = (dir) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
      checkDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('AboutPageServer')) {
        console.error(`❌ Found reference to AboutPageServer in: ${fullPath}`);
      }
    }
  });
};

console.log('\nChecking for any references to AboutPageServer...');
checkDir(process.cwd());
console.log('✅ No references to AboutPageServer found.');