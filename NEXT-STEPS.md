# Next steps

State as of **2026-07-15**, after executing [PLAN.md](PLAN.md).

`main` is plangs v3. The v2 implementation is frozen at tag **`final-plangs-2`**
(`3a4a2353`) — everything deleted during the migration is recoverable there.

## Where things stand

All six phases are done and every phase gate is green:

| Gate | Command | Status |
| --- | --- | --- |
| Unit tests | `pnpm test` | 156 tests |
| **Browser tests** | `pnpm test:browser` | 41 tests (needs a build first) |
| **Migration fidelity** | `pnpm vitest run packages/graph/src/round-trip.test.ts` | YAML deep-equals the v2 graph |
| Lint / format / dead code | `pnpm check` | biome + knip, clean |
| Typecheck `.astro` | `pnpm -F @plangs/site check` | 0 errors |
| Typecheck + site build | `pnpm build` | 515 pages |
| **URL parity** | `pnpm url-parity` | 514/514 v2 URLs served |
| Data canonical form | `pnpm data:fmt` | 0 of 495 changed |

`pnpm test:all` runs unit + browser. Browser tests run against the **built**
site, so `pnpm -F @plangs/site build` must come first (CI does this).

Nothing is deployed, and **no importer has been run for real** — `packages/data`
still holds exactly the data migrated from v2.

### The two oracles (don't delete these)

- `packages/graph/test/fixtures/plangs.legacy.json` — the v2 graph, reconstructed
  from the v2 definitions. It is what makes the round-trip and URL-parity gates
  meaningful. The one-time migration script that produced it is gone (its inputs
  were the v2 packages), so this fixture is the permanent record.
- `pnpm url-parity` reconstructs the v2 URL set from that fixture + the v2 `href`
  rules. Keep it in CI.

---

## 1. Data pipeline — finish what's wired

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

> **Lesson worth keeping.** Build + URL-parity + unit tests were all green while
> the site was visibly broken: they proved markup was *emitted*, never that it
> *rendered*. Four real bugs (layout never applying, facet rows collapsing,
> filtering dying after "match all", a mis-ported background) lived behind those
> green gates. `pnpm test:browser` and `pnpm -F @plangs/site check` exist because
> of that. **Look at the page.**

- [ ] **Lighthouse mobile ≥ 95 and axe clean** (the Phase 5 gate) — still
      unmeasured. Playwright is now installed, so this is newly cheap: run
      Lighthouse/axe against `apps/site/dist` and wire it into the browser
      project. The a11y work is done (real buttons with
      `aria-pressed`/`aria-expanded`, 44px targets, `aria-live` counts, labelled
      facet regions) but nothing has scored it.
- [ ] **Browser coverage is thin.** 41 tests cover the grid, facets, theme and a
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

- [ ] **D2 taxonomy folding.** All 15 kinds were kept. Folding `bundle` (2 nodes)
      into `tool` and `author` (1) into blog frontmatter would have changed the
      dataset while the round-trip gate was being established, weakening the one
      check that proves the migration is lossless. Now that the gate is locked
      in, folding is a safe, separately-testable change. `post` is already moot —
      posts are Astro content, not graph nodes.
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

- **`pl/.net` is a dotfile.** Its slug starts with `.`, so the node lives at
  `packages/data/nodes/plang/.net.yaml` and is invisible to a bare `ls`. Slugs
  were preserved verbatim to keep URL parity; renaming means a redirect.
- **pnpm 10.34.5, not 11** (PLAN §1 asked for 11). Corepack can't fetch 11 in
  this environment and pnpm here is provisioned by `mise`. 10.34.5 has catalogs
  and everything the plan needs. `.npmrc` sets
  `manage-package-manager-versions=false` so pnpm doesn't try to self-switch —
  don't "fix" that without checking `pnpm -v` first.
- **Astro 7 changed its Markdown processor.** Sätteri is the default; remark
  plugins require `@astrojs/markdown-remark` to be installed explicitly. That's
  why it's a direct dependency of `apps/site`.
- **Biome does not lint `.astro`.** Its `.astro` support is experimental and
  reports frontmatter imports as unused (PLAN §11 predicted this). `.astro`
  files and the Tailwind stylesheet are excluded in `biome.json`. **`pnpm -F
  @plangs/site check` (astro check) is therefore the only thing type-checking
  the templates — keep it in CI.** It was broken for a while (`@astrojs/check`
  was never installed) and hid a real store bug.
- **@xstate/store v4 REPLACES context**; handlers must return the whole thing,
  not a partial. Returning `{ mode }` silently drops `selected`. There are tests
  for this in `apps/site/src/stores/facets.test.ts`.
- **Container queries need an ancestor container.** `@container` and `@3xl:*` on
  the same element silently does nothing — a container cannot query itself.
- **Islands: wait for `data-facets-ready`, not `astro-island[ssr]`.** Astro drops
  `ssr` before React attaches handlers, so clicking on that signal races
  hydration and makes tests flaky.
- **URL casing matters.** v2 served `/typesystem/static` (lower-cased kind).
  `urlKind()` in `apps/site/src/lib/view.ts` preserves that; changing it silently
  breaks parity for one kind. `pnpm url-parity` catches it.
- **Edge names are v2-shaped** (`plangRelParadigms`). Kept deliberately so
  `/data/plangs.json` stays a drop-in for anything consuming the v2 dataset.
