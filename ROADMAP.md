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

## Data model — D7 SETTLED (2026-07-21, owner session): TS/YAML canonical; RDF derived; dual validation; qualified edges

Decided interactively with the owner (all five O7 questions answered, plus
O1/O2/O6 and a D3 reopening in the same pass). Cross-project reasoning and
history live in `~/dev/unrelated/doc/lineage.md`. **The settled model:**

1. **Conceptual**: a property graph of curated nodes with ordered, nested
   interiors, plus per-source provenance — the pipeline's disjoint-`owns`
   model is named-graphs-in-TS-clothing.
2. **Canonical serialization / SoT**: nested YAML documents; **TS + a
   Standard Schema-conforming validator are the schema authority** (Zod
   4.4.3 today, which implements `StandardSchemaV1`). Consumers type against
   `StandardSchemaV1`, keeping validators plug-and-play (Valibot/ArkType
   could drop in); the concrete library is load-bearing only where the spec
   ends — **introspection** (GUI form rendering) and **JSON Schema export**
   (`z.toJSONSchema`, the P3/P4 boundary artifact). Format stays YAML — TOML
   (bad at nesting) and PKL/CUE/Dhall (second schema authority; JVM/Haskell
   runtimes vs the plain-Node pipeline) were evaluated and rejected.
3. **RDF is a derived view, never authored, never SoT**: quad export with a
   named graph per source. Invariant: **no authored fact lives only in RDF**
   — wanting to author something RDF-only is the signal to extend the
   canonical schema instead. Derived enrichment (inference output,
   provenance) may exist RDF-only; it's regenerable.
