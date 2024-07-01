import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ml")
    .merge({
      name: "ML",
      websites: [{ kind: "wikipedia", title: "ML", href: "https://en.wikipedia.org/wiki/ML_(programming_language)" }],
    })
    .addDialects([
      "pl+alice",
      "pl+ats",
      "pl+caml",
      "pl+f-sharp",
      "pl+f-star",
      "pl+futhark",
      "pl+ocaml",
      "pl+sml",
      "pl+mlton",
      "pl+poly-slashml",
      "pl+reason",
    ])
    .addInfluences(["pl+iswim"])
    .addPerson("person+robin-milner", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
