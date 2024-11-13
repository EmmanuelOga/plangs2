import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+sass/scss", {
    name: "Sass/SCSS",
    languishRanking: 36,
    websites: [
      { kind: "reddit", title: "Sass/SCSS on Reddit", href: "https://reddit.com/r/Sass" },
      { kind: "wikipedia", title: "Sass/SCSS on Wikipedia", href: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" },
    ],
    stackovTags: ["sass"],
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
