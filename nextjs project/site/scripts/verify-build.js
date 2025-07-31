#!/usr/bin/env node

/**
 * Build verification script for Vercel deployments
 * This script helps identify and report build issues before deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting build verification...\n');

// Check if we're in the correct directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Make sure you run this from the project root.');
  process.exit(1);
}

// Function to run a command and capture output
function runCommand(command, description) {
  console.log(`📋 ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} - Success\n`);
    return { success: true, output };
  } catch (error) {
    console.error(`❌ ${description} - Failed`);
    console.error(error.stdout || error.message);
    console.error('\n');
    return { success: false, error: error.stdout || error.message };
  }
}

// Check environment variables
console.log('🔐 Checking environment variables...');
const requiredEnvVars = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET',
  'SANITY_API_TOKEN'
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingEnvVars.length > 0) {
  console.warn(`⚠️  Warning: Missing environment variables: ${missingEnvVars.join(', ')}`);
  console.log('   Make sure these are set in your Vercel project settings.\n');
} else {
  console.log('✅ All required environment variables are set\n');
}

// Run verification steps
const steps = [
  {
    command: 'npm run lint',
    description: 'Running ESLint'
  },
  {
    command: 'npx tsc --noEmit',
    description: 'Checking TypeScript'
  },
  {
    command: 'npm run build',
    description: 'Building Next.js application'
  }
];

let hasErrors = false;
const results = [];

for (const step of steps) {
  const result = runCommand(step.command, step.description);
  results.push({ ...step, ...result });
  if (!result.success) {
    hasErrors = true;
    // Don't continue if TypeScript or build fails
    if (step.command.includes('tsc') || step.command.includes('build')) {
      break;
    }
  }
}

// Generate report
console.log('\n📊 Build Verification Report');
console.log('============================\n');

results.forEach(result => {
  console.log(`${result.success ? '✅' : '❌'} ${result.description}`);
  if (!result.success && result.error) {
    console.log(`   Error: ${result.error.split('\n')[0]}`);
  }
});

// Check for common issues
console.log('\n🔍 Common Issues Check:');

// Check if .env.local exists
if (!fs.existsSync('.env.local')) {
  console.log('⚠️  No .env.local file found. Using example: cp .env.local.example .env.local');
}

// Check node_modules
if (!fs.existsSync('node_modules')) {
  console.log('❌ node_modules not found. Run: npm install');
}

// Check for uncommitted changes
try {
  const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
  if (gitStatus.trim()) {
    console.log('⚠️  Uncommitted changes detected. Consider committing before deploying.');
  }
} catch (e) {
  // Git not available or not a git repo
}

console.log('\n============================');
if (hasErrors) {
  console.log('❌ Build verification failed. Please fix the errors above.');
  process.exit(1);
} else {
  console.log('✅ Build verification passed! Ready for deployment.');
  process.exit(0);
}