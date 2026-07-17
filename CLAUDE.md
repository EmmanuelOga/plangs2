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
pnpm url-parity               # 514/514 v2 URLs still served
node scripts/data-fmt.mjs     # must report "0 of 495" — data is canonical
```

**A green build means nothing rendered.** Five rendering bugs once shipped
behind fully green gates (grid layout never applied, all facet rows collapsed).
For any visual change, screenshot it and look (Playwright is installed; serve
`apps/site/dist` with sirv). When adding a regression test, re-introduce the
bug and confirm the test fails — a non-faithful repro makes a vacuous test.

## Do not break (the safety nets)

- **`packages/graph/test/fixtures/plangs.legacy.json`** (486 KB, committed) —
  the v2 graph, reconstructed before the v2 code was deleted. **The only
  surviving proof the YAML dataset is faithful**; its generator is gone.
  Powers `round-trip.test.ts` ("nothing from v2 was lost": every v2 kind, edge
  name, key and edge must still exist; additions/changes are allowed and print
  a `[drift vs v2]` report) and `scripts/url-parity.mjs`. **Never regenerate
  it** to make a gate pass — if the dataset shape changes, change the
  *serializer* so the export still matches. And the drift report must stay
  *printed, not asserted* (`process.stdout.write`; vitest swallows `console.*`
  from passing tests) — asserting it rebuilds the old "any data change reddens
  CI" problem.
- **Legacy-shaped output is deliberate v2 compatibility**, not sloppiness:
  `toSerializedGraph()` emits `pl+nim`-style keys (public dataset stays a v2
  drop-in; internally it's `pl/nim`), and `urlKind()` lower-cases
  `/typesystem/...` because v2 served it that way. Modernizing these is
  legitimate only as a deliberate break with redirects.

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
- **Nothing is deployed and nothing deploys on push** — but the legacy
  Cloudflare Pages project may still have an invisible git integration on
  `main`. Read ROADMAP.md "Deploy / cutover" **before pushing**.
- `pl/.net` is a **dotfile** (`packages/data/nodes/plang/.net.yaml`) —
  invisible to a bare `ls`; don't conclude it's missing.

## Doc convention

Exactly two documents: this file (durable how-and-why, edit rather than
delete) and ROADMAP.md (status — rewrite freely as work lands: tick what
you did, drop what no longer applies, move any *durable* discovery here).
Don't create new planning/status markdown files.
