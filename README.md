![Plangs!](apps/site/public/images/plangs-dark.svg)

Plangs aims to become a community-oriented programming languages site: trends,
tools, blog posts, and learning resources for programming languages and their
ecosystems.

> **v3 note.** The site was rebuilt in 2026 on Astro + React + a YAML/graphology
> data layer. The previous Bun/Preact/esbuild implementation is preserved at the
> `final-plangs-2` tag; the migration plan it followed is in git history
> (`git show 008e073c:PLAN.md`).

## Requirements

* [Node](https://nodejs.org/) 22.12+
* [pnpm](https://pnpm.io/) 10+ (install via mise/asdf, or `corepack enable`)

That's it — no Bun, no Ruby/Docker, no Overmind/entr.

## Layout

| Path | What |
| --- | --- |
| `packages/schema` | Single source of truth: node kinds, the 52 edges, Zod schemas, key helpers, inference rules. |
| `packages/data` | **The dataset.** One YAML file per node (`nodes/{kind}/{slug}.yaml`) plus logos (`assets/{kind}/{slug}.webp`). No code. |
| `packages/graph` | Loads the YAML into [graphology](https://graphology.github.io/); integrity checks, materialization, typed queries, exporters. |
| `packages/pipeline` | Importers (Linguist, Languish, Wikidata, …) and AI enrichment. |
| `apps/site` | The Astro 7 site: routes, layouts, React islands. |

## Run it locally

```sh
pnpm install
pnpm -F @plangs/site dev     # http://localhost:4321, hot reload
```

Astro 7's dev server runs detached: `pnpm exec astro dev stop|status|logs`
(from `apps/site`).

To build everything and serve the real static output instead:

```sh
pnpm build                    # typecheck every package + build the site
pnpm -F @plangs/site preview  # serves apps/site/dist
```

## Command Line

* `pnpm build` — typecheck the packages and build the static site into `apps/site/dist`.
* `pnpm test` — run the test suite (includes the migration round-trip gate).
* `pnpm check` / `pnpm fmt` — lint/format with Biome.
* `pnpm url-parity` — assert every v2 URL is still served (needs a build first).
* `pnpm data:fmt` — rewrite every node YAML in canonical order (minimal diffs).
* `pnpm pipeline run --source=<id> [--dry-run]` — refresh data from an upstream source.

See [ROADMAP.md](ROADMAP.md) for what's done and what's left, and
[CLAUDE.md](CLAUDE.md) before changing the code — it records which oddities are
load-bearing (and why), the verification loop, and the environment facts.

## Editing data

Every node is a YAML file. To add or edit a language, edit
`packages/data/nodes/plang/{slug}.yaml` and open a pull request — each node page
links straight to its file on GitHub. A logo is a 128x128 webp at
`packages/data/assets/{kind}/{slug}.webp`.

```yaml
name: Nim
shortDesc: Statically typed, compiled language…
created: "2008"
extensions: [".nim"]
rels:
  compilesTo: [pl/c, pl/javascript]
  paradigms: [para/compiled, para/functional]
  licenses: [lic/mit]
```

CI validates the data: every edge target must exist, every edge must be legal
between its two kinds, and every node must satisfy its Zod schema.

## Node keys and prefixes

Keys are `prefix/slug` (e.g. `pl/nim`). The v2 form was `pl+nim`.

| Prefix | Description |
| --------- | ------------------------------------------------- |
| `app/`    | Software Application.                             |
| `author/` | Author for Blog Posts.                            |
| `bun/`    | Bundle of tools.                                  |
| `comm/`   | Community.                                        |
| `learn/`  | Learning Resource (book, video, course, etc).     |
| `lib/`    | Software Library.                                 |
| `lic/`    | Software License.                                 |
| `para/`   | Language paradigm.                                |
| `pl/`     | Programming Language.                             |
| `plat/`   | Platform (Operating System, WASM, CPU, etc).      |
| `sys/`    | Subsystem: databases, queues, and other services. |
| `tag/`    | Generic Tag.                                      |
| `tool/`   | Software Tool.                                    |
| `tsys/`   | Type System.                                      |

## For LLMs and agents

* Every page has a markdown twin — append `.md` to any URL (e.g. `/nim.md`).
* [`/llms.txt`](https://plangs.page/llms.txt) describes the dataset and the
  filter-URL grammar, so an agent can construct queries like
  `/plangs?paradigms=functional&platforms=web&mode=all`.
* [`/data/plangs.json`](https://plangs.page/data/plangs.json) is the full graph.

## Deploying

The site is pure static output deployed to Cloudflare Workers static assets:

```sh
pnpm -F @plangs/site build && npx wrangler deploy
```

> **The v3 cutover has not happened yet** — `plangs.page` still serves v2.
> Read ROADMAP.md "Deploy / cutover" before the first deploy (or any push):
> the legacy Cloudflare Pages project may still have a git integration.

## Acknowledgements

Some sources only appear in git history — for example, a bulk script used just
once. To credit those sources too, we list them here.

* @llaisdy's list of logic programming languages:
  [llaisdy/PrologInfo](https://github.com/llaisdy/PrologInfo).

## Graph inference notes

Some relationships can be used to infer others. These notes are no longer just
notes: they are encoded as declarative rules in
`packages/schema/src/inference.ts` and applied by the materialization pass in
`packages/graph/src/materialize.ts`, with the negative cases enforced by tests.

> In `Bundle -> Tool -> Plang` implies `Bundle -> Plang`, meaning a bundle supports a plang if any of its tools supports it.

The example B/T/P demonstrates a transitive relationship. There are other relationships that are possible but should not be used for inference.

> In `Plang -> App -> License`, inferring `Plang -> License` would be wrong, since an App built with Plang doesn't necessarily share the License.

There are some relationships that are simpler to infer.

> In `A -i-> B -i-> C` (i = influenced), A influenced both B _and_ C.

The process of adding a relationship to the data that could be inferred is called
"materializing". Materialized edges are marked `inferred: true`, live only in the
built graph (never written back to YAML), and are what the facets and queries run
against — so searches like "languages transitively influenced by ML that compile
to JS" work.
