import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mlton", {
      name: "MLton",
      description:
        "Whole-program optimizing compiler for the Standard ML programming language. It generates efficient executables by leveraging advanced optimizations, unboxed native data types, fast arithmetic operations via GMP, and supports extensive code generation and garbage collection strategies. MLton offers a robust SML environment with full SML97 compatibility and a seamless C foreign function interface.",
      shortDesc: "SML97 compatibile language with advanced optimizations.",
      created: "1997",
      extensions: [".sml"],
      extGithubPath: "MLton/mlton",
      extHomeURL: "http://mlton.org",
      extWikipediaPath: "MLton",
      githubStars: 966,
      isTranspiler: false,
      keywords: ["MLton", "Standard ML", "compiler", "optimizing", "whole-program"],
      releases: [{ version: "20210107", name: "Stable Release", date: "2021-01-07" }],
    })
    .relDialectOf.add("pl+standard-ml")
    .relImplements.add("pl+standard-ml")
    .relInfluencedBy.add("pl+standard-ml")
    .relLicenses.add("lic+dual")
    .relParadigms.add("para+compiled", "para+functional", "para+imperative", "para+multi")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler")
    .relTypeSystems.add("tsys+algebraic", "tsys+inferred", "tsys+static", "tsys+strong");
}
