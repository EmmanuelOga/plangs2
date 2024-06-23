import type { PlangsGraph } from "../../entities/plangs_graph";

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
        { version: "3.2", date: "2018-10-28", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "http://arclanguage.org/item?id=20772", title: "Arc Forum: Tell Arc: Arc 3.2" }],
      },
      extensions: [".arc"],
    },
    {
      dialects: ["pl+lisp-programming-language"],
      implementations: ["pl+racket"],
      influences: ["pl+lisp", "pl+scheme"],
      licenses: ["lic+artistic"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [["person+paul-graham", "designer"]],
      platforms: ["platf+ia-32", "platf+linux", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
