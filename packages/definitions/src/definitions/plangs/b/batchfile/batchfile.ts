import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+batchfile", {
    name: "Batchfile",
    languishRanking: 37,
    websites: [
      { kind: "reddit", title: "Batchfile on Reddit", href: "https://reddit.com/r/Batch" },
      { kind: "wikipedia", title: "Batchfile on Wikipedia", href: "https://en.wikipedia.org/wiki/Batch_file" },
    ],
    stackovTags: ["batch-file"],
    githubName: "Batchfile",
    githubLangId: "29",
    githubColor: "#C1F12E",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
