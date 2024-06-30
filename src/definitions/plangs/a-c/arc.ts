import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+arc",
    {
      name: "Arc",
      websites: [{ kind: "wikipedia", title: "Arc", href: "https://en.wikipedia.org/wiki/Arc_(programming_language)" }],
      releases: [{ version: "3.2", date: "2018-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+racket"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+artistic"],
      paradigms: ["para+multi", "para+functional", "para+meta", "para+imperative"],
      people: ["person+paul-graham"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
