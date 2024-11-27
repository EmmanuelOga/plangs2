import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+f-sharp", {
      name: "F#",
      description:
        "F# (pronounced F sharp) is a general-purpose, high-level, strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods. It is most often used as a cross-platform Common Language Infrastructure (CLI) language on .NET, but can also generate JavaScript and graphics processing unit (GPU) code. F# gives you simplicity and succinctness like Python with correctness, robustness and performance beyond C# or Java.",
      keywords: ["f#", "fsharp"],
      extensions: [".fs", ".fsi", ".fsscript", ".fsx"],
      releases: [
        { version: "8.0", name: "F# 8.0", date: "2023-11-01" },
        { version: "8.0.0", name: "F# 8.0", date: "2023-01-01" },
      ],
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
    })
    .relDialectOf.add(["pl+ocaml"])
    .relInfluencedBy.add(["pl+c-sharp", "pl+erlang", "pl+haskell", "pl+ocaml", "pl+python", "pl+scala", "pl+standard-ml"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add([
      "para+agents",
      "para+concurrent",
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+reflective",
    ])
    .relPlatform.add(["plat+.net", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add([
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
    ])
    .relTypeSystem.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
