import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+svelte", {
    name: "Svelte",
    languishRanking: 30,
    websites: [
      { kind: "reddit", title: "Svelte on Reddit", href: "https://reddit.com/r/sveltejs" },
      { kind: "wikipedia", title: "Svelte on Wikipedia", href: "https://en.wikipedia.org/wiki/Svelte" },
    ],
    stackovTags: ["svelte"],
    githubName: "Svelte",
    githubLangId: "928734530",
    githubColor: "#ff3e00",
    githubPopular: false,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
