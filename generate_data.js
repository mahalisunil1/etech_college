const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'WEBSITE CHANGES 3', 'ENTRANCE PAGE', 'ENTRANCE DATA');

const results = {
  JEE: {
    2023: [],
    2024: [],
    2025: []
  },
  NEET: {
    2023: [],
    2024: [],
    2025: []
  }
};

const banners = {
  JEE: [],
  NEET: [],
  AWARDS: []
};

function getFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.webp'))
    .map(file => {
      // Return relative path for Next.js public directory
      const absolutePath = path.join(dir, file);
      return absolutePath.substring(absolutePath.indexOf('public') + 7).replace(/\\/g, '/');
    });
}

// Results
results.JEE[2023] = getFiles(path.join(baseDir, 'JEE', 'RESULT', '2023'));
results.JEE[2024] = getFiles(path.join(baseDir, 'JEE', 'RESULT', '2024'));
results.JEE[2025] = getFiles(path.join(baseDir, 'JEE', 'RESULT', '2025'));

results.NEET[2023] = getFiles(path.join(baseDir, 'NEET', 'RESULT', '2023'));
results.NEET[2024] = getFiles(path.join(baseDir, 'NEET', 'RESULT', '2024'));
results.NEET[2025] = getFiles(path.join(baseDir, 'NEET', 'RESULT', '2025'));

// Banners
banners.JEE = getFiles(path.join(baseDir, 'JEE', 'BANNER'));
banners.NEET = getFiles(path.join(baseDir, 'NEET', 'BANNER'));
banners.AWARDS = getFiles(path.join(__dirname, 'public', 'WEBSITE CHANGES 3', 'ENTRANCE PAGE', 'AWARDS & CEREMONEY'));

fs.writeFileSync(path.join(__dirname, 'entrance_data.json'), JSON.stringify({ results, banners }, null, 2));
console.log('Generated entrance_data.json');
