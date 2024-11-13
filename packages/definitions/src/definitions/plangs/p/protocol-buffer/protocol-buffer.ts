import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+protocol-buffer", {
    name: "Protocol Buffer",
    languishRanking: 85,
    websites: [{ kind: "wikipedia", title: "Protocol Buffer on Wikipedia", href: "https://en.wikipedia.org/wiki/Protocol_Buffers" }],
    stackovTags: ["protocol-buffers"],
    githubName: "Protocol Buffer",
    githubLangId: "297",
    githubPopular: false,
    githubType: "data",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
