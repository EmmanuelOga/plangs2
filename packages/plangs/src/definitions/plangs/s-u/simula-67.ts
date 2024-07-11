import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+simula-67")
    .merge({
      name: "Simula",
      websites: [{ kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
    })
    .addImplementations(["pl+algol", "pl+simscript"])
    .addInfluences(["pl+algol", "pl+simscript"])
    .addPerson("person+ole-johan-dahl", { role: "designer" })
    .addPerson("person+kristen-nygaard", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+unix", "platf+win", "platf+z-slashos"])
    .addTypeSystems(["tsys+static", "tsys+nominative"]);

  /**/
}
