# Plangs 2026 Modernization Plan

> ## ✅ EXECUTED — 2026-07-15. This document is now HISTORY, not a todo list.
>
> All six phases shipped and every phase gate is green. `main` is v3; the v2
> implementation it describes is frozen at tag **`final-plangs-2`** (`3a4a2353`).
> Most of the code referenced below (`packages/server`, `packages/frontend`,
> `packages/definitions`, `packages/plangs`, …) **no longer exists**.
>
> Keep it for the *why*: the audit, the research, and the decisions (D1–D5) that
> explain the current shape. But for anything actionable, go to:
>
> - **[REFACTOR.md](REFACTOR.md)** — how the code thinks; read before changing it.
> - **[NEXT-STEPS.md](NEXT-STEPS.md)** — what's actually left.
>
> Where this plan and reality disagree, **reality wins** — several §1 assumptions
> turned out wrong in practice (pnpm 11 is unobtainable here, Astro 7 swapped its
> markdown processor, no redirects were needed). Deviations are recorded in the
> two docs above and in the git log.

This plan turns plangs.page from a hand-built Bun/Preact/esbuild experiment into a
modern, agent-friendly Astro + React site with a real data layer. It was produced
after a full audit of this repo, the local `~/dev/languish` clone, and web research
current as of **July 2026**. It is written to be executed by a coding agent,
phase by phase, with acceptance criteria per phase.

---

## 0. Context: what exists today (audit summary)

- **Monorepo**: Bun workspaces, 9 packages. Key coupling problems: `server ↔ frontend`
  circular deps, `languist → server`, and a codegen package (`graphgen`) that emits
  `packages/plangs/src/graph/generated.ts` (~1,200 lines) from a spec
  (`packages/plangs/src/graph/spec.ts`: **15 vertex kinds, 52 edge definitions**).
- **Data**: 495 TypeScript definition files (~15k lines) under
  `packages/definitions/src/definitions/{kind}/{letter}/{key}.ts`, each exporting
  `define(g)` builder calls. 268 webp logos in `packages/definitions/assets`.
  Counts per kind: plang 267, paradigm 68, tag 57, typeSystem 24, license 21,
  platform 21, tool 13, library 9, app 4, community 4, learning 3, bundle 2,
  subsystem 1, author 1. No edge properties, no provenance, no queryable store.
- **Graph library**: hand-rolled `Vertex/Vertices/Edges` with forward/backward maps
  (`packages/graphgen/src/library.ts`). Serializes to a `SerializedGraph` JSON
  (`{vertices: {kind: {key: data}}, edges: {edgeName: {fromKey: toKey[]}}}`).
- **Site**: custom SSG (`packages/server/src/generators/site.ts`) renders every page
  with Preact `render-to-string`; a dev server (`Bun.serve`) + Overmind + entr for
  local dev. Deployed to Cloudflare Pages (`output/` dir) with one Worker
  (`packages/functions/src/worker.ts`) implementing the `/edit` → GitHub PR flow.
- **Frontend**: Preact islands manually "activated" onto SSR DOM; a hand-rolled
  `Dispatchable` store; the whole graph JSON (~700KB-class payload) is fetched on
  every page; faceted filtering toggles `.hidden` on pre-rendered thumbnails.
  Filter state IS deep-linkable today via RISON in the URL hash
  (`packages/frontend/src/auxiliar/fragment.ts`) — preserve this capability,
  change the mechanism (see §6).
- **Pipeline**: `packages/languist` vendors stale snapshots (Languish `2024Q4`;
  linguist JSON produced via a Docker+Ruby step). `packages/ai` enriches plang
  vertices with OpenAI `gpt-4o` structured output after scraping
  home/GitHub/Wikipedia pages.
- **Bun lock-in surface**: `Bun.file/write/Glob/hash/serve/spawn`, `bun:test`
  (11 test files), `import.meta.dir` (21 uses), Bun shell `$`, `bun.lockb`,
  and glob-driven dynamic `import()` of the 495 definition files.
