import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+flow-matic")
    .merge({
      name: "FLOW-MATIC",
      websites: [{ kind: "wikipedia", title: "FLOW-MATIC", href: "https://en.wikipedia.org/wiki/FLOW-MATIC" }],
    })
    .addInfluences(["pl+arith-matic", "pl+laning-and-zierler-system"])
    .addPerson("person+remington-rand", { role: "designer" })
    .addPerson("person+grace-hopper", { role: "designer" })
    .addParadigms(["para+imperative"]);

  /**/
}
