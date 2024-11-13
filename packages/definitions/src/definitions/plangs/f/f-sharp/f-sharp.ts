import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+f-sharp", {
      name: "F#",
      description:
        "F# (pronounced F sharp) is a general-purpose, high-level, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. It is most often used as a cross-platform Common Language Infrastructure (CLI) language on .NET, but can also generate JavaScript and graphics processing unit (GPU) code.",
      keywords: ["f#", "fsharp"],
      websites: [
        { title: "fsharp.org", href: "https://fsharp.org/", kind: "homepage" },
        { title: "learn.microsoft.com/en-us/dotnet/fsharp", href: "https://learn.microsoft.com/en-us/dotnet/fsharp", kind: "plangs" },
        { title: "F# on Wikipedia", href: "https://en.wikipedia.org/wiki/F_Sharp_programming_language", kind: "wikipedia" },
        { title: "F# on Reddit", kind: "reddit", href: "https://reddit.com/r/fsharp" },
      ],
      extensions: [".fs", ".fsi", ".fsscript", ".fsx"],
      year: 2005,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "8.0.0", name: "F# 8.0", date: "2023-01-01" }],
      stackovTags: ["f#"],
      githubName: "F#",
      languishRanking: 94,
      githubLangId: "105",
      githubColor: "#b845fc",
      githubPopular: false,
      githubType: "programming",
    })
    .addDialectOf(["pl+ml", "pl+ocaml"])
    .addInfluencedBy(["pl+c-sharp", "pl+erlang", "pl+haskell", "pl+ml", "pl+ocaml", "pl+python", "pl+scala", "pl+standard-ml"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+agents",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+.net", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
