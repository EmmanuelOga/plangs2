// PHASE 3 GATE (PLAN §10): URL-parity crawl.
//
// The legacy site is gone (it needed Bun), so instead of crawling an old build
// we reconstruct the exact legacy URL set from two legacy-derived sources:
//   1. the committed legacy reference fixture (every v2 vertex, v2 keys), and
//   2. the legacy `href` rules from packages/plangs/src/graph/vertex_base.ts:
//        plang → /{plainKey}
//        post  → /blog/{plainKey}
//        other → /{vertexName.toLowerCase()}/{plainKey}
// …then assert every one of those URLs exists in the new static build.
//
// Usage: pnpm -F @plangs/site build && node scripts/url-parity.mjs

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, "..");
const DIST = join(REPO, "apps/site/dist");
const FIXTURE = join(REPO, "packages/graph/test/fixtures/plangs.legacy.json");
const BLOG_SRC = join(REPO, "apps/site/src/content/blog");

if (!existsSync(DIST)) {
  console.error(`No build at ${DIST}. Run: pnpm -F @plangs/site build`);
  process.exit(1);
}

const plainKey = key => key.slice(key.indexOf("+") + 1);

/** Every URL the v2 site served for a graph vertex. */
function legacyVertexUrls() {
  const { vertices } = JSON.parse(readFileSync(FIXTURE, "utf8"));
  const urls = [];
  for (const [kind, byKey] of Object.entries(vertices)) {
    for (const key of Object.keys(byKey)) {
      const pk = plainKey(key);
      if (kind === "plang") urls.push(`/${pk}`);
      else if (kind === "post") urls.push(`/blog/${pk}`);
      else urls.push(`/${kind.toLowerCase()}/${pk}`);
    }
  }
  return urls;
}

/** Blog posts are content files, not graph vertices, in v3. */
function blogUrls() {
  if (!existsSync(BLOG_SRC)) return [];
  return readdirSync(BLOG_SRC)
    .filter(f => f.endsWith(".md"))
    .map(f => `/blog/${f.replace(/\.md$/, "")}`);
}

/** Static routes the v2 site served (PLAN §6.1). `/edit` is dropped by D3. */
const STATIC_URLS = ["/", "/about", "/blog", "/plangs"];

/** Routes v3 adds (grids + reference lists) — checked so nav never 404s. */
const NEW_URLS = [
  "/tools",
  "/libraries",
  "/apps",
  "/communities",
  "/learning",
  "/subsystems",
  "/licenses",
  "/paradigms",
  "/platforms",
  "/tags",
  "/typesystems",
];

/** A URL is served if dist has `<url>/index.html` or `<url>.html`. */
function isServed(url) {
  const rel = url === "/" ? "index.html" : `${url.replace(/^\//, "")}`;
  return existsSync(join(DIST, rel, "index.html")) || existsSync(join(DIST, `${rel}.html`)) || existsSync(join(DIST, rel));
}

const groups = [
  ["legacy vertex pages", legacyVertexUrls()],
  ["legacy blog posts", blogUrls()],
  ["legacy static pages", STATIC_URLS],
  ["new v3 pages", NEW_URLS],
];

let failed = 0;
let total = 0;
for (const [label, urls] of groups) {
  const missing = urls.filter(u => !isServed(u));
  total += urls.length;
  failed += missing.length;
  const status = missing.length ? "FAIL" : "ok";
  console.log(`${status.padEnd(5)} ${label}: ${urls.length - missing.length}/${urls.length}`);
  for (const m of missing.slice(0, 15)) console.log(`        missing: ${m}`);
  if (missing.length > 15) console.log(`        … and ${missing.length - 15} more`);
}

console.log(`\n${total - failed}/${total} URLs served.`);
if (failed) {
  console.error(`URL parity FAILED: ${failed} missing.`);
  process.exit(1);
}
console.log("URL parity OK — every v2 URL is served by the v3 build.");
