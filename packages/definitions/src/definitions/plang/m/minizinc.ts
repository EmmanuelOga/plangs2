import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+minizinc", {
      name: "MiniZinc",
      description:
        "Constraint modelling language (or algebraic modeling language) to describe and solve high-complexity problems using a variety of well-known solving paradigms for combinatorial problems, including constraint programming, integer programming, lazy clause generation, SAT, and SMT.",
      shortDesc:
        "Language for constraint modelling and solving complex combinatorial problems.",
      created: "2009",
      extensions: [".dzn", ".fzn", ".mzn"],
      extGithubPath: "MiniZinc/libminizinc",
      extHomeURL: "https://www.minizinc.org/",
      extWikipediaPath: "MiniZinc",
      githubStars: 523,
      isTranspiler: false,
      keywords: ["constraint programming", "logic programming", "minizinc"],
      releases: [
        { version: "2.8.7", name: "MiniZinc 2.8.7", date: "2024-10-02" },
      ],
    })
    .relLicenses.add("lic+mit", "lic+mpl")
    .relParadigms.add("para+constraint", "para+logic")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+modeling")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+c++");
}
