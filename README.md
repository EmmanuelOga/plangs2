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

## WIP

- [ ] Make the vertex-info work for all node types.
- [ ] Additional Vertex pages: {tool,app,lib,learning,community}/key (do we need these? Maybe the sidebar info is good enough for now? Link directly to the resource?)
- [ ] Fix "pill" links .. what happens when we click them?

## TODO

- [ ] Replace facet indicator dot with Reset button.
- [ ] Prefetch some URLS on hover.

### More Pending Tasks

- [ ] Add a drop-down for the "recent" fields: "Recently: past 3,6 months ago, 1 to 5 years ago"
- [ ] Add a table display mode in addition to Grid (some things don't display good on a Grid, like Libraries).

<hr/>

- [ ] Revise data schema for entities other than Plangs.
- [ ] Add an "authors" Vertex to link to Blog post authors.

<hr/>

- [ ] Add a simple admin interface to locally tweak the data: **maybe out of scope?**
- [ ] Revise data: tags: better-c, educational.
- [ ] Add relationship to data-cleanup entities (Community, Learning).

<hr/>

- [ ] Add tests for frontend code.

<hr/>

- [ ] Add schema.org metadata.
- [ ] Add fb opengraph metadata.
- [ ] Add missing aria attributes.

<hr/>

- [ ] Publish to linode.
- [ ] Add bunny CDN.
- [ ] Simple analytics.

<hr/>

- [ ] Kuzu export.

<hr/>

- [ ] Client side full text search.
- [ ] Investigate removing the need to load the full JSON data before continuing.

<hr/>

- [ ] Create better guidelines, code of conduct, enable discussions, etc.

<hr/>

** Images **
 
- [ ] Replace Thumbn SVGs embedding data with PNGs.
- [ ] Resize all Thumbn to 128x128.

**Design ideas**

- [ ] Redesign the facets browser: make it look like the sidebar?
- [ ] Change the sidebar to a top bar in landscape mode.
- [ ] Add a footer.
- [ ] Rethink layout landscape/portrait switch instead of just by size.
- [ ] Add support for drag/drop resize of elements (node-info and facets-main).
- [ ] Fix grid display when there's less than 1 full row of thumbnails. Adjust sizing, etc.
- [ ] Better UI for tool bundles: just filter the table of tools.
- [ ] Considering adding also a "short description", since desc. of many plangs is too long.
- [ ] Platform Icons.
