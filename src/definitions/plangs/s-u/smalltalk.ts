import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gemstone")
    .merge({
      name: "GemStone/S",
      websites: [
        {
          kind: "wikipedia",
          title: "GemStone/S Object Server",
          href: "https://en.wikipedia.org/wiki/Gemstone_(database)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/GemStone-S_logo_and_wordmark.png/121px-GemStone-S_logo_and_wordmark.png",
        },
      ],
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk"])
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addParadigms(["para+objects", "para+distributed", "para+in", "para+process"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+newsqueak")
    .merge({
      name: "Newsqueak",
      websites: [{ kind: "wikipedia", title: "Newsqueak", href: "https://en.wikipedia.org/wiki/Newsqueak" }],
    })
    .addInfluences(["pl+c", "pl+csp"])
    .addPerson("person+rob-pike", { role: "designer" })
    .addParadigms(["para+concurrent"])
    .addTypeSystems(["tsys+strong"]);

  /**/

  g.buildPlang("pl+pharo")
    .merge({
      name: "Pharo",
      websites: [{ kind: "wikipedia", title: "Pharo", href: "https://en.wikipedia.org/wiki/Pharo" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg" }],
      releases: [{ name: "Pharo", version: "12.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk", "pl+squeak"])
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", { refs: [{ href: "https://pharo.org/license", title: "Pharo license information" }] })
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+arm", "platf+ia-32", "platf+x86-64", "platf+win", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

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
        { name: "Amber Smalltalk", version: "0.30.0", date: "2021-01-01", kind: "stable" },
        { name: "Dolphin Smalltalk", version: "7.1.24", date: "2022-01-01", kind: "stable" },
        { name: "Dolphin Smalltalk", version: "8.0", date: "2024-01-01", kind: "preview" },
        { name: "GNU Smalltalk", version: "3.2.5", date: "2013-01-01", kind: "stable" },
        { name: "Smalltalk", version: "unknown", date: "1980-01-01", kind: "stable" },
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

  g.buildPlang("pl+squeak")
    .merge({
      name: "Squeak",
      websites: [{ kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" }],
      releases: [{ name: "Squeak", version: "unknown", date: "2023-01-01", kind: "stable" }],
    })
    .addDialects(["pl+pharo", "pl+croquet-project", "pl+newspeak"])
    .addImplementations(["pl+croquet-project"])
    .addInfluences(["pl+self", "pl+smalltalk", "pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+dan-ingalls", { role: "designer" })
    .addPerson("person+adele-goldberg", { role: "designer" })
    .addLicenses(["lic+mit", "lic+apache"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+ios", "platf+win"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+visualworks")
    .merge({
      name: "VisualWorks",
      websites: [{ kind: "wikipedia", title: "VisualWorks", href: "https://en.wikipedia.org/wiki/VisualWorks" }],
    })
    .addInfluences(["pl+lisp", "pl+logo", "pl+sketchpad", "pl+simula"])
    .addPerson("person+alan-kay", { role: "designer" })
    .addPerson("person+dan-ingalls", { role: "designer" })
    .addPerson("person+adele-goldberg", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+cross-platform", "platf+unix", "platf+mac", "platf+linux", "platf+win"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
