import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cowsel")
    .merge({
      name: "COWSEL",
      websites: [{ kind: "wikipedia", title: "COWSEL, POP-1", href: "https://en.wikipedia.org/wiki/COWSEL" }],
    })
    .addImplementations(["pl+assembly"])
    .addInfluences(["pl+cpl", "pl+lisp"])
    .addPerson("person+robin-popplestone", { role: "designer" })
    .addPerson("person+rod-burstall", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+structured", "para+reflective", "para+imperative"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
