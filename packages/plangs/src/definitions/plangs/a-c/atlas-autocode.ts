import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+atlas-autocode")
    .merge({
      name: "Atlas Autocode",
      websites: [{ kind: "wikipedia", title: "Atlas Autocode", href: "https://en.wikipedia.org/wiki/Atlas_Autocode" }],
    })
    .addImplementations(["pl+algol", "pl+edinburgh-imp"])
    .addInfluences(["pl+algol"])
    .addPerson("person+tony-brooker", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
