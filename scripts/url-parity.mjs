// URL check: v3's own pages are ASSERTED; v2 URL parity is REPORTED.
//
// Was the Phase 3 migration gate (PLAN §10). The 2026-07-17 pivot dropped v2
// compatibility, so a legacy URL disappearing no longer fails — it is printed
// as [drift vs v2 urls] so a deliberate removal is visible in the run (pair a
// removal with redirects when it matters). What still FAILS the script is v3's
// own surface being broken: static routes, grid/reference pages, and a blog
// page for every content file — those derive from the current site, and a
// miss means the build is wrong, not that v2 differed.
//
// The legacy URL set is reconstructed from the frozen fixture (every v2
// vertex) plus the legacy `href` rules from packages/plangs/src/graph/vertex_base.ts:
//   plang → /{plainKey};  post → /blog/{plainKey};  other → /{kind}/{plainKey}
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

// Asserted: v3's own surface. Blog pages derive from the content dir, so a
// miss there is a broken build, not v2 drift.
const ASSERTED = [
  ["blog posts (from content files)", blogUrls()],
  ["static pages", STATIC_URLS],
  ["grid/reference pages", NEW_URLS],
];

let failed = 0;
let total = 0;
for (const [label, urls] of ASSERTED) {
  const missing = urls.filter(u => !isServed(u));
  total += urls.length;
  failed += missing.length;
  const status = missing.length ? "FAIL" : "ok";
  console.log(`${status.padEnd(5)} ${label}: ${urls.length - missing.length}/${urls.length}`);
  for (const m of missing.slice(0, 15)) console.log(`        missing: ${m}`);
  if (missing.length > 15) console.log(`        … and ${missing.length - 15} more`);
}

// Reported: v2 URL parity. Removals print, item by item, and never fail.
const legacy = legacyVertexUrls();
const legacyMissing = legacy.filter(u => !isServed(u));
if (legacyMissing.length) {
  console.log(`\n[drift vs v2 urls] ${legacyMissing.length} of ${legacy.length} legacy URLs no longer served:`);
  for (const m of legacyMissing.slice(0, 25)) console.log(`[drift vs v2 urls]   - ${m}`);
  if (legacyMissing.length > 25) console.log(`[drift vs v2 urls]   … and ${legacyMissing.length - 25} more`);
} else {
  console.log(`\n[drift vs v2 urls] none — all ${legacy.length} legacy vertex URLs still served.`);
}

console.log(`\n${total - failed}/${total} required URLs served.`);
if (failed) {
  console.error(`URL check FAILED: ${failed} required v3 pages missing.`);
  process.exit(1);
}
console.log("URL check OK — every required v3 page is served.");