- **README "Graph inference notes"** (bottom of README.md): some edges imply others
  (transitive `influenced`, `Bundle→Tool→Plang` ⇒ `Bundle→Plang`) while some must
  NOT be inferred (`Plang→App→License` ⇏ `Plang→License`). Today only a tiny
  `materialize()` exists. **This plan makes inference a first-class, declarative
  feature** (§4.4).

---

## 1. Target stack (verified July 2026 — do not trust training-data versions)

| Area | Choice | Notes (things a Jan-2026 model gets wrong) |
|---|---|---|
| Framework | **Astro 7.x** (7.0.7+) | Rust compiler end-to-end; Vite 8; Node **22.12+** required. Astro 6 shipped Mar 2026, 7 in Jun 2026. Cloudflare acquired Astro (Jan 2026). **Astro DB was removed in 7.0** — do not use it. |
| UI islands | **React 19.2.x** via `@astrojs/react` 6.x | React Compiler (1.0) optional via `babel-plugin-react-compiler` in the integration options. |
| State | **`@xstate/store` v4** + **`@xstate/store-react`** | v4 (May 2026) moved framework hooks to separate packages (`@xstate/store/react` no longer exists). Store core is framework-agnostic — perfect for sharing state across Astro islands via a shared module. Use `createStore`, `store.trigger.*`, `store.select`, `enqueue.effect` for URL writes. Never touch the store during SSR. |
| Package manager | **pnpm 11** workspaces + **catalogs** | Node 22+. Mind `minimumReleaseAge: 1440` default (may delay brand-new packages; tune if it bites). Use `catalog:` for shared versions, `workspace:*` for internal deps. No turborepo/nx — plain `pnpm -r --filter` is enough at this size. |
| CSS | **Tailwind 4.3.x** via `@tailwindcss/vite` | CSS-first config: delete `tailwind.config.js`, move tokens into `@theme`. The old `@astrojs/tailwind` integration is obsolete. `npx @tailwindcss/upgrade` handles most class renames. |
| Lint/format | **Biome 2.5.x** | Formats/lints `.astro` templates since 2.3 (still flagged experimental — if template edge cases bite, use Prettier + `prettier-plugin-astro` for `.astro` only). |
| Tests | **Vitest 4.x** | Mechanical migration from `bun:test` (same describe/it/expect; `vi.fn/vi.mock`). Browser mode is stable if island tests are wanted later. |
| Graph engine | **graphology** at build time over YAML source files | See §4. LadybugDB (Cypher) is the optional layer-on later. **Kuzu is dead** (archived Oct 2025). |
| Deploy | **Cloudflare Workers + static assets** (wrangler) | Pages is legacy-ish; CF steers new deploys to Workers static assets. Pure static output, **no Astro adapter needed** unless server islands/bindings are wanted later. Keep the PR-flow worker (or drop it, see §9 decision D3). |
| Data validation | **Zod 4** | Astro re-exports it (`astro/zod`); use plain `zod` in pipeline packages. |

---

## 2. Target repo layout

```
plangs/
  pnpm-workspace.yaml            # packages + catalogs (react, zod, ts versions)
  biome.json
  apps/
    site/                        # Astro 7 app (routes, layouts, islands)
      src/
        pages/                   # file-based routes (replaces resolve_page.tsx)
        components/              # .astro components (SSR-only UI)
        islands/                 # React islands (facets, vertex-info, theme toggle)
        stores/                  # @xstate/store stores shared across islands
        content.config.ts        # content-layer loaders reading @plangs/graph
        styles/global.css        # tailwind @theme tokens (ported from styles.css)
  packages/
    schema/                      # THE single source of truth for the graph schema:
                                 #   node kinds, edge kinds, Zod schemas,
                                 #   inference/materialization rules, provenance types
    graph/                       # loads data/ into graphology; typed query helpers;
                                 #   integrity checks; materialization pass; exporters
                                 #   (facet index JSON, per-vertex JSON, sitemap data)
    data/                        # THE dataset: YAML files + assets (no code)
      nodes/{kind}/{key}.yaml
      assets/{kind}/{key}.webp
    pipeline/                    # importers + AI enrichment (replaces languist + ai)
      src/sources/{wikidata,pldb,languish,linguist,innovation-graph,pypl,tiobe,
                   homebrew,stackexchange}.ts
      src/enrich/                # LLM enrichment (structured output)
    worker/                      # (optional, D3) Cloudflare worker: GitHub PR flow
  PLAN.md
```

