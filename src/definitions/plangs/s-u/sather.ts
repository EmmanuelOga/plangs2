import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sather")
    .merge({
      name: "Sather",
      websites: [{ kind: "wikipedia", title: "Sather", href: "https://en.wikipedia.org/wiki/Sather" }],
      releases: [{ name: "Sather", version: "1.2.3", date: "2007-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+clu", "pl+eiffel", "pl+common-lisp", "pl+scheme"])
    .addPerson("person+steve-omohundro", { role: "designer" })
    .addParadigms(["para+objects", "para+functional"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
