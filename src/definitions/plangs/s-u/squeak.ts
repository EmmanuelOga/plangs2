import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+squeak",
    {
      name: "Squeak",
      websites: [{ kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+croquet-project", "pl+newspeak", "pl+pharo"],
      implementations: ["pl+croquet-project"],
      influences: ["pl+lisp", "pl+logo", "pl+self", "pl+simula", "pl+sketchpad", "pl+smalltalk"],
      people: ["person+adele-goldberg", "person+alan-kay", "person+dan-ingalls"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform", "platf+ios", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