Kill: `packages/graphgen` (codegen), `packages/auxiliar` (replace with libs/stdlib),
`packages/server` (Astro replaces it), `packages/frontend` (islands replace it),
`archived/`, `pixi.toml`, `Procfile`, `script/`, `bun.lockb`, `wrangler.toml`'s
Pages config (replaced by Workers static assets config).

---

## 3. Phase 0 — Tooling migration (Bun → pnpm/Node)

Goal: the repo installs and builds with pnpm + Node 22 before any rewrite starts.

1. `corepack enable`; add `packageManager: "pnpm@11"` and `engines.node: ">=22.12"`.
2. Create `pnpm-workspace.yaml` (`apps/*`, `packages/*`) with a catalog for
   react/react-dom/zod/typescript/vitest/biome/tailwind.
3. Delete `bun.lockb`, `pixi.toml`, `Procfile`, `script/`, `archived/`
   (git history preserves them; also fix nothing that only they used).
4. Add Vitest; port the 11 `bun:test` files (mostly `packages/auxiliar`) — these
   tests guard `filters`/`value`/`map2`/`str_date` logic that survives into the
   new packages, so port them with the code they test rather than as-is.
5. CI: GitHub Actions — `pnpm install`, `pnpm build`, `pnpm test`, `pnpm check`
   (biome), on PRs.
6. Upgrade Biome to 2.5.x, Tailwind to 4.3.x (this can also land in Phase 5).

Acceptance: `pnpm install && pnpm test` green on Node 22; no `bun` binary needed.
(The old Bun build keeps working on `main` until cutover — do all of this on a
long-lived `v2026` branch or in-place with the old build frozen; recommended:
in-place, since the old site can be rebuilt from any past commit.)

## 4. Phase 1 — Data model: YAML + Zod + graphology (abandon TS definitions)

### 4.1 Source of truth: one YAML file per node

Decouple **authoring** (plain files in git) from **querying** (a build artifact).
This preserves the PR-based contribution model, produces reviewable per-node
diffs, and is the most LLM-agent-friendly authoring format available.

`packages/data/nodes/plang/nim.yaml`:

```yaml
name: Nim
description: >-
  ...
shortDesc: ...
created: "2008"
extensions: [".nim", ".nimble", ".nims"]
github: { path: nim-lang/Nim, langId: "249", color: "#ffc200", stars: 16700 }
releases:
  - { version: "2.2.0", date: "2024-10-02" }
stackovTags: [nim-lang]
rels:
  compilesTo: [pl/c, pl/cpp, pl/javascript, pl/objective-c]
  influencedBy: [pl/ada, pl/c, ...]
  licenses: [lic/mit]
  paradigms: [para/compiled, ...]
  platforms: [plat/android, ...]
  tags: [tag/3dg, ...]
  typeSystems: [tsys/inferred, ...]
  writtenWith: [pl/c, pl/nim]
sources:                      # NEW: per-import provenance (see 4.5)
  wikidata: Q567134
  pldb: nim
  wikipedia: Nim_(programming_language)
```

Conventions:
- Keys become `kind/slug` (e.g. `pl/nim`) — cleaner than `pl+nim` in URLs and YAML.
  A key-migration map handles old→new everywhere (including URL redirects, §6.6).
- Flat, human-readable, no nesting beyond one level except structured fields
  (releases, github). Field order canonicalized by a formatter script
  (`pnpm data:fmt`) so agent/human edits always produce minimal diffs
  (this replaces the old prettier-matching requirement of the PR flow).

