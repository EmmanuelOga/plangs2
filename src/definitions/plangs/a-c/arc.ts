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
      people: ["person+paul-graham"],
      licenses: ["lic+artistic"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      platforms: ["platf+ia-32", "platf+linux", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
