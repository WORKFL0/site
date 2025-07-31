const fs = require('fs');
const path = require('path');

const sourceDir = '/mnt/c/Users/info/OneDrive - WorkFlo/Documenten/code/Cyberduck/domains/workflo.it/public_html/wp-content/uploads/2023';
const targetDir = path.join(__dirname, '../public/images');

// List of specific images to copy based on content needs
const imagesToCopy = [
  // Logos and branding
  'ICON_WORKFLO_YELLOW.png',
  'ICON_WORKFLO_YELLOW-WHITE.png',
  'Sitelogo.png',
  'WORKFLO_Favicon_120x120.png',
  
  // Service icons/images
  'Cloud-Service.json',
  'Cloud-diensten.png',
  'Security.png',
  'Connectivity.png',
  'Mobile-device-management.png',
  'Consulting_2.json',
  
  // Hero/header images
  'W-background-large.png',
  'building.jpg',
  'cyber-security1.png',
  'cloud-datacenter.png',
  
  // Client logos
  'Havas_Media.png',
  'Greenpeace_logo.png',
  'Bijvoorkeur_Logo.jpg',
  'NWA_Logo.png',
  'Podimo_Logo.png',
  
  // General images
  'The-scene-includes-a-modern-workspace.png',
  'Management-of-Cybersecurity-Operations.jpg',
];

// Create target directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy images
function copyImages() {
  ensureDirectoryExists(targetDir);
  
  let copiedCount = 0;
  let errorCount = 0;
  
  imagesToCopy.forEach(imageName => {
    const sourcePath = path.join(sourceDir, imageName);
    const targetPath = path.join(targetDir, imageName);
    
    try {
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✓ Copied: ${imageName}`);
        copiedCount++;
      } else {
        console.log(`✗ Not found: ${imageName}`);
        errorCount++;
      }
    } catch (error) {
      console.error(`✗ Error copying ${imageName}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\nSummary: ${copiedCount} images copied, ${errorCount} errors`);
}

// Run the script
copyImages();