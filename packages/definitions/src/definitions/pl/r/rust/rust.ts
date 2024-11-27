import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rust", {
      name: "Rust",
      description:
        'Rust is a general-purpose programming language emphasizing performance, type safety, and concurrency. It enforces memory safety, meaning that all references point to valid memory, without a garbage collector. To simultaneously enforce memory safety and prevent data races, its "borrow checker" tracks the object lifetime of all references in a program during compiling.',
      keywords: ["concurrency", "memory safety", "programming", "rust", "systems programming"],
      extensions: [".rlib", ".rs"],
      releases: [
        { version: "1.82.0", name: "Rust 1.82.0", date: "2024-10-17" },
        { version: "1.80.1", name: "Rust 1.80.1", date: "2024-01-01" },
      ],
      stackovTags: ["rust"],
      githubName: "Rust",
      languishRanking: 10,
      githubLangId: "327",
      githubColor: "#dea584",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Rust_(programming_language)",
      extRedditPath: "rust",
      extHomeURL: "https://www.rust-lang.org/",
      created: "2015",
    })
    .relInfluencedBy.add([
      "pl+c",
      "pl+c++",
      "pl+c-sharp",
      "pl+cilk",
      "pl+erlang",
      "pl+haskell",
      "pl+ocaml",
      "pl+r5rs",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
      "pl+standard-ml",
      "pl+swift",
    ])
    .relLicense.add(["lic+apache", "lic+mit"])
    .relParadigm.add(["para+compiled", "para+concurrent", "para+functional", "para+imperative", "para+multi", "para+structured"])
    .relPlatform.add(["plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows"])
    .relTag.add([
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+dataq",
      "tag+editor",
      "tag+embedded",
      "tag+industrial",
      "tag+interpreters",
      "tag+iot",
      "tag+viz",
    ])
    .relTypeSystem.add(["tsys+affine", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
