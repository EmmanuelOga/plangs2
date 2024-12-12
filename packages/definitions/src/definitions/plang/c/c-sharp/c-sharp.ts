import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+c-sharp", {
      name: "C#",
      description:
        "C# is a high-level, general-purpose programming language with multi-paradigm features, supporting static and strong typing, object-oriented, functional, and component-based programming.",
      keywords: ["c#", "c-sharp", "csharp", "dotnet"],
      extensions: [".cs", ".csx"],
      releases: [{ version: "12.0", name: "C# 12", date: "2023-11-14" }],
      stackovTags: ["c#"],
      githubName: "C#",
      languishRanking: 6,
      githubLangId: "42",
      githubColor: "#178600",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "C_Sharp_(programming_language)",
      extRedditPath: "csharp",
      extHomeURL: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      created: "2000",
      isTranspiler: false,
      shortDesc: "C# is a versatile high-level language supporting multiple programming paradigms.",
      extGithubPath: "dotnet/csharplang",
      githubStars: 11600,
    })
    .relDialectOf.add("pl+c")
    .relInfluencedBy.add("pl+c", "pl+c++", "pl+d", "pl+eiffel", "pl+f-sharp", "pl+haskell", "pl+java", "pl+pascal", "pl+scala", "pl+visual-basic")
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl", "lic+mit")
    .relParadigms.add(
      "para+async",
      "para+concurrent",
      "para+event-driven",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+reflective",
      "para+structured",
    )
    .relPlatforms.add("plat+.net", "plat+cross")
    .relTags.add(
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+gui",
      "tag+interpreters",
      "tag+iot",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+inferred", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
