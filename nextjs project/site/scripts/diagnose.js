#!/usr/bin/env node

/**
 * Diagnostic script for troubleshooting build issues
 * Run with: npm run diagnose
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Running Workflo Site Diagnostics...\n');

let hasErrors = false;

// Check Node version
function checkNodeVersion() {
  console.log('1️⃣  Checking Node.js version...');
  try {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
    if (majorVersion < 18) {
      console.log(`❌ Node.js ${nodeVersion} is too old. Please use Node.js 18 or higher.`);
      hasErrors = true;
    } else {
      console.log(`✅ Node.js ${nodeVersion} is supported`);
    }
  } catch (error) {
    console.log('❌ Failed to check Node.js version');
    hasErrors = true;
  }
  console.log('');
}

// Check if dependencies are installed
function checkDependencies() {
  console.log('2️⃣  Checking dependencies...');
  if (!fs.existsSync('node_modules')) {
    console.log('❌ Dependencies not installed. Run: npm install');
    hasErrors = true;
  } else {
    console.log('✅ Dependencies installed');
  }
  console.log('');
}

// Check environment variables
function checkEnvVars() {
  console.log('3️⃣  Checking environment variables...');
  const requiredEnvVars = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET'
  ];
  
  const envFiles = ['.env.local', '.env.production', '.env'];
  let envVars = {};
  
  // Read env files
  for (const file of envFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf-8');
      content.split('\n').forEach(line => {
        if (line && !line.startsWith('#')) {
          const [key, value] = line.split('=');
          if (key && value) {
            envVars[key.trim()] = value.trim();
          }
        }
      });
    }
  }
  
  // Check required vars
  let missingVars = [];
  for (const varName of requiredEnvVars) {
    if (!envVars[varName] && !process.env[varName]) {
      missingVars.push(varName);
    }
  }
  
  if (missingVars.length > 0) {
    console.log(`❌ Missing environment variables: ${missingVars.join(', ')}`);
    console.log('   Add them to .env.local or set in Vercel dashboard');
    hasErrors = true;
  } else {
    console.log('✅ All required environment variables found');
  }
  console.log('');
}

// Check TypeScript
function checkTypeScript() {
  console.log('4️⃣  Checking TypeScript...');
  try {
    execSync('npm run typecheck', { stdio: 'pipe' });
    console.log('✅ TypeScript compilation successful');
  } catch (error) {
    console.log('❌ TypeScript errors found. Run: npm run typecheck');
    hasErrors = true;
  }
  console.log('');
}

// Check ESLint
function checkESLint() {
  console.log('5️⃣  Checking ESLint...');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    console.log('✅ ESLint checks passed');
  } catch (error) {
    console.log('❌ ESLint errors found. Run: npm run lint');
    hasErrors = true;
  }
  console.log('');
}

// Check build
function checkBuild() {
  console.log('6️⃣  Testing production build...');
  console.log('   This may take a few minutes...');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('✅ Production build successful');
  } catch (error) {
    console.log('❌ Build failed. Check error messages above');
    hasErrors = true;
  }
  console.log('');
}

// Check for common issues
function checkCommonIssues() {
  console.log('7️⃣  Checking for common issues...');
  
  // Check for large files
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir, { recursive: true });
    let largeFiles = [];
    
    files.forEach(file => {
      const filePath = path.join(publicDir, file);
      if (fs.statSync(filePath).isFile()) {
        const size = fs.statSync(filePath).size;
        if (size > 5 * 1024 * 1024) { // 5MB
          largeFiles.push(`${file} (${(size / 1024 / 1024).toFixed(2)}MB)`);
        }
      }
    });
    
    if (largeFiles.length > 0) {
      console.log(`⚠️  Large files in public directory: ${largeFiles.join(', ')}`);
      console.log('   Consider optimizing or moving to CDN');
    }
  }
  
  // Check for .next directory
  if (fs.existsSync('.next')) {
    console.log('ℹ️  .next build cache exists');
  }
  
  console.log('✅ Common issues check complete');
  console.log('');
}

// Main diagnostic function
async function runDiagnostics() {
  checkNodeVersion();
  checkDependencies();
  checkEnvVars();
  checkTypeScript();
  checkESLint();
  checkBuild();
  checkCommonIssues();
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  if (hasErrors) {
    console.log('❌ Diagnostics found issues. Please fix them before deploying.');
    process.exit(1);
  } else {
    console.log('✅ All diagnostics passed! Ready to deploy.');
    console.log('\nDeploy with: vercel or git push');
  }
}

// Run diagnostics
runDiagnostics().catch(error => {
  console.error('Error running diagnostics:', error);
  process.exit(1);
});