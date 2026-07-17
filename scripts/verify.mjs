import fs from 'fs';

const h = fs.readFileSync('dist/index.html', 'utf8');
const checks = [
  'Dawoodi Opticals',
  'id="frames"',
  'id="brands"',
  'id="lenses"',
  'id="services"',
  'id="visit"',
  'application/ld+json',
  'og:title',
  'See the world through better frames',
  'Aurora Round',
  'What Karachi wears',
  'Oliver Peoples',
  'Leica',
  'Gentle Monster',
  'Warby Parker',
];

let allOk = true;
for (const c of checks) {
  const ok = h.includes(c);
  if (!ok) allOk = false;
  console.log((ok ? 'OK   ' : 'MISS ') + c);
}
console.log('\n' + (allOk ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED'));