import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+nord")
    .merge({
      name: "Nord Programming Language",
      websites: [
        {
          kind: "wikipedia",
          title: "Nord Programming Language",
          href: "https://en.wikipedia.org/wiki/NORD_Programming_Language",
        },
      ],
    })
    .addPerson("person+norsk-data", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
