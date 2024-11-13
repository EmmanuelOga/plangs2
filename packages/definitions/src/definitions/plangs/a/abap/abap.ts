import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+abap", {
    name: "ABAP",
    languishRanking: 81,
    websites: [
      { kind: "reddit", title: "ABAP on Reddit", href: "https://reddit.com/r/abap" },
      { kind: "wikipedia", title: "ABAP on Wikipedia", href: "https://en.wikipedia.org/wiki/ABAP" },
    ],
    stackovTags: ["abap"],
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
