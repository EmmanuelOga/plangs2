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

Both *materializing relationships* and *inferring them on the fly* give possible rooe for more comprenhensive searches. Options for exploring these features include using existing graph databases, RDF based systems of writing our own inference and materialization code.

## WIP

* BUG: Fix "restore" functions (save state of info, filters, etc). Seems broken right now.

### Site

- [ ] Rethink Languish link.
- [ ] Add schema.org metadata.
- [ ] Add fb opengraph metadata.
- [ ] Add missing aria attributes.
- [ ] Add an "authors" Vertex to link to Blog post authors.

### UX

- [ ] Add a drop-down for the "recent" fields: "Recently: past 3,6 months ago, 1 to 5 years ago"
- [ ] Drag handles for Grid elems.
- [ ] Add support for drag/drop resize of elements (node-info and facets-main).
- [ ] Prefetch some URLS on hover.
- [ ] HOVER of SVGs doesn't really look nice. Use a BG like for languish rankings.
- [ ] Maybe: only allow sidebar OR filters to be on.
- [ ] Gray out facets that won't add to the selection.

## MISC

- [ ] Investigate TW css config: breakpoints may be wonky right now.
- [ ] Add tests for frontend code.
- [ ] Tweak backdrop-filter in Safari/Firefox.

## DESIGN

- [ ] Table display mode: some things don't display good on a Grid, like Libraries.
- [ ] Resize all Thumbn to 128x128.
- [ ] Replace Thumbn SVGs embedding data with PNGs.
- [ ] Identicons instead of P placeholder.

## "ADMIN"

- [ ] Local: make it easy to edit languages: CLI or /admin on the server.
- [ ] Remote: explore using the Github API to generate a PR or comment with changes.
- [ ] Allow AI to crawl things other than Plangs.
- [ ] Revise data: tags: better-c, educational.

# RELEASE

- [ ] Publish to **somewhere** and add some CDN.
- [ ] Simple analytics.
- [ ] Create better guidelines, code of conduct, enable discussions, etc.
- [ ] Link asking for help.

# Other

- [ ] Kuzu export.
- [ ] Client side full text search.