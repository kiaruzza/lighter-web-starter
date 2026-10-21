import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { spawn } from 'node:child_process';
import { readdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

async function htmlRoutes(dir, root = dir) {
  const routes = [];
  for (const name of await readdir(dir)) {
    const file = join(dir, name);
    if ((await stat(file)).isDirectory()) routes.push(...(await htmlRoutes(file, root)));
    else if (file.endsWith('.html')) {
      const value = relative(root, file).split(sep).join('/');
      routes.push(value === 'index.html' ? '/' : `/${value}`);
    }
  }
  return routes.sort();
}

const host = 'http://127.0.0.1:4173';
const server = spawn(
  process.execPath,
  [
    'node_modules/astro/bin/astro.mjs',
    'preview',
    '--ignore-lock',
    '--host',
    '127.0.0.1',
    '--port',
    '4173',
  ],
  { stdio: 'ignore' },
);
const browser = await chromium.launch({ headless: true }).catch((error) => {
  server.kill();
  console.error('Playwright browser unavailable. Run: npx playwright install chromium');
  throw error;
});
try {
  let ready = false;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      await fetch(`${host}/`);
      ready = true;
      break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  if (!ready) throw new Error(`Preview server did not start at ${host}`);
  const context = await browser.newContext();
  const page = await context.newPage();
  const equivalents = [['/', '/en/'], ['/progetto/', '/en/project/'], ['/404.html', '/en/404/']];
  for (const path of await htmlRoutes('dist')) {
    const route = path.replace(/index\.html$/, '');
    const language = path.startsWith('/en/') ? 'en' : 'it';
    await page.goto(`${host}${path}`);
    if (await page.locator('html').getAttribute('lang') !== language)
      throw new Error(`${path}: incorrect document language`);
    const pair = equivalents.find(pair => pair.includes(route));
    if (!pair) throw new Error(`${route}: add an equivalent-page test`);
    const noindex = await page.locator('meta[name="robots"][content*="noindex"]').count();
    if (!noindex) {
      const canonical = new URL(await page.locator('link[rel="canonical"]').getAttribute('href'));
      if (canonical.pathname !== route) throw new Error(`${path}: incorrect canonical`);
      for (const [index, targetLanguage] of ['it', 'en'].entries()) {
        const href = await page.locator(`link[rel="alternate"][hreflang="${targetLanguage}"]`).getAttribute('href');
        if (new URL(href).pathname !== pair[index]) throw new Error(`${path}: incorrect language alternate`);
      }
    }
    const icons = page.locator('svg.icon');
    for (const icon of await icons.all()) {
      if (await icon.getAttribute('aria-hidden') !== 'true' || await icon.getAttribute('focusable') !== 'false')
        throw new Error(`${path}: decorative icons must be hidden and nonfocusable`);
    }
    for (const colorScheme of ['light', 'dark']) {
      await page.emulateMedia({ colorScheme });
      const results = await new AxeBuilder({ page }).analyze();
      if (results.violations.length) {
        console.error(`${path} (${colorScheme}): ${results.violations.length} axe violations`);
        for (const item of results.violations) console.error(`- ${item.id}: ${item.help}`);
        process.exitCode = 1;
      } else console.log(`${path} (${colorScheme}): no automated axe violations`);
    }
    await page.setViewportSize({ width: 320, height: 800 });
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1))
      throw new Error(`${path}: horizontal overflow at 320 CSS pixels`);
    await page.setViewportSize({ width: 1280, height: 720 });
  }
  const sitemap = await (await fetch(`${host}/sitemap.xml`)).text();
  for (const path of equivalents.slice(0, 2).flat()) {
    if (!sitemap.includes(`${path}</loc>`)) throw new Error(`Sitemap missing ${path}`);
  }

  const noJs = await browser.newContext({ javaScriptEnabled: false });
  try {
    const plain = await noJs.newPage();
    for (const path of await htmlRoutes('dist')) {
      await plain.goto(`${host}${path}`);
      if (await plain.locator('h1').count() !== 1) throw new Error(`${path}: one h1 is required even without JS`);
      await plain.keyboard.press('Tab');
      if (await plain.locator('.skip-link').evaluate(el => el !== document.activeElement))
        throw new Error(`${path}: the first Tab must reach the skip link`);
      await plain.keyboard.press('Enter');
      if (!plain.url().endsWith('#main-content')) throw new Error('Skip link did not work');
      const language = path.startsWith('/en/') ? 'it' : 'en';
      await plain.locator(`.language-nav a[lang="${language}"]`).click();
      if (await plain.locator('html').getAttribute('lang') !== language)
        throw new Error(`${path}: language navigation must work without JS`);

    }
  } finally { await noJs.close(); }
  await context.close();
} finally {
  await browser.close();
  server.kill();
}
