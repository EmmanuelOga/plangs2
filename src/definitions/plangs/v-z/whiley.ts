import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+whiley")
    .merge({
      name: "Whiley",
      websites: [
        { kind: "wikipedia", title: "Whiley", href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)" },
      ],
      releases: [{ version: "0.6.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+java", "pl+c", "pl+python", "pl+rust"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+imperative", "para+functional"])
    .addTypeSystems(["tsys+strong", "tsys+safe", "tsys+structural", "tsys+flow-sensitive"]);

  /**/
}
