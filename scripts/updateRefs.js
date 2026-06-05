const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const MAPPING_FILE = path.join(__dirname, 'path-mapping.json');

const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

// Convert the mapping keys to match what might be in the code:
// e.g. "new\\AWARDS & CEREMONIES\\DSC_7614.JPG.jpeg" -> "/new/AWARDS & CEREMONIES/DSC_7614.JPG.jpeg"
const forwardSlashMapping = {};
for (const [key, value] of Object.entries(mapping)) {
  const codePath = '/' + key.replace(/\\/g, '/');
  const targetPath = '/' + value.replace(/\\/g, '/');
  forwardSlashMapping[codePath] = targetPath;
}

// Function to find all source files
function findSourceFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findSourceFiles(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = findSourceFiles(APP_DIR);
let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace each mapped path
  for (const [oldPath, newPath] of Object.entries(forwardSlashMapping)) {
    // Escape special characters in the old path for regex (like parentheses, spaces, dots)
    const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(['"])${escapedOldPath}(['"])`, 'g');
    content = content.replace(regex, `$1${newPath}$2`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${path.relative(APP_DIR, file)}`);
    updatedCount++;
  }
}

console.log(`\nUpdated ${updatedCount} files.`);
