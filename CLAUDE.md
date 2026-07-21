# CLAUDE.md — durable context for working on plangs

This file holds what is true for *any* task in this repo: the verification
loop, the invariants, the traps, the environment. For project **status** —
what's done, pending, blocked — read [ROADMAP.md](ROADMAP.md); it is the single
status document (it replaced PLAN.md / NEXT-STEPS.md / REFACTOR.md).

Code comments citing `PLAN §n` refer to the executed migration spec, frozen at
`git show 008e073c:PLAN.md`. The v2 implementation lives at tag
`final-plangs-2` (`3a4a2353`).

## Verification loop (use constantly)

```sh
pnpm check                    # biome + knip (dead code is a CI failure)
pnpm build                    # tsc every package + build the site
pnpm -F @plangs/site check    # astro check — the ONLY thing type-checking .astro
pnpm test                     # unit tests
pnpm -F @plangs/site build && pnpm test:browser   # real Chromium
pnpm url-parity               # v3 pages asserted; v2 URL drift printed, never fails
node scripts/data-fmt.mjs     # must report "0 of 495" — data is canonical
```

```sh
pnpm test:visual              # pixel baselines (see below); --update to re-record
```

**A green build means nothing rendered.** Five rendering bugs once shipped
behind fully green gates (grid layout never applied, all facet rows collapsed).
For any visual change, screenshot it and look (Playwright is installed; serve
`apps/site/dist` with sirv). When adding a regression test, re-introduce the
bug and confirm the test fails — a non-faithful repro makes a vacuous test.

*Corollary, measured on the sparklines (E1):* "the element has a plausible
width and height" is not evidence it drew correctly. An `<svg>` whose `viewBox`
is removed still lays out at the right size — the `width`/`height` attributes
supply the intrinsic ratio — while the drawing paints unscaled into a corner.
What detects it is comparing the PAINTED extent to the box
(`polyline.getBoundingClientRect().width / svg.width`), plus the pixel
baseline. Pick the assertion by re-introducing the bug, not by intuition.

### Pixel baselines (`apps/site/test/pixels.browser.test.ts`)

The only tests asserting on **rendered pixels**; everything else asserts on
computed style, which only checks properties someone thought to name. Baselines
live in `apps/site/test/__baselines__/` and are **committed and reviewed**;
`__screenshots__/` is failure/diff debris and is gitignored. Four traps, each
of which produced a *passing* suite that tested nothing:

- **`expect` goes under `browser`, not `test`.** `test.expect.toMatchScreenshot`
  type-checks and is silently ignored; screenshots then land in the default
  location and everything still passes.
- **`resolveScreenshotPath` must return an ABSOLUTE path.** A relative one is
  never written and the assertion retries until the test times out.
- **The browser viewport must exceed the largest iframe** a test loads. Element
  screenshots clip to the viewport, and a baseline recorded from a clipped
  capture matches the next clipped capture perfectly — green, and worthless.
- **Use `expect(el)`, not `expect.element(el)`.** The latter retries, so a real
  mismatch is reported as "Test timed out" instead of "N pixels differ".

Tolerance is **exact (0)** — measured, not assumed. With `stabilize()` applied
(fonts, images, animation, scroll) repeated runs are pixel-identical. At a
"reasonable" 1% the re-introduced backdrop bug failed only 1 of 5 pages; at 0 it
failed all 5. The grid pages are mostly cards, so a missing background moves far
less than 1% of their pixels. Don't loosen it without re-measuring.

## Do not break (the safety nets)

- **The one hard external contract is Linguist compatibility** (pivot
  2026-07-17: v2 compatibility was dropped; Linguist was kept). Concretely:
  the linguist importer's identity fields (`githubName`, `githubLangId`,
  `extensions`, `sources.linguist`) and the disjoint-`owns` model that
  protects them. Every Linguist language we track must keep mapping to its
  Linguist record.
- **`packages/graph/test/fixtures/plangs.legacy.json`** (486 KB, committed) —
  the v2 graph, reconstructed before the v2 code was deleted; its generator
  is gone. It is the **frozen historical record** of the migration — **never
  regenerate it**, there is nothing to "make pass" anymore and regenerating
  destroys the record. Since the pivot it gates nothing: `round-trip.test.ts`
  prints a **two-way** `[drift vs v2]` report (additions, changes, and
  removals — removals listed item by item so data loss stays *visible, not
  locked*), and `url-parity.mjs` prints `[drift vs v2 urls]` the same way.
  Both reports stay *printed, not asserted* (`process.stdout.write`; vitest
  swallows `console.*` from passing tests) — asserting them in either
  direction rebuilds the old "any data change reddens CI" problem. What still
  blocks: the dataset must load with no structural errors, and v3's own pages
  (static routes, grids, blog-from-content) must exist in the build.
- **Legacy-shaped output survives only until deliberately modernized.**
  `toSerializedGraph()` was modernized (E2, 2026-07-19): it emits v3 `pl/nim`
  keys, and `round-trip.test.ts` converts the frozen fixture to v3 keys at
  READ time instead — the fixture on disk stays `pl+nim` forever. `urlKind()`
  still lower-cases `/typesystem/...`; that one is free to change as its own
  tracked effort (ship redirects if the public URLs move), but don't churn it
  casually. Anything that parses the fixture or blog frontmatter still needs
  `legacyToNew`; nothing in v3 should ever WRITE a legacy key.

