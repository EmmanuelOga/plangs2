import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+smalltalk",
    "Smalltalk",
    {
      name: "Smalltalk",
      websites: [{ kind: "wikipedia", title: "Smalltalk", href: "https://en.wikipedia.org/wiki/Smalltalk" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg" }],
      releases: [
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "unknown", date: "1980-01-01", kind: "stable" },
      ],
      references: {
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
      dialects: ["pl+dolphin-smalltalk", "pl+newspeak", "pl+pharo", "pl+self", "pl+strongtalk"],
      implementations: [
        "pl+amber-smalltalk",
        "pl+dolphin-smalltalk",
        "pl+gemstone",
        "pl+gnu-smalltalk",
        "pl+ibm-visualage",
        "pl+pharo",
        "pl+squeak",
        "pl+visualworks",
      ],
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
        "pl+ucblogo",
      ],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", "designer"],
        ["person+alan-kay", "designer"],
        ["person+dan-ingalls", "designer"],
        ["person+diana-merry", "developer"],
        ["person+peter-deutsch", "developer"],
        ["person+ted-kaehler", "developer"],
      ],
      platforms: ["platf+74181", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+object-oriented", "tsys+strong"],
    },
  );
}
