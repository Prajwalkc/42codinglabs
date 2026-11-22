// Usage: node render.mjs <input.html> <output.(pdf|png)> [widthPx heightPx scale]
// PDF uses the page's CSS @page size. PNG renders the viewport at the given size.
import puppeteer from 'puppeteer-core';
import path from 'node:path';

const [, , input, output, w = '1200', h = '800', scale = '2'] = process.argv;
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: +w, height: +h, deviceScaleFactor: +scale });
await page.goto('file://' + path.resolve(input), { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
if (output.endsWith('.pdf')) {
  await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true });
} else {
  await page.screenshot({ path: output, fullPage: true });
}
await browser.close();
console.log('wrote', output);
