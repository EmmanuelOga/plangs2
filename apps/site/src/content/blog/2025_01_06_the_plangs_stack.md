---
title: "A Look Behind Plangs!"
rels: ["author+geo"]
---

Plangs! is a website about programming languages and tools, so it’s only fitting to share *some* of the tools that power it!

## Database

Plangs! is written with (pl+typescript) and uses a graph data model that provides strong typing and IDE support. The data is defined in pure (pl+typescript) folliwing a [small spec for vertices and edges](https://github.com/EmmanuelOga/plangs2/blob/ba18b56dc2515bf1454310fb0654dc8f8aacc187/packages/plangs/src/graph/spec.ts). It should be easy to swap the current plain (pl+json) store with a real database in the future if needed.

## Backend

Plangs compiles into a static site but uses (pl+bun)'s HTTP server during development. Since (pl+bun)’s bundler is still in beta, I use (tool+esbuild) for bundling. (tool+biomejs) handles linting and formatting. (lib+marked) helps with the markdown to HTML conversion.

The server-side rendering leverages (lib+preact)'s render-to-string to output static (pl+html) strings from (pl+tsx) templates. (tool+tailwindcss)’s utility-first approach transformed my (pl+css) workflow, and I’m now a believer. 

## Frontend

The dynamic parts of the site, like the faceted search feature, the editor and the navbar, were also done with (lib+preact). When encoding states in URLs, I use (lib+rison2), which produces clean human-readable URLs compared to other encodings.

## Hosting

The site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/) with [Cloudflare Functions](https://developers.cloudflare.com/pages/functions/) providing lightweight backend support for GitHub pull-request creation, a feature of the [editor](/edit). 

## Language agnostic tools

The dev server requires a few tools running concurrently. To orchestrate this, I use (tool+overmind), a (tool+tmux)-based tool that runs "Procfile" configurations similar to [Heroku's](https://heroku.com). File watching was also needed in the Procfile, and I chose (tool+entr), a file watcher written in C that's tiny and efficient.

## Data Scraping and AI Enrichment

I scraped the initial dataset from Wikipedia using (lib+cheerio), a jQuery-inspired library for (pl+html) manipulation. Also enriched the data using [OpenAI's Structured Outputs API](https://platform.openai.com/docs/guides/structured-outputs), guided by (pl+jsonschema), via (lib+typescript-json-schema). For extracting and cleaning webpage content for the AI prompts, I used (lib+moz-readability) and (lib+turndown) to extract the main page content and convert it to (pl+markdown), respectively.

## A Big Thank You!

I'm deeply grateful for all the high-quality open-source tools out there that made building a site like Plangs! possible. A Big Thank You to all the dedicated, generous individuals behind them!