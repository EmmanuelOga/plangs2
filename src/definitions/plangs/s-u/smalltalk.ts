import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+smalltalk")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DolphinSmalltalkBeachBall.png/121px-DolphinSmalltalkBeachBall.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/GNU_Smalltalk_logo.svg" },
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg" },
      ],
      releases: [
        { version: "0.30.0", date: "2021-01-01", kind: "stable" },
        { version: "7.1.24", date: "2022-01-01", kind: "stable" },
        { version: "8.0", date: "2024-01-01", kind: "preview" },
        { version: "3.2.5", date: "2013-01-01", kind: "stable" },
        { version: "unknown", date: "1980-01-01", kind: "stable" },
      ],
    })
    .addDialects(["pl+smalltalk", "pl+newspeak", "pl+pharo", "pl+self", "pl+strongtalk"])
    .addImplementations(["pl+smalltalk", "pl+gemstone", "pl+pharo", "pl+squeak", "pl+ibm-visualage", "pl+visualworks"])
    .addInfluences(["pl+smalltalk", "pl+mdl", "pl+objectlogo", "pl+simula-67", "pl+simula67", "pl+ucblogo"])
    .addInfluence("pl+logo", {
      refs: [
        {
          href: "http://gagne.homedns.org/~tgagne/contrib/EarlyHistoryST.html",
          title: "The Early History of Smalltalk",
        },
      ],
    })
    .addInfluence("pl+planner", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+simula", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+lisp", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+euler", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+imp", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+sketchpad", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+arpanet", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addInfluence("pl+burroughs-b5000", {
      refs: [{ href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en", title: "E-Mail of 2003-07-23" }],
    })
    .addPerson("person+adele-goldberg", { role: "designer" })
    .addPerson("person+dan-ingalls", { role: "designer" })
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+peter-deutsch", { role: "developer" })
    .addPerson("person+ted-kaehler", { role: "developer" })
    .addPerson("person+diana-merry", { role: "developer" })
    .addLicenses(["lic+mit", "lic+gpl", "lic+lgpl"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+web", "platf+ia-32", "platf+x86-64", "platf+win", "platf+cross-platform"])
    .addPlatform("platf+74181", {
      refs: [
        { href: "http://bitsavers.org/pdf/xerox/alto/schematics/AltoI_Schematics.pdf", title: "Alto I Schematics" },
      ],
    })
    .addTypeSystems(["tsys+object-oriented", "tsys+dynamic", "tsys+strong"]);

  /**/
}