### 4.2 Schema: `packages/schema`

- Port `PLANGS_GRAPH_SPEC` (15 vertex kinds, 52 edges) into a **declarative spec
  object** + **Zod schemas** per kind. No codegen: derive TS types with
  `z.infer`. The spec drives: validation, allowed edge endpoints, inverse edge
  names, and inference rules (4.4).
- **Rethink the taxonomy** while porting (Decision D2 in §9, defaults below):
  - Keep: `plang`, `tool`, `library`, `app`, `platform`, `license`, `paradigm`,
    `typeSystem`, `tag`, `community`, `learning`, `subsystem`.
  - Fold `bundle` (2 nodes) into `tool` with a `bundles: [tool/...]` edge, and
    `author` (1 node) into blog frontmatter. `post` stops being a graph node —
    blog posts become Astro content that *links to* node keys.
  - Add optional per-edge **properties** where they earn their keep — the old
    library couldn't represent them at all. Start with exactly one:
    `influencedBy` may carry `{ source?: url }` for citations. Don't build a
    general edge-property system until a second real use appears.
- Every node gets `sources` (provenance) and optional `updated` fields.

### 4.3 Graph runtime: `packages/graph`

- Loader: glob `packages/data/nodes/**/*.yaml` (use `tinyglobby`/`fast-glob` +
  `yaml`), validate each with Zod, load into a **graphology** directed graph
  (node attrs = data, edge attrs = `{type, ...props}`).
- **Integrity pass** (replaces `bun run cleanup`): every edge target exists;
  edge type allowed between the two kinds; keys well-formed; assets exist for
  referenced images; fail the build with a precise file/line report. Also a
  `--fix` mode that deletes dangling edges (the old cleanup behavior).
- **Typed query helpers**: small functions over graphology (`influencedByTransitive(g, key)`,
  `plangsByParadigm`, `familyTree`, etc.). At ~2k nodes everything is
  microseconds; no query DSL needed. (Research verdict: Kuzu is archived —
  team acqui-hired by Apple Oct 2025; the LadybugDB fork is healthy and has
  Node+WASM+Cypher if we ever want declarative queries; DuckPGQ is
  research-grade; Oxigraph/SPARQL only wins if we go full RDF/Wikidata-native.
  graphology is the zero-risk fit. Revisit LadybugDB as an optional layer
  AFTER the site works.)
- **Exporters**:
  - `facets.json` — compact columnar index per grid kind (only what the facet
    UI needs: key, name, thumbnail, ranking, facet memberships) instead of the
    entire graph. Target: grid page data payload ≤ 150KB gzipped.
  - `nodes/{kind}/{slug}.json` — per-vertex JSON (for the LLM endpoints, §7).
  - full `plangs.json` (SerializedGraph-equivalent) kept as a public dataset
    download.

### 4.4 Inference / materialization (the README "inference note", now for real)

Add to `packages/schema` a declarative rule list, and to `packages/graph` a
**materialization pass** that runs after loading and before export/build:

```ts
export const INFERENCE_RULES = [
  // transitive closure, bounded depth, materialized as a *distinct* edge type
  { rule: "transitive", edge: "influencedBy", as: "influencedByTransitive", maxDepth: 5 },
  // hoisting through an intermediate node kind
  { rule: "hoist", path: ["bundles", "supportsPlang"], as: "supportsPlang" }, // Bundle→Tool→Plang
  { rule: "hoist", path: ["dialectOf", "implements"], as: "implements" },
  // derived boolean props
  { rule: "derive", prop: "isTranspiler", when: g => /* has compilesTo edge */ },
] // NEVER: Plang→App→License (license does not propagate) — encode as a test.
```

Principles:
- Materialized edges are **marked `inferred: true`** and never written back to
  YAML — they exist only in the built graph and exports. Source files stay
  minimal; the build makes them rich.
- Facets and queries run over the materialized graph, so searches like
  "languages transitively influenced by ML that compile to JS" work.
