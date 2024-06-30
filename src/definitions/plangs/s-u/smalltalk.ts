import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+smalltalk",
    {
      name: "Smalltalk",
      websites: [
        { kind: "wikipedia", title: "Smalltalk", href: "https://en.wikipedia.org/wiki/Smalltalk" },
        { kind: "wikipedia", title: "Amber Smalltalk", href: "https://en.wikipedia.org/wiki/Amber_Smalltalk" },
        { kind: "wikipedia", title: "Dolphin Smalltalk", href: "https://en.wikipedia.org/wiki/Dolphin_Smalltalk" },
        { kind: "wikipedia", title: "GNU Smalltalk", href: "https://en.wikipedia.org/wiki/GNU_Smalltalk" },
        {
          kind: "homepage",
          title: "https://www.gnu.org/software/smalltalk/",
          href: "https://www.gnu.org/software/smalltalk/",
        },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/f/fb/Amber_Smalltalk_Logo.svg" },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DolphinSmalltalkBeachBall.png/121px-DolphinSmalltalkBeachBall.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/GNU_Smalltalk_logo.svg" },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg" },
      ],
      releases: [
        { version: "0.30.0", date: "2021-01-01", kind: "stable" },
        { version: "7.1.24", date: "2022-01-01", kind: "stable" },
        { version: "8.0", date: "2024-01-01", kind: "preview" },
        { version: "3.2.5", date: "2013-01-01", kind: "stable" },
        { version: "unknown", date: "1980-01-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+newspeak", "pl+pharo", "pl+self", "pl+smalltalk", "pl+strongtalk"],
      implementations: ["pl+gemstone", "pl+ibm-visualage", "pl+pharo", "pl+smalltalk", "pl+squeak", "pl+visualworks"],
      influences: [
        "pl+arpanet",
        "pl+burroughs-b5000",
        "pl+euler",
        "pl+imp",
        "pl+lisp",
        "pl+logo",
        "pl+mdl",
        "pl+objectlogo",
        "pl+planner",
        "pl+simula",
        "pl+simula-67",
        "pl+simula67",
        "pl+sketchpad",
        "pl+smalltalk",
        "pl+ucblogo",
      ],
      people: [
        "person+adele-goldberg",
        "person+alan-kay",
        "person+dan-ingalls",
        "person+diana-merry",
        "person+peter-deutsch",
        "person+ted-kaehler",
      ],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+74181", "platf+cross-platform", "platf+ia-32", "platf+web", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+object-oriented", "tsys+strong"],
    },
  );
}
