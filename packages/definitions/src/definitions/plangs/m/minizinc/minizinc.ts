import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+minizinc", {
      name: "MiniZinc",
      description:
        "MiniZinc is a constraint modelling language (or algebraic modeling language) to describe and solve high-complexity problems using a variety of well-known solving paradigms for combinatorial problems including constraint programming, integer programming, lazy clause generation, SAT, and SMT.",
      keywords: ["minizinc"],
      websites: [
        { title: "www.minizinc.org", href: "https://www.minizinc.org/", kind: "homepage" },
        { title: "MiniZinc", href: "https://en.wikipedia.org/wiki/MiniZinc", kind: "wikipedia" },
      ],
      extensions: [".dzn", ".fzn", ".mzn"],
      firstAppeared: "2009-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.8.5", name: "MiniZinc 2.8.5", date: "2024-01-01" }],
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+constraint", "paradigm+logic"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+modeling", "tag+science"])
    .addTypeSystems(["tsys+static"])
    .addWrittenIn(["pl+c++"]);
}
