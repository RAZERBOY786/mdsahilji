// Build-time prerender: renders <App /> to HTML and injects it into
// dist/index.html, then appends the JSON-LD graph. Run after both the client
// and SSR Vite builds (see the "build" script in package.json).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexFile = path.join(root, 'dist', 'index.html');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const dataEntry = path.join(root, 'src', 'data', 'site.js');

const fail = (msg) => {
  console.error(`\n[prerender] ${msg}\n`);
  process.exit(1);
};

if (!existsSync(indexFile)) fail('dist/index.html not found \u2014 run the client build first.');
if (!existsSync(ssrEntry)) fail('dist-ssr/entry-server.js not found \u2014 run the SSR build first.');

const { render } = await import(pathToFileURL(ssrEntry).href);
const { buildStructuredData, serializeStructuredData } = await import(pathToFileURL(dataEntry).href);

let appHtml;
try {
  appHtml = render();
} catch (err) {
  fail(`SSR render threw: ${err?.stack || err}`);
}

let html = readFileSync(indexFile, 'utf8');

const ROOT_EMPTY = '<div id="root"></div>';
if (!html.includes(ROOT_EMPTY)) fail('could not find <div id="root"></div> in dist/index.html');
html = html.replace(ROOT_EMPTY, `<div id="root">${appHtml}</div>`);

const jsonLd = `<script type="application/ld+json">${serializeStructuredData(buildStructuredData())}</script>`;
if (!html.includes('</head>')) fail('could not find </head> in dist/index.html');
html = html.replace('</head>', `    ${jsonLd}\n  </head>`);

writeFileSync(indexFile, html, 'utf8');

// Sanity-check that the important crawlable strings survived the render.
const checks = [
  ['name (h1)', 'MD Sahil Johan Islam'],
  ['role', 'Full-Stack &amp; React Native Developer'],
  ['about intro', 'full-stack and React Native developer based in'],
  ['a project', 'MedBlink'],
  ['a skill', 'React Native'],
  ['faq question', 'What services does Sahil offer?'],
  ['faq answer (open text)', 'store-ready builds for Android and iOS'],
  ['json-ld', 'application/ld+json'],
  ['canonical', 'rel="canonical"'],
];
const missing = checks.filter(([, needle]) => !html.includes(needle));
for (const [label] of missing) console.warn(`[prerender] WARNING: expected content missing -> ${label}`);

console.log(
  `[prerender] ok \u2014 ${(html.length / 1024).toFixed(0)} kB HTML, ` +
    `${appHtml.length} chars of app markup, ${checks.length - missing.length}/${checks.length} checks passed`
);
if (missing.length) process.exit(1);
