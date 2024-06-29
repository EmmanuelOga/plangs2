import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+arc",
    "Arc",
    {
      name: "Arc",
      websites: [
        { kind: "wikipedia", title: "Arc", href: "https://en.wikipedia.org/wiki/Arc_(programming_language)" },
        { kind: "homepage", title: "arclanguage.org", href: "http://arclanguage.org" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-29", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "3.2", date: "2018-10-28", kind: "stable" },
      ],
      extensions: [".arc"],
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