4. **Validation, two layers**: Zod validates document shape (per-file); SHACL
   validates assembled-graph semantics (referential integrity, forbidden
   inferences — E3's declaration is its natural citizen). SHACL starts as a
   printed **parity report** (non-gating, removable in one commit) and may
   graduate to a gate **only after converging to zero divergence** vs TS
   inference, which stays canonical.
5. **Query surfaces are derived and plural**: graphology now; **DuckPGQ
   (pin DuckDB 1.4.4) is the named SQL/PGQ reference target** (verified
   2026-07-20: community extension, CWI research project, not in DuckDB
   1.5.x); no PGQL layer — watch ISO GQL / SQL:2023 SQL-PGQ.
6. **Qualified assertions (valid time) — minimal convention** (D8): any
   relationship ref MAY be an annotated ref `{ref, since?, until?, ...}`
   (version-or-date), opt-in, bare keys stay valid forever. **Git is
   transaction time**; full bitemporality rejected (in-file tombstones would
   ruin the hand-edited interior). O6's inception question becomes the first
   instance. Authoring policy: humans hand-write only simple qualifiers;
   GUI/pipeline write the rest.
7. **Editing surface (D3 reopened)**: raw-YAML-in-IDE won't survive
   contributors who aren't the owner. Replacement: a **schema-driven GUI
   that writes canonical YAML** ("GUI writes, git reviews") — forms from the
   Zod schema, ref-pickers from the dataset, output through `data-fmt`,
   local-first (dev-only route). Agent editing (llms.txt, prefill URLs) is
   the near-term assisted surface. Hosted dbdb-style CRUD rejected (forfeits
   git-as-provenance and PR-as-moderation). Hosted/sync backend (Cloudflare
   / Convex / Zero) deliberately open → O8.

**Two-core track green-lit** (O7.1/O7.4 yes, as amended above): P0 scaffold
(`cores/semantic/`, committed `mise.toml`, uv + poe, `~/dev/unrelated` house
pattern) → P1 YAML→quads twin (pyoxigraph, named graph per source, `.nq`/
`.trig`/JSON-LD artifacts + SHACL shapes + parity report) → P2 SHACL-AF
spike → P3 LinkML schema artifacts → P4 server (🧑 owner-led,
post-deploy). Now execution items E8/E9 below; P2–P4 queue behind them.

### Background: the research that got here (2026-07-17)

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
- ✅ **E1–E3 landed** (2026-07-19): trend sparklines, v3 keys in the public
  dataset, forbidden-inference negative tests. E4 blocked on a Linux runner.
- ✅ **Data model SETTLED** (2026-07-21, owner session): D7 final (TS/YAML
  canonical, RDF derived, dual validation), D8 added (qualified edges,
  valid time), D3 reopened → schema-driven GUI, O1/O2/O6/O7 all answered.
  Execution queue refilled: E5–E10. Open owner items: O3, O4, O5, O8.

## Execution queue

Ordered; one commit per item; full loop between items. **E1–E3 landed
2026-07-19** (Opus session); E4 remains blocked on a Linux runner; **E5–E10
queued 2026-07-21** from the settled data model (D7/D8, O1/O2/O6 answers).

**⚠ Environment blocker (2026-07-21): the headless loop cannot execute
anything.** Under `claude -p --permission-mode acceptEdits`
(roadmap-loop.sh's default) every Bash command outside the allowlist
auto-denies with nobody to prompt: `node scripts/*.mjs`, all `pnpm`
commands, and `git commit` were all denied this iteration, and
`.claude/settings.local.json` is write-protected from inside a session, so
the loop cannot allowlist them itself. Until this is fixed **no queue item
can be verified or committed** — E6's changes sit dirty in the working tree
on purpose (only that item's edits; see 🔶 above). Fix, either way: run
`ROADMAP_LOOP_PERMISSIONS=bypassPermissions scripts/roadmap-loop.sh`
(trusted-repo mode the script already documents), or interactively
pre-approve the verification commands (`pnpm check|build|test*|url-parity`,
`pnpm -F …`, `node scripts/data-fmt.mjs`, `node scripts/url-parity.mjs`,
`git add|commit|diff|status|log|show`). Verified fixed when
`node scripts/data-fmt.mjs --check` runs from a loop iteration without an
approval error.

- ✅ **E1. D5 trend sparklines** (`9d689694`). Inline SVG per trend series on
  node detail pages, geometry as pure unit-tested functions in
  `apps/site/src/lib/sparkline.ts` (the `.astro` component is neither
  tsc-checked nor test-reachable, so no logic lives there). Confirmed: the
  committed data is **languish-only** — `innovation-graph`/`tiobe` series will
  draw for free once a real pipeline run lands them (O4's sibling). Series
  with <2 points or ragged parallel arrays are not drawn. `detail-nim` pixel
  baseline re-recorded and eyeballed, plus a dark-mode screenshot; the new
  `trends.browser.test.ts` was verified faithful by removing the `viewBox`
  (see the CLAUDE.md corollary — the naive height/width assertions did **not**
  catch it).
- ✅ **E2. Serialized dataset keys modernized** (`9dad7aec`, `pl+nim` →
  `pl/nim`). `/data/plangs.json` was the last surface speaking v2 keys while
  `llms.txt` and the README already promised `prefix/slug` everywhere. The
  drift report converts the **frozen fixture** to v3 keys at read time
  instead (fixture untouched); verified as a pure rename — the report prints
  identical numbers before and after. `newToLegacy()` deleted by hand (knip
  cannot see dead exports here); `legacyToNew` stays for the fixture and blog
  frontmatter. New `serialize.test.ts` asserts the artifact's shape.
- ✅ **E3. `FORBIDDEN_INFERENCES` → negative test** (`cfd51ca8`). The prose
  array is now declarative (`from`/`to` kinds + `why`) and the graph's
  inference test iterates it, against both a purpose-built graph and the real
  dataset. Writing it declaratively **caught that the prose had the direction
  backwards** ("a plang has a license" is stored `license → plang`), i.e. the
  old wording described a pair no rule could ever produce.
- 🔶 **E4. 2c CI enforcement of pixel baselines** — still blocked. Checked
  2026-07-19: no `docker`/`podman`/`colima` on this machine, so the
  `-chromium-linux` baseline set cannot be recorded here. The loud-skip stays.
  Unblocks the moment CI (or any Linux runner) can run
  `pnpm test:visual --update` — then LOOK at the 5 PNGs and commit them.
- ✅ **E6. Annotated refs + valid-time qualifiers (D8)** — verified and
  committed 2026-07-21 (interactive session; code was authored by the
  headless iteration, then verified here). Any rel target MAY be an annotated
  ref `{ref, since?, until?}` (`zAnnotatedRef` strict — a typo'd qualifier
  key is a load error, proven by test); loader maps qualifiers to edge
  `props` (warns when a duplicate target would drop them); serializer emits
  annotated targets in the public `/data/plangs.json`; `data-fmt`
  canonicalizes them (collapse/subsume/order); drift compares by target key
  so annotating a ref is not edge churn. `inception` added to the plang
  schema (ex-O6). First instances: `pl/swift` → `lic/apache`
  `since: 2015-12-03`, `pl/python` `inception: 1989-12`. Full loop green
  (262 unit + 67 browser, url-parity 19/19, data-fmt 0/496, 5 pixel
  baselines); all three new-test faithfulness checks done by re-introducing
  each bug (loader props, serializer emission, formatter collapse — each
  reddened). Two headless-authored test bugs found on first run: an
  index-access type error, and assertions written against the *YAML-reading*
  direction (`pl/x → lic/mit`) instead of the canonical stored direction
  (`license → plang`) — the exact trap E3 documented.
- ⬜ **E7. Drop `bundle` + `author` kinds (ex-O2)**. Nodes, `/bundle/*` and
  `/author/geo` pages, facets, and the Bundle→Tool→Plang hoist rule go;
  `author/geo` rels move to blog frontmatter. All removals print in the
  drift reports and MUST be claimed in the commit message (hard rule 7).
  Grid-visible → re-record pixel baselines and look.
- ⬜ **E5. Wire the influence/family view (ex-O1)**. Keep the transitive
  rule; `influencedByTransitive` / `plangsByParadigm` / `familyTree` get a
  real site view (the user-facing proof the inference engine earns its
  place). Small: exports exist, half-wired.
- ⬜ **E8. Two-core P0: scaffold `cores/semantic/`**. Committed `mise.toml`
  (repo has none — tools currently come from user-global config), uv
  workspace, poe tasks, copying the `~/dev/unrelated` house pattern.
  Non-gating from day one.
- ⬜ **E9. Two-core P1: YAML→quads twin + parity report**. pyoxigraph, named
  graph per source mirroring `owns`, emits `.nq`/`.trig`/JSON-LD artifacts;
  hand-written SHACL shapes; cross-core parity report (printed, non-gating —
  graduation to a gate only on measured convergence, per D7). P2 (SHACL-AF
  spike) and P3 (LinkML) queue behind it; P4 (server) is 🧑 owner-led.
- ⬜ **E10. Local schema-driven editor (D3 reopened)**. Dev-only route in the
  Astro site (localhost, behind `pnpm dev`): forms rendered from the Zod
  schema (introspection — the one place the concrete library is
  load-bearing, per D7 §2), ref-pickers listing the dataset (the
  "inspired by" checkbox experience), writes canonical YAML through
  `data-fmt` → normal commit → PR. No backend; hosted/sync tier is O8.

Held out of the queue deliberately: the plain-Maps graphology replacement
(buys nothing today — do it only if graphology goes fully dormant), and the
URL-scheme change (v2's URLs are indexed by search engines; changing the
path scheme is a redirects+SEO decision the owner should time against the
cutover, see O5).

## Owner decision queue — 🧑 not yours, ask; listed so nothing is lost

Answered 2026-07-21 (owner session) and converted to execution items:
**O1** → keep the transitive rule, wire the influence/family view (E5).
**O2** → drop both `bundle` and `author` kinds (E7). **O6** → subsumed by
the qualified-assertions convention (D8): `inception` becomes the first
valid-time instance (part of E6). **O7** → all five answered; see the D7
settled section (two-core green-lit as amended; `cores/semantic/` in-repo;
PGQL framing accepted with DuckPGQ as reference target; schema.org markup
deferred to cutover, revisit with O5).

Still open:

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
  Claude/ChatGPT prefill URLs) needs a logged-in browser session. schema.org
  markup (O7.5) rides along with this decision.
- **O8. GUI hosted/sync backend** (opened 2026-07-21, discussion explicitly
  unfinished): the local schema-driven editor (E10) needs no backend; the
  question is whether/how it grows a hosted or collaborative tier —
  Cloudflare primitives (Workers/D1/DO), Convex, or a sync engine
  (Zero/rocicorp). Frame for the discussion: the sync layer must be role
  **(a)** — an ephemeral collaboration/cache tier that materializes edits as
  canonical YAML commits/PRs (git stays SoT) — never role (b), synced-DB-as-
  SoT, which would reverse D7. Research thread attached: incremental sync
  engines ≈ incremental view maintenance ≈ semi-naive Datalog — the same
  delta-propagation math as `unrelated`'s strategy seam; see
  `~/dev/unrelated/doc/lineage.md`.
  **MCP folded in (2026-07-21)**: agent access splits into two tiers with
  different dependencies. (1) **Read tier — backend-independent**: a local
  stdio MCP server exposing the ~10 typed graph functions (search / get /
  facet-query / neighbors) plus a `schema` tool serving `z.toJSONSchema`
  output, so agents query the data model without parsing source. Could
  unblock as its own execution item once the owner green-lights (supersedes
  the blanket ⛔ below; the LadybugDB re-eval trigger still applies if its
  query surface outgrows the typed helpers). (2) **Write tier — rides this
  decision**: CRUD tools must go through the same canonical-write core as
  the GUI (Standard Schema validation → `data-fmt` canonical YAML → commit/
  PR; "MCP writes, git reviews" — never a direct DB write). Consequence:
  E10's editor should be built as a reusable editing core with three thin
  frontends (IDE-human, GUI, MCP-agent). Remote/hosted MCP (OAuth,
  multi-user) is exactly the hosted-tier question — Cloudflare has
  first-class remote-MCP hosting; evaluate alongside Convex/Zero. Note: MCP
  is the de-facto agent-tool interop standard; OpenAPI is the adjacent
  surface (P4 already targets it; one core can emit both). DSPy/BAML are a
  different layer (LLM programming / typed extraction — relevant to O4's AI
  enrichment, not to tool exposure).
  **Verified facts for this decision (adversarial deep research, 2026-07-21;
  full catalog: `~/dev/unrelated/doc/catalog.md`):**
  - **MCP goes stateless 2026-07-28** (final spec, breaking: session header /
    handshake removed). Any plangs MCP server targets the stateless spec
    from day one; in-progress-edit state travels as explicit handles in tool
    arguments. Recheck SDK status after publication.
  - **Cloudflare's remote-MCP stack is shipped and tracks the new spec**
    (`createMcpHandler` for stateless servers — no Durable Objects needed;
    `McpAgent`/DO only for a stateful collaborative tier; OAuth via
    `workers-oauth-provider`; Streamable HTTP, SSE deprecated). Lead
    verified candidate for the hosted MCP tier.
  - **Zero 1.0** (stable June 2026, Apache-2, self-hostable) **hard-requires
    Postgres as its upstream source of truth** — so role (a) is structural:
    Postgres could only ever be a derived materialization of YAML+git, with
    writes intercepted at Zero's Custom Mutators to land in git.
  - **Convex** is very active and self-hostable but **FSL-licensed (not OSI
    open source; per-release Apache-2 conversion after 2 years)**, and
    self-host parity covers free-tier features only. Fine for non-competing
    use; not MIT/Apache today.
  - **DSPy as the agent-loop substrate was REFUTED** in verification (alive,
    but fit-for-purpose unconfirmed); **BAML repositioned as "the
    programming language for agents"** and is the candidate to evaluate for
    the agent surface instead. Open question: BAML vs hand-rolled loop vs
    plain MCP tools.

## Deferred / stretch — ⛔ do not implement without the owner

- ⛔ **MCP server** (PLAN §7.6): expose search/get/facet-query. **Partially
  superseded 2026-07-21**: design now lives in O8 (read tier
  backend-independent and unblockable on owner say-so; write tier through
  the canonical editing core). The LadybugDB re-evaluation trigger (query
  surface outgrowing the typed helpers) still applies.
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
| D2 | Taxonomy pruning | `post` folded. **Resolved 2026-07-21** (owner): drop `bundle` + `author` too (E7). |
| D3 | `/edit` editor + PR worker | Dropped 2026-07; **reopened 2026-07-21** (owner): deep-link-only won't survive non-owner contributors. Now: local schema-driven GUI writing canonical YAML (E10) + agent path; hosted CRUD stays rejected; hosted/sync tier open (O8). |
| D4 | Filter-state encoding | Readable query params (`?paradigms=functional&mode=all`), replacing v2's `#rison`. |
| D5 | Trend charts | **Shipped 2026-07-19** as node-page sparklines (E1). Draws the languish series; other sources draw automatically once a real pipeline run commits them. |
| D6 | v2 compatibility | **Dropped 2026-07-17** (owner). Gates → two-way drift reports; Linguist stays hard; fixture frozen as historical record. Executed same day. |
| D7 | RDF / data model | **SETTLED 2026-07-21** (owner): TS/YAML canonical (Standard Schema validators, Zod 4 concrete); RDF derived-only ("no authored fact lives only in RDF"); dual validation (Zod shape + SHACL graph semantics, parity report graduating on convergence); two-core green-lit (E8/E9); DuckPGQ = SQL/PGQ reference target. Full model: settled section above; history: `~/dev/unrelated/doc/lineage.md`. |
| D8 | Temporal / edge model | **Settled 2026-07-21** (owner): opt-in annotated refs `{ref, since?, until?}` — valid time only, git IS transaction time; full bitemporality rejected (append-only tombstones vs hand-edited files). Authoring policy: humans write simple qualifiers; GUI/pipeline write the rest (E6). |

## Log

- **2026-07-21 (interactive session, owner away)** — **E6 verified and
  landed.** Ran the full loop over the headless iteration's E6 code: fixed a
  type error and a wrong-direction assertion in the never-run tests (the
  edge-direction trap E3 documented), proved all three new tests faithful by
  re-introducing each bug, one commit. Also: roadmap-loop.sh now pre-approves
  the verification-loop commands via `--allowedTools` (the iteration-1
  starvation fix), and the Zero/SQLite question was researched — SQLite is
  zero-cache's internal replica, NOT a supported upstream; O8 facts updated.
- **2026-07-21 (headless loop iteration)** — **E6 written, nothing executed.**
  The full E6 implementation (schema refs + inception, loader edge-props,
  serializer annotated targets, formatter canonicalization, drift-by-key,
  first data instances, new tests) was authored to disk, but the loop's
  permission mode denied every Bash command — no formatter, test, build, or
  commit ran. E6 left 🔶 with the exact remaining steps; environment blocker
  recorded above the queue; working tree deliberately left dirty with only
  this item's changes.
- **2026-07-21 (owner session, interactive)** — **Data model settled.** All
  five O7 questions + O1/O2/O6 answered with the owner; D7 finalized (TS/YAML
  canonical with Standard Schema validators, RDF derived-only, dual
  validation with graduation-on-convergence, DuckPGQ as SQL/PGQ target,
  format stays YAML); D8 added (opt-in annotated refs, valid time only, git
  as transaction time — full bitemporality explicitly rejected); D3 reopened
  (raw-YAML editing judged owner-only; schema-driven GUI + agent path,
  hosted/sync tier parked as O8 with the sync-engine ≈ incremental-Datalog
  research thread noted). Execution queue refilled E5–E10. Cross-project
  lineage doc written at `~/dev/unrelated/doc/lineage.md` (rainbowfish →
  plangs → unrelated) and both repos' CLAUDE.md now cross-reference each
  other. Docs-only session — no code, nothing deployed.
- **2026-07-19 (Opus session)** — **E1, E2, E3 landed**; full verification
  loop green before each commit (biome+knip, tsc, astro check, 247 unit + 67
  browser tests, URL check, data-fmt canonical, pixel baselines). Trend
  sparklines shipped and eyeballed in both themes; the public dataset dropped
  v2's `pl+nim` keys before any deploy, so no external contract can form
  around them; `FORBIDDEN_INFERENCES` became an enforced declaration (and the
  rewrite caught its direction was backwards). Every new test was confirmed
  faithful by re-introducing the bug. E4 skipped — no Linux runtime on this
  machine, verified. Nothing deployed. Durable discoveries moved to CLAUDE.md
  (the SVG-viewBox verification corollary; the serializer's key shape).
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
