import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+processing", {
      name: "Processing",
      description:
        "Processing is a free graphics library and integrated development environment (IDE) built for the electronic arts, new media art, and visual design communities with the purpose of teaching non-programmers the fundamentals of computer programming in a visual context.",
      keywords: ["IDE", "art", "graphics library", "processing", "programming language", "visual design"],
      extensions: [".pde"],
      year: 2001,
      releases: [{ version: "4.3", name: "Processing 4.3", date: "2023-07-26" }],
      stackovTags: ["processing"],
      githubName: "Processing",
      languishRanking: 156,
      githubLangId: "294",
      githubColor: "#0096D8",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Processing_(programming_language)",
      extRedditPath: "processing",
      extHomeURL: "http://processing.org/",
    })
    .addInfluencedBy(["pl+c", "pl+java"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+dsl", "paradigm+educational", "paradigm+multi", "paradigm+oop", "paradigm+visual"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags([
      "tag+app",
      "tag+edu",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
