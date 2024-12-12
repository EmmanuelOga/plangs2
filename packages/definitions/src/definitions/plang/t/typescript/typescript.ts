import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+typescript", {
      name: "TypeScript",
      description:
        "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript and aims to improve the development of large-scale applications.",
      keywords: ["javascript", "superset", "ts", "typed", "typescript"],
      extensions: [".cts", ".mts", ".ts", ".tsx"],
      isTranspiler: true,
      releases: [{ version: "5.6.3", name: "TypeScript 5.6.3", date: "2024-09-09" }],
      stackovTags: ["typescript"],
      githubName: "TypeScript",
      languishRanking: 2,
      githubLangId: "378",
      githubColor: "#3178c6",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "TypeScript",
      extRedditPath: "typescript",
      extGithubPath: "microsoft/TypeScript",
      extHomeURL: "https://www.typescriptlang.org/",
      created: "2012",
      shortDesc: "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript.",
      githubStars: 101000,
      ghRepoCreated: "2012-10-01",
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+actionscript", "pl+c-sharp", "pl+f-sharp", "pl+java", "pl+javascript")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop")
    .relPlatforms.add("plat+cross", "plat+nodejs")
    .relTags.add("tag+compiler", "tag+framework", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+gradual", "tsys+optional", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+typescript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
