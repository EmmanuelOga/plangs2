# ROADMAP

**The single status document.** Everything pending, partial, done or deferred
lives here — rewrite it freely as work lands: tick items, record measured
results, move durable discoveries to [CLAUDE.md](CLAUDE.md). Read CLAUDE.md
**before changing code** — it has the verification loop, the invariants, and
the traps. History: the executed migration spec is frozen at
`git show 008e073c:PLAN.md` (code comments citing `PLAN §n` point into it);
the v2 implementation is at tag `final-plangs-2`.

Legend: ✅ done · 🔶 partial · ⬜ pending · 🧑 needs the owner (skip, don't attempt) · ⛔ deferred by decision

Counts in prose go stale — trust the gates (CLAUDE.md has the list), not this
file's numbers.

## Hard rules when executing this roadmap

1. **Never `git push`.** The legacy Cloudflare Pages project may still have a
   git integration on `main` (item 3a — dashboard-only, human check). A push
   could trigger the old v2 build against a repo where it no longer exists.
   Commit locally, one item per commit; the owner pushes after clearing 3a.
2. **Never deploy.** `wrangler deploy --dry-run` is fine; anything that
   touches Cloudflare for real is not.
3. **Never regenerate `packages/graph/test/fixtures/plangs.legacy.json`** to
   make a gate pass — it is the only surviving proof of v2 fidelity
   (CLAUDE.md "Do not break").
4. **Run the full verification loop after each item** (CLAUDE.md has the
   commands). For anything visual, screenshot and look — five rendering bugs
   once shipped behind fully green gates.
5. Items marked 🧑 or ⛔ are not yours: skip them and note why in the commit
   or summary. When an item needs a product decision, ask — don't decide.
6. As each item lands, update this file: flip its status, replace estimates
   with measured results, prune what no longer applies.

## Snapshot

- ✅ **v2 → v3 migration complete** (all six phases of the 2026 plan; every
  gate green). `main` is Astro 7 + React islands + YAML/graphology data.
- ✅ **Migration gate narrowed** (2026-07-15): data changes pass CI with a
  printed `[drift vs v2]` report; deleting any v2 node/edge still fails.
- ⬜ **Nothing is deployed.** `plangs.page` still serves v2; nothing deploys
  on push (see track 3 — and hard rule 1).
- ⬜ **No importer has run for real.** `packages/data` is still byte-for-byte
  the v2 migration output.

## Suggested execution order

Safety nets before refactors; refactors before data churn; scoring last so it
measures the final state.

| Phase | Items | Why this order |
|---|---|---|
| A. Widen the nets | 2c, 2b | Visual snapshots + broader browser tests make every later change safer. |
| B. Refactors | 4a → 4e (ranked) | Land under the Phase A nets; each is an independent commit. |
| C. Data | 1a, 1b, then 1c one source at a time | 1b unblocks the deferred D2/D5 decisions (owner's call, not yours). |
| D. Measure | 2a, 2d, 3b | Score the finished state; 3b is validation only, no deploy. |
| E. Automation | 1e, (1d if key present) | Authored + committed; untestable until the owner pushes. |

Track 3 beyond 3b is 🧑 human-only. Track 5 is ⛔ by decision.

## Dependencies at a glance

```
1a QID seeding ──────────► 1c wikidata import becomes useful
1b first real import run ─► 5-D2 folding decision, 5-D5 sparklines
3a CF dashboard check 🧑 ─► any push / all of track 3
migration gate narrowed ──► 4e data fixes (done — unblocked)
```

## 1. Data pipeline

✅ Framework, four importers (`linguist`, `languish`, `wikidata`, `pypl`),
AI enrichment and CLI all exist, fixture-tested and idempotent.
What's left is real-world operation:

```sh
pnpm pipeline run --source=linguist --dry-run   # inspect
pnpm pipeline run --source=linguist             # write
```

- ⬜ **1a. Seed Wikidata QIDs** — the highest-value source matches **0 of
  267** languages because no node carries `sources.wikidata` and the importer
  refuses to guess. Do the one-time SPARQL batch-resolve (PLAN §5.3) landing
  `sources.wikidata: Q…` per plang node; where the match is ambiguous, leave
  the node unset and list it for the owner rather than guessing.
  *Done when:* `pnpm pipeline run --source=wikidata --dry-run` matches most
  of the 267 and the unmatched remainder is explicitly listed.
- ⬜ **1b. First real refresh** — run each importer (dry-run first, then
  write), review the diff and the printed `[drift vs v2]` report, commit per
  source with the report summary in the message. Last dry-runs: linguist 175
  matched / 343 changes, languish 148 / 584 @2025Q2, pypl 28 / 84 @2026-07.
  *Done when:* data reflects a real refresh and every gate is green.
- ⬜ **1c. Register remaining sources** (adoption order, PLAN §5): `pldb`
  (whitelist-gated), `innovation-graph`, `tiobe`, `homebrew`,
  `stackexchange`. Not stubbed — just unwritten (note in
  `packages/pipeline/src/sources/index.ts`). One source per commit, matching
  the existing four: fixture-tested, idempotent, disjoint `owns`.
  Skipped by decision: DBpedia, IEEE, Reddit, GH-Archive.
- ⬜ **1d. First AI enrichment run** — never run; requires
  `ANTHROPIC_API_KEY` in the environment (if absent, skip and note).
  Typechecked and unit-tested with a mocked client (`claude-sonnet-5`, tool
  schema derived from the Zod node schema). Treat the output as untrusted:
  land it as its own clearly-marked commit for the owner to review, never
  mixed with other work.
- ⬜ **1e. Monthly data-refresh GitHub Action** that opens a PR. Author and
  commit `.github/workflows/…`; it cannot run until the owner pushes, so mark
  it untested in the commit message.

> Before touching source ownership, read CLAUDE.md "Leave alone" — the
> disjoint-`owns` assertion is deliberate and load-bearing.

## 2. Verification debt

> Five rendering bugs once shipped behind green gates — hence this track.
> CLAUDE.md "Verification loop" has the lesson.

- ⬜ **2a. Lighthouse mobile ≥ 95 + axe clean** — the Phase 5 gate, still
  unmeasured. Build, serve `apps/site/dist` with sirv, score with Lighthouse
  (mobile) and axe (Playwright is installed). The a11y work itself is done
  (real buttons, `aria-pressed`/`aria-expanded`, 44px targets, `aria-live`
  counts) but nothing has scored it. *Done when:* scores are recorded here;
  fix what falls short.
- ✅ **2b. Broaden browser coverage** (2026-07-17) — browser suite went
  37 → 63 tests. Added `theme.browser.test.ts` (toggle, persistence across a
  real navigation, pre-paint inline script, repaint), `prompt-menu.browser.test.ts`
  (open/close, Escape, outside click, prompt contents, live filter state
  reaching the prompt) and `blog.browser.test.ts` (index ordering, markdown
  rendering, vertex refs). Dark mode rendered visually is covered by 2c's
  `grid-dark` baseline. Every test verified faithful by re-introducing the bug
  it guards (deferred theme script, dropped localStorage write, dropped filter
  plumbing, wrong markdown-twin URL, unregistered dismiss handlers, unwired
  remark plugin) — each failed as intended.
  - 🧑 **Found: vertex refs are not linked inside raw HTML blocks.**
    `2025_01_01_python.md` hand-writes a `<table>`, and
    `remark-vertex-refs` walks mdast text nodes — raw HTML arrives as one
    opaque `html` node, so readers see a literal `(pl+python)` in the MyPy
    table cell. **Pre-existing, not a migration regression**: the live v2 site
    renders the same literal string (verified over HTTP 2026-07-17). Needs the
    owner: fix the authored content (restructure the table so the refs sit in
    markdown text) or teach the plugin to walk raw HTML (regex over raw HTML —
    riskier). The blog test is scoped to `p`/`li` prose meanwhile; tighten it
    to the whole `<article>` once fixed.
- ✅ **2c. Visual regression snapshots** (2026-07-17) —
  `apps/site/test/pixels.browser.test.ts` pixel-compares 5 views (home, wide
  grid, detail, dark grid, mobile facets sheet) at **exact** tolerance;
  baselines committed in `test/__baselines__/`. Proven faithful: with the real
  backdrop bug re-introduced, all 37 DOM-based browser tests still passed and
  all 5 pixel tests failed. See CLAUDE.md "Pixel baselines" for the traps.
  - 🔶 **CI does not enforce it yet.** Baselines are per-(browser, platform);
    only `-chromium-darwin` exists, CI is `ubuntu-latest`, and Linux baselines
    can't be produced here (no Docker). On a platform with no baselines the
    suite **skips loudly** rather than failing CI or fabricating a reference.
    To close: run `pnpm test:visual --update` on Linux (or in the CI image),
    **look at** the 5 PNGs, and commit them.
- ⬜ **2d. Verify the Claude/ChatGPT prefill URLs** used by
  `apps/site/src/islands/PromptMenu.tsx` (`https://claude.ai/new?q=…`,
  `https://chatgpt.com/?q=…`) — written from documented behaviour, never
  tested against the live services. Needs live web access; best-effort — if
  unverifiable from this environment, note that here rather than guessing.

## 3. Deploy / cutover — 🧑 human-led beyond 3b

Observed 2026-07-15 (verified by HTTP): `plangs.page` → 200, still v2;
`plangs2.pages.dev` → 200, the legacy Cloudflare **Pages** project is live.
The v2 site 200s **every** path (catch-all), so "is the new site up?" must be
answered by an `astro-island` / `/_astro/` marker, never by status code.

- 🧑 **3a. Check the CF Pages git integration FIRST** (dashboard-only, cannot
  be verified from the repo). v2 deployed via a git integration configured in
  the CF dashboard; if it's still connected to `main`, a push triggers the
  **old** build command against a repo where `output/` and the Bun build no
  longer exist — likely a noisy failure, possibly a wrong-directory publish.
  Disconnect or repoint it **before any push**. (Hence hard rule 1.)
- ⬜ **3b. Build + dry-run** (safe to run): `pnpm -F @plangs/site build` →
  `apps/site/dist` (~1800 files, ~15 MB); `npx wrangler deploy --dry-run`
  validates config. Note: `wrangler.toml` says `name = "plangs"` but the
  existing project is `plangs2` — a real deploy would create a **new Worker**
  and touch neither the Pages project nor the domain. Deliberate, but the
  owner decides before deploying.
- 🧑 **3c. Deploy, verify on `*.workers.dev`, then move the domain** —
  `plangs.page` is attached to the Pages project; the real cutover is
  removing the custom domain there and adding it to the Worker. Expect brief
  downtime.
- 🧑 **3d. Prod smoke test**: `/`, `/nim`, `/typesystem/static`, `/llms.txt`,
  `/nim.md`, and a bogus path (must now be a **real** 404).
- ⬜ **3e. Deploy GitHub Action** once cutover is done, so `main` →
  production is reproducible. May be authored earlier, but must not be
  enabled/pushed before 3a–3d.

The `/edit` editor + PR worker are gone (D3). Node pages deep-link to their
YAML on GitHub — `REPO` is hardcoded in
`apps/site/src/components/NodeDetail.astro`; update it if the repo moves.

## 4. Refactor targets (ranked; ranking is a hypothesis, not a finding)

One commit per item; full verification loop between items.

- ✅ **4a. ⭐ Type the graph with the schemas it already has.** (2026-07-17)
  `NODE_SCHEMAS` now uses `satisfies Record<NodeKind, z.ZodObject>` instead of
  the annotation (which erased every per-kind shape and made `z.infer` yield
  `{}`), so `NodeDataOf<K>` is real. `NodeAttrs<K>` carries `data: NodeDataOf<K>`
  and `PlangsGraph` is keyed by `AnyNodeAttrs` — a union discriminated on
  `kind`, so `attrs.kind === "plang"` narrows `data`. Added `getNodeOfKind` /
  `getPlang`. **Every `typeof`-on-`data` probe is gone** (verified by grep);
  shared fields read straight off the union, kind-specific ones narrow with
  `in`. `PlangData` is now `NodeDataOf<"plang">` and used.
  - Also typed the `derive` inference rule: `prop` is now correlated with `on`
    (`BooleanPropsOf<K>`), so a typo or a wrong-kind field is a compile error —
    it was a bare `string`. Verified both.
  - Locked in by TYPE-level tests in `zod.test.ts`: re-adding the annotation
    fails the build via an unused `@ts-expect-error`. Verified.
  - *Answering the knip question:* knip is silent because
    `packages/*/src/index.ts` are entries that `export *` — every export reads
    as public API. Not type-specific (an unused `export const` is also
    unreported). Moved to CLAUDE.md.
- ✅ **4b. Give the facets island a typed contract.** (2026-07-17)
  New `apps/site/src/lib/facets-contract.ts`: `DIMS` + `Dim`, `facetAttrs()`
  (emit) and `matches()` (read), both deriving the attribute name from one
  `facetAttr()`. SSR cards kept, as specified. A wrong-case or unknown
  dimension is now a **compile error suggesting the right spelling** —
  verified with both `"typesystems"` and `"type-systems"`.
  - Reads via `getAttribute`, not `dataset`, which silently transforms names
    (`data-type-systems` ⇄ `dataset.typeSystems`) — the very mismatch class
    being removed. Cards now carry `data-facet-*`.
  - The store's `selected` is keyed by `Dim`; `searchToSelection` drops
    unknown query params instead of seeding keys no card can carry.
  - `matches()` takes a narrow `FacetCard` (just `getAttribute`), so the
    contract unit-tests under plain Node — no jsdom dependency added. 8 unit
    tests exercise emit and read *together*, since asserting the literal
    attribute string would pass even if the two sides drifted.
- ✅ **4c. Split `apps/site/src/lib/view.ts`** (2026-07-17) — three files
  along the three concerns it had mixed:
  - `@plangs/graph` `query.ts` ← the graph queries: `nodeName`,
    `edgeBetween`, `neighborsByKind`, `relatedGroups` (relation traversal,
    grouped by edge label; the site now only resolves names/links/order).
  - `apps/site/src/lib/url.ts` ← URL policy (`urlKind`, `hrefForKey`). A site
    concern: these encode v2 compatibility, which the graph shouldn't know.
  - `view.ts` keeps view models only — it no longer traverses edges or builds
    URLs.
  `edgeBetween` kept its linear scan, as instructed — no index.
  Guarded by url-parity 514/514 and the `detail-nim` pixel baseline (rendering
  unchanged).
- ✅ **4d. Small, genuinely safe cleanups** (2026-07-17):
  - `PlangCard.isTranspiler` dropped — computed, never rendered, and absent
    from every public output (checked the built JSON/markdown, not just the
    templates). The `isTranspiler` *data* field and its derive rule stay.
  - `checkIntegrity()`'s `assetsDir` removed: an option with **no callers**
    whose body was an empty `if`.
  - `scripts/data-fmt.mjs` now imports `@plangs/pipeline/fields`, a new public
    subpath, instead of a deep relative path into `src/core/`. Subpath rather
    than the package root on purpose: `core/fields.ts` is deliberately
    dependency-free apart from `yaml`, and importing the index would drag the
    Anthropic SDK, jsdom and turndown into a YAML formatter.
  - `sync-assets.mjs` stages to a temp dir and swaps with `rename`.
    **The stated symptom did not reproduce**: `cp -R` overwrites in place and
    never unlinks, so an existing logo is readable throughout — no transient
    404s (measured by polling a logo during a sync: 0 misses for both old and
    new). The real defects it fixes are that `cpSync` never prunes, so an asset
    deleted from the dataset was served forever (planted a file: old copy kept
    it, new one removes it), and that in-place overwrites can be read partially.
- 🔶 **4e. Cheap honest D2 parts** (2026-07-17) — three of four done. The
  `[drift vs v2]` report now prints `+0 vertices, ~4 changed, +0 edges` on
  every run; that is the design working, not a failure.
  - ✅ Dropped the `deprecated` flag in `KINDS` — nothing enforced it.
  - ✅ Named the 4 nameless nodes: `bun/plangs` → "Plangs! Website",
    `bun/py-one` → "Python One", `tool/pip` → "pip", `tool/vscode` →
    "Visual Studio Code". Verified rendered: their pages now show real `h1`s
    and their grid cards show names instead of slugs.
  - ✅ `name` tightened from `.optional()` to required. Confirmed first that
    those 4 were the *only* nameless nodes in all 495, so the schema now says
    what was always intended; `integrity.test.ts` enforces it dataset-wide.
  - 🧑 **`bun/plangs` tools NOT fixed — the migration gate forbids it.** Its
    tools (`entr`, `esbuild`, `overmind`) are the deleted v2 Bun-era stack, but
    removing them deletes 3 v2 edges and `round-trip.test.ts` → "still has
    every v2 edge" fails. Measured, not assumed. Regenerating the fixture is
    forbidden (hard rule 3), so this needs the owner: either accept a
    deliberate, documented gate exception for these 3 edges, or leave the
    bundle describing a stack that no longer exists. It is entangled with D2
    anyway ("is a curated bundle of tools a concept plangs wants?").
    Note the v3 stack is mostly *unrepresentable* today regardless: only
    `tool/biomejs` and `tool/tailwindcss` exist as tool nodes — there are no
    tool nodes for Astro, React, Vitest, Playwright or pnpm, and
    `bundleRelTools` only accepts `tool/*`.

## 5. Deferred by decision — ⛔ do not implement without the owner

- ⛔ **D2 taxonomy folding** — *wait for 1b.* `post` is already folded
  (0 nodes); `bundle` (2) and `author` (1) remain. D2's own precondition
  ("decide after the imports run") is unmet. Measured costs: URL parity
  514→511 (`/bundle/plangs`, `/bundle/py-one`, `/author/geo` are live pages —
  redirects or a deliberate 404), reworking the Bundle→Tool→Plang hoist rule
  in `packages/schema/src/inference.ts`, and `author/geo`'s rels don't fit
  blog frontmatter. The real question is product, not technical: *is "a
  curated bundle of tools" a concept plangs wants?* Ask the owner.
- ⛔ **D5 trend sparklines** (last priority) — plumbing done (`languish`
  keeps the quarterly series; `trends` is schema-validated) but no node has
  data until a real pipeline run (1b).
- ⛔ **D1 LadybugDB / Cypher** — only if graphology's typed helpers stop
  being enough. Kuzu is dead; don't go there.
- ⛔ **MCP server** (PLAN §7.6, explicitly a stretch) — expose
  search/get/facet-query so agents can attach plangs as a tool.
- ⛔ **Facets client-render path** — PLAN §6.2 wanted the grid rendered from
  `/data/facets/{kind}.json` (exists, 11.5 KB gzipped) with a static top-N
  for SEO. The shipped approach (SSR all cards, island toggles visibility)
  is simpler and SEO-complete. Revisit only with virtualization (`virtua`),
  and only if DOM size actually measures badly.

## Decision log

| # | Decision | Outcome |
|---|---|---|
| D1 | Graph engine | graphology over YAML at build time; LadybugDB deferred (above). |
| D2 | Taxonomy pruning | `post` folded; `bundle`/`author` deferred until imports run (above). |
| D3 | `/edit` editor + PR worker | **Dropped.** Edit = GitHub deep link to the node's YAML; CI validates. |
| D4 | Filter-state encoding | Readable query params (`?paradigms=functional&mode=all`), replacing v2's `#rison`. |
| D5 | Trend charts | Approved, last priority; blocked on real pipeline data (above). |

## Log

- **2026-07-17** — Roadmap restructured for autonomous execution (hard
  rules, phase order, done-criteria). Docs consolidated: PLAN.md,
  NEXT-STEPS.md, REFACTOR.md replaced by this file + CLAUDE.md (all three
  retrievable at `008e073c`).
- **2026-07-15** — Migration gate narrowed to "nothing was lost"; verified
  in both directions. Deploy reality checked over HTTP. D2 analysed.
- **2026-07-14..15** — v3 migration executed end-to-end; five rendering bugs
  found and fixed post-gates; browser tests added.
