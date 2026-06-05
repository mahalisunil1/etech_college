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
  if (content.startsWith('import Image from "next/image";\n"use client";')) {
    content = content.replace('import Image from "next/image";\n"use client";', '"use client";\nimport Image from "next/image";');
    fs.writeFileSync(file, content);
  } else if (content.startsWith('import Image from "next/image";\n\n"use client";')) {
    content = content.replace('import Image from "next/image";\n\n"use client";', '"use client";\nimport Image from "next/image";\n');
    fs.writeFileSync(file, content);
  } else {
    // maybe it has \r\n
    if (content.startsWith('import Image from "next/image";\r\n"use client";')) {
      content = content.replace('import Image from "next/image";\r\n"use client";', '"use client";\r\nimport Image from "next/image";');
      fs.writeFileSync(file, content);
    } else if (content.startsWith('import Image from "next/image";\r\n\r\n"use client";')) {
      content = content.replace('import Image from "next/image";\r\n\r\n"use client";', '"use client";\r\nimport Image from "next/image";\r\n');
      fs.writeFileSync(file, content);
    }
  }
}
