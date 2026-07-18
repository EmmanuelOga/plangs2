# ROADMAP

**The single status document.** Everything pending, partial, done or deferred
lives here — rewrite it freely as work lands: tick items, record measured
results, move durable discoveries to [CLAUDE.md](CLAUDE.md). Read CLAUDE.md
**before changing code** — it has the verification loop, the invariants, and
the traps. History: the executed migration spec is frozen at
`git show 008e073c:PLAN.md` (code comments citing `PLAN §n` point into it);
the v2 implementation is at tag `final-plangs-2`; the pre-pivot roadmap (full
migration/importer history) is retrievable at `git log -- ROADMAP.md`.

Legend: ✅ done · 🔶 partial · ⬜ pending · 🧑 needs the owner (skip, don't attempt) · ⛔ deferred by decision

Counts in prose go stale — trust the gates (CLAUDE.md has the list), not this
file's numbers.

## Premise (post-pivot, 2026-07-17)

v2 never gained traction, so v3 no longer stays a structural drop-in for it.
The bet: **evolve the data model as aggressively as it deserves**, make v3
good enough to earn its own audience, and only then let a stable public data
model become a consideration. What binds:

- **Linguist compatibility is the one hard external contract** (the linguist
  importer's identity fields + the disjoint-`owns` model).
- **Data loss is VISIBLE, not LOCKED**: the v2 structural gates are now
  printed two-way drift reports (`[drift vs v2]`, `[drift vs v2 urls]`);
  removals are listed item by item but never redden CI.
- **Sacred:** the YAML dataset (canonical), the rendering/verification lessons
  (a green build proves nothing rendered), hard rules 1–2 below.

## ⚡ Pivot execution — ✅ DONE (2026-07-17, Fable session)

All four mission items landed; full verification loop green after each
(biome+knip, tsc, astro check, 234 unit + 63 browser tests, URL check,
data-fmt canonical, pixel baselines re-recorded and eyeballed).

- ✅ **Gates → drift reports** (`c3637717`). `round-trip.test.ts` asserts only
  "loads clean" + "fixture exists"; everything vs v2 prints as a two-way
  report with removals itemized. `url-parity.mjs` asserts only v3's own
  surface (static routes, grids, blog-from-content) and reports legacy-URL
  drift. CLAUDE.md invariants rewritten to match.
- ✅ **`pl/scss` node** (`237a4e16`, owner decision): `.scss` is back in the
  dataset where Linguist expects it. Authored minimal; linguist importer
  filled its owned fields (dry-run verified: exactly 6 changes, all scss).
  Grid baselines re-recorded (267 → 268 languages) and visually verified.
- ✅ **Python post table → markdown** (`cf3f46fd`, owner decision): vertex
  refs in the old raw-HTML table now render as real links (verified in built
  HTML). Blog test tightened to whole-`<article>` scope.
- ✅ **`bun/plangs` bundle describes the v3 stack** (`82950bf4`, owner
  decision "stop caring about Bun"): dropped `entr`/`esbuild`/`overmind`,
  added `tool/tailwindcss`. First live exercise of the removal report — it
  printed all 3 dropped edges while CI stayed green. (The three tool *nodes*
  still exist; their fate is D2's bundle/author product call.)
- Also landed with the answered decisions: PLDB stays fill-only (was already
  built that way); inception stays review-only (no-op).

## Graph technology — D1 CLOSED (2026-07-17): keep graphology; LadybugDB is the watch-list successor

Deep research ran against the measured workload, not vibes. The workload:
496 nodes / ~9,000 edges (5,076 authored + 3,857 from one bounded-BFS
transitive rule), compiled from YAML once per build in ~295 ms + 10 ms
materialization, queried by ~10 small typed functions (key lookup, labeled
in/out-edge iteration, kind scans), **zero graph code or data on the client**
(facets are SSR'd data-attributes + an 8.7 KB island), and a pipeline that
writes YAML directly, bypassing the graph. 25 externally verified claims,
none refuted; sources include cozodb.org, stateofthegraph.com, maxdemarzi.com,
thedataquarry.com, npm/GitHub registry data fetched 2026-07-17.

**Verdict: no database earns its complexity at this scale. Keep graphology as
the build-time container.** Specifics, ranked:

1. **graphology 0.26.0 (keep).** Maintenance mode, not abandoned: last
   release Jan 2025, but that release added native ESM (which is what our
   plain-Node pipeline needs) and ~18-month gaps are its historical cadence.
   Risk is bus factor (one maintainer); the mitigation is that we use it
   *only* as a typed container, so the fallback — **replace with plain typed
   Maps in-repo, ~a day of work** — is always available and makes dormancy
   moot. Don't do the Maps rewrite preemptively; it buys nothing today.
2. **LadybugDB — the re-litigated Kuzu verdict.** "Kuzu is dead" was half
   right: Kùzu Inc. is gone (Apple acqui-hire agreed 2025-10-09, confirmed by
   an EU DMA filing; repo archived 2025-10-10), but the lineage is alive as
   **LadybugDB** (MIT, `github.com/LadybugDB/ladybug`, fork created *before*
   the archiving): Kuzu's Cypher dialect + columnar storage, multi-label
   nodes, an Arrow/DuckDB "graph lakehouse" direction, releases every 1–2
   weeks (v0.18.2 on 2026-07-15), npm `@ladybugdb/core` (Node) and
   `@ladybugdb/wasm-core` (WASM). Analysts (State of the Graph / Year of the
   Graph) and practitioners (Max De Marzi) treat it as the legitimate heir.
   Caveats: ~4 months old as a package, single npm maintainer, OPFS/WASM path
   visibly young, WASM gzip size unmeasured. **Re-evaluate only on a concrete
   trigger** — see below.
3. **Killed candidates.** *CozoDB*: best query-language fit on paper
   (embedded Datalog, native transitive closure) but effectively dormant —
   npm frozen at 0.7.6 (Dec 2023), no commit since Dec 2024, a 2026-07-13
   silent-data-corruption issue with zero maintainer response. Disqualifying.
   *DuckDB + DuckPGQ*: DuckPGQ is a self-described CWI research project,
   bus factor 1, lags DuckDB core, no WASM story; duckdb-wasm itself is
   healthy but ~1.8–3.2 MB compressed — several times our entire dataset.
   *oxigraph*: actively maintained but the wrong data model (RDF/SPARQL —
   we'd remodel typed property data as quads for zero payoff), ~1.43 MB
   gzipped WASM, README self-declares unoptimized query evaluation.
   *SQLite recursive CTEs*: no benefit over in-memory at 9K edges.
4. **The durability heuristic** (State of the Graph's consolidation read,
   validated twice now by Cozo's fade and Kuzu's acquisition): single-vendor
   embedded engines are structurally acquisition/abandonment-prone. The
   survivable forms are a community fork with distributed ownership
   (Ladybug), graph capability inside an already-durable host (SQLite/
   DuckDB), or **code in your own repo** — which is what graphology-as-a-
   container effectively is, given the Maps fallback.

**Re-evaluation triggers for LadybugDB** (any one, and only then):
a client-rendered facet grid that needs real queries in the browser; an MCP
server whose query surface outgrows the ~10 typed functions; dataset growth
that makes in-memory compile actually slow (~100× today's size). At decision
time: measure `@ladybugdb/wasm-core` gzipped, check whether its in-memory
mode needs COOP/COEP headers (a constraint on static Cloudflare), and
re-check governance (still one npm maintainer?). Migration shape if
triggered: pipeline keeps writing YAML (canonical, unchanged); build compiles
YAML → a Ladybug DB file as an *additional* artifact; queries move to its
Cypher/GQL dialect — which sits on the ISO GQL standardization path, unlike
graphology's imperative API or Cozo's Datalog.

## Data model / RDF — D7 PROPOSED (2026-07-17, Fable session): two-core plan, 🧑 awaiting owner answers (O7)

Three adversarially-verified deep-research runs (312 agents total, primary
sources fetched 2026-07-17: W3C spec statuses, repo/release dates, registry
stats) on (1) the RDF ecosystem, (2) a Python "semantic core" architecture,
(3) PGQL and property-graph query languages. Full reports live in the
2026-07-17 session; condensed verdicts:

- **Full RDF pivot rejected** (canonical Turtle + SHACL CI): standards in
  flux (RDF 1.2 at CR since 2026-04-07, named-graph semantics still
  unstandardized; SHACL 1.2 incl. Rules all Working Drafts), best validators
  are Java/Python only, Turtle authoring is worse for PR contributions, and
  the "emit JSON-LD for AI/SEO" payoff is empirically debunked (Ahrefs
  diff-in-diff, 1,885 pages: no AI-citation lift; live AI fetchers read
  visible text, skip JSON-LD). schema.org/ComputerLanguage is bare (zero own
  properties, <1K domains).
- **Two-core plan proposed instead** (owner's direction): TS core stays
  canonical + presentation; a Python core owns the RDF side as a **derived
  view**. Discipline rules that keep it safe: YAML remains the only source
  of truth (Python writes nothing back, or only through the pipeline's
  `owns` gate); the Python core is **non-gating and removable in one
  commit**; glue is **files (N-Quads/TriG), not HTTP**, until a real server
  exists. TS inference stays canonical; Python re-expresses the 3 rules in
  SHACL-AF as a printed **parity report** (same philosophy as the drift
  reports). Phases: P0 scaffold (committed `mise.toml` — repo has none
  today — + uv workspace + poe, copy the `~/dev/unrelated` house pattern);
  P1 YAML→quads twin (pyoxigraph, named graph per source mirroring `owns`,
  emits `.nq`/`.trig`/JSON-LD artifacts — absorbs the "hybrid emit" option —
  + hand-written SHACL shapes + cross-core parity report); P2 SHACL-AF
  spike (can it express bounded-depth transitive closure? open question —
  `--iterate-rules` is unbounded fixpoint); P3 LinkML schema artifacts
  (its gen-typescript is static-only — the TS boundary contract is
  OpenAPI/JSON Schema, not LinkML); P4 server (FastAPI/Litestar → OpenAPI
  3.1 → hey-api typed client; owner-led, post-deploy-decision; natural MCP
  host). Verified enablers: uv workspaces (Airflow: 120+ distributions, one
  lockfile), pySHACL 0.40.0 (2026-07-08) validates directly against a
  pyoxigraph Store, oxigraph 0.5.9 npm+PyPI same Rust core same-day release,
  named-graph round-trips empirically verified (footgun: JS options are
  `to_graph_name`/`from_graph_name`; the README's `to_named_graph` spelling
  is a silent no-op). Risks: SHACL-AF being reworked into WD-stage SHACL 1.2
  Rules; Oxigraph 0.x single-maintainer; pySHACL 0.40 breaking (rdflib≥7.3).
- **PGQL: no future outside Oracle** — spec 2.1 (2025-04) maintained-but-
  legacy, parser dormant (single Oracle maintainer, Java/Spoofax), Oracle
  itself calls it a "proprietary precursor" and ships one-way
  `migrate_pgql_to_sql`. The converged **ISO GQL / SQL:2023 SQL-PGQ
  `GRAPH_TABLE`/`MATCH` family** is the real horizon (openCypher frozen at
  v9 as the migration road to GQL). Proposed framing: watch-list entry, no
  compatibility layer; plangs' job is staying cleanly *exportable* (quads +
  typed edges) so the owner's `~/dev/unrelated` query surfaces can target it
  as a backend. Unverified this round: LadybugDB's exact dialect, DuckPGQ
  health, embeddable JS/TS/Python GQL engines.

## Hard rules when executing this roadmap

1. **Pushing is allowed** (since 2026-07-17: the owner checked the Cloudflare
   dashboard and disconnected the legacy Pages git integration — 3a cleared).
   Keep the discipline: one item per commit, loop green before each push.
2. **Never deploy.** `wrangler deploy --dry-run` is fine; anything that
   touches Cloudflare for real is not.
3. **Never regenerate `packages/graph/test/fixtures/plangs.legacy.json`.**
   It gates nothing anymore — there is nothing to "make pass" — but it is
   the only surviving record of v2's content and the drift reports read it.
4. **Run the full verification loop after each item** (CLAUDE.md has the
   commands). For anything visual, screenshot and look — five rendering bugs
   once shipped behind fully green gates. Grid-visible data changes require
   re-recording pixel baselines and *looking at them*.
5. Items marked 🧑 or ⛔ are not yours: skip them and note why. When an item
   needs a product decision, ask — don't decide.
6. As each item lands, update this file: flip status, replace estimates with
   measured results, prune what no longer applies.
7. **Removals in a drift report must match the commit's stated intent.** The
   reports never redden CI, so the reviewer discipline replaces the gate:
   a `[drift vs v2]` removal the commit message doesn't claim is a bug.

## Snapshot

- ✅ v2 → v3 migration complete; all importers registered and run for real;
  monthly refresh Action authored (untested until first push).
- ✅ **Pivot executed and D1 closed** (2026-07-17, above).
- ⬜ **Nothing is deployed.** `plangs.page` still serves v2. Deploy is
  owner-led (track 3).
- The remaining work splits into: an execution queue for Opus (below), and
  an owner-decision queue (below that).

## Execution queue (Opus resumes here)

Ordered; one commit per item; full loop between items.

- ⬜ **E1. D5 trend sparklines** — approved by decision, previously blocked
  on data, **now unblocked** — but note (audit 2026-07-17): the committed
  dataset has **languish series only** (414 plang nodes). The
  innovation-graph importer's "25-quarter series" was a **dry-run**
  (`f9508f13`'s own message); no `trends.innovation-graph` or tiobe data is
  committed — those series appear once a real pipeline run lands (sibling of
  O4). Implement the node-page sparkline against the languish series. It is
  a *visual* feature: pixel-baseline it (a new baseline or an updated
  `detail-nim` one), verify by re-introducing a breakage, and eyeball the
  PNGs.
- ⬜ **E2. Modernize the serialized dataset keys** (`pl+nim` → `pl/nim`) —
  now sanctioned as its own tracked effort. The public `/data/plangs.json`
  drops the v2 key shape; **keep `toSerializedGraph()`'s legacy form for the
  drift report** (the fixture is in `pl+nim` form — translate inside the
  report instead if simpler). Bump/annotate `llms.txt` so LLM consumers see
  the new shape. The v2-shaped public dataset was a drop-in for consumers
  that never materialized; do it before first deploy so no external contract
  ever forms around the legacy shape.
- ⬜ **E3. `FORBIDDEN_INFERENCES` → negative test** — resolve the "dead by
  grep but load-bearing as documentation" tension by wiring it into a real
  test asserting the forbidden inference is NOT materialized (the
  plang→app→license case). Cheap, and it closes one held 4f item without an
  owner call (the alternative was demoting to a comment; a test is strictly
  better).
- 🔶 **E4. 2c CI enforcement of pixel baselines** — blocked on a Linux
  baseline set (`-chromium-linux`): needs `pnpm test:visual --update` run on
  Linux/CI image, then LOOK at the 5 PNGs, commit. Attempt only if a Linux
  runner/Docker is actually available; otherwise leave the loud-skip in
  place.

Held out of the queue deliberately: the plain-Maps graphology replacement
(buys nothing today — do it only if graphology goes fully dormant), and the
URL-scheme change (v2's URLs are indexed by search engines; changing the
path scheme is a redirects+SEO decision the owner should time against the
cutover, see O5).

## Owner decision queue — 🧑 not yours, ask; listed so nothing is lost

- **O1. 4f held exports**: `influencedByTransitive` / `plangsByParadigm` /
  `familyTree` are dead by grep but are a half-wired influence/family view
  (`influencedByTransitive` is the only reader of the transitive edge the
  inference engine materializes). Keep-and-wire, or delete view+rule
  together? (Deleting the rule removes 3,857 inferred edges → they'd print
  as drift-report removals; that's the report working.)
- **O2. D2 taxonomy**: do `bundle` (2 nodes) and `author` (1 node) survive
  as concepts? Pure product call, fully unblocked now (removals print, they
  don't fail). If dropped: `/bundle/*`, `/author/geo` pages disappear
  (drift-reported), the Bundle→Tool→Plang hoist rule goes, and `author/geo`'s
  rels need a home in blog frontmatter.
- **O3. PLDB node-addition policy**: importers only enrich existing nodes;
  growing the dataset from PLDB's notability filter is a whitelist-policy
  decision.
- **O4. 1d first AI enrichment run**: runnable via OAuth
  (`scripts/pipeline-auth.sh run --source=ai --opt.keys=pl/nim --dry-run`)
  but billed + writes human-reviewed prose; owner runs it, lands as its own
  clearly-marked commit.
- **O5. URL scheme / cutover sequencing**: v2's URLs are search-indexed.
  Decide whether the deployed v3 keeps them (current state; zero SEO risk)
  or modernizes with redirects at cutover. Then track 3 (3a ✅ cleared
  2026-07-17 → deploy → smoke test → 3e deploy Action) — owner-led; 2d (verify the
  Claude/ChatGPT prefill URLs) needs a logged-in browser session.
- **O6. Inception field**: stayed review-only by decision; reopen only if a
  separate `inception` (vs "appeared") field earns its place in the model
  rework.
- **O7. D7 two-core / RDF questions** (research section above has full
  context; answers unblock the D7 rewrite):
  1. Adopt the phased two-core plan (derived, non-gating, files-as-glue,
     TS inference canonical with SHACL parity-shadow)? Cut/reorder phases?
  2. Python core in this repo (`cores/semantic/` + committed `mise.toml`,
     recommended) or a separate repo?
  3. Accept the PGQL framing: track the GQL/SQL-PGQ family, plangs stays an
     exportable backend for `unrelated`'s query surfaces — no PGQL layer?
  4. Green-light the roadmap rewrite (D7 row final, new P0–P4 track, fold
     old "hybrid emit" into P1, PGQL watch-list; Opus's E1–E4 continues
     unchanged in parallel)?
  5. schema.org page markup (`ComputerLanguage` + `sameAs` in page heads):
     near-free, honest-but-modest payoff (rich results, NOT AI citations) —
     include or skip?

## Deferred / stretch — ⛔ do not implement without the owner

- ⛔ **MCP server** (PLAN §7.6): expose search/get/facet-query. Note: if its
  query surface ever outgrows the typed helpers, that is a LadybugDB
  re-evaluation trigger (above).
- ⛔ **Facets client-render path** (+ virtualization): revisit only if DOM
  size measures badly; the research adds a datum — any wasm-DB-in-browser
  approach starts at ~1.4–3.2 MB compressed, so if this path ever opens, the
  8.7 KB attribute-matching island remains the right shape at current scale.
- ⛔ Perf 78 on grid pages: structural (SSR-everything ships 268 cards);
  reopening it means reopening the client-render decision, not tuning.

## Decision log

| # | Decision | Outcome |
|---|---|---|
| D1 | Graph engine | **Closed 2026-07-17 after deep research**: keep graphology as build-time container; plain-Maps is the dormancy fallback; LadybugDB (the live Kuzu lineage — Apple acqui-hired the company, MIT fork continues) is the sole re-evaluation candidate, on concrete triggers only. CozoDB / DuckPGQ / oxigraph ruled out (dormant / research-grade / wrong model). |
| D2 | Taxonomy pruning | `post` folded. `bundle`/`author`: open product call (O2), unblocked by the pivot. |
| D3 | `/edit` editor + PR worker | **Dropped.** Edit = GitHub deep link to the node's YAML; CI validates. |
| D4 | Filter-state encoding | Readable query params (`?paradigms=functional&mode=all`), replacing v2's `#rison`. |
| D5 | Trend charts | Approved; **unblocked** — real trend data exists since the importer runs. Queued as E1. |
| D6 | v2 compatibility | **Dropped 2026-07-17** (owner). Gates → two-way drift reports; Linguist stays hard; fixture frozen as historical record. Executed same day. |
| D7 | RDF / data model | **Proposed 2026-07-17, awaiting owner (O7)**: full RDF pivot rejected after deep research; two-core plan (TS canonical + derived Python semantic core, P0–P4) proposed; PGQL declared Oracle-legacy — track GQL/SQL-PGQ instead. |

## Log

- **2026-07-17 (Fable session, later)** — **RDF/PGQL research; D7 proposed.**
  Three verified deep-research runs (RDF ecosystem, Python-core
  architecture, PGQL/GQL landscape) recorded above as the D7 proposal +
  O7 question set. Roadmap audit: E1's data claim corrected (committed
  trends are languish-only; innovation-graph "25-quarter series" was a
  dry-run). Owner context noted: `~/dev/unrelated` is the owner's long-term
  graph-QL/RDF program and the house TS+Python (mise+uv+poe) template.
  Docs-only session — no code, nothing deployed.
- **2026-07-17 (Fable session)** — **Pivot executed; D1 closed.** Gates
  converted to two-way drift reports (removals itemized, never asserted);
  CLAUDE.md invariants rewritten; `pl/scss` added (`.scss` restored via
  linguist importer); python post table → markdown (refs now link); bun-era
  bundle tools replaced with the v3 stack (first live removal report). Deep
  research (102-agent verified run + supplemental sources incl. CozoDB,
  State of the Graph, Max De Marzi): keep graphology; Kuzu lineage lives as
  LadybugDB — watch-list with concrete triggers; CozoDB dormant-disqualified.
  Roadmap rewritten around an Opus execution queue (E1–E4) and an owner
  queue (O1–O6). Full verification loop green at every step. Nothing pushed,
  nothing deployed.
- **2026-07-17** — Direction change decided (owner): drop v2 compat, evolve
  the data model; 5 data decisions answered; D1 reopened → punted to Fable.
- **2026-07-17** — Autonomous hygiene pass: config hints cleared, dead-export
  audit (5 removed, 4 held → O1), all gates green.
- **2026-07-15..17** — v3 migration completed end-to-end; importers run for
  real (3 real bugs caught by diff review + pixel baseline); a11y fixes
  (axe clean, 100s except structural grid perf); browser suite 37 → 63;
  pixel baselines at exact tolerance. Full history: `git log -- ROADMAP.md`.
