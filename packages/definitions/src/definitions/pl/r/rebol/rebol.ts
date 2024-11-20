import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rebol", {
      name: "Rebol",
      description:
        "Rebol (/ˈrɛbəl/ REB-əl) is a cross-platform data exchange language and a multi-paradigm dynamic programming language designed by Carl Sassenrath for network communications and distributed computing. The language is notable for introducing the concept of dialects: small, optimized domain-specific languages for code and data. It is designed to be small and lightweight, supporting an easy-to-write and easy-to-read format with numerous data-types for expressing information.",
      keywords: ["rebol"],
      extensions: [".r", ".reb"],
      releases: [
        { version: "2.7.8", name: "Stable release", date: "2011-01-01" },
        { version: "2.101.0", name: "Preview release", date: "2012-12-01" },
      ],
      stackovTags: ["rebol"],
      githubName: "Rebol",
      languishRanking: 328,
      githubLangId: "319",
      githubColor: "#358a5b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Rebol",
      extRedditPath: "rebol",
      extHomeURL: "http://www.rebol.com/",
      created: "1997",
    })
    .addInfluencedBy(["pl+forth", "pl+lisp", "pl+self"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+data-exchange", "paradigm+functional", "paradigm+imperative", "paradigm+language-oriented", "paradigm+prototype"])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dbms",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+ui",
      "tag+video",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
