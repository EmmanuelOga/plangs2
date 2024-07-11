import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+emerald")
    .merge({
      name: "Emerald",
      websites: [
        { kind: "wikipedia", title: "Emerald", href: "https://en.wikipedia.org/wiki/Emerald_(programming_language)" },
      ],
    })
    .addInfluences(["pl+pascal", "pl+simula", "pl+smalltalk", "pl+simula-67", "pl+simula67"])
    .addPerson("person+henry-m-levy", { role: "designer" })
    .addParadigms(["para+objects"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/
}
