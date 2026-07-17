# ROADMAP

**The single status document.** Everything pending, partial, done or deferred
lives here — rewrite it freely as work lands. The durable how-and-why
(verification loop, invariants, traps, environment) lives in
[CLAUDE.md](CLAUDE.md); read that before changing code. History: the executed
migration spec is frozen at `git show 008e073c:PLAN.md` (code comments citing
`PLAN §n` point into it); v2 is at tag `final-plangs-2`.

Legend: ✅ done · 🔶 partial · ⬜ pending · ⛔ blocked / deferred by decision

Counts in prose go stale — trust the gates (CLAUDE.md has the list), not this
file's numbers.

## Snapshot

- ✅ **v2 → v3 migration complete** (all six phases of the 2026 plan; every
  gate green). `main` is Astro 7 + React islands + YAML/graphology data.
- ✅ **Migration gate narrowed** (2026-07-15): data changes now pass CI with a
  printed `[drift vs v2]` report; deleting any v2 node/edge still fails. This
  unblocked everything marked "data change" below.
- ⬜ **Nothing is deployed.** `plangs.page` still serves v2; nothing deploys on
  push (see track 3 — there's a trap).
- ⬜ **No importer has run for real.** `packages/data` is still byte-for-byte
  the v2 migration output.

## Dependencies at a glance

```
1a QID seeding ──────────► 1c wikidata import
1b first real import run ─► 5-D2 folding decision, 5-D5 sparklines
3a CF dashboard check ────► any push / all of track 3   (human-only step)
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

- ⬜ **1a. Seed Wikidata QIDs** — the highest-value source matches **0 of 267**
  languages because no node carries `sources.wikidata` and the importer
  refuses to guess. Needs the one-time SPARQL batch-resolve (PLAN §5.3)
  landing `sources.wikidata: Q…` per node. Until then `--source=wikidata` is a
  no-op.
- ⬜ **1b. First real refresh** — review the diff against the drift report.
  Dry-runs reported: linguist 175 matched / 343 changes, languish 148 / 584
  @2025Q2, pypl 28 / 84 @2026-07.
- ⬜ **1c. Register remaining sources** (adoption order, PLAN §5): `pldb`
  (whitelist-gated), `innovation-graph`, `tiobe`, `homebrew`, `stackexchange`.
  Not stubbed — just unwritten (note in `packages/pipeline/src/sources/index.ts`).
  Skipped by decision: DBpedia, IEEE, Reddit, GH-Archive.
- ⬜ **1d. First AI enrichment run** — never run; needs `ANTHROPIC_API_KEY`.
  Typechecked and unit-tested with a mocked client (`claude-sonnet-5`, tool
  schema derived from the Zod node schema). Treat the first run as untrusted:
  review the PR it produces.
- ⬜ **1e. Monthly data-refresh GitHub Action** opening a PR.

> Before touching source ownership, read CLAUDE.md "Leave alone" — the
> disjoint-`owns` assertion is deliberate and load-bearing.

## 2. Verification debt

> Five rendering bugs once shipped behind green gates — hence this track.
> CLAUDE.md "Verification loop" has the lesson.

- ⬜ **2a. Lighthouse mobile ≥ 95 + axe clean** — the Phase 5 gate, still
  unmeasured. Playwright is installed, so this is newly cheap. The a11y work
  itself is done (real buttons, `aria-pressed`/`aria-expanded`, 44px targets,
  `aria-live` counts) but nothing has scored it.
- ⬜ **2b. Broaden browser coverage** — currently grid, facets, theme, one
  detail page. Nothing covers the prompt menu, theme persistence, the blog, or
  dark mode visually.
- ⬜ **2c. Visual regression snapshots** — would have caught the background
  mis-port instantly.
- ⬜ **2d. Verify the Claude/ChatGPT prefill URLs** used by
  `apps/site/src/islands/PromptMenu.tsx` (`https://claude.ai/new?q=…`,
  `https://chatgpt.com/?q=…`) — written from documented behaviour, never
  tested against the live services.

## 3. Deploy / cutover

Observed 2026-07-15 (verified by HTTP): `plangs.page` → 200, still v2;
`plangs2.pages.dev` → 200, the legacy Cloudflare **Pages** project is live.
The v2 site 200s **every** path (catch-all), so "is the new site up?" must be
answered by an `astro-island` / `/_astro/` marker, never by status code.

- ⛔ **3a. Check the CF Pages git integration FIRST** (dashboard-only, cannot
  be verified from the repo). v2 deployed via a git integration configured in
  the CF dashboard; if it's still connected to `main`, a push triggers the
  **old** build command against a repo where `output/` and the Bun build no
  longer exist — likely a noisy failure, possibly a wrong-directory publish.
  Disconnect or repoint it **before any push**.
- ⬜ **3b. Build + dry-run**: `pnpm -F @plangs/site build` → `apps/site/dist`
  (~1800 files, ~15 MB); `npx wrangler deploy --dry-run` validates config.
  Note: `wrangler.toml` says `name = "plangs"` but the existing project is
  `plangs2` — deploy therefore creates a **new Worker** and touches neither
  the Pages project nor the domain. Deliberate, but decide before deploying.
- ⬜ **3c. Deploy, verify on `*.workers.dev`, then move the domain** —
  `plangs.page` is attached to the Pages project; the real cutover is removing
  the custom domain there and adding it to the Worker. Expect brief downtime.
- ⬜ **3d. Prod smoke test**: `/`, `/nim`, `/typesystem/static`, `/llms.txt`,
  `/nim.md`, and a bogus path (must now be a **real** 404).
