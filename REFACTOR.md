# Notes for the next refactor

Written 2026-07-15 by the agent that did the v2 → v3 migration, for whoever
cleans this up next. [PLAN.md](PLAN.md) is the original spec (fully executed).
[NEXT-STEPS.md](NEXT-STEPS.md) is the feature/ops backlog. **This file is about
the code**: what's safe to change, what looks like cruft but isn't, and what I'd
fix first.

The honest framing: I wrote this in one pass and shipped a **visibly broken
site** behind green gates. Five rendering bugs got through. Assume my judgement
here is fallible and verify with the loop below rather than trusting prose.

---

## 0. The verification loop (use this constantly)

```sh
pnpm check                    # biome + knip (dead code is a CI failure)
pnpm build                    # tsc every package + build the site
pnpm -F @plangs/site check    # astro check — the ONLY thing type-checking .astro
pnpm test                     # 156 unit
pnpm -F @plangs/site build && pnpm test:browser   # 42 real-Chromium tests
pnpm url-parity               # 514/514 v2 URLs still served
node scripts/data-fmt.mjs     # must report "0 of 495" — data is canonical
```

**A green build means nothing rendered.** That is not a figure of speech: the
build, URL-parity and unit gates were all green while the grid layout never
applied at any width and every facet row was collapsed into overlapping text.
For any visual change, **screenshot it and look**:

```js
// Playwright is installed. Serve apps/site/dist with sirv, then:
await page.goto(url); await page.screenshot({ path: "/tmp/x.png" });
```

And when you add a regression test, **re-introduce the bug and confirm the test
fails**. I nearly shipped a vacuous test because my repro wasn't faithful.

---

## 1. Do not break these (the safety nets)

### `packages/graph/test/fixtures/plangs.legacy.json` (486 KB, committed)

The v2 graph, reconstructed from the v2 TypeScript definitions before they were
deleted. **It is the only surviving proof that the YAML dataset is faithful.**
The script that generated it is gone (its inputs were the v2 packages, now only
at tag `final-plangs-2`). It powers two gates:

- `packages/graph/src/round-trip.test.ts` — YAML → graphology → export must be
  **deep-equal** to it.
- `scripts/url-parity.mjs` — reconstructs every v2 URL from it.

It looks like a big generated blob you could regenerate or drop. **You cannot.**
If you change the dataset shape, the honest move is to change the *serializer*
so the export still matches, not to regenerate the oracle from the thing it is
supposed to be checking.

### Legacy-shaped edge names and keys

`plangRelParadigms`, `pl+nim`-style keys in `/data/plangs.json`, and the
lower-cased `/typesystem/...` URL segment are **deliberate v2 compatibility**,
not sloppiness:

- `toSerializedGraph()` emits legacy `pl+nim` keys so the public dataset stays a
  drop-in for v2 consumers. Internally everything uses `pl/nim`.
- `urlKind()` lower-cases the kind because v2 served `/typesystem/static`.
  "Fixing" it to `/typeSystem/` breaks parity for one kind. `pnpm url-parity`
  catches it.

If you *want* to modernise these, that's legitimate — but do it as a deliberate
break with redirects, not as a tidy-up.

---

## 2. Load-bearing subtleties (look like cruft, are not)

Each of these cost a real bug. There are tests for all of them; if a test looks
pointless, read the comment above it before deleting.

| Thing | Why it exists |
|---|---|
| `<div class="@container">` wrapping `<div data-grid-root>` in `NodeGrid.astro` | A container **cannot query itself**. `@container` + `@3xl:*` on one element silently disables every container variant. The wrapper is the fix. |
| `shrink-0` on facet rows in `FacetsPanel.tsx` | Inside a `max-h-* flex-col` scroller, flex children shrink below content height. Without it **all 183 rows collapse** into overlapping text. |
| Backdrop on `body::before` (fixed layer), **not** `body` | `backdrop-filter`/`filter`/`transform` on an ancestor makes it the containing block for `position: fixed`. On `body` it put the mobile facets sheet **~19,000px off-screen** while computed style still said `fixed`. Also keeps the radial vignette viewport-sized (v2's body was `h-dvh`; ours scrolls). |
| Handlers in `stores/facets.ts` spreading `...ctx` | `@xstate/store` v4 **replaces** context with the return value. Returning a partial wiped `selected`, and the next facet click threw. |
| `data-facets-ready` on `<html>` | `astro-island` drops its `ssr` attribute **before** React attaches handlers. Tests that click on that signal race hydration (2/3 runs failed). This is the deterministic interactive signal. It is a test hook in prod code — fine to replace, **not** fine to just delete. |
| `.ts` extensions on relative imports in `schema`/`graph` | Plain Node ESM can't resolve extensionless specifiers. The pipeline CLI runs under plain Node; without these it needs a resolve-hook shim (there was one; it's gone). |

---

## 3. What I'd actually refactor, highest value first

### 3.1 The graph throws away the types the schema already has ⭐

`packages/schema` defines Zod schemas per kind. `packages/graph` then stores
`data: Record<string, unknown>` (`load.ts`), so **every consumer hand-narrows**:

```ts
name: typeof data.name === "string" ? data.name : p.slug,
ranking: typeof data.languishRanking === "number" ? data.languishRanking : undefined,
```

There are **17 such sites**. Two things cause it:

1. `NodeAttrs.data` is `Record<string, unknown>`.
2. `NODE_SCHEMAS` is annotated `Record<NodeKind, z.ZodObject>`, which **erases
   the per-kind shape**. Drop the annotation and let TS infer, and
   `z.infer<(typeof NODE_SCHEMAS)[K]>` becomes usable.

