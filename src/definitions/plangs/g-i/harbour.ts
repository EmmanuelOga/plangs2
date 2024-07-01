import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+harbour")
    .merge({
      name: "Harbour Project",
      websites: [{ kind: "wikipedia", title: "Harbour", href: "https://en.wikipedia.org/wiki/Harbour_(software)" }],
      releases: [{ name: "Harbour Project", version: "3.0.0", date: "2011-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+dbase"])
    .addLicenses(["lic+open-source"])
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+safe", "tsys+strong"]);

  /**/
}
