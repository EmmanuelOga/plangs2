// Serve apps/site/dist the way a static host would, for auditing (PLAN §2a).
//
// `dev: true` is NOT a dev-mode nicety here — it is required. With `dev: false`
// sirv builds an in-memory index at boot and then 404s
// `/images/vertex/plang/c++.webp`: the `+` in the filename does not survive the
// lookup. That produced a phantom "browser errors were logged to the console"
// in a Lighthouse run and cost a Best Practices point, for a file that is
// present in dist and serves fine everywhere else. `dev: true` stats the
// filesystem per request and serves it.
//
// Worth remembering for the prod smoke test (ROADMAP 3d): any host that decodes
// `+` in a path will lose the C++ logo.
//
// Usage: node scripts/serve-dist.mjs [port]

import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sirv from "sirv";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "../apps/site/dist");
const port = Number(process.argv[2] ?? 4321);

const assets = sirv(DIST, { dev: true, etag: false });
createServer((req, res) =>
  assets(req, res, () => {
    res.statusCode = 404;
    res.end("not found");
  }),
).listen(port, () => console.log(`serving ${DIST} on http://localhost:${port}`));
