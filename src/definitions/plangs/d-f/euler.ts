import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+euler")
    .merge({
      name: "Euler",
      websites: [
        { kind: "wikipedia", title: "Euler", href: "https://en.wikipedia.org/wiki/Euler_(programming_language)" },
      ],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
