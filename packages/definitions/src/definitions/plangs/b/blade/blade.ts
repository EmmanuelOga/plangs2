import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+blade", {
    name: "Blade",
    languishRanking: 69,
    websites: [
      { kind: "reddit", title: "Blade on Reddit", href: "https://reddit.com/r/laravel" },
      { kind: "wikipedia", title: "Blade on Wikipedia", href: "https://en.wikipedia.org/wiki/Laravel" },
    ],
    stackovTags: ["laravel-blade"],
    githubName: "Blade",
    githubLangId: "33",
    githubColor: "#f7523f",
    githubPopular: false,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
