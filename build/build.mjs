// Generates the static site: node build/build.mjs
// Output: /index.html and /<slug>/index.html for each page in lib.mjs PAGES.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, SITE, context, render } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().slice(0, 10);

for (const key of Object.keys(PAGES)) {
  const { default: page } = await import(`./pages/${key}.mjs`);
  const data = page(context(key));
  const out = join(root, PAGES[key].path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render({ ...data, c: context(key) }));
  console.log('built', PAGES[key].path || '/');
}

writeFileSync(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(PAGES).map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
writeFileSync(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
