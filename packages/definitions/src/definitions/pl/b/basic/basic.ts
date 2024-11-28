import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+basic", {
      name: "BASIC",
      description:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1964. They aimed to enable students in non-scientific fields to use computers, making programming more accessible.",
      keywords: ["BASIC", "beginners' all-purpose symbolic instruction code", "historical", "language", "programming"],
      extensions: [".bas", ".bb", ".bi", ".fb", ".pb"],
      releases: [{ version: "1.0", name: "Initial Release", date: "1964-05-01" }],
      stackovTags: ["basic"],
      githubName: "BASIC",
      languishRanking: 239,
      githubLangId: "28923963",
      githubColor: "#ff0000",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "BASIC",
      extRedditPath: "Basic",
      created: "1964",
    })
    .relInfluencedBy.add("pl+fortran")
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+imperative", "para+oop", "para+procedural", "para+structured")
    .relPlatforms.add("plat+cross", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+embedded", "tag+games", "tag+industrial", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+weak");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
