import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+squeak",
    "Squeak",
    {
      name: "Squeak",
      websites: [{ kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+pharo", "pl+croquet-project", "pl+newspeak"],
      implementations: ["pl+croquet-project"],
      influences: ["pl+self", "pl+smalltalk", "pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: ["para+objects"],
      people: ["person+alan-kay", "person+dan-ingalls", "person+adele-goldberg"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+mac", "platf+ios", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
