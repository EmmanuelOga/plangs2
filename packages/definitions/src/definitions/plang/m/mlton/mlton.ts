import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mlton", {
      name: "MLton",
      description:
        "MLton is a whole-program optimizing compiler for the Standard ML programming language. It generates efficient executables by leveraging advanced optimizations, unboxed native data types, fast arithmetic operations via GMP, and supports extensive code generation and garbage collection strategies. MLton offers a robust SML environment with full SML97 compatibility and a seamless C foreign function interface.",
      keywords: ["MLton", "Standard ML", "compiler", "optimizing", "whole-program"],
      extensions: [".sml"],
      releases: [{ version: "20210107", name: "Stable Release", date: "2021-01-07" }],
      extWikipediaPath: "MLton",
      extHomeURL: "http://mlton.org",
      created: "1997",
      isTranspiler: false,
      shortDesc: "MLton is a whole-program optimizing compiler for Standard ML with SML97 compatibility and advanced optimizations.",
      githubStars: 966,
      extGithubPath: "MLton/mlton",
      ghRepoCreated: "2011-05-22",
    })
    .relDialectOf.add("pl+standard-ml")
    .relImplements.add("pl+standard-ml")
    .relInfluencedBy.add("pl+standard-ml")
    .relLicenses.add("lic+dual")
    .relParadigms.add("para+compiled", "para+functional", "para+imperative", "para+multi")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