- ⬜ **3e. Deploy GitHub Action** once cutover is done, so `main` → production
  is reproducible.

The `/edit` editor + PR worker are gone (D3). Node pages deep-link to their
YAML on GitHub — `REPO` is hardcoded in
`apps/site/src/components/NodeDetail.astro`; update it if the repo moves.

## 4. Refactor targets (ranked; ranking is a hypothesis, not a finding)

- ⬜ **4a. ⭐ Type the graph with the schemas it already has.**
  `packages/graph` stores `data: Record<string, unknown>`, so 17 call sites
  hand-narrow with `typeof` checks. Causes: `NodeAttrs.data` is untyped, and
  `NODE_SCHEMAS`' `Record<NodeKind, z.ZodObject>` annotation erases per-kind
  shapes — drop it, let TS infer, and `z.infer<(typeof NODE_SCHEMAS)[K]>`
  becomes usable. Target: `NodeAttrs<K>` + kind-narrowing helpers
  (`getPlang(graph, key)`). `PlangData` in `zod.ts` is the exported, unused
  vestige of this idea (knip didn't flag it — check why before trusting knip
  on types).
- ⬜ **4b. Give the facets island a typed contract.** `FacetsPanel.tsx`
  queries `[data-grid-item]` and toggles `.hidden`; the coupling to
  `NodeGrid.astro` is stringly-typed and case-fragile
  (`item.dataset[dim.toLowerCase()]` vs `data-typesystems` — a wrong-case
  attribute silently never filters). Preferred fix: keep SSR cards, add a
  shared `DIMS` const + emit/read helper. Bigger alternative: client-render
  from `facets.json` (see 5, "facets client-render").
- ⬜ **4c. Split `apps/site/src/lib/view.ts`** — it holds URL policy, graph
  queries, and view models. Graph queries belong in `packages/graph`
  (`query.ts` exists). `edgeBetween()` linear-scans 52 edges per (kind, dim) —
  irrelevant at this size, **don't optimise it**, but an index reads simpler
  if you're touching it anyway.
- ⬜ **4d. Small, genuinely safe cleanups**: `PlangCard.isTranspiler` computed
  but never rendered; `checkIntegrity()`'s `assetsDir` option is an empty
  `if`; `scripts/data-fmt.mjs` imports `formatText` from `packages/pipeline`
  internals; `apps/site/scripts/sync-assets.mjs` `cp -R`s over a live
  `public/` (transient 404s — make it atomic).
- ⬜ **4e. Cheap honest D2 parts** (data changes — unblocked): drop the
  `deprecated` flag in `KINDS` that nothing enforces; fix `bun/plangs` (its
  tools are the deleted v2 stack); name the 4 nameless nodes (`bun/plangs`,
  `bun/py-one`, `tool/pip`, `tool/vscode`) and tighten `name` back from
  `.optional()` to required in `packages/schema/src/zod.ts`.

## 5. Deferred by decision (not oversights)

- ⛔ **D2 taxonomy folding** — *wait for 1b.* `post` is already folded
  (0 nodes); `bundle` (2) and `author` (1) remain. D2's own precondition
  ("decide after the imports run") is unmet. Measured costs: URL parity
  514→511 (`/bundle/plangs`, `/bundle/py-one`, `/author/geo` are live pages —
  redirects or a deliberate 404), reworking the Bundle→Tool→Plang hoist rule
  in `packages/schema/src/inference.ts`, and `author/geo`'s rels don't fit
  blog frontmatter. The real question is product, not technical: *is "a
  curated bundle of tools" a concept plangs wants?* Ask the owner.
- ⛔ **D5 trend sparklines** (last priority) — plumbing done (`languish` keeps
  the quarterly series; `trends` is schema-validated) but no node has data
  until a real pipeline run (1b).
- ⛔ **D1 LadybugDB / Cypher** — only if graphology's typed helpers stop being
  enough. Kuzu is dead; don't go there.
- ⛔ **MCP server** (PLAN §7.6, explicitly a stretch) — expose
  search/get/facet-query so agents can attach plangs as a tool.
- ⛔ **Facets client-render path** — PLAN §6.2 wanted the grid rendered from
  `/data/facets/{kind}.json` (exists, 11.5 KB gzipped) with a static top-N for
  SEO. The shipped approach (SSR all cards, island toggles visibility) is
  simpler and SEO-complete. Revisit only with virtualization (`virtua`), and
  only if DOM size actually measures badly.

## Decision log

| # | Decision | Outcome |
|---|---|---|
| D1 | Graph engine | graphology over YAML at build time; LadybugDB deferred (above). |
| D2 | Taxonomy pruning | `post` folded; `bundle`/`author` deferred until imports run (above). |
| D3 | `/edit` editor + PR worker | **Dropped.** Edit = GitHub deep link to the node's YAML; CI validates. |
| D4 | Filter-state encoding | Readable query params (`?paradigms=functional&mode=all`), replacing v2's `#rison`. |
| D5 | Trend charts | Approved, last priority; blocked on real pipeline data (above). |

## Log

- **2026-07-17** — Docs consolidated: PLAN.md, NEXT-STEPS.md, REFACTOR.md
  replaced by this file + CLAUDE.md (all three retrievable at `008e073c`).
- **2026-07-15** — Migration gate narrowed to "nothing was lost"; verified in
  both directions. Deploy reality checked over HTTP. D2 analysed.
- **2026-07-14..15** — v3 migration executed end-to-end; five rendering bugs
  found and fixed post-gates; browser tests added.