- Unit-test the rules, including the explicit **negative cases** from the README.

### 4.5 Provenance

Every imported fact should be attributable. Keep it lightweight: a per-node
`sources` map (ids into wikidata/pldb/languish/etc.) plus per-pipeline-run
reports (what changed, from where). Do NOT do per-field provenance annotations
in YAML (too noisy); instead pipeline importers only write fields they own
(see §5) so field ownership is deterministic.

### 4.6 Migration of the 495 TS files

Mechanical, scripted, verified:
1. Run the **existing** exporter on the old code (`bun run export plangs.json`)
   ONE last time (or replay `PlangsGraph.toJSON()` under Node with minimal shims).
2. Write `scripts/migrate-definitions.ts`: SerializedGraph JSON → YAML files
   (+ key renaming `pl+x` → `pl/x`, honoring the old `pref` direction so each
   edge is written from one side only).
3. Verify round-trip: load YAML → graphology → export → deep-equal against the
   original JSON (modulo key renames). This is the phase-gate test.
4. Move `packages/definitions/assets/**` → `packages/data/assets/**`.
5. Delete `packages/definitions`, `packages/graphgen`, `packages/plangs`,
   `packages/languist`, `packages/ai` (superseded by `schema`/`graph`/`pipeline`).

Acceptance: round-trip equality test green; integrity pass green on the full
dataset; `pnpm -F @plangs/graph test` covers loader, integrity, inference rules.

## 5. Phase 2 — Data pipeline (`packages/pipeline`)

Rewrite the import/enrichment as idempotent, per-source importers that read
remote data, match to nodes (by `sources.*` ids first, fuzzy-name only as a
last resort with a review report), and patch ONLY the fields each source owns.
Run manually or via a monthly GitHub Action that opens a data-refresh PR.

Sources (verified access/licensing, July 2026), in adoption order:

1. **GitHub Linguist** — parse `languages.yml` raw from
   `github-linguist/linguist` (MIT). Owns: color, extensions, aliases, langId,
   type, popular. **Deletes the Docker+Ruby step** (`packages/languist/in`).
2. **Languish** (`~/dev/languish` clone / github tjpalmer/languish, ISC) — read
   the committed `scripts/data/*.json` (per-metric quarterly counts) directly
   instead of vendoring a built `data.json`; auto-detect latest quarter (clone
   has **2025Q2**; the vendored snapshot is stuck at 2024Q4 with a hardcoded
   `LATEST_QUARTER`). Match weights to upstream's bot-aware defaults
   (issues 0, PRs 0, stars 1, SO questions 1) or make weights data. Owns:
   `languishRanking` + the quarterly trend series (NEW: keep the series, we
   currently throw it away — enables trend sparklines on detail pages).
3. **Wikidata** (CC0) — the structured-facts backbone. Per-entity JSON
   (`Special:EntityData/Q*.json`) for nodes with a `sources.wikidata` QID;
   batch-resolve missing QIDs via SPARQL once. Owns: created/inception,
   paradigms/typing-discipline suggestions (as a review report, not blind
   writes), website, designers. Also THE join key for everything else.
4. **PLDB** (pldb.io, public domain per README, active) — bulk facts:
   `pldb.io/pldb.json`. Import behind a whitelist gate (only concepts that
   already exist in plangs or pass a notability filter: has `appeared` + a
   wikipedia link). Owns: appeared-year backfill, feature flags if we ever
   want a features matrix, book/learning suggestions.
5. **GitHub Innovation Graph** (CC0, quarterly, official) — `languages.csv`
   (num_pushers per language per quarter). Owns: a second, people-based
   popularity signal; hedge against Languish going stale.
6. **PYPL** (CC BY) — full monthly history in one fetch
   (`pypl.github.io/PYPL/All.js`). **TIOBE** — scrape monthly top-50 table
   (FAQ permits reuse with attribution); build our own history going forward.
   **Homebrew analytics** (`formulae.brew.sh/api/analytics/...`) — toolchain
   installs; snapshot monthly (rolling window only, no history upstream).
