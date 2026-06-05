import fs from 'fs';
import path from 'path';

function getAllFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else if (fullPath.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getAllFiles(path.join(process.cwd(), 'app'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // if no img tag, skip
  if (!/<img\s/i.test(content)) continue;

  // Add import if needed
  if (!/import Image from (['"])next\/image\1/.test(content)) {
    // Add to the top
    const lines = content.split('\n');
    const firstImportIndex = lines.findIndex(l => l.startsWith('import '));
    if (firstImportIndex >= 0) {
      lines.splice(firstImportIndex, 0, 'import Image from "next/image";');
    } else {
      lines.unshift('import Image from "next/image";');
    }
    content = lines.join('\n');
  }

  // Replace <img ... /> with <Image ... width={800} height={800} />
  content = content.replace(/<img\s+([^>]*?)\/?>/g, (match, attributes) => {
    // if it already has width/height, we don't need to add them
    let newAttrs = attributes;
    if (!/width=/.test(newAttrs) && !/fill=/.test(newAttrs)) {
      newAttrs += ' width={800} height={800} unoptimized={false}';
    }
    return `<Image ${newAttrs.trim()} />`;
  });

  fs.writeFileSync(file, content);
  console.log('Updated', file.replace(process.cwd(), ''));
}
