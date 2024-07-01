import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+web")
    .merge({
      name: "WEB",
      websites: [{ kind: "wikipedia", title: "CWEB", href: "https://en.wikipedia.org/wiki/WEB" }],
      releases: [{ name: "CWEB", version: "3.67", date: "2006-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+web", "pl+tex"])
    .addPerson("person+donald-knuth", { role: "designer" })
    .addLicenses(["lic+free"])
    .addParadigms(["para+literate", "para+imperative", "para+structured"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"]);

  /**/
}
