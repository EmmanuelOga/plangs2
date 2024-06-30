import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ml",
    {
      name: "ML",
      websites: [{ kind: "wikipedia", title: "ML", href: "https://en.wikipedia.org/wiki/ML_(programming_language)" }],
    },
    {
      dialects: [
        "pl+alice",
        "pl+ats",
        "pl+caml",
        "pl+f-sharp",
        "pl+f-star",
        "pl+futhark",
        "pl+mlton",
        "pl+ocaml",
        "pl+poly-slashml",
        "pl+reason",
        "pl+sml",
      ],
      influences: ["pl+iswim"],
      people: ["person+robin-milner"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
