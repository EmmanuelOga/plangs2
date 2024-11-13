import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+apacheconf", {
    name: "ApacheConf",
    languishRanking: 49,
    websites: [
      { kind: "reddit", title: "ApacheConf on Reddit", href: "https://reddit.com/r/apache" },
      { kind: "wikipedia", title: "ApacheConf on Wikipedia", href: "https://en.wikipedia.org/wiki/Apache_HTTP_Server" },
    ],
    stackovTags: ["apache"],
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
