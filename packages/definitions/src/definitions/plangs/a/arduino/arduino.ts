import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+arduino", {
    name: "Arduino",
    languishRanking: 73,
    websites: [
      { kind: "reddit", title: "Arduino on Reddit", href: "https://reddit.com/r/arduino" },
      { kind: "wikipedia", title: "Arduino on Wikipedia", href: "https://en.wikipedia.org/wiki/Arduino" },
    ],
    stackovTags: ["arduino"],
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
