import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+asp.net", {
    name: "ASP.NET",
    languishRanking: 23,
    websites: [
      { kind: "reddit", title: "ASP.NET on Reddit", href: "https://reddit.com/r/ASPNET" },
      { kind: "wikipedia", title: "ASP.NET on Wikipedia", href: "https://en.wikipedia.org/wiki/ASP.NET" },
    ],
    stackovTags: ["asp.net", "asp.net-core"],
    githubName: "ASP.NET",
    githubLangId: "564186416",
    githubColor: "#9400ff",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
