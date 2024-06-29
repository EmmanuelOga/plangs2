import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+smalltalk",
    "Smalltalk",
    {
      name: "Smalltalk",
      websites: [
        { kind: "wikipedia", title: "Smalltalk", href: "https://en.wikipedia.org/wiki/Smalltalk" },
        { kind: "wikipedia", title: "Amber Smalltalk", href: "https://en.wikipedia.org/wiki/Amber_Smalltalk" },
        { kind: "homepage", title: "www.amber-lang.net", href: "http://www.amber-lang.net" },
        { kind: "wikipedia", title: "GNU Smalltalk", href: "https://en.wikipedia.org/wiki/GNU_Smalltalk" },
        {
          kind: "homepage",
          title: "https://www.gnu.org/software/smalltalk/",
          href: "https://www.gnu.org/software/smalltalk/",
        },
        { kind: "wikipedia", title: "Dolphin Smalltalk", href: "https://en.wikipedia.org/wiki/Dolphin_Smalltalk" },
        { kind: "homepage", title: "www.object-arts.com", href: "http://www.object-arts.com" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/f/fb/Amber_Smalltalk_Logo.svg" },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/GNU_Smalltalk_logo.svg" },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DolphinSmalltalkBeachBall.png/121px-DolphinSmalltalkBeachBall.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg" },
      ],
      releases: [
        { version: "unknown", date: "2011-09-13", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "0.30.0", date: "2021-02-23", kind: "stable" },
        { version: "unknown", date: "2003-01-12", kind: "first" },
        { version: "unknown", date: "2013-04-08", kind: "stable" },
        { version: "unknown", date: "1997-08-01", kind: "first" },
        { version: "7.1.24", date: "2022-06-19", kind: "stable" },
        { version: "8.0", date: "2024-01-01", kind: "preview" },
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "unknown", date: "1980-01-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+newspeak", "pl+self", "pl+strongtalk", "pl+pharo", "pl+smalltalk"],
      implementations: ["pl+smalltalk", "pl+gemstone", "pl+pharo", "pl+squeak", "pl+ibm-visualage", "pl+visualworks"],
      influences: [
        "pl+lisp",
        "pl+mdl",
        "pl+simula-67",
        "pl+objectlogo",
        "pl+planner",
        "pl+ucblogo",
        "pl+smalltalk",
        "pl+simula",
        "pl+euler",
        "pl+imp",
        "pl+logo",
        "pl+sketchpad",
        "pl+arpanet",
        "pl+burroughs-b5000",
      ],
      licenses: ["lic+mit", "lic+gpl", "lic+lgpl"],
      paradigms: ["para+objects"],
      people: [
        "person+andy-bower",
        "person+blair-mcglashan",
        "person+object-arts",
        "person+adele-goldberg",
        "person+dan-ingalls",
        "person+alan-kay",
        "person+peter-deutsch",
        "person+ted-kaehler",
        "person+diana-merry",
      ],
      platforms: ["platf+web", "platf+ia-32", "platf+x86-64", "platf+win", "platf+74181", "platf+cross-platform"],
      typeSystems: ["tsys+object-oriented", "tsys+dynamic", "tsys+strong"],
    },
  );
}
