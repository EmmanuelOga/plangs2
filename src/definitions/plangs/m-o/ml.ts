import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ml",
    "ML",
    {
      name: "ML",
      websites: [{ kind: "wikipedia", title: "ML", href: "https://en.wikipedia.org/wiki/ML_(programming_language)" }],
      releases: [{ version: "unknown", date: "1973-01-01", kind: "first" }],
    },
    {
      dialects: [
        "pl+futhark",
        "pl+sml",
        "pl+alice",
        "pl+mlton",
        "pl+caml",
        "pl+reason",
        "pl+ocaml",
        "pl+f-sharp",
        "pl+f-star",
        "pl+ats",
      ],
      influences: ["pl+lisp", "pl+iswim"],
      paradigms: ["para+multi", "para+functional", "para+generic", "para+imperative"],
      people: ["person+robin-milner"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
