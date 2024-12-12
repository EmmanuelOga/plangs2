import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+minizinc", {
      name: "MiniZinc",
      description:
        "MiniZinc is a constraint modelling language (or algebraic modeling language) to describe and solve high-complexity problems using a variety of well-known solving paradigms for combinatorial problems, including constraint programming, integer programming, lazy clause generation, SAT, and SMT.",
      keywords: ["constraint programming", "logic programming", "minizinc"],
      extensions: [".dzn", ".fzn", ".mzn"],
      releases: [{ version: "2.8.7", name: "MiniZinc 2.8.7", date: "2024-10-02" }],
      extWikipediaPath: "MiniZinc",
      extHomeURL: "https://www.minizinc.org/",
      created: "2009",
      isTranspiler: false,
      shortDesc: "MiniZinc is a language for constraint modelling and solving complex combinatorial problems.",
      githubStars: 523,
      extGithubPath: "MiniZinc/libminizinc",
      ghRepoCreated: "2013-11-21",
    })
    .relLicenses.add("lic+mit", "lic+mpl")
    .relParadigms.add("para+constraint", "para+logic")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+modeling")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
