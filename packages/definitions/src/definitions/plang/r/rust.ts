import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rust", {
      name: "Rust",
      description:
        'A general-purpose programming language emphasizing performance, type safety, and concurrency. It enforces memory safety, meaning that all references point to valid memory, without a garbage collector. To simultaneously enforce memory safety and prevent data races, its "borrow checker" tracks the object lifetime of all references in a program during compiling.',
      shortDesc:
        "General-purpose programming language emphasizing performance, type safety, and concurrency.",
      created: "2015",
      extensions: [".rlib", ".rs"],
      extGithubPath: "rust-lang/rust",
      extHomeURL: "https://rust-lang.org",
      extRedditPath: "rust",
      extWikipediaPath: "Rust_(programming_language)",
      githubColor: "#dea584",
      githubLangId: "327",
      githubName: "Rust",
      githubPopular: true,
      githubStars: 99400,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "concurrency",
        "memory safety",
        "programming",
        "rust",
        "systems programming",
      ],
      languishRanking: 10,
      releases: [
        { version: "1.82.0", name: "Rust 1.82.0", date: "2024-10-17" },
        { version: "1.80.1", name: "Rust 1.80.1", date: "2024-01-01" },
      ],
      stackovTags: ["rust"],
    })
    .relInfluencedBy.add(
      "pl+c",
      "pl+c++",
      "pl+c-sharp",
      "pl+cilk",
      "pl+d",
      "pl+erlang",
      "pl+haskell",
      "pl+javascript",
      "pl+ocaml",
      "pl+r5rs",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
      "pl+standard-ml",
      "pl+swift",
    )
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+structured",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+cross",
      "plat+linux",
      "plat+wasm",
      "plat+windows",
    )
    .relTags.add(
      "tag+app",
      "tag+better-c",
      "tag+cli",
      "tag+compiler",
      "tag+dataq",
      "tag+editor",
      "tag+embedded",
      "tag+industrial",
      "tag+interpreters",
      "tag+iot",
      "tag+viz",
    )
    .relTypeSystems.add(
      "tsys+affine",
      "tsys+algebraic",
      "tsys+flow",
      "tsys+inferred",
      "tsys+nominal",
      "tsys+safe",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+ocaml");
}
