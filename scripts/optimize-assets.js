const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const QUALITY = 80;
const MAX_WIDTH = 1920;
const WEBP_SIZE_THRESHOLD = 500 * 1024; // 500KB - re-optimize WebP files larger than this

async function findFiles(dir, extensions) {
  const results = [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findFiles(fullPath, extensions));
    } else if (extensions.some(ext => entry.name.toLowerCase().endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertToWebp(inputPath) {
  const ext = path.extname(inputPath);
  // Handle .JPG.jpeg double extensions
  let outputPath;
  const basename = path.basename(inputPath);
  if (basename.toLowerCase().endsWith('.jpg.jpeg')) {
    outputPath = inputPath.replace(/\.JPG\.jpeg$/i, '.webp');
  } else {
    outputPath = inputPath.replace(/\.(jpg|jpeg|JPG|JPEG|png|PNG)$/i, '.webp');
  }

  const originalSize = fs.statSync(inputPath).size;

  try {
    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    // Delete original after successful conversion
    fs.unlinkSync(inputPath);

    return {
      original: path.relative(PUBLIC_DIR, inputPath),
      converted: path.relative(PUBLIC_DIR, outputPath),
      originalSize,
      newSize,
      savings: `${savings}%`
    };
  } catch (err) {
    console.error(`  ERROR converting ${inputPath}: ${err.message}`);
    return null;
  }
}

async function reOptimizeWebp(inputPath) {
  const originalSize = fs.statSync(inputPath).size;
  if (originalSize <= WEBP_SIZE_THRESHOLD) return null;

  const tempPath = inputPath + '.tmp';

  try {
    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(tempPath);

    const newSize = fs.statSync(tempPath).size;

    // Only replace if we actually saved space
    if (newSize < originalSize) {
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
      return {
        file: path.relative(PUBLIC_DIR, inputPath),
        originalSize,
        newSize,
        savings: `${savings}%`
      };
    } else {
      fs.unlinkSync(tempPath);
      return null;
    }
  } catch (err) {
    console.error(`  ERROR re-optimizing ${inputPath}: ${err.message}`);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('=== Asset Optimization Script ===\n');

  // Phase 2: Convert JPG/JPEG/PNG to WebP
  console.log('Phase 2: Converting JPG/JPEG to WebP...');
  const jpgFiles = await findFiles(PUBLIC_DIR, ['.jpg', '.jpeg', '.png']);
  // Filter out .svg and other non-image files that might match
  const imageFiles = jpgFiles.filter(f => !f.endsWith('.svg'));

  console.log(`Found ${imageFiles.length} JPG/JPEG/PNG files to convert\n`);

  let totalOriginal = 0;
  let totalConverted = 0;
  const conversions = [];
  const pathMapping = {};

  for (let i = 0; i < imageFiles.length; i++) {
    const f = imageFiles[i];
    process.stdout.write(`  [${i + 1}/${imageFiles.length}] Converting ${path.basename(f)}...`);
    const result = await convertToWebp(f);
    if (result) {
      conversions.push(result);
      totalOriginal += result.originalSize;
      totalConverted += result.newSize;
      pathMapping[result.original] = result.converted;
      console.log(` ${formatBytes(result.originalSize)} -> ${formatBytes(result.newSize)} (${result.savings} saved)`);
    } else {
      console.log(' SKIPPED');
    }
  }

  console.log(`\nPhase 2 complete: ${conversions.length} files converted`);
  console.log(`  Total original: ${formatBytes(totalOriginal)}`);
  console.log(`  Total converted: ${formatBytes(totalConverted)}`);
  console.log(`  Saved: ${formatBytes(totalOriginal - totalConverted)}\n`);

  // Phase 3: Re-optimize oversized WebP files
  console.log('Phase 3: Re-optimizing oversized WebP files...');
  const webpFiles = await findFiles(PUBLIC_DIR, ['.webp']);
  const oversized = webpFiles.filter(f => {
    try { return fs.statSync(f).size > WEBP_SIZE_THRESHOLD; } catch { return false; }
  });

  console.log(`Found ${oversized.length} WebP files over ${formatBytes(WEBP_SIZE_THRESHOLD)}\n`);

  let webpSavedTotal = 0;
  const reOptimized = [];

  for (let i = 0; i < oversized.length; i++) {
    const f = oversized[i];
    process.stdout.write(`  [${i + 1}/${oversized.length}] Re-optimizing ${path.basename(f)}...`);
    const result = await reOptimizeWebp(f);
    if (result) {
      reOptimized.push(result);
      webpSavedTotal += result.originalSize - result.newSize;
      console.log(` ${formatBytes(result.originalSize)} -> ${formatBytes(result.newSize)} (${result.savings} saved)`);
    } else {
      console.log(' no savings possible');
    }
  }

  console.log(`\nPhase 3 complete: ${reOptimized.length} WebP files re-optimized`);
  console.log(`  Saved: ${formatBytes(webpSavedTotal)}\n`);

  // Output path mapping for code updates
  const mappingPath = path.join(__dirname, 'path-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(pathMapping, null, 2));
  console.log(`Path mapping saved to ${mappingPath}`);

  // Final summary
  const totalSaved = (totalOriginal - totalConverted) + webpSavedTotal;
  console.log(`\n=== TOTAL SAVED: ${formatBytes(totalSaved)} ===`);
}

main().catch(console.error);
