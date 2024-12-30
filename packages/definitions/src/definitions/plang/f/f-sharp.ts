import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+f-sharp", {
      name: "F#",
      description:
        "Strongly typed, functional-first language that supports both functional and object-oriented programming paradigms, and is commonly used as a cross-platform language on the .NET platform. It offers efficient solutions for statistical and analytical programming challenges.",
      shortDesc: "Functional-first language on the .NET platform, known for its strong typing and multi-paradigm capabilities.",
      created: "2005",
      extensions: [".fs", ".fsi", ".fsscript", ".fsx"],
      extGithubPath: "dotnet/fsharp",
      extHomeURL: "https://fsharp.org/",
      extRedditPath: "fsharp",
      extWikipediaPath: "F_Sharp_(programming_language)",
      githubColor: "#b845fc",
      githubLangId: "105",
      githubName: "F#",
      githubPopular: false,
      githubStars: 3900,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["f-sharp", "fsharp"],
      languishRanking: 94,
      links: [{ url: "https://docs.microsoft.com/en-us/dotnet/fsharp/", title: "F# Documentation" }],
      releases: [{ version: "8.0", date: "2023-11" }],
      stackovTags: ["f#"],
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
}
