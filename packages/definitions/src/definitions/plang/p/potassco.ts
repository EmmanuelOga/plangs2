import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+potassco", {
      name: "Potassco",
      description:
        "Focuses on providing tools for Answer Set Programming (ASP), aiming to solve complex combinatorial search problems with collections of efficient solvers.",
      shortDesc: "Targets combinatorial search problems using efficient ASP solvers.",
      extGithubPath: "potassco/clingo",
      extHomeURL: "https://potassco.org/",
      isTranspiler: false,
      keywords: ["answer set programming", "asp solver", "clingo"],
    })
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+cli", "tag+graph");
}
