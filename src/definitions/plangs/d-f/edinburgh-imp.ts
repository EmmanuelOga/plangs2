import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+edinburgh-imp")
    .merge({
      name: "Edinburgh IMP",
      websites: [{ kind: "wikipedia", title: "Edinburgh IMP", href: "https://en.wikipedia.org/wiki/Edinburgh_IMP" }],
    })
    .addImplementations(["pl+atlas-autocode"])
    .addInfluences(["pl+algol", "pl+atlas-autocode"])
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+x86", "platf+dos", "platf+win", "platf+linux"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
