import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relLicenses.add(["lic+mit"])
    .relParadigms.add(["para+extensible", "para+macro", "para+metaprogramming"])
    .relPlatforms.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+compiler", "tag+interpreters", "tag+scripting"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenWith.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