Target: `NodeAttrs<K extends NodeKind = NodeKind>` with `data: NodeData<K>`, and
kind-narrowing helpers (`getPlang(graph, key)`) so callers get typed data. This
would delete most of the `typeof` noise and catch typos at compile time.

`PlangData` in `zod.ts` is exported and **never used** — it's the vestige of this
idea. (knip didn't flag it; worth confirming why before trusting knip on types.)

### 3.2 The facets island reaches out and mutates the DOM

`FacetsPanel.tsx` does `document.querySelectorAll("[data-grid-item]")` and
toggles `.hidden` — the v2 approach, carried over. It works and is SEO-friendly
(all cards are server-rendered), but it means React state and DOM state are two
sources of truth, and the island silently depends on markup owned by
`NodeGrid.astro`.

Worse, the coupling is **stringly-typed and case-fragile**:

```ts
item.dataset[dim.toLowerCase()]     // island
data-typesystems={...}              // NodeGrid.astro — MUST be lowercase
```

`dim` is `typeSystems`; the attribute must be written `data-typesystems` or the
`dataset` lookup silently misses and that facet just never filters. Nothing
type-checks this.

Options, in order of my preference:
1. Keep SSR cards; give the grid a tiny typed contract (a shared `DIMS` const +
   a helper that emits and reads the attribute), so the two sides can't drift.
2. Render the grid client-side from `/data/facets/{kind}.json` (11.5 KB gzipped,
   already built) with a static top-N for SEO — this is what PLAN §6.2 wanted.
   Bigger change; only worth it if you also want virtualization.

### 3.3 `apps/site/src/lib/view.ts` is doing three jobs

It holds URL policy (`hrefForKey`, `urlKind`), graph queries (`nodeCards`,
`relationsFor`, `edgeBetween`), and view models (`NodeDetail`). The graph
queries arguably belong in `packages/graph` (which already has `query.ts`), and
the URL policy is shared with `markdown.ts` and the JSON endpoints.

Also `edgeBetween()` linear-scans all 52 edges per (kind, dim) pair. Irrelevant
at this size — **don't "optimise" it**, but if you're touching it anyway, an
index built once is simpler to read than the scan.

### 3.4 Deprecated kinds are still fully present

`KINDS` marks `author`, `bundle`, `post` as `deprecated: true` and nothing acts
on it. That's Decision D2 (see NEXT-STEPS §4): I kept all 15 kinds because
folding them would have changed the dataset while the round-trip gate was being
established. **The gate is locked in now**, so folding is safe to do properly:
`bundle` (2 nodes) → `tool`, `author` (1) → blog frontmatter. `post` is already
moot — posts are Astro content, not graph nodes. Either do it or drop the flag;
a `deprecated` marker nothing enforces is just a lie.

### 3.5 Smaller, genuinely safe cleanups

- `PlangCard.isTranspiler` is computed and threaded through but never rendered.
- `checkIntegrity()` has an `assetsDir` option whose body is an empty `if` with
  a "hook left for future use" comment. Delete it or implement it.
- `scripts/data-fmt.mjs` imports `formatText` from `packages/pipeline` internals
  — a script reaching into a package's guts. Either export it properly or move
  the formatter to a place both can own.
- `apps/site/scripts/sync-assets.mjs` `cp -R`s over `public/` while a dev server
  may be serving it → transient 404s. Make it atomic (temp dir + rename) or copy
  only changed files.

---

## 4. What I'd leave alone

- **The pipeline's ownership model.** Sources declare `owns`; the sets are
  disjoint and asserted before every run, so no two sources can write the same
  field. This is deliberately *stronger* than PLAN §5 (which said "reapply
  pipeline fields after enrichment" — order-dependent forever). It reads like
  over-engineering until you notice it makes the legacy clobbering bug
  structurally impossible. Don't relax it to "just merge".
- **`packages/data` has no code by design.** Keep it that way; it's what makes
  the PR-based contribution model work.
- **Biome's `.astro` exclusion.** Not laziness — its parser is experimental and
  reports frontmatter imports as unused (PLAN §11 predicted this). `astro check`
  covers those files. If you re-enable it, verify against real files first.

---

## 5. Facts worth knowing before you start

- **pnpm is 10.34.5 via `mise`; corepack is absent and pnpm 11 cannot be
  fetched here.** `.npmrc` sets `manage-package-manager-versions=false`. Don't
  "upgrade" the `packageManager` pin without checking `pnpm -v` first — it
  breaks every pnpm command.
- **Bun is gone**, and the v2 code is Bun-only. Anything that says "run the old
  build" is impossible without installing Bun; v2 lives at tag
  `final-plangs-2`.
- **Astro 7 defaults to the Sätteri markdown processor**; remark plugins require
  `@astrojs/markdown-remark` as an explicit dep (that's why it's there).
- **Vitest 4 takes a provider *factory*** (`playwright()` from
  `@vitest/browser-playwright`), not the string `"playwright"`.
- **Nothing is deployed and nothing deploys on push.** `plangs.page` still
  serves v2 and the legacy Cloudflare **Pages** project is still live. See
  NEXT-STEPS §3 before pushing — the Pages git integration is invisible from the
  repo and may fire on push.
- `pl/.net` is a **dotfile** (`packages/data/nodes/plang/.net.yaml`) — invisible
  to a bare `ls`. Don't conclude it's missing.
