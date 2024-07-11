import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+imp")
    .merge({
      name: "IMP",
      websites: [{ kind: "wikipedia", title: "IMP", href: "https://en.wikipedia.org/wiki/IMP_(programming_language)" }],
      releases: [{ name: "IMP", version: "unknown", date: "1972-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+algol"])
    .addInfluences(["pl+algol"])
    .addPerson("person+national-security-agency", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+extensible"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
