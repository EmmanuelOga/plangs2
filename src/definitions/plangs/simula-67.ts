import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+simula-67",
    "Simula",
    {
      name: "Simula",
      websites: [
        { kind: "wikipedia", title: "Simula 67", href: "https://en.wikipedia.org/wiki/Simula_67" },
        { kind: "homepage", title: "www.simula67.info", href: "http://www.simula67.info" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Simula_-_logo.svg" }],
      releases: [{ version: "unknown", date: "1962-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+algol-60", "pl+simscript"],
      influenced: ["pl+ada"],
      influences: [
        "pl+algol-60",
        "pl+beta",
        "pl+clu",
        "pl+eiffel",
        "pl+emerald",
        "pl+list-of-object-oriented-programming-languages",
        "pl+pascal",
        "pl+simscript",
        "pl+smalltalk",
      ],
      paradigms: ["para+imperative", "para+multi", "para+objects", "para+structured"],
      people: [
        ["person+kristen-nygaard", "designer"],
        ["person+ole-johan-dahl", "designer"],
      ],
      platforms: ["platf+unix", "platf+win", "platf+z-slashos"],
      typeSystems: ["tsys+nominative", "tsys+static"],
    },
  );

  /**/
}
