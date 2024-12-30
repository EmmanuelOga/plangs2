# Plangs

Plangs ambition is to become a community oriented programming languages page where people can find trends, tools and blog posts related to programming languages and the ecosystem of tools, documentation, learning resources, etc.

The website at the moment is fully static and will remain so until we have a very good reason to add a backend.

## Draft

We publish a draft/WIP at [eoga.dev](https://eoga.dev)

## Development

Requirements:

* BunJS
* Overmind

Plangs! is a static website, but a development mode server is provided.

To install the dependencies:

```sh
$ bun install
```

The server and frontend app is wired for "livereloading". A number of processes is required to run CSS bundles (which uses TailwindCSS), JS App budle (which uses ESBuild), and running the livereload enabled dev server (which uses Bun/JS). To wire everything together we use Overmind.

Starting the dev server is as simple as:

```sh
$ overmind start
```

## Building

```sh
$ bun outapp && bun outjs
```

This simplistic build process just outputs the statically generated contents of the site at `~/dev/plangs-out` (will probably change at some point).

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

- [ ] Allow images for all vertices.

## "ADMIN"

- [ ] Tidy up regenarating the code.
- [ ] Revise data: tags: better-c, educational.

## RELEASE

- [ ] Create an ESBuild script instead of using the command line.
    - [ ] Replace preact/debug with preact.
    - [ ] Add SHA to built assets (css/JS)
- [ ] Publish to Clouflare Pages.
- [ ] Simple analytics.
- [ ] Create better guidelines, code of conduct, enable discussions, etc.
- [ ] Link asking for help.

## Other

- [ ] Kuzu export.
- [ ] Client side full text search.

## Future

- [ ] Explore using the Github API to generate a PR or comment with changes.
- [ ] Allow adding things in the editor and calling OpenAI's APIs.
- [ ] Allow AI to crawl things other than Plangs.