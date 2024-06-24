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
      influenced: ["pl+croquet-project", "pl+etoys", "pl+pharo", "pl+scratch"],
      influences: ["pl+lisp", "pl+logo", "pl+self", "pl+simula", "pl+sketchpad", "pl+smalltalk"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", "designer"],
        ["person+alan-kay", "designer"],
        ["person+dan-ingalls", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+ios", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
