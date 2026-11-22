// Converts the live Poppins text in the brand lockups to outlined paths
// and flattens the 45% horizon line to a solid colour, so print shops
// need neither the font nor transparency support.
// Output: brand-kit/logo-outlined/. Set BRAND_SVG_DIR to the folder holding the original (live-text) SVGs.
import fs from 'node:fs';
import path from 'node:path';
import opentype from 'opentype.js';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = process.env.BRAND_SVG_DIR || path.resolve(here, '../../public/brand');
const out = path.resolve(here, '../logo-outlined');
fs.mkdirSync(out, { recursive: true });

const fontFile = path.join(here, 'node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff');
const font = opentype.parse(fs.readFileSync(fontFile).buffer.slice(0));

const BG = { dark: '#07070B', light: '#F6F6FA' };
const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const mix = (fg, bg, a) => '#' + hex(fg).map((c, i) => Math.round(c * a + hex(bg)[i] * (1 - a)).toString(16).padStart(2, '0')).join('').toUpperCase();

function textToPath(attrs, content) {
  const get = k => (attrs.match(new RegExp(`${k}="([^"]*)"`)) || [])[1];
  const size = parseFloat(get('font-size'));
  const ls = parseFloat(get('letter-spacing') || '0');
  let x = parseFloat(get('x'));
  const y = parseFloat(get('y'));
  const fill = get('fill');
  // advance width with letter-spacing
  const glyphs = font.stringToGlyphs(content);
  const scale = size / font.unitsPerEm;
  let width = 0;
  glyphs.forEach((g, i) => {
    width += g.advanceWidth * scale;
    if (i < glyphs.length - 1) width += font.getKerningValue(g, glyphs[i + 1]) * scale + ls;
  });
  if (get('text-anchor') === 'middle') x -= width / 2;
  let d = '';
  let cx = x;
  glyphs.forEach((g, i) => {
    d += g.getPath(cx, y, size).toPathData(2);
    cx += g.advanceWidth * scale;
    if (i < glyphs.length - 1) cx += font.getKerningValue(g, glyphs[i + 1]) * scale + ls;
  });
  return `<path aria-label="${content}" fill="${fill}" d="${d}"/>`;
}

for (const file of fs.readdirSync(src).filter(f => f.endsWith('.svg'))) {
  let svg = fs.readFileSync(path.join(src, file), 'utf8');
  const theme = file.includes('on-light') ? 'light' : 'dark';
  svg = svg.replace(/<text([^>]*)>([^<]*)<\/text>/g, (_, a, c) => textToPath(a, c));
  // flatten the horizon opacity
  svg = svg.replace(/stroke="(#[0-9A-Fa-f]{6})" stroke-width="2.2" opacity="\.45"/g,
    (_, c) => `stroke="${mix(c, BG[theme], 0.45)}" stroke-width="2.2"`);
  fs.writeFileSync(path.join(out, file), svg);
}
console.log('outlined:', fs.readdirSync(out).length, 'files ->', out);
