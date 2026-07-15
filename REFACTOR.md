# How this code thinks

Written 2026-07-15 by the agent that did the v2 → v3 migration, for whoever works
on this next. **This file is durable** — it records invariants, traps, and *why*
the code is the way it is. It is not a task list and does not get "done"; when a
task here is finished, the *knowledge* usually still matters, so edit it rather
than deleting it.

The three docs, three lifetimes:

| Doc | What | Lifetime |
| --- | --- | --- |
| [PLAN.md](PLAN.md) | The migration spec. **Executed.** | history — frozen |
| REFACTOR.md (this) | Invariants, traps, refactor targets. | **durable** |
| [NEXT-STEPS.md](NEXT-STEPS.md) | What's left. | ephemeral — rewrite freely |

**If you are here to refactor:** read this file, then do the work, then **rewrite
NEXT-STEPS.md to reflect the new reality** — tick what you did, drop what no
longer applies, and add what you discovered. Move any *durable* finding into this
file instead of leaving it in the backlog. The two were duplicating each other
and rotting in parallel; that's why they were split this way.

The honest framing: I wrote this in one pass and shipped a **visibly broken
site** behind green gates. Five rendering bugs got through. Assume my judgement
here is fallible — **§3's ranking especially is a hypothesis, not a finding**.
Verify with the loop below rather than trusting prose.

---

## 0. The verification loop (use this constantly)

```sh
pnpm check                    # biome + knip (dead code is a CI failure)
pnpm build                    # tsc every package + build the site
pnpm -F @plangs/site check    # astro check — the ONLY thing type-checking .astro
pnpm test                     # 158 unit
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

- `packages/graph/src/round-trip.test.ts` — asserts **nothing from v2 was
  lost**: every v2 vertex kind, edge name, vertex key and edge (src → dst)
  must still exist. New nodes, new edges and changed/added fields are allowed
  and show up in a printed drift report (`[drift vs v2] …` in the test
  output). It was strict deep-equality until 2026-07-15 (§3.0); the proof of
  losslessness is in the git log — the strict form passed at `dd7c0f0c`, the
  migration itself.
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

### 3.0 ✅ The migration gate now permits data evolution (done 2026-07-15)

`packages/graph/src/round-trip.test.ts` used to assert **deep equality**
against `plangs.legacy.json`, which meant any data change reddened CI — the
first pipeline run, every human YAML PR, the small data fixes in §3.4/§3.5.
With the owner's sign-off it was narrowed from "nothing changed" to
**"nothing was lost"** — the contract is described in §1 (fixture section).

Verified in both directions before landing: adding a `name:` to `tool/pip`
(the exact case that used to fail) now passes and shows `~1 changed` in the
drift report; deleting a node or a single edge fails with the missing
keys/edges named in the assertion diff.

What must stay true (the durable part):

- **Never regenerate the fixture** to make the gate pass — §1 explains why.
- The drift report is **printed, not asserted** (`process.stdout.write`,
  because vitest's default reporter swallows `console.*` from passing tests).
  If it ever becomes an assertion again, you've rebuilt the old problem.

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

### 3.4 D2 — the deprecated kinds (analysed; my recommendation is "not yet")

PLAN §9's **Decision D2** says: fold `bundle` + `author` + `post`, and "grow or
fold" the underpopulated `subsystem` (1) / `app` (4) **after the data-source
imports run**. `KINDS` marks the first three `deprecated: true` and *nothing
enforces it* — a marker that lies.

I deferred D2 during the migration because folding changes the dataset while the
round-trip gate was being established. Here's the state, checked against real
data rather than the plan:

| Kind | Nodes | Reality |
| --- | --- | --- |
| `post` | **0** | ✅ **already folded.** No `nodes/post/` dir; the blog is Astro content. D2 is one-third done. |
| `bundle` | 2 | `bun/plangs`, `bun/py-one` |
| `author` | 1 | `author/geo` — the repo owner |

Two findings that aren't in the plan:

- **`bun/plangs` is stale content.** Its tools are `biomejs, entr, esbuild,
  overmind` — the *v2* stack, which this migration deleted. It documents a
  bundle that no longer exists.
- **The `name`-optional hack traces here.** Both bundles (plus `tool/pip`,
  `tool/vscode`) have no `name`, which is why `packages/schema/src/zod.ts`
  weakens `name: z.string()` to `.optional()` for all 495 nodes. Naming those 4
  would let it be required again — a data change, allowed now that §3.0 is done.

**Costs of folding, measured:**

- **URL parity drops 514 → 511.** v2 served `/bundle/plangs`, `/bundle/py-one`,
  `/author/geo`; all three are live pages today. Needs redirects or an explicit
  decision to 404 them.
- **It touches an inference rule**, not just data:
  `{ kind: "hoist", path: ["bundleRelTools", "plangRelTools"], as: "bundleRelPlangs" }`
  in `packages/schema/src/inference.ts` — the Bundle→Tool→Plang rule from the
  README. Folding `bundle` means reworking it, plus 4 edge definitions.
- `author/geo` carries rels to 4 communities and a bio page; blog frontmatter
  can't hold those.

**My recommendation: don't fold yet — D2's own precondition is unmet.** The plan
says to decide "after the data-source imports run"; **no importer has run**
(NEXT-STEPS §1). You'd be pruning a taxonomy on data that hasn't arrived — PLDB
and Wikidata could plausibly populate `app`/`subsystem`. Nothing but a human will
ever populate `bundle`.

In order (data changes are unblocked since §3.0):

1. **Drop the `deprecated` flag** (or make it mean something). It costs nothing
   and removes a lie. Safe today — it's code, not data.
2. **Fix `bun/plangs`** to describe the v3 stack, and **name the 4 nameless
   nodes**, then tighten `name` back to required. Adds value instead of removing
   it. Unblocked now that §3.0 is done.
3. **Revisit folding after the first real pipeline run**, with real counts.

The genuinely open question is a **product** one, not technical: *is "a curated
bundle of tools" a concept plangs wants?* It's a nice idea that never grew past
2 entries, one of them stale. If yes, invest in it; if no, fold it. Ask the owner
— don't infer it from the node count.

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
