# Next steps

**This is the backlog — a working list, meant to be rewritten as work lands.**

Three docs, three lifetimes — keep them separate:

| Doc | What it is | Lifetime |
| --- | --- | --- |
| [PLAN.md](PLAN.md) | The v2 → v3 migration spec. **Fully executed.** | history — frozen |
| [REFACTOR.md](REFACTOR.md) | How this code thinks: invariants, load-bearing traps, why things are the way they are. | **durable** — outlives any one task |
| NEXT-STEPS.md (this) | What's left to do. | ephemeral — consume and rewrite |

**Read REFACTOR.md before changing code.** It owns the durable knowledge
(the safety nets, the six traps that each cost a real bug, the environment
facts). This file deliberately does not repeat it — if you find yourself
explaining *why the code is like that* here, it belongs in REFACTOR.md.

## Where things stand

`main` is plangs v3; all six PLAN.md phases are done. The v2 implementation is
frozen at tag **`final-plangs-2`** (`3a4a2353`) — everything deleted during the
migration is recoverable there.

Every gate is green. Run them rather than trusting this list (counts in prose go
stale — this file claimed 41 browser tests when there were 42):

```sh
pnpm check                                        # biome + knip
pnpm build                                        # tsc + build the site
pnpm -F @plangs/site check                        # astro check (.astro types)
pnpm test                                         # unit
pnpm -F @plangs/site build && pnpm test:browser   # real Chromium
pnpm url-parity                                   # every v2 URL still served
node scripts/data-fmt.mjs                         # must say "0 of 495"
```

Two things to hold onto:

- **Nothing is deployed** and nothing deploys on push (see §3).
- **No importer has been run for real** — `packages/data` still holds exactly the
  data migrated from v2, byte-for-byte.

---

## 1. Data pipeline — finish what's wired

> ✅ **Unblocked 2026-07-15.** The migration gate (REFACTOR.md §3.0) was
> narrowed from "nothing changed" to "nothing was lost": data changes now pass
> CI, and the test prints a `[drift vs v2]` summary of added/changed nodes and
> edges. Deleting any v2 node or edge still fails. When reviewing the first
> importer diff, read that drift line — it should match what the run claims.

The framework, four importers (`linguist`, `languish`, `wikidata`, `pypl`),
enrichment and CLI all exist and are tested against recorded fixtures. What's
left is real-world operation.

```sh
pnpm pipeline run --source=linguist --dry-run   # inspect
pnpm pipeline run --source=linguist             # write
```

- [ ] **Seed Wikidata QIDs (blocks the highest-value source).** Wikidata matches
      **0 of 267** languages today: no node carries `sources.wikidata`, and the
      importer deliberately refuses to guess QIDs. Needs the one-time SPARQL
      batch-resolve described in PLAN §5.3, landing `sources.wikidata: Q…` per
      node. Until then `--source=wikidata` is a no-op.
- [ ] **Do the first real refresh** and review the diff carefully. Dry-runs
      report: linguist 175 matched / 343 changes, languish 148 / 584 @2025Q2,
      pypl 28 / 84 @2026-07.
- [ ] **Register the remaining sources** (PLAN §5, adoption order). They are not
      stubbed — just unwritten, with a note in `packages/pipeline/src/sources/index.ts`:
      `pldb` (whitelist-gated), `innovation-graph`, `tiobe`, `homebrew`,
      `stackexchange`. DBpedia / IEEE / Reddit / GH-Archive stay skipped.
- [ ] **AI enrichment has never run** — needs `ANTHROPIC_API_KEY`. It is
      typechecked and unit-tested with a mocked client, using `claude-sonnet-5`
      and a tool schema derived from the Zod node schema. Treat the first run as
      untrusted: review the PR it produces.
- [ ] **Monthly data-refresh GitHub Action** opening a PR (PLAN §5) — not built.

> **Read before touching ownership.** Sources declare `owns` and the sets are
> *disjoint and asserted before every run* (`packages/pipeline/src/core/ownership.ts`).
> This is deliberately stronger than PLAN §5's "reapply pipeline-owned fields
> after enrichment", which would depend on run order forever. Adding a source
> that claims a field another source owns will fail fast — that is the design.

## 2. Verification we could not do here

> Why this section exists: five rendering bugs shipped behind green gates.
> REFACTOR.md §0 has the full lesson and the loop — read it there.

- [ ] **Lighthouse mobile ≥ 95 and axe clean** (the Phase 5 gate) — still
      unmeasured. Playwright is now installed, so this is newly cheap: run
      Lighthouse/axe against `apps/site/dist` and wire it into the browser
      project. The a11y work is done (real buttons with
      `aria-pressed`/`aria-expanded`, 44px targets, `aria-live` counts, labelled
      facet regions) but nothing has scored it.
- [ ] **Browser coverage is thin.** It covers the grid, facets, theme and a
      detail page. Nothing covers the prompt menu, the theme toggle's
      persistence, the blog, or dark mode visually.
- [ ] **Visual regression** would have caught the background mis-port instantly.
      Consider snapshotting a few pages now that Playwright is here.
- [ ] **Verify the Claude/ChatGPT prefill URL formats** used by the prompt menu
      (`apps/site/src/islands/PromptMenu.tsx`): `https://claude.ai/new?q=…` and
      `https://chatgpt.com/?q=…`. PLAN §7.5 said to confirm these at
      implementation time; they were written from documented behaviour, not
      tested against the live services.

