import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+squeak",
    "Squeak",
    {
      name: "Squeak",
      websites: [
        { kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" },
        { kind: "homepage", title: "www.squeak.org", href: "http://www.squeak.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "0.133", date: "2023-12-20", kind: "stable" },
      ],
      extensions: [".image", ".st"],
    },
    {
      dialects: ["pl+croquet-project", "pl+newspeak", "pl+pharo"],
      implementations: ["pl+croquet-project"],
      influences: ["pl+smalltalk", "pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula", "pl+self"],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: ["para+objects"],
      people: ["person+alan-kay", "person+dan-ingalls", "person+adele-goldberg"],
      platforms: ["platf+cross-platform", "platf+unix", "platf+mac", "platf+ios", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
