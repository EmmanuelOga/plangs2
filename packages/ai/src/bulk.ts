// This is an example of "bulk data" loading.
// We could streamload this process even more, bvt for now the process involves creating
// an array like the following, then running the AI enriching process on each entry.

import type { PlangsGraph } from "@plangs/plangs/graph";
import { aiRegenPlang } from ".";

const ENTRIES: { key: `pl+${string}`; url: string; name: string; desc: string; github: string }[] = [
  {
    key: "pl+bun",
    url: "https://bun.sh",
    name: "Bun",
    desc: "Develop, test, run, and bundle JavaScript & TypeScript projects—all with Bun. Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.",
    github: "oven-sh/bun",
  },
  {
    key: "pl+deno",
    url: "http://deno.com/",
    name: "Deno",
    desc: "Deno is the open-source JavaScript runtime for the modern web.",
    github: "denoland/deno",
  },
  {
    key: "pl+node",
    url: "https://nodejs.org/en",
    name: "Node.js",
    desc: "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.",
    github: "nodejs/node",
  },
];

export async function bulkImport(pg: PlangsGraph) {
  for (const entry of ENTRIES) {
    console.log("Enriching data for", entry.url);

    const { key, url, name, desc, github } = entry;

    const pl = pg.plang.set(key, { name, shortDesc: desc, extHomeURL: url, extGithubPath: github });
    try {
      const result = await aiRegenPlang(pg, pl);
      if (result.result === "error") console.error(result.message);
    } catch (err) {
      console.log(err, entry);
    }
  }
}

// {url: "https://www.semanticscholar.org/paper/Logic-and-objects-%3A-language%2C-application-and-McCabe/13fbc4334f55ae3ce229f009f6ba255645b89906", name: "Logic & Objects" -desc: - the class template language (F. McCabe PhD thesis, 1989)."},
// {url: "https://www.metalevel.at/prolog", name: "The Power of Prolog", desc: "Online book introducing modern Prolog."},
