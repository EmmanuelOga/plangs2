import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+nim", {
      name: "Nim",
      description:
        "General-purpose, statically typed, compiled programming language designed for performance and elegant syntax. It supports multiple paradigms including imperative, functional, and metaprogramming. Nim can compile to C, C++, and JavaScript, making it suitable for system programming, web, and embedded applications.",
      shortDesc:
        "Statically typed, compiled language focusing on performance and elegant syntax, compilable to C, C++, and JavaScript.",
      created: "2008",
      extensions: [".nim", ".nimble", ".nims"],
      extGithubPath: "nim-lang/Nim",
      extHomeURL: "https://nim-lang.org/",
      extRedditPath: "nim",
      extWikipediaPath: "Nim_(programming_language)",
      githubColor: "#ffc200",
      githubLangId: "249",
      githubName: "Nim",
      githubPopular: false,
      githubStars: 16700,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["nim"],
      languishRanking: 119,
      releases: [
        { version: "2.2.0", date: "2024-10-02" },
        { version: "2.0.12", date: "2024-11-01" },
      ],
      stackovTags: ["nim-lang"],
    })
    .relCompilesTo.add("pl+c", "pl+c++", "pl+javascript", "pl+objective-c")
    .relInfluencedBy.add(
      "pl+ada",
      "pl+c",
      "pl+c++",
      "pl+lisp",
      "pl+python",
      "pl+rust",
    )
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+macro",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
    )
    .relPlatforms.add(
      "plat+android",
      "plat+apple",
      "plat+arm",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+nodejs",
      "plat+osx",
      "plat+riscv",
      "plat+web",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+editor",
      "tag+edu",
      "tag+embedded",
      "tag+games",
      "tag+interpreters",
      "tag+iot",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+stats",
      "tag+viz",
    )
    .relTypeSystems.add(
      "tsys+inferred",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
      "tsys+structural",
    )
    .relWrittenWith.add("pl+c", "pl+nim");
}
