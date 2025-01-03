![Plangs!](packages/server/static/images/plangs-dark.svg)

Plangs ambition is to become a community oriented programming languages page where people can find trends, tools and blog posts related to programming languages and the ecosystem of tools, documentation, learning resources, etc.

The website at the moment is fully static and will remain so until we have a very good reason to add a backend.

## Development

Plangs! is a static website, but a development mode server is provided.
Requirements:

* [BunJS](https://bun.sh/)
* [Overmind](https://github.com/DarthSim/overmind)
* [Entr](https://github.com/eradman/entr)

The server and frontend app is wired for "livereloading". There are workers to build the CSS bundle (which uses TailwindCSS) and running the dev server (which uses Bun/JS and ESBuild). To wire everything together we use Overmind and Entr.

Starting the dev server is as simple as:

```sh
$ overmind start
```

## Building

To generate the static site instead of running a dev server, run:

```sh
$ bun run build
```

The build generates the static site on the `output` folder.

## AI enrichment

Plang data includes links to the web pages of the language, wikipedia pages, and other resources that describe the language.

We can send this data to an LLM to request a "first pass" of language definitions, which saves time when adding new languages. To do this, you can first create a new definition file:

```sh
$ bun run create pl+my-new-lang
```

This will create a .ts file wich can be further edited to add links to relevant resources.
After that, you can run a separate task to use AI for enrichment:

```sh
$ bun run enrich pl+my-new-lang
```

An OpenAI authorization key is required on the environment for this to work.

## Data exporting and loading

To export all data as `plangs.json` file:

```sh
$ bun run export dst/folder
```

To load a JSON file and regenerate the definitions from it:

```sh
$ bun run import path/to/plangs.json
```

The import process will delete all existing declarations and regenerate them.

## Graph inference notes

Some relationships can be used to infer others.

> In `Bundle -> Tool -> Plang` implies `Bundle -> Plang`, meaning a bundle supports a plang if any of its tools supports it.

The example B/T/P demonstrates a transitive relationship. There are other relationships that are possible but should not be used for inference.

> In `Plang -> App -> License`, inferring `Plang -> License` would be wrong, since an App built with Plang doesn't necesarily share the License.

There are some relationships that are simpler to infer.

> In `A -i-> B -i-> C` (i = influenced), A influenced both B _and_ C.

The process of adding a relationship to the data that could be inferred is called "materializing". Right now, we don't materialize many relationships, and the search code usually doesn't try to infer the relationships on the fly.

Both *materializing relationships* and *inferring them on the fly* give room for richer searches. Options for enriching the data this way include using existing graph databases, RDF based systems or writing our own inference/materialization code.

## WIP

## RELEASE

- [ ] Create better guidelines, code of conduct, enable discussions, etc.

## Other

- [ ] Kuzu export.
- [ ] Client side full text search.

## Future

- [ ] Explore using the Github API to generate a PR or comment with changes.
- [ ] Allow adding things in the editor and calling OpenAI's APIs.
- [ ] Allow AI to crawl things other than Plangs.
- [ ] Better structured data (fb ogp and schema.org).