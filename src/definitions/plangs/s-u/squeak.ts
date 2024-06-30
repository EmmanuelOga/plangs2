import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+squeak")
    .merge({
      name: "Squeak",
      websites: [{ kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addDialects(["pl+pharo", "pl+croquet-project", "pl+newspeak"])
    .addImplementations(["pl+croquet-project"])
    .addInfluences(["pl+self", "pl+smalltalk", "pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+dan-ingalls", { role: "designer" })
    .addPerson("person+adele-goldberg", { role: "designer" })
    .addLicenses(["lic+mit", "lic+apache"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+ios", "platf+win"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
