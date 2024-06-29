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
        { version: "0.30.0", date: "2021-02-23", kind: "stable" },
        { version: "unknown", date: "2003-01-12", kind: "first" },
        { version: "unknown", date: "2013-04-08", kind: "stable" },
        { version: "unknown", date: "1997-08-01", kind: "first" },
        { version: "7.1.24", date: "2022-06-19", kind: "stable" },
        { version: "8.0", date: "2024-01-01", kind: "preview" },
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "unknown", date: "1980-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://lolg.it/amber/amber/commit/d0643e241c2ba97a9d8ab37a03bff29e04aef6c2",
            title: "Release version 0.30.0",
          },
          {
            href: "https://object-arts.com/blog/files/d60e38332cc3e009d1326504af95a64a-6.html",
            title: "Dolphin Smalltalk 7 is Open Source",
          },
        ],
        platform: [
          { href: "http://bitsavers.org/pdf/xerox/alto/schematics/AltoI_Schematics.pdf", title: "Alto I Schematics" },
          {
            href: "http://history-computer.com/ModernComputer/Personal/Alto.html",
            title: "History of Computers and Computing, Birth of the modern computer, Personal computer, Xerox Alto",
          },
        ],
        influenced_by: [
          { href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" },
          {
            href: "http://gagne.homedns.org/~tgagne/contrib/EarlyHistoryST.html",
            title: "The Early History of Smalltalk",
          },
        ],
      },
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
        "pl+sketchpad",
        "pl+smalltalk",
        "pl+ucblogo",
      ],
      licenses: ["lic+gpl", "lic+lgpl", "lic+mit"],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", { role: "designer" }],
        ["person+alan-kay", { role: "designer" }],
        ["person+andy-bower", { role: "designer" }],
        ["person+blair-mcglashan", { role: "designer" }],
        ["person+dan-ingalls", { role: "designer" }],
        ["person+diana-merry", { role: "developer" }],
        ["person+object-arts", { role: "developer" }],
        ["person+peter-deutsch", { role: "developer" }],
        ["person+ted-kaehler", { role: "developer" }],
      ],
      platforms: ["platf+74181", "platf+cross-platform", "platf+ia-32", "platf+web", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+object-oriented", "tsys+strong"],
    },
  );
}
