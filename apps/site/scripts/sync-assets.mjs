// Copy the dataset logos into the site's public dir so they are served at
// /images/vertex/{kind}/{slug}.webp. Run before dev/build.
import { cpSync, existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "../../../packages/data/assets");
const DST = join(HERE, "../public/images/vertex");

if (!existsSync(SRC)) {
  console.warn(`sync-assets: no assets at ${SRC}`);
  process.exit(0);
}

/*
 * Stage into a temp dir, then swap it in with a single rename.
 *
 * Two problems with copying straight onto DST, a directory the dev server is
 * actively serving:
 *
 *  1. **Stale assets are never removed.** `cpSync` only adds and overwrites, so
 *     a logo deleted from the dataset stayed in `public/` and kept being served
 *     forever. Replacing the whole tree prunes it. (Measured: with the old
 *     copy, a planted file survived every sync; with this one it is gone.)
 *  2. **Overwrites are not atomic.** Each file is truncated and rewritten in
 *     place, so a request landing mid-write can read a partial image.
 *
 * `rename` within one filesystem is atomic: a request sees the old tree or the
 * new one, never a half-copied mixture. The old tree must move aside first
 * (rename onto a non-empty directory fails), so the swap is: stage → move old
 * out → move new in → delete old. Only the middle two are a window, and that is
 * two syscalls rather than the length of a ~270-file copy.
 *
 * NB the previously-supposed symptom — transient 404s for logos that exist —
 * did not reproduce: an already-present file is overwritten in place, never
 * unlinked, so it stays readable throughout. The bugs above are the real ones.
 */
const TMP = `${DST}.tmp-${process.pid}`;
const OLD = `${DST}.old-${process.pid}`;

mkdirSync(dirname(DST), { recursive: true });
rmSync(TMP, { recursive: true, force: true });
cpSync(SRC, TMP, { recursive: true });

try {
  if (existsSync(DST)) renameSync(DST, OLD);
  renameSync(TMP, DST);
} finally {
  // Never leave debris behind, whichever step failed.
  rmSync(OLD, { recursive: true, force: true });
  rmSync(TMP, { recursive: true, force: true });
}

console.log(`sync-assets: copied ${SRC} → ${DST}`);
