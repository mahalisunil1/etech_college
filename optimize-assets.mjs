import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, unlinkSync, renameSync, readFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, 'public');

const MAX_WIDTH = 1000;   // max 1000px wide for all web images
const WEBP_QUALITY = 72;  // aggressive but still looks great on screen

let totalBefore = 0;
let totalAfter = 0;
let count = 0;
let skipped = 0;

function getAllFiles(dir, exts) {
  let results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(extname(fullPath).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getAllFiles(PUBLIC_DIR, ['.webp', '.jpg', '.jpeg', '.JPG', '.png']);
console.log(`Found ${files.length} image files. Optimizing...\n`);

for (const file of files) {
  const sizeBefore = statSync(file).size;
  totalBefore += sizeBefore;

  try {
    const originalBuffer = readFileSync(file);
    const img = sharp(originalBuffer);
    const meta = await img.metadata();
    const needsResize = meta.width && meta.width > MAX_WIDTH;

    // Always output as webp with aggressive quality
    const outputBuffer = await img
      .resize(needsResize ? { width: MAX_WIDTH, withoutEnlargement: true } : undefined)
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toBuffer();

    const sizeAfter = outputBuffer.length;

    const isDifferentExt = extname(file).toLowerCase() !== '.webp';
    if (sizeAfter < sizeBefore || isDifferentExt) {
      const ext = extname(file);
      const newFile = file.slice(0, -ext.length) + '.webp';
      const tmpFile = file + '.tmp';
      
      writeFileSync(tmpFile, outputBuffer);
      
      // Attempt to delete original to release lock/name if it's the same
      try { unlinkSync(file); } catch (e) {} 
      // If it's a different extension, the original is deleted above.
      
      renameSync(tmpFile, newFile);
      
      totalAfter += sizeAfter;
      const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(0);
      const savedKB = ((sizeBefore - sizeAfter) / 1024).toFixed(0);
      console.log(`✅ -${saved}% (-${savedKB}KB) ${file.replace(PUBLIC_DIR, '')} -> ${newFile.replace(PUBLIC_DIR, '')}`);
      count++;
    } else {
      totalAfter += sizeBefore;
      skipped++;
    }
  } catch (err) {
    console.error(`❌ Error on ${file}: ${err.message}`);
    totalAfter += sizeBefore;
    skipped++;
  }
}

// Clean up any leftover .tmp files from previous run
try {
  const tmpFiles = getAllFiles(PUBLIC_DIR, ['.tmp']);
  for (const tmp of tmpFiles) { try { unlinkSync(tmp); } catch {} }
  if (tmpFiles.length > 0) console.log(`\nCleaned up ${tmpFiles.length} leftover .tmp files`);
} catch {}

console.log(`\n========== DONE ==========`);
console.log(`Files optimized : ${count}`);
console.log(`Files skipped   : ${skipped} (already at min size)`);
console.log(`Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
console.log(`After:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved:  ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB (${((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)}% reduction)`);