7. **StackExchange API** (free, ~10k req/day) — per-tag question counts,
   normalized as share-of-quarter (absolute volumes collapsed post-2023).
8. Skip: DBpedia (CC BY-SA contamination), IEEE Spectrum (no access), Reddit
   (no history, ToS), raw GH Archive/BigQuery (cost; Languish+Innovation Graph
   cover it).

Rankings UX note: with several ranking signals (languish, innovation graph,
PYPL, TIOBE, homebrew), store them under one `rankings: {source: value}` node
field and present them honestly as different lenses, not one merged number.

**AI enrichment**, modernized:
- Keep the crawl→extract→structured-output flow (`packages/ai/src/crawl.ts`
  logic ports nearly as-is: jsdom + readability + turndown).
- Move to the **Anthropic SDK** with structured outputs against the Zod node
  schema (`claude-sonnet-5` is the right cost/quality tier for this; the
  old gpt-4o path and its hand-massaged JSON schema go away — derive the tool
  schema from `packages/schema` Zod directly).
- Fix the known clobbering bug (old `ai/src/index.ts` TODO): enrichment writes
  only fields it owns; pipeline-owned fields (rankings, linguist data) are
  reapplied after enrichment — ordering enforced by a single `pipeline run`
  orchestrator.
- Enrichment output goes into a PR with the per-run provenance report, never
  straight to `main`.

Acceptance: `pnpm pipeline run --source=linguist` (etc.) is idempotent (second
run = zero diff); a full refresh produces a reviewable PR; unit tests with
recorded fixtures per source.

## 6. Phase 3 — Astro 7 site (`apps/site`)

### 6.1 Routing (preserve every existing URL)

| Route | Page | Notes |
|---|---|---|
| `/` and `/plangs` | plang grid + facets | islands |
| `/apps` `/tools` `/libraries` `/subsystems` `/communities` `/learning` | grids | same island, different facet config |
| `/licenses` `/paradigms` `/platforms` `/tags` `/typesystems` | reference lists | pure static `.astro` |
| `/{slug}` (plangs), `/{kind}/{slug}` (others) | vertex detail | static; small island for related-nodes explorer |
| `/blog`, `/blog/{slug}`, `/about` | content collections (markdown) | port `server/content` |
| `/{slug}.md`, `/llms.txt` | LLM endpoints | §7 |
| `/edit` | decision D3 | default: drop (§9) |

- `getStaticPaths` over the loaded graph; data loaded ONCE in the content-layer
  loader / a module-scope singleton and passed via props (never re-load per page).
- Old-key redirects: generate `_redirects`/worker redirects for `pl+x`-era URLs
  and old `#rison` fragment links (client-side shim on grid pages parses a
  legacy fragment once and rewrites to query params).
- Native cross-document **view transitions** (plain CSS `@view-transition`,
  which the site already uses) + Astro's built-in prefetch. **Skip
  `<ClientRouter />`** (CSP-incompatible, known island-rehydration bugs).
- Static output, no adapter. Deploy `dist/` via wrangler Workers static assets.

### 6.2 Islands + state

- Islands (React 19): `FacetsPanel`, `ResultsGrid`, `VertexInfoPanel`,
  `ThemeToggle`, `PromptMenu` (§7). Everything else is `.astro` static.
- One `@xstate/store` per grid page in `apps/site/src/stores/facets.ts`:
  context = `{filters: Map, mode: "all"|"any", order}`, events =
  `setFacet/clearFacet/clearAll/setMode/restoreFromUrl`. Islands subscribe with
  `useSelector` from `@xstate/store-react`. URL sync via `enqueue.effect`:
  debounced `history.replaceState`, plus a `popstate` listener triggering
  `restoreFromUrl`. Guard: store is only created/read client-side.
