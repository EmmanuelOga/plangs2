import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+fantom", {
      name: "Fantom",
      description:
        "General-purpose object-oriented programming language, created by Brian Frank and Andy Frank. It runs on the Java Runtime Environment (JRE), JavaScript, and the .NET Common Language Runtime (CLR). Its stated goal is to provide a standard library API. Fantom uses a curly brace syntax, supports functional programming through closures and concurrency through the Actor model, and blends aspects of both static and dynamic typing.",
      shortDesc:
        "General-purpose object-oriented language, designed for cross-platform use and supporting static and dynamic typing.",
      created: "2005",
      extensions: [".fan", ".fwt", ".pod"],
      extGithubPath: "fantom-lang/fantom",
      extHomeURL: "http://fantom.org",
      extRedditPath: "Fantom",
      extWikipediaPath: "Fantom_(programming_language)",
      githubColor: "#14253c",
      githubLangId: "110",
      githubName: "Fantom",
      githubPopular: false,
      githubStars: 134,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["fantom"],
      languishRanking: 425,
      releases: [
        { version: "1.0.79", name: "Fantom 1.0.79", date: "2023-07-17" },
      ],
      stackovTags: ["fantom"],
    })
    .relCompilesTo.add(
      "pl+c-sharp",
      "pl+erlang",
      "pl+java",
      "pl+javascript",
      "pl+ruby",
      "pl+scala",
    )
    .relInfluencedBy.add(
      "pl+c-sharp",
      "pl+erlang",
      "pl+java",
      "pl+ruby",
      "pl+scala",
    )
    .relLicenses.add("lic+afl", "lic+mit")
    .relParadigms.add(
      "para+concurrent",
      "para+functional",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+.net", "plat+cross", "plat+java", "plat+web")
    .relTags.add("tag+app", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add(
      "tsys+dynamic",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+java");
}
