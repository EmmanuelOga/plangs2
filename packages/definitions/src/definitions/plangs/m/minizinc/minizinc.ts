import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+minizinc", {
      name: "MiniZinc",
      description:
        "MiniZinc is a constraint modelling language (or algebraic modeling language) to describe and solve high-complexity problems using a variety of well-known solving paradigms for combinatorial problems including constraint programming, integer programming, lazy clause generation, SAT, and SMT.",
      firstAppeared: "2009-01-01",
      extensions: [".dzn", ".fzn", ".mzn"],
      websites: [
        { href: "https://www.minizinc.org/", title: "www.minizinc.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/MiniZinc", title: "MiniZinc", kind: "wikipedia" },
      ],
      releases: [{ version: "2.8.5", date: "2024-01-01" }],
    })
    .addParadigms(["para+constraint", "para+logic"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"])
    .addWrittenIn(["pl+c++"]);
}
