const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '..', 'public');
const allowedExts = ['.jpg', '.jpeg', '.png'];

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (allowedExts.includes(ext)) {
        const newPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        try {
          console.log(`Processing: ${fullPath}`);
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);
          console.log(`Saved: ${newPath}`);
          
          // Delete original
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error);
        }
      }
    }
  }
}

async function run() {
  console.log('Starting conversion...');
  await processDirectory(targetDir);
  console.log('Conversion complete!');
}

run();
