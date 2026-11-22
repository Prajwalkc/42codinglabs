// Exports each outlined logo SVG in shared/logo/ as a vector PDF sized to its artwork,
// for print shops that ask for PDF instead of SVG. Output: marketing/print-logos/
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(here, '../shared/logo');
const out = path.resolve(here, '../print-logos');
fs.mkdirSync(out, { recursive: true });
const pick = ['lockup-horizontal-on-dark', 'lockup-horizontal-on-light', 'lockup-stacked-on-dark',
  'lockup-stacked-on-light', 'mark-on-dark', 'mark-on-light', 'mark-compact-on-dark', 'mark-compact-on-light'];

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true,
});
const page = await browser.newPage();
for (const name of pick) {
  const svg = fs.readFileSync(path.join(src, name + '.svg'), 'utf8');
  const [, , w, h] = svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
  const mmW = 60, mmH = (60 * h) / w; // 60 mm wide; vector, so it scales to any size
  const bg = name.includes('on-dark') ? '#07070B' : 'transparent';
  await page.setContent(`<style>@page{size:${mmW}mm ${mmH}mm;margin:0}html,body{margin:0;background:${bg};-webkit-print-color-adjust:exact}
    svg{display:block;width:${mmW}mm;height:${mmH}mm}</style>${svg.replace(/<\?xml[^>]*>/, '')}`);
  await page.pdf({ path: path.join(out, name + '.pdf'), printBackground: true, preferCSSPageSize: true });
  console.log('wrote', name + '.pdf');
}
await browser.close();