- **Filter state moves from `#rison` fragment to query params** with a readable
  scheme, e.g. `/plangs?paradigms=functional,logic&mode.paradigms=any&created=2010..`
  Readable URLs are shareable, crawlable, and LLM-friendly (§7). Drop the
  localStorage filter persistence (the "sticky filters" surprise); keep
  localStorage only for theme + UI prefs.
- Grid rendering: render thumbnails client-side from `facets.json` (fetched by
  the grid island only — detail/reference pages ship NO dataset), with the
  static HTML containing the top-N by ranking for SEO/no-JS, and
  virtualization (e.g. `virtua`) if DOM size matters after measuring.

### 6.3 Theme port (preserve identity)

Port tokens from `styles.css` into Tailwind 4 `@theme` in `global.css`,
keeping the exact identity: purple `#609` / `chartreuse` primary-secondary
swap between modes, `mintcream`/`#001` background-foreground, striped +
radial-gradient backdrop-blur backgrounds, thin purple scrollbars, Nunito
body + Rubik-italic headers (move fonts to **Astro's built-in Fonts API**;
stop shipping the .ttf fallbacks). Delete `tailwind.config.js` (v3-style CJS
`@config` shim) entirely.

Fix while porting:
- **Theme flash**: replace hardcoded `class="dark"` + restore-script with a
  tiny inline `<script is:inline>` in `<head>` that sets the class from
  localStorage/`prefers-color-scheme` before paint.
- Scripts become type=module/deferred automatically under Astro (the old build
  had a render-blocking `<script>` in `<head>`).
- Run a contrast audit on the token pairs (chartreuse-on-light and the /25–/85
  opacity overlays are the suspects); adjust shades minimally, keep the vibe.

## 7. Phase 4 — LLM & agent support (new feature)

Make every page and every filter state addressable, promptable, and
machine-readable:

1. **Deep links** (prerequisite, done in 6.2): filter state in readable query
   params ⇒ any view of the data has a canonical URL.
2. **Markdown twins**: for every vertex page, emit `/{slug}.md` (Astro
   endpoint) — frontmatter (key, kind, canonical URL) + the page content as
   clean markdown including relationships. Add
   `<link rel="alternate" type="text/markdown">` on HTML pages.
3. **`/llms.txt`** (and `/llms-full.txt`): site overview, dataset description,
   URL grammar (how query-param filters work, spelled out so an agent can
   CONSTRUCT filter URLs), links to the markdown twins and JSON exports.
4. **JSON endpoints**: `/data/plangs.json` (full dataset, already exists —
   keep), `/data/nodes/{kind}/{slug}.json` (per-vertex), `/data/facets/{kind}.json`.
5. **Prompt menu island** on every page: a small "✨ Ask about this" menu —
   copies a prepared prompt containing the canonical URL (+ current filter
   description in plain English) and the markdown-twin URL; plus "Open in
   Claude/ChatGPT" links (`https://claude.ai/new?q=...` /
   `https://chatgpt.com/?q=...` — verify the current prefill URL formats at
   implementation time). Example prompt: *"Using the data at
   https://plangs.page/plangs.md?paradigms=functional... compare these
   languages' type systems and suggest which to learn next."*
6. **MCP server (stretch, optional)**: `packages/worker` can additionally expose
   a remote MCP server on the existing Cloudflare worker (search nodes, get
   node, run facet query) so agent users can attach plangs as a tool. Only
   after everything else ships.

## 8. Phase 5 — Layout & mobile polish (keep the theme, fix the ergonomics)

Findings-driven fixes (from the UI audit):
- **Portrait phones**: today's 3-pane grid caps facets at `35dvh` + info at
  `18dvh`, squeezing results into a sliver. Replace with: results grid gets the
  viewport; facets open as a **bottom sheet/drawer** (with a filter-count
  badge); vertex info opens as a sheet on tap instead of a persistent pane.
- **Breakpoints**: replace orientation-based raw media queries with standard
  width breakpoints + container queries; the `landscape-wide: 1720px` cutoff
  currently gives laptops the cramped layout. KEEP the excellent
  container-query facets-sidebar→dropdown collapse.
