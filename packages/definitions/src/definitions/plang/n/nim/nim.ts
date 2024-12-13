import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+nim", {
      name: "Nim",
      description:
        "Nim is a general-purpose, statically typed, compiled programming language designed for performance and elegant syntax. It supports multiple paradigms including imperative, functional, and metaprogramming. Nim can compile to C, C++, and JavaScript, making it suitable for system programming, web, and embedded applications.",
      keywords: ["nim"],
      extensions: [".nim", ".nimble", ".nims"],
      isTranspiler: true,
      releases: [
        { version: "2.2.0", date: "2024-10-02" },
        { version: "2.0.12", date: "2024-11-01" },
      ],
      stackovTags: ["nim-lang"],
      githubName: "Nim",
      languishRanking: 104,
      githubLangId: "249",
      githubColor: "#ffc200",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Nim_(programming_language)",
      extRedditPath: "nim",
      extHomeURL: "https://nim-lang.org/",
      created: "2008",
      shortDesc: "Nim is a statically typed, compiled language focusing on performance and elegant syntax, compilable to C, C++, and JavaScript.",
      githubStars: 16700,
      extGithubPath: "nim-lang/Nim",
    })
    .relCompilesTo.add("pl+c++", "pl+javascript")
    .relInfluencedBy.add("pl+ada", "pl+c", "pl+c++", "pl+lisp", "pl+python", "pl+rust")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
    )
    .relPlatforms.add("plat+apple", "plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64")
    .relTags.add(
      "tag+3dg",
      "tag+analysis",
      "tag+app",
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
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
