import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+minizinc", {
      name: "MiniZinc",
      description:
        "MiniZinc is a constraint modelling language (or algebraic modeling language) to describe and solve high-complexity problems using a variety of well-known solving paradigms for combinatorial problems, including constraint programming, integer programming, lazy clause generation, SAT, and SMT.",
      keywords: ["constraint programming", "logic programming", "minizinc"],
      extensions: [".dzn", ".fzn", ".mzn"],
      releases: [
        { version: "2.8.5", name: "MiniZinc 2.8.5", date: "2024-06-03" },
        { version: "2.8.7", name: "MiniZinc 2.8.7", date: "2024-10-02" },
      ],
      extWikipediaPath: "MiniZinc",
      extHomeURL: "https://www.minizinc.org/",
      created: "2009",
    })
    .relLicenses.add(["license+mit", "license+mpl"])
    .relParadigms.add(["paradigm+constraint", "paradigm+logic"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+modeling"])
    .relTsys.add(["tsys+static"])
    .relWrittenIn.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
