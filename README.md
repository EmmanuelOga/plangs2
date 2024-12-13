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

## BUGS

BUG: Fix "restore" functions (save state of info, filters, etc). Seems broken right now.

## WIP

- [ ] Materialize more relationships: isTranspiler, influence, etc.
- [ ] Dematerialize? Remove redundancy before re-generating the code.

- [ ] Add schema.org metadata.
- [ ] Add fb opengraph metadata.
- [ ] Add missing aria attributes.

- [ ] Add a drop-down for the "recent" fields: "Recently: past 3,6 months ago, 1 to 5 years ago"
- [ ] Drag handles for Grid elems.
- [ ] Add an "authors" Vertex to link to Blog post authors.
- [ ] Prefetch some URLS on hover.
- [ ] HOVER of SVGs doesn't really look nice. Use a BG like for languish rankings.

## TODO

- [ ] Investigate TW css config: breakpoints may be wonky right now.
- [ ] Tweak backdrop-filter in Safari/Firefox.

### Backlog

- [ ] Add tests for frontend code.

## DESIGN

- [ ] Add a table display mode in addition to Grid (some things don't display good on a Grid, like Libraries).
- [ ] Add support for drag/drop resize of elements (node-info and facets-main).

- [ ] Gray out facets that won't add to the selection.
- [ ] Maybe: only allow sidebar OR filters to be on.

- [ ] Replace Thumbn SVGs embedding data with PNGs.
- [ ] Resize all Thumbn to 128x128.
- [ ] Create per platform icons (win, lin, etc) similar to the external links one.

## "ADMIN"

- [ ] Allow AI to crawl for tools
- [ ] Allow AI to crawl for apps
- [ ] Allow AI to crawl for libraries
- [ ] Allow AI to crawl for subsytems
- [ ] Allow AI to crawl for learning resources
- [ ] Allow AI to crawl for communities

- [ ] Add a simple admin interface to locally tweak the data: **maybe out of scope?**
- [ ] Contribution process: CLI tool? Ask type of resource, find URLs, etc.
- [ ] Would be cool to be able to create a PR from the website itself.

- [ ] Manually add more data and AI enrich. 
- [ ] Use the github API to procure more precise information of github repos.

- [ ] Revise data: tags: better-c, educational.

# RELEASE

- [ ] Publish to **somewhere** and add some CDN.
- [ ] Simple analytics.
- [ ] Create better guidelines, code of conduct, enable discussions, etc.
- [ ] Link asking for help.

# Other

- [ ] Kuzu export.
- [ ] Client side full text search.