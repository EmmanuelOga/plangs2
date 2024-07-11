import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pop-2")
    .merge({
      name: "POP-2",
      websites: [{ kind: "wikipedia", title: "POP-2", href: "https://en.wikipedia.org/wiki/POP-2" }],
      releases: [{ name: "POP-2", version: "unknown", date: "1975-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+assembly"])
    .addInfluences(["pl+cowsel", "pl+lisp", "pl+algol"])
    .addPerson("person+robin-popplestone", { role: "designer" })
    .addPerson("person+rod-burstall", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+structured", "para+reflective", "para+imperative"])
    .addPlatforms(["platf+unix"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
