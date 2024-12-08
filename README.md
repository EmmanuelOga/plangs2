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

- [ ] Allow AI enriching all data, not just plangs.
- [ ] Manually add more data and AI enrich. 
- [ ] Add a "short description", since desc. of many plangs is too long.
- [ ] Revise data: tags: better-c, educational.

- [ ] Fix grid display when there's less than 1 full row of thumbnails. Adjust sizing, etc.

## TODO

- [ ] Add an "authors" Vertex to link to Blog post authors.
- [ ] Tweak backdrop-filter in Safari.
- [ ] Create a ToolBar component: we need some buttons to interact with eachother.
- [ ] Prefetch some URLS on hover.

### More Pending Tasks

- [ ] Add a drop-down for the "recent" fields: "Recently: past 3,6 months ago, 1 to 5 years ago"
- [ ] Add a table display mode in addition to Grid (some things don't display good on a Grid, like Libraries).

<hr/>

- [ ] Add a simple admin interface to locally tweak the data: **maybe out of scope?**
- [ ] Add relationship to data-cleanup entities (Community, Learning).

<hr/>

- [ ] Add tests for frontend code.

<hr/>

- [ ] Add schema.org metadata.
- [ ] Add fb opengraph metadata.
- [ ] Add missing aria attributes.

<hr/>

- [ ] Publish to **somewhere** and add some CDN.
- [ ] Simple analytics.

<hr/>

- [ ] Kuzu export.

<hr/>

- [ ] Client side full text search.
- [ ] Investigate removing the need to load the full JSON data before continuing.

- [ ] Create better guidelines, code of conduct, enable discussions, etc.

** Images **
 
- [ ] Replace Thumbn SVGs embedding data with PNGs.
- [ ] Resize all Thumbn to 128x128.

**Design ideas**

- [ ] Better UI for tool bundles: just filter the table of tools.
- [ ] Add a footer.
- [ ] Add support for drag/drop resize of elements (node-info and facets-main).
- [ ] Platform Icons.
