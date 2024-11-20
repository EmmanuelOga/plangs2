import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scopes", {
      name: "Scopes",
      description:
        "Scopes is a retargetable programming language that combines the expressiveness of languages like Scheme and Python with the performance of C, offering a scripting-like feel with the power of a systems language. It supports both live code execution and offline compilation, and is designed for 64-bit native platforms including Linux, Windows, and GPU shader target environments like SPIR-V and GLSL.",
      keywords: ["borrow checking", "multi-stage programming", "retargetable", "systems programming"],
      extensions: [".scopes"],
      releases: [{ version: "0.1", name: "Initial release", date: "2015-01-01" }],
      filenames: ["scopes"],
      extHomeURL: "https://hg.sr.ht/~duangle/scopes",
      created: "2015",
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+extensible", "paradigm+macro", "paradigm+metaprogramming"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+interpreters", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
