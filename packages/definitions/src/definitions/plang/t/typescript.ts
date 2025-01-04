import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+typescript", {
      name: "TypeScript",
      description:
        "Strongly typed superset of JavaScript that compiles to plain JavaScript and aims to improve the development of large-scale applications.",
      shortDesc:
        "Strongly typed superset of JavaScript that compiles to plain JavaScript.",
      created: "2012",
      extensions: [".cts", ".mts", ".ts", ".tsx"],
      extGithubPath: "microsoft/TypeScript",
      extHomeURL: "https://www.typescriptlang.org/",
      extRedditPath: "typescript",
      extWikipediaPath: "TypeScript",
      githubColor: "#3178c6",
      githubLangId: "378",
      githubName: "TypeScript",
      githubPopular: true,
      githubStars: 101000,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["javascript", "superset", "ts", "typed", "typescript"],
      languishRanking: 2,
      releases: [
        { version: "5.6.3", name: "TypeScript 5.6.3", date: "2024-09-09" },
      ],
      stackovTags: ["typescript"],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+c-sharp", "pl+f-sharp", "pl+java", "pl+javascript")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+cross", "plat+nodejs")
    .relTags.add("tag+compiler", "tag+framework", "tag+scripting")
    .relTypeSystems.add(
      "tsys+duck",
      "tsys+flow",
      "tsys+generic",
      "tsys+gradual",
      "tsys+object",
      "tsys+optional",
      "tsys+static",
      "tsys+strong",
      "tsys+structural",
    )
    .relWrittenWith.add("pl+typescript");
}
