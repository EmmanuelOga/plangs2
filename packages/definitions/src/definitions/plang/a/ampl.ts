import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ampl", {
      name: "AMPL",
      description:
        "A Mathematical Programming Language is an algebraic modeling language designed to describe and solve complex optimization problems for large-scale mathematical computing. Developed by Robert Fourer, David Gay, and Brian Kernighan at Bell Laboratories, it is widely used in industrial, academic, and governmental settings. AMPL features a mix of declarative and imperative paradigms, making it effective for formulating optimization models and constructing hybrid algorithms. With open-source and commercial solver support, AMPL allows seamless integration into existing systems across multiple platforms.",
      shortDesc:
        "Algebraic modeling language for complex optimization problems in large-scale computing.",
      created: "1985",
      extensions: [".dat", ".mod", ".run"],
      extGithubPath: "ampl/amplpy",
      extHomeURL: "https://ampl.com",
      extWikipediaPath: "AMPL",
      githubColor: "#E6EFBB",
      githubLangId: "3",
      githubName: "AMPL",
      githubPopular: false,
      githubStars: 70,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "ampl",
        "large-scale computing",
        "mathematical programming language",
        "modeling",
        "optimization",
        "scheduling",
        "solvers",
      ],
      languishRanking: 236,
      releases: [
        { version: "20230430", name: "Stable Release", date: "2023-04-30" },
      ],
      stackovTags: ["ampl"],
    })
    .relCompilesTo.add("pl+javascript")
    .relParadigms.add(
      "para+declarative",
      "para+dsl",
      "para+imperative",
      "para+multi",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+sci",
      "tag+stats",
    )
    .relTypeSystems.add("tsys+untyped");
}
