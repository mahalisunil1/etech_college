import fs from 'fs';

let c = fs.readFileSync('app/components/Hero.tsx', 'utf8');

c = c.replace('<img\n            src="/landing/hero-bg/hero-bg.webp"', '<Image\n            src="/landing/hero-bg/hero-bg.webp"');

c = c.replace('opacity: phase >= 1 ? 1 : 0,\n            }}\n          />', 'opacity: phase >= 1 ? 1 : 0,\n            }}\n            width={1920} height={1080} unoptimized={false}\n          />');

c = c.replace('<img src="/logo1.webp" alt="eTech College" className="w-full h-full object-contain" />', '<Image src="/logo1.webp" alt="eTech College" className="w-full h-full object-contain" width={800} height={800} unoptimized={false} />');

c = c.replace('"use client";\n', '');
c = '"use client";\nimport Image from "next/image";\n' + c;

fs.writeFileSync('app/components/Hero.tsx', c);
console.log('Fixed Hero.tsx');