## Load-bearing subtleties (look like cruft, are not)

Each cost a real bug; each has a test — read the comment above a test before
deleting it.

| Thing | Why it exists |
|---|---|
| `<div class="@container">` wrapping `<div data-grid-root>` in `NodeGrid.astro` | A container **cannot query itself**. `@container` + `@3xl:*` on one element silently disables every container variant. |
| `shrink-0` on facet rows in `FacetsPanel.tsx` | Inside a `max-h-* flex-col` scroller, flex children shrink below content height. Without it all 183 rows collapse into overlapping text. |
| Backdrop on `body::before` (fixed layer), **not** `body` | `backdrop-filter`/`filter`/`transform` on an ancestor becomes the containing block for `position: fixed` — on `body` it put the mobile facets sheet ~19,000px off-screen. Also keeps the vignette viewport-sized (our body scrolls; v2's was `h-dvh`). |
| Handlers in `stores/facets.ts` spreading `...ctx` | `@xstate/store` v4 **replaces** context with the return value. A partial return wiped `selected` and the next facet click threw. |
| `data-facets-ready` on `<html>` | `astro-island` drops `ssr` **before** React attaches handlers; tests clicking on that signal race hydration. This is the deterministic signal — a test hook in prod code, fine to replace, not fine to just delete. |
| `.ts` extensions on relative imports in `schema`/`graph` | The pipeline CLI runs under plain Node ESM, which can't resolve extensionless specifiers. |

## Leave alone

- **The pipeline's ownership model** (`packages/pipeline/src/core/ownership.ts`):
  sources declare `owns`; the sets are disjoint and asserted before every run.
  Deliberately stronger than "reapply after enrichment" (order-dependent
  forever); makes the legacy clobbering bug structurally impossible. Don't
  relax it to "just merge".
- **`packages/data` has no code by design** — that's what makes the PR-based
  contribution model work.
- **Biome's `.astro` exclusion** — its parser is experimental and flags
  frontmatter imports as unused; `astro check` covers those files.

## Knip does not see dead code inside the packages

`pnpm check` fails on dead code, but **not** for anything exported from
`packages/*/src/index.ts`. Those index files are knip *entry* points and
`export *` everything, so every export counts as public API of the workspace
and is never reported — this is **not** a type-only blind spot, as an unused
`export const` proves (measured 2026-07-17 with a probe export; knip stayed
silent for both a type and a value). That is why `PlangData` sat exported and
unused. Treat "knip is green" as "no unused *files* or *dependencies*", not
"no dead exports" — inside these packages, check by hand.

## Environment facts

- **pnpm is 10.34.5 via `mise`; corepack is absent; pnpm 11 cannot be fetched
  here.** `.npmrc` sets `manage-package-manager-versions=false`. Don't bump the
  `packageManager` pin without checking `pnpm -v`.
- **Bun is gone** and v2 is Bun-only — anything needing the old build requires
  tag `final-plangs-2` plus a Bun install.
- **Astro 7** defaults to the Sätteri markdown processor; remark plugins need
  the explicit `@astrojs/markdown-remark` dep.
- **Vitest 4** takes a provider *factory* (`playwright()` from
  `@vitest/browser-playwright`), not the string `"playwright"`.
- **Nothing is deployed and nothing deploys on push.** The legacy Cloudflare
  Pages git integration was disconnected by the owner 2026-07-17, so pushing
  is safe; deploying for real remains owner-led (ROADMAP track 3).
- `pl/.net` is a **dotfile** (`packages/data/nodes/plang/.net.yaml`) —
  invisible to a bare `ls`; don't conclude it's missing.
- **Headless `claude -p` under `acceptEdits` auto-denies every
  non-allowlisted Bash command** (nobody to prompt), and a session cannot
  edit `.claude/settings.local.json` itself (write-protected).
  `roadmap-loop.sh` therefore passes a scoped `--allowedTools` list
  (verification loop + git plumbing — kept in the script, reviewable in
  git). Anything beyond that list still needs
  `ROADMAP_LOOP_PERMISSIONS=bypassPermissions` or an interactive session.
- **Comments in data YAML never survive**: `data-fmt` round-trips node files
  through parse+stringify, so a YAML comment is deleted on the next format.
  Facts that need prose belong in the schema docs or the node's fields.

## Sibling project: `~/dev/unrelated`

The owner's relational-language platform (tiny term/goal/rule IR behind
frontend/strategy/backend seams) — plangs and it orbit the same concepts and
should read as **one program**. The shared history and division of labor is
written up in `~/dev/unrelated/doc/lineage.md` (rainbowfish → plangs →
unrelated): plangs is the live graph+nested-records *testbed and future
backend*; unrelated is where the query surfaces / dream language get built.
It is also the house TS+Python template (committed `mise.toml`, uv workspace,
poe) to copy for any Python core here (D7/O7). Data-model decisions in either
repo should check the other's context first.

## Doc convention

Exactly two documents: this file (durable how-and-why, edit rather than
delete) and ROADMAP.md (status — rewrite freely as work lands: tick what
you did, drop what no longer applies, move any *durable* discovery here).
Don't create new planning/status markdown files.
