import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+basic", {
      name: "BASIC",
      description:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1964. They aimed to enable students in non-scientific fields to use computers, making programming more accessible.",
      shortDesc: "Family of high-level programming languages created in 1964 to make programming more accessible.",
      created: "1964",
      extensions: [".bas", ".bb", ".bi", ".fb", ".pb"],
      extRedditPath: "Basic",
      extWikipediaPath: "BASIC",
      githubColor: "#ff0000",
      githubLangId: "28923963",
      githubName: "BASIC",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["basic"],
      languishRanking: 239,
      releases: [{ version: "1.0", name: "Initial Release", date: "1964-05-01" }],
      stackovTags: ["basic"],
    })
    .relInfluencedBy.add("pl+fortran")
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+imperative", "para+oop", "para+procedural", "para+structured")
    .relPlatforms.add("plat+cross", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+embedded", "tag+games", "tag+industrial", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+weak");
}
