import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+datalog")
    .merge({
      name: "Datalog",
      websites: [{ kind: "wikipedia", title: "Datalog", href: "https://en.wikipedia.org/wiki/Datalog" }],
    })
    .addDialects(["pl+datomic", "pl+.ql", "pl+souffle"])
    .addInfluences(["pl+prolog"])
    .addParadigms(["para+logic", "para+dec"])
    .addTypeSystems(["tsys+weak"]);

  /**/
}