- Body scroll: drop the `h-dvh overflow-hidden` app-shell on content pages
  (detail/reference/blog scroll normally; only grid pages keep internal panes
  on desktop) — avoids mobile dvh jitter.
- **A11y**: real `<button>`s with `aria-pressed/expanded` for every toggle
  (today: divs with tabIndex + Enter-only), `aria-label` on icon links,
  44px tap targets in the toolbar, Space-key activation.
- Keep: schema.org microdata, lazy images with width/height, hover prefetch,
  ranking badges, the info-panel external-link icon row.
- Kill the `setTimeout`-based cross-component syncs and DOM-element `.state`
  stashing — the store makes them unnecessary.

## 9. Decisions (defaults chosen; override before executing)

- **D1 — Graph engine**: DEFAULT graphology-over-YAML (§4.3). Alternative B:
  add LadybugDB at build time for Cypher queries (revisit after launch).
  Alternative C: Oxigraph/RDF if the project pivots to Wikidata-native.
- **D2 — Taxonomy pruning**: DEFAULT fold `bundle`+`author`+`post` (§4.2).
  Underpopulated kinds (`subsystem`:1, `app`:4) are KEPT but flagged — grow or
  fold them after the data-source imports run.
- **D3 — The `/edit` editor + PR worker**: DEFAULT **drop both**. With YAML
  source files, "edit this page" becomes a deep link to GitHub's web editor for
  that node's YAML (`github.com/.../edit/main/packages/data/nodes/...`), and CI
  validation replaces the formatter-matching machinery. This deletes the
  editor sub-app, the OAuth flow, and the 208-line worker. (If the in-site
  editor is loved, port it later as an island writing via github.dev links.)
- **D4 — Filter-state encoding**: DEFAULT readable query params (§6.2),
  legacy-fragment shim for old links.
- **D5 — Trend charts**: the pipeline now keeps quarterly series (§5); adding
  sparklines/trend charts to detail pages is approved scope for Phase 5 but
  LAST priority.

## 10. Execution order & phase gates

```
Phase 0  tooling (pnpm/Node/vitest/CI)          gate: pnpm install+test green
Phase 1  schema+data migration (YAML/graphology) gate: round-trip equality test
Phase 2  pipeline importers + AI enrichment      gate: idempotent runs, fixtures
Phase 3  Astro site + islands + stores           gate: URL parity crawl (old sitemap
                                                 → new build, every URL 200/301)
Phase 4  LLM endpoints + prompt menu             gate: llms.txt + .md twins built
Phase 5  mobile/layout/a11y polish + trends      gate: Lighthouse mobile ≥ 95,
                                                 axe clean on key pages
Cutover  wrangler Workers static assets deploy   gate: prod smoke test, redirects
```

Phases 2 and 3 can run in parallel after Phase 1. Keep the old Bun build
runnable until the Phase 3 gate passes (don't delete `packages/server` +
`packages/frontend` until the URL-parity crawl is green).

## 11. Risks & notes for the executing agent

- **Do not trust memorized versions** — §1 was verified against July 2026
  reality (Astro 7, xstate-store v4 split packages, pnpm 11, Biome 2.5,
  Tailwind 4.3, Kuzu dead). Re-verify with a quick registry check at start.
- pnpm 11's `minimumReleaseAge` default can silently hold back fresh releases.
- Biome's `.astro` template support is experimental; fall back to Prettier for
  `.astro` files only if it misformats.
- Languish upstream has no explicit data license and a slowing cadence
  (last data 2025Q2) — worth an issue/email to tjpalmer; Innovation Graph is
  the hedge.
- The key rename (`pl+x`→`pl/x`) touches URLs, YAML, redirects, and the
  migration script — do it exactly once, in the Phase 1 migration, behind the
  round-trip test.
- SEO: preserve titles/descriptions/OpenGraph/microdata and ship the same
  sitemap URL set; the URL-parity crawl is the safety net.
