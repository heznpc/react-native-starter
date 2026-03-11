const fs = require('fs');

const type = process.argv[2] || 'patch';
const valid = ['major', 'minor', 'patch'];
if (!valid.includes(type)) {
  console.error('Usage: node bump-version.js [major|minor|patch]');
  process.exit(1);
}

const appConfig = JSON.parse(fs.readFileSync('app.json', 'utf8'));
const v = appConfig.expo.version.split('.').map(Number);

if (type === 'major') { v[0]++; v[1] = 0; v[2] = 0; }
else if (type === 'minor') { v[1]++; v[2] = 0; }
else { v[2]++; }

const newVersion = v.join('.');
appConfig.expo.version = newVersion;
fs.writeFileSync('app.json', JSON.stringify(appConfig, null, 2) + '\n');

// Also update package.json if it exists
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  pkg.version = newVersion;
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
} catch (_e) {
  // package.json is optional
}

console.log(newVersion);