## 3. Deploy / cutover

**Nothing here is deployed, and nothing deploys on push.** CI only runs
check/build/test/url-parity — there is no deploy workflow.

Observed on 2026-07-15 (verified by HTTP, not assumed):

- `plangs.page` → **200, still serving v2** (v2-only markers `grid-wrapper` /
  `id-mainContent`; no `astro-island` / `/_astro/`).
- `plangs2.pages.dev` → **200. The legacy Cloudflare Pages project still exists
  and is live.**
- The live v2 site returns **200 + HTML for every unknown path** (a catch-all),
  so "is the new site up?" cannot be answered by status code alone — check for
  an `astro-island` / `/_astro/` marker instead.

### Before pushing — check this first

The v2 setup was **Cloudflare Pages with a git integration configured in the CF
dashboard** (the old `wrangler.toml` had `pages_build_output_dir = "output"`).
That integration is invisible from the repo. If it is still connected to `main`:

- a push triggers a Pages build running the **old** build command against a repo
  where `output/`, `packages/server` and the Bun `build` script no longer exist;
- most likely it **fails** (safe: the last good deploy stays live, but noisy);
- if the command was changed to something that succeeds, it could publish the
  **wrong directory**.

→ **Check the Pages project's Build settings and disconnect the git integration
(or repoint it) before pushing.** This cannot be verified from here.

### Cutover steps

- [ ] `pnpm -F @plangs/site build` → the artifact is `apps/site/dist`
      (1800 files, ~15 MB). `npx wrangler deploy --dry-run` validates the config
      and uploads nothing.
- [ ] **`name` mismatch is deliberate but consequential.** `wrangler.toml` says
      `name = "plangs"`; the existing project is `plangs2`. `wrangler deploy`
      therefore creates a **new Worker** — it does not update the Pages project
      and does not touch the domain. Either accept the new name or set it to
      match what you want to replace.
- [ ] Deploy, verify on `*.workers.dev` first, and only then move the domain:
      `plangs.page` is currently attached to the **Pages** project, so the real
      cutover is removing the custom domain there and adding it to the Worker
      (dashboard, or `routes` in `wrangler.toml`). Expect brief downtime.
- [ ] Smoke-test prod after cutover: spot-check `/`, `/nim`, `/typesystem/static`,
      `/llms.txt`, `/nim.md`, and a bogus path (must be a **real** 404 now).
- [ ] Consider a deploy GitHub Action once the cutover is done, so `main` →
      production is reproducible instead of a laptop command.
- [ ] The `/edit` editor and its PR worker are **gone** (Decision D3). Each node
      page now deep-links to its YAML on GitHub
      (`EmmanuelOga/plangs2`, hardcoded as `REPO` in
      `apps/site/src/components/NodeDetail.astro`) — update it if the repo moves.

## 4. Deferred by decision (not oversights)

- [ ] **D2 taxonomy folding** — analysed in **REFACTOR.md §3.4**; recommendation
      is **not yet**. `post` is already folded (0 nodes). `bundle` (2) and
      `author` (1) remain, and D2's own precondition ("decide after the imports
      run") is unmet because no importer has run. Folding also costs URL parity
      (514→511) and touches an inference rule. Do the cheap honest parts first:
      drop the `deprecated` flag that nothing enforces, fix the stale
      `bun/plangs`, name the 4 nameless nodes.
- [ ] **D5 trend sparklines** (last priority). The plumbing is done: `languish`
      keeps the quarterly series and `trends` is schema-validated
      (`packages/schema/src/zod.ts`). Nothing renders it yet. Needs a real
      pipeline run first (no node has `trends` today).
- [ ] **D1 LadybugDB / Cypher** as an optional query layer — revisit only if
      graphology's typed helpers stop being enough. Kuzu is dead; don't go there.
- [ ] **MCP server** (PLAN §7.6, explicitly a stretch) — expose search/get/facet
      query so agents can attach plangs as a tool.
- [ ] **Facets client-render path.** PLAN §6.2 wanted the grid rendered from
      `facets.json` with a static top-N for SEO. Instead all cards are
      server-rendered and the island toggles visibility (the v2 approach), which
      is simpler and SEO-complete. `/data/facets/{kind}.json` already exists
      (**11.5 KB gzipped**, well under the 150 KB budget) if you want to switch.
      Add virtualization (`virua`) only if DOM size actually measures badly.

## 5. Known quirks

Moved to [REFACTOR.md](REFACTOR.md) — they are durable properties of the code,
not tasks, and they were rotting in two places at once. See:

- **§1 Do not break these** — the legacy fixture, the v2-shaped edge names/keys,
  the lower-cased `/typesystem/` URL segment.
- **§2 Load-bearing subtleties** — the six things that each cost a real bug and
  look deletable (container wrapper, `shrink-0`, `body::before`, `...ctx` in
  store handlers, `data-facets-ready`, `.ts` import extensions).
- **§5 Facts worth knowing** — pnpm 10 via mise, no Bun, Astro 7 markdown,
  Vitest 4 provider factory, `pl/.net` is a dotfile, nothing deployed.
