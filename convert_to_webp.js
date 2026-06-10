const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'WEBSITE CHANGES 3');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const webpPath = fullPath.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          console.log(`Converted: ${fullPath} -> ${webpPath}`);
          fs.unlinkSync(fullPath); // Delete the original to save space
        } catch (err) {
          console.error(`Error converting ${fullPath}:`, err);
        }
      }
    }
  }
}

processDirectory(targetDir).then(() => {
  console.log("Finished converting images to WebP.");
}).catch(console.error);
