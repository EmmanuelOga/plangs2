import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ampl", {
      name: "AMPL",
      description:
        "AMPL (A Mathematical Programming Language) is an algebraic modeling language designed to describe and solve complex optimization problems for large-scale mathematical computing. Developed by Robert Fourer, David Gay, and Brian Kernighan at Bell Laboratories, it is widely used in industrial, academic, and governmental settings. AMPL features a mix of declarative and imperative paradigms, making it effective for formulating optimization models and constructing hybrid algorithms. With open-source and commercial solver support, AMPL allows seamless integration into existing systems across multiple platforms.",
      keywords: ["ampl", "large-scale computing", "mathematical programming language", "modeling", "optimization", "scheduling", "solvers"],
      extensions: [".dat", ".mod", ".run"],
      stackovTags: ["ampl"],
      githubName: "AMPL",
      languishRanking: 236,
      githubLangId: "3",
      githubColor: "#E6EFBB",
      githubPopular: false,
      githubType: "programming",
      releases: [{ version: "20230430", name: "Stable Release", date: "2023-04-30" }],
      extWikipediaPath: "AMPL",
      extHomeURL: "http://www.ampl.com/",
      created: "1985",
    })
    .relParadigms.add(["para+declarative", "para+dsl", "para+imperative", "para+multi"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+industrial", "tag+interpreters", "tag+modeling", "tag+sci", "tag+stats"])
    .relTypeSystems.add(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
