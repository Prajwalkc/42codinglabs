// Usage: node render-frames.mjs <input.html> <outDir> [scale]
// Screenshots every element with data-out="name" to <outDir>/<name>.png at its CSS size x scale.
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const [, , input, outDir, scale = '1'] = process.argv;
fs.mkdirSync(outDir, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: 1700, height: 1000, deviceScaleFactor: +scale });
await page.goto('file://' + path.resolve(input), { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
for (const el of await page.$$('[data-out]')) {
  const name = await el.evaluate(e => e.dataset.out);
  await el.screenshot({ path: path.join(outDir, name + '.png') });
  console.log('wrote', name);
}
await browser.close();
