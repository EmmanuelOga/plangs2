import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pict")
    .merge({
      name: "Pict",
      websites: [
        { kind: "wikipedia", title: "Pict", href: "https://en.wikipedia.org/wiki/Pict_(programming_language)" },
      ],
    })
    .addInfluences(["pl+ml"])
    .addPerson("person+benjamin-c-pierce", { role: "developer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+static"]);

  /**/
}
