import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+alma-0")
    .merge({
      name: "Alma-0",
      websites: [{ kind: "wikipedia", title: "Alma-0", href: "https://en.wikipedia.org/wiki/Alma-0" }],
    })
    .addInfluences(["pl+modula"])
    .addPerson("person+krzysztof-apt", { role: "designer" })
    .addPerson("person+centrum-wiskunde", { role: "developer" })
    .addParadigms(["para+multi", "para+constraint", "para+imperative", "para+logic"])
    .addTypeSystems(["tsys+static"]);

  /**/
}
