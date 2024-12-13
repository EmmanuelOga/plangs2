import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+f-sharp", {
      name: "F#",
      description:
        "F# is a strongly typed, functional-first language that supports both functional and object-oriented programming paradigms, and is commonly used as a cross-platform language on the .NET platform. It offers efficient solutions for statistical and analytical programming challenges.",
      keywords: ["f-sharp", "fsharp"],
      extensions: [".fs", ".fsi", ".fsscript", ".fsx"],
      releases: [{ version: "8.0", date: "2023-11" }],
      stackovTags: ["f#"],
      githubName: "F#",
      languishRanking: 94,
      githubLangId: "105",
      githubColor: "#b845fc",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "F_Sharp_(programming_language)",
      extRedditPath: "fsharp",
      extHomeURL: "https://fsharp.org/",
      created: "2005",
      isTranspiler: false,
      shortDesc: "F# is a functional-first language on the .NET platform, known for its strong typing and multi-paradigm capabilities.",
      links: [{ url: "https://docs.microsoft.com/en-us/dotnet/fsharp/", title: "F# Documentation" }],
      githubStars: 3900,
      extGithubPath: "dotnet/fsharp",
    })
    .relDialectOf.add("pl+ocaml")
    .relInfluencedBy.add("pl+c-sharp", "pl+erlang", "pl+haskell", "pl+ocaml", "pl+python", "pl+scala", "pl+standard-ml")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add(
      "para+agents",
      "para+concurrent",
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+reflective",
    )
    .relPlatforms.add("plat+.net", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+iot",
      "tag+ray-tracer",
      "tag+sci",
      "tag+scripting",
      "tag+server",
      "tag+shell",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c-sharp");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
