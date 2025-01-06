![Plangs!](packages/server/static/images/plangs-dark.svg)

Plangs ambition is to become a community oriented programming languages page where people can find trends, tools and blog posts related to programming languages and the ecosystem of tools, documentation, learning resources, etc.

## Requirements

Plangs! is a (mostly) static website, but a development mode server is provided to serve the pages, with livereload support, without needing to build the static assets.

Requirements:

* [BunJS](https://bun.sh/)
* [Overmind](https://github.com/DarthSim/overmind)
* [Entr](https://github.com/eradman/entr)

Overmind is a process manager for Procfile-based applications and tmux. We use it to run the processes to build the CSS bundle (which uses TailwindCSS) and running the dev server (which uses Bun/JS).

### Dynamic Parts

The only dynamic functionality at the moment is Github Pull Request generation. We deploy to [Cloudflare Pages](https://pages.cloudflare.com/) and use a CF Function when clicking the "Create PR" button on [the editor](https://plangs.page/edit). This will only work on the deployed site. Other than that, the full website can run locally without requiring anything else from CF Pages.

## Command Line

Here's a list of commands you can use after clonning the repository:

* `overmind start`: Launch the development mode server.
* `bun run build`: [Builds](#building) the static site into the output folder.
* `bun run create kind+key`: [Defines](#definitions) a new vertex for the Graph. For instance: `bun run pl+python` to create a new `pl+python` vertex.
* `bun run enrich pl+key`: [Enriches](#ai-enrichment) programming language data using OpenAI's APIs.
* `bun run cleanup`: [Cleanup](#cleanup) ensures data integrity and reformats the definitions.
* `bun run export path/file.json`: [Exports](#exporting-and-importing) the data as a single JSON file.
* `bun run import path/file.json`: [Imports](#exporting-and-importing) the data and recreates the definitions.

## Building

To generate the static site instead of running a dev server, run:

```sh
$ bun run build
```

The build generates the static site on the `output` folder. This is the command that Cloudflare Pages uses to build the website too.

## Definitions

Plangs runs off of JSON Graph data that we construct with TypeScript. As a shortcut to create data in the proper place, you can a definition like this:

```sh
$ bun run create pl+my-new-lang
```

This will create a .ts file wich can be further edited to add links to relevant resources.

The "pl+" prefix specifies the kind of vertex you are creating. Check some [existing prefixes](#vertex-prefixes).

If you want to add a logo for the newly created vertex, include it on the corresponding path on `packages/definitions/assets`. Images on that folder should be a 128x128 pixels webp image.

## AI enrichment

Plang data includes links to the web pages of the language, wikipedia pages, and other resources that describe the language.

There's support for scraping those pages and sending them to an LLM to request a "first pass" of a language definition, which saves time when adding new languages.

If you added a new language with `bun run create`, and edited the definition to include a few urls (like home page, github page and/or wikipedia page), you can start the AI enrichment process with:

```sh
$ bun run enrich pl+my-new-lang
```

An OpenAI authorization key is required on the environment (`OPENAI_API_KEY` env var) for this to work.

### Bulk Import

To create many definitions at once, the easiest way is to create a simple TypeScript program. There's [an example here](https://github.com/EmmanuelOga/plangs2/blob/b93362c76b8e983a86f75395575a86c63bc66192/packages/ai/src/bulk.ts) that created many logic programming languages vertices. You can modify this script, then run:

```sh
$ bun run enrich bulk
```

Note that you'll have to add the assets (logos) manually since the script doesn't try to fetch logos.

## Cleanup

The cleanup task, invoked like:

```sh
$ bun run cleanup
```

... ensures there are no "dangling vertices", and reformats the code.

For instance: if we had pl+lang and pl+other, and we said pl+lang is influenced by pl+other, but later we deleted pl+other, we want to delete the edge pointing to the now non-existing vertex. This task will do that for us.

Cleanup of defnitions is important after manually defining data. The code formatter used here needs to match the one used by our pull-request creation code to ensure the best diff quality, and running this task ensures that.

## Exporting and Importing

To export all data as `plangs.json` file:

```sh
$ bun run export /dst/folder/plangs.json
```

To load a JSON file and regenerate the definitions from it:

```sh
$ bun run import /src/folder/plangs.json
```

The import process will delete all existing declarations and regenerate them.

## Vertex Prefixes

| Prefix    | Description                                       |
| --------- | ------------------------------------------------- |
| `app+`    | Software Application.                             |
| `author+` | Author for Blog Posts.                            |
| `bun+`    | Bundle of tools.                                  |
| `comm+`   | Community.                                        |
| `learn+`  | Learning Resource (book, video, course, etc).     |
| `lib+`    | Sofware Library.                                  |
| `lic+`    | Software License.                                 |
| `para+`   | Language paradigm.                                |
| `pl+`     | Programming Language.                             |
| `plat+`   | Platform (Operating Sytem, WASM, CPU, etc).       |
| `sys+`    | Subsystem: databases, queues, and other services. |
| `tag+`    | Generic Tag.                                      |
| `tool+`   | Software Tool.                                    |
| `tsys+`   | Type System.                                      |

## Graph inference notes

Some relationships can be used to infer others.

> In `Bundle -> Tool -> Plang` implies `Bundle -> Plang`, meaning a bundle supports a plang if any of its tools supports it.

The example B/T/P demonstrates a transitive relationship. There are other relationships that are possible but should not be used for inference.

> In `Plang -> App -> License`, inferring `Plang -> License` would be wrong, since an App built with Plang doesn't necesarily share the License.

There are some relationships that are simpler to infer.

> In `A -i-> B -i-> C` (i = influenced), A influenced both B _and_ C.

The process of adding a relationship to the data that could be inferred is called "materializing". Right now, we don't materialize many relationships, and the search code usually doesn't try to infer the relationships on the fly.

Both *materializing relationships* and *inferring them on the fly* give room for richer searches. Options for enriching the data this way include using existing graph databases, RDF based systems or writing our own inference/materialization code.