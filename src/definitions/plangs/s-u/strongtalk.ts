import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+strongtalk")
    .merge({
      name: "Strongtalk",
      websites: [{ kind: "wikipedia", title: "Strongtalk", href: "https://en.wikipedia.org/wiki/Strongtalk" }],
      releases: [{ name: "Strongtalk", version: "2.0", date: "2006-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk", "pl+self"])
    .addPerson("person+gilad-bracha", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+ia-32", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

  /**/
}
