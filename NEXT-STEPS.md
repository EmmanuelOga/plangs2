# Next steps

State as of **2026-07-15**, after executing [PLAN.md](PLAN.md).

`main` is plangs v3. The v2 implementation is frozen at tag **`final-plangs-2`**
(`3a4a2353`) — everything deleted during the migration is recoverable there.

## Where things stand

All six phases are done and every phase gate is green:

| Gate | Command | Status |
| --- | --- | --- |
| Install + tests | `pnpm install && pnpm test` | 152 tests |
| **Migration fidelity** | `pnpm vitest run packages/graph/src/round-trip.test.ts` | YAML deep-equals the v2 graph |
| Lint / format | `pnpm check` | clean |
| Typecheck + site build | `pnpm build` | 515 pages |
| **URL parity** | `pnpm url-parity` | 514/514 v2 URLs served |
| Data canonical form | `pnpm data:fmt` | 0 of 495 changed |

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

- [ ] **Lighthouse mobile ≥ 95 and axe clean** (the Phase 5 gate) — needs a
      headless browser. The a11y work is done (real buttons with
      `aria-pressed`/`aria-expanded`, 44px targets, `aria-live` counts, labelled
      facet regions) but is **unmeasured**.
- [ ] **Verify the Claude/ChatGPT prefill URL formats** used by the prompt menu
      (`apps/site/src/islands/PromptMenu.tsx`): `https://claude.ai/new?q=…` and
      `https://chatgpt.com/?q=…`. PLAN §7.5 said to confirm these at
      implementation time; they were written from documented behaviour, not
      tested against the live services.

## 3. Deploy / cutover

- [ ] Deploy: `pnpm -F @plangs/site build && npx wrangler deploy`
      (`wrangler.toml` is already Workers static assets, not Pages).
- [ ] Point DNS / confirm the Workers route, then smoke-test prod.
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
  files and the Tailwind stylesheet are excluded in `biome.json`; both are
  validated by the Astro build instead. Revisit when Biome's parser matures.
- **URL casing matters.** v2 served `/typesystem/static` (lower-cased kind).
  `urlKind()` in `apps/site/src/lib/view.ts` preserves that; changing it silently
  breaks parity for one kind. `pnpm url-parity` catches it.
- **Edge names are v2-shaped** (`plangRelParadigms`). Kept deliberately so
  `/data/plangs.json` stays a drop-in for anything consuming the v2 dataset.
