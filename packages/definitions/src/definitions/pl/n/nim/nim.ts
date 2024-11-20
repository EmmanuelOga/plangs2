import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+nim", {
      name: "Nim",
      description:
        'Nim is a general-purpose, multi-paradigm, statically typed, compiled high-level system programming language, designed and developed by a team around Andreas Rumpf. Nim is designed to be "efficient, expressive, and elegant", supporting metaprogramming, functional, message-passing, procedural, and object-oriented programming styles. It compiles to multiple languages, including C, C++, JavaScript, allowing it to be used for both backend and frontend applications. It features a modern type system with local type inference, generic programming, and several memory management options, suitable for embedded and real-time systems.',
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
      extHomeURL: "http://nim-lang.org/",
      created: "2008",
    })
    .addCompilesTo(["pl+c++", "pl+javascript"])
    .addInfluencedBy(["pl+ada", "pl+c", "pl+c++", "pl+lisp", "pl+python", "pl+rust"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+compiled",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
    ])
    .addPlatforms(["plat+apple", "plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .addTags([
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
      "tag+stats",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
