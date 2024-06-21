import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+Scala", "Scala", {
    name: "Scala",
    websites: [
      {
        kind: "wikipedia",
        title: "Scala",
        href: "https://en.wikipedia.org/wiki/Scala_(programming_language)",
      },
      {
        kind: "wikipedia",
        title: "Scala",
        href: "https://en.wikipedia.org/wiki/Scala_programming_language",
      },
      { kind: "homepage", title: "www.scala-lang.org", href: "http://www.scala-lang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "2004-01-20", kind: "first" },
      { version: "3.4.0", date: "2024-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://github.com/scala/scala3/releases/tag/3.4.0", title: "Scala 3.4.0" },
      ],
      license: [
        { href: "https://github.com/scala/scala/blob/2.13.x/NOTICE", title: "Notice file" },
      ],
      influenced_by: [
        { href: "http://scalamacros.org", title: "Scala Macros" },
        {
          href: "http://blog.fogus.me/2010/08/06/martinodersky-take5-tolist/",
          title: "MartinOdersky take(5) toList",
        },
        {
          href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
          title:
            "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
        },
        {
          href: "https://web.archive.org/web/20200709211816/https://www.scala-lang.org/docu/files/ScalaOverview.pdf",
          title: "An Overview of the Scala Programming Language",
        },
      ],
    },
    extensions: [".scala", ".sc"],
    people: [["person+Martin-Odersky", "designer"]],
    licenses: ["lic+apache"],
    paradigms: [
      "para+multi-paradigm",
      "para+concurrent",
      "para+functional",
      "para+imperative",
      "para+objects",
    ],
    typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    platforms: ["platf+jvm", "platf+llvm"],
    influences: [
      "pl+Common-Lisp",
      "pl+Eiffel",
      "pl+Erlang",
      "pl+F-Sharp",
      "pl+Haskell",
      "pl+Java",
      "pl+OCaml",
      "pl+Oz",
      "pl+Pizza",
      "pl+Scheme",
      "pl+Smalltalk",
      "pl+Standard-ML",
      "pl+Ceylon",
      "pl+Chisel",
      "pl+Fantom",
      "pl+C-Sharp",
      "pl+Kotlin",
      "pl+Lasso",
      "pl+Red",
      "pl+Flix",
    ],
    influenced: [
      "pl+Java",
      "pl+Standard-ML",
      "pl+Scheme",
      "pl+Red",
      "pl+Lisp",
      "pl+Xtend",
      "pl+Erlang",
      "pl+Flix",
      "pl+Fantom",
      "pl+OCaml",
      "pl+ML",
      "pl+Pizza",
      "pl+Lasso",
      "pl+Oz",
      "pl+Eiffel",
      "pl+Hack",
      "pl+Kotlin",
      "pl+Ceylon",
      "pl+Fortress",
      "pl+Smalltalk",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Scheme", "Scheme", {
    name: "Scheme",
    websites: [
      {
        kind: "wikipedia",
        title: "Scheme",
        href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)",
      },
      { kind: "homepage", title: "www.scheme.org", href: "https://www.scheme.org/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" },
    ],
    releases: [
      { version: "unknown", date: "1975-01-01", kind: "first" },
      { version: "unknown", date: "2013-01-01", kind: "stable" },
    ],
    extensions: [".scm", ".ss"],
    references: {
      influenced: [
        {
          href: "https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    },
    people: [
      ["person+Guy-L-Steele", "designer"],
      ["person+Gerald-Jay-Sussman", "designer"],
    ],
    paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+meta"],
    typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    implementations: ["pl+Scheme-implementations"],
    dialects: ["pl+Lisp", "pl+Document-Style-Semantics-and-Specification-Language"],
    influences: [
      "pl+ALGOL",
      "pl+Lisp",
      "pl+MDL",
      "pl+Clojure",
      "pl+Common-Lisp",
      "pl+Dylan",
      "pl+EuLisp",
      "pl+Haskell",
      "pl+Hop",
      "pl+JavaScript",
      "pl+Julia",
      "pl+Lua",
      "pl+MultiLisp",
      "pl+Python",
      "pl+R",
      "pl+Racket",
      "pl+Ruby",
      "pl+Rust",
      "pl+S",
      "pl+Scala",
      "pl+T",
    ],
    influenced: [
      "pl+T",
      "pl+LFE",
      "pl+Sather",
      "pl+SCM",
      "pl+SIOD",
      "pl+Source",
      "pl+MDL",
      "pl+Clojure",
      "pl+AmbientTalk",
      "pl+Gambit",
      "pl+K",
      "pl+R",
      "pl+newLISP",
      "pl+ECMAScript",
      "pl+Lua",
      "pl+ALGOL",
      "pl+Dylan",
      "pl+Kawa",
      "pl+Arc",
      "pl+Joy",
      "pl+Scala",
      "pl+Game-Oriented-Assembly-Lisp",
      "pl+q",
      "pl+Rust",
      "pl+JavaScript",
      "pl+MultiLisp",
      "pl+Common-Lisp",
      "pl+Racket",
      "pl+EuLisp",
      "pl+Tea",
      "pl+GNU-Guile",
      "pl+Oaklisp",
      "pl+Haskell",
      "pl+ISLISP",
      "pl+Snap-",
      "pl+SKILL",
      "pl+---",
      "pl+Pico",
      "pl+Hop",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Scilab", "Scilab", {
    name: "Scilab",
    websites: [
      { kind: "wikipedia", title: "Scilab", href: "https://en.wikipedia.org/wiki/Scilab" },
      { kind: "wikipedia", title: "Scilab", href: "https://en.wikipedia.org/wiki/Xcos" },
      { kind: "homepage", title: "www.scilab.org", href: "https://www.scilab.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
      },
    ],
    references: {
      stable_release: [
        { href: "https://www.scilab.org/download/scilab-2024.1.0", title: "Scilab 2024.1.0" },
      ],
    },
    releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    people: [["person+Dassault-Systemes", "designer"]],
    licenses: ["lic+gpl-2", "lic+cecill"],
    influenced: ["pl+MATLAB-(programming-language)MATLAB-(software)"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Scratch", "Scratch", {
    name: "Scratch",
    websites: [
      {
        kind: "wikipedia",
        title: "Scratch",
        href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)",
      },
      { kind: "homepage", title: "scratch.mit.edu", href: "https://scratch.mit.edu/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg" },
    ],
    references: {
      first_appeared: [
        {
          href: "https://www.researchgate.net/publication/221338134",
          title: "Scratch: A Sneak Preview",
        },
        {
          href: "https://en.scratch-wiki.info/wiki/Scratch_Timeline#May",
          title: "Scratch Timeline – Scratch Wiki",
        },
      ],
      implementation_language: [
        {
          href: "https://bocoup.com/blog/porting-scratch-from-flash-to-javascript-performance-interoperability-and-extensions",
          title:
            "Porting Scratch from Flash to JavaScript: Performance, Interoperability and Extensions",
        },
      ],
      influenced: [
        { href: "https://catrobat.org/", title: "Catrobat Home" },
        { href: "https://scratchjr.org/", title: "ScratchJr – Home" },
        { href: "https://snap.berkeley.edu/", title: "Snap! Build Your Own Blocks" },
      ],
    },
    releases: [
      { version: "0.1", date: "2003-10-11", kind: "first" },
      { version: "3.0", date: "2019-01-02", kind: "stable" },
    ],
    extensions: [".sb", ".sb2", ".sb3"],
    licenses: ["lic+bsd-3-clause", "lic+gpl-2"],
    paradigms: ["para+event-driven", "para+visual"],
    platforms: [
      "platf+windows",
      "platf+macos",
      "platf+linux",
      "platf+web",
      "platf+ios",
      "platf+dos",
      "platf+android",
    ],
    implementations: ["pl+Squeak", "pl+ActionScript", "pl+HTML5", "pl+JavaScript"],
    influences: [
      "pl+Logo",
      "pl+Smalltalk",
      "pl+HyperCard",
      "pl+StarLogo",
      "pl+AgentSheets",
      "pl+AgentCubes",
      "pl+Etoys",
      "pl+Catrobat",
      "pl+ScratchJr",
      "pl+Snap-",
      "pl+mBlock",
      "pl+Turtlestitch",
    ],
    influenced: [
      "pl+TurtleStitch",
      "pl+AgentSheets",
      "pl+Squeak",
      "pl+Logo",
      "pl+UCBLogo",
      "pl+AgentCubes",
      "pl+Etoys",
      "pl+Snap-",
      "pl+Smalltalk",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+ScratchJr", "ScratchJr", {
    name: "ScratchJr",
    websites: [
      { kind: "wikipedia", title: "ScratchJr", href: "https://en.wikipedia.org/wiki/ScratchJr" },
      { kind: "homepage", title: "www.scratchjr.org", href: "http://www.scratchjr.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
      },
    ],
    releases: [{ version: "unknown", date: "2014-01-01", kind: "first" }],
    platforms: ["platf+android", "platf+ios", "platf+chromeos"],
    influenced: ["pl+Scratch"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Self", "Self", {
    name: "Self",
    websites: [
      {
        kind: "wikipedia",
        title: "Self",
        href: "https://en.wikipedia.org/wiki/Self_(programming_language)",
      },
      { kind: "homepage", title: "www.selflanguage.org", href: "http://www.selflanguage.org" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "1987-01-01", kind: "first" },
      { version: "2017.1", date: "2017-05-24", kind: "stable" },
    ],
    references: {
      influenced_by: [
        { href: "https://doi.org/10.1145%2F1238844.1238853", title: "10.1145/1238844.1238853" },
      ],
    },
    people: [["person+David-Ungar", "designer"]],
    licenses: ["lic+bsd"],
    paradigms: ["para+objects", "para+prototypes"],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    platforms: ["platf+cross-platform", "platf+unix", "platf+macos", "platf+windows"],
    dialects: ["pl+Newspeak"],
    influences: [
      "pl+Smalltalk",
      "pl+APL",
      "pl+NewtonScript",
      "pl+JavaScript",
      "pl+Io",
      "pl+Agora",
      "pl+Squeak",
      "pl+Lua",
      "pl+Factor",
      "pl+Rebol",
    ],
    influenced: [
      "pl+AmbientTalk",
      "pl+NewtonScript",
      "pl+ECMAScript",
      "pl+Newspeak",
      "pl+Squeak",
      "pl+urbiscript",
      "pl+Obliq",
      "pl+JavaScript",
      "pl+Io",
      "pl+Factor",
      "pl+Strongtalk",
      "pl+Rebol",
      "pl+Smalltalk",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+SmallBASIC", "SmallBASIC", {
    name: "SmallBASIC",
    websites: [
      { kind: "wikipedia", title: "SmallBASIC", href: "https://en.wikipedia.org/wiki/SmallBasic" },
      { kind: "repository", title: "smallbasic.github.io", href: "https://smallbasic.github.io" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png",
      },
    ],
    references: {
      stable_release: [
        { href: "https://smallbasic.github.io", title: "Browse Files for SmallBASIC" },
      ],
    },
    releases: [{ version: "12.27", date: "2024-04-26", kind: "stable" }],
    extensions: [".bas"],
    licenses: ["lic+gpl-3"],
    implementations: ["pl+BASIC"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+SmallBasic", "SmallBasic", {
    name: "SmallBasic",
    websites: [
      { kind: "wikipedia", title: "SmallBasic", href: "https://en.wikipedia.org/wiki/SmallBasic" },
    ],
    influenced: ["pl+QBasic"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Smalltalk", "Smalltalk", {
    name: "Smalltalk",
    websites: [
      { kind: "wikipedia", title: "Smalltalk", href: "https://en.wikipedia.org/wiki/Smalltalk" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smalltalk_Balloon.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "1972-01-01", kind: "first" },
      { version: "unknown", date: "1980-01-01", kind: "stable" },
    ],
    references: {
      platform: [
        {
          href: "http://bitsavers.org/pdf/xerox/alto/schematics/AltoI_Schematics.pdf",
          title: "Alto I Schematics",
        },
        {
          href: "http://history-computer.com/ModernComputer/Personal/Alto.html",
          title:
            "History of Computers and Computing, Birth of the modern computer, Personal computer, Xerox Alto",
        },
      ],
      influenced_by: [
        {
          href: "http://www.purl.org/stefan_ram/pub/doc_kay_oop_en",
          title: "E-Mail of 2003-07-23",
        },
        {
          href: "http://gagne.homedns.org/~tgagne/contrib/EarlyHistoryST.html",
          title: "The Early History of Smalltalk",
        },
      ],
    },
    people: [
      ["person+Adele-Goldberg", "designer"],
      ["person+Dan-Ingalls", "designer"],
      ["person+Alan-Kay", "designer"],
      ["person+Peter-Deutsch", "designer"],
      ["person+Ted-Kaehler", "designer"],
      ["person+Diana-Merry", "designer"],
    ],
    paradigms: ["para+objects"],
    typeSystems: ["tsys+object-oriented", "tsys+strong", "tsys+dynamic"],
    platforms: ["platf+74181", "platf+cross-platform"],
    implementations: [
      "pl+Amber",
      "pl+Dolphin-Smalltalk",
      "pl+GemStone-SlashS",
      "pl+GNU-Smalltalk",
      "pl+Pharo",
      "pl+Squeak",
      "pl+VA-Smalltalk",
      "pl+VisualWorks",
    ],
    dialects: ["pl+Newspeak", "pl+Self", "pl+Strongtalk", "pl+Pharo", "pl+Dolphin-Smalltalk"],
    influences: [
      "pl+Lisp",
      "pl+Simula",
      "pl+Euler",
      "pl+IMP",
      "pl+Planner",
      "pl+Logo",
      "pl+Sketchpad",
      "pl+ARPAnet",
      "pl+Burroughs-B5000",
      "pl+AppleScript",
      "pl+Common-Lisp-Object-System",
      "pl+Dart",
      "pl+Dylan",
      "pl+Erlang",
      "pl+Etoys",
      "pl+Go",
      "pl+Groovy",
      "pl+Io",
      "pl+Java",
      "pl+Lasso",
      "pl+Logtalk",
      "pl+Newspeak",
      "pl+NewtonScript",
      "pl+Object-REXX",
      "pl+Objective-C",
      "pl+PHP",
      "pl+Python",
      "pl+Raku",
      "pl+Ruby",
      "pl+Scala",
      "pl+Scratch",
      "pl+Self",
      "pl+Swift",
    ],
    influenced: [
      "pl+Wolfram-Language",
      "pl+Ada",
      "pl+Objective-C",
      "pl+Java",
      "pl+Object-Pascal",
      "pl+Claire",
      "pl+Lisp",
      "pl+Emerald",
      "pl+Xtend",
      "pl+MDL",
      "pl+C-Plus-Plus",
      "pl+Erlang",
      "pl+AmbientTalk",
      "pl+Orc",
      "pl+COBOL",
      "pl+Go",
      "pl+Ruby",
      "pl+Object-REXX",
      "pl+GemStone-SlashS-Object-Server",
      "pl+AgentSheets",
      "pl+Newspeak",
      "pl+Simula",
      "pl+Squeak",
      "pl+Lasso",
      "pl+Logo",
      "pl+Scala",
      "pl+Self",
      "pl+Dart",
      "pl+Io",
      "pl+Planner",
      "pl+Scratch",
      "pl+Logtalk",
      "pl+UCBLogo",
      "pl+Strongtalk",
      "pl+Raku",
      "pl+Oaklisp",
      "pl+AgentCubes",
      "pl+Etoys",
      "pl+Pharo",
      "pl+Dolphin-Smalltalk",
      "pl+Groovy",
      "pl+Snap-",
      "pl+Ceylon",
      "pl+Pico",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Solidity", "Solidity", {
    name: "Solidity",
    websites: [
      { kind: "wikipedia", title: "Solidity", href: "https://en.wikipedia.org/wiki/Solidity" },
      { kind: "homepage", title: "soliditylang.org", href: "https://soliditylang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
      },
    ],
    references: {
      developer: [
        {
          href: "https://github.com/ethereum/solidity",
          title: "Contributors to ethereum/solidity",
        },
      ],
      stable_release: [
        {
          href: "https://github.com/ethereum/solidity/releases/tag/v0.8.26",
          title: "Release 0.8.26",
        },
      ],
      implementation_language: [
        { href: "https://github.com/", title: "Build software better, together" },
      ],
      license: [
        {
          href: "https://github.com/ethereum/solidity/blob/bca3fb8ffd7c57a3f6920fd5a115a9a0fc0edb21/LICENSE.txt",
          title: "The Solidity Contract-Oriented Programming Language",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "2014-01-01", kind: "first" },
      { version: "0.8.26", date: "2024-01-01", kind: "stable" },
    ],
    extensions: [".sol"],
    people: [["person+Gavin-Wood", "designer"]],
    licenses: ["lic+gnu-gpl-3"],
    paradigms: ["para+imperative"],
    implementations: ["pl+C-Plus-Plus"],
    influences: ["pl+JavaScript", "pl+C-Plus-Plus", "pl+Python"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Souffle", "Soufflé", {
    name: "Soufflé",
    websites: [
      {
        kind: "wikipedia",
        title: "Soufflé",
        href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
      },
    ],
    dialects: ["pl+Datalog"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Source", "Source", {
    name: "Source",
    websites: [
      {
        kind: "wikipedia",
        title: "Source",
        href: "https://en.wikipedia.org/wiki/Source_(programming_language)",
      },
      {
        kind: "homepage",
        title: "docs.sourceacademy.org",
        href: "https://docs.sourceacademy.org/",
      },
    ],
    releases: [
      { version: "unknown", date: "2017-01-01", kind: "first" },
      { version: "unknown", date: "2021-12-31", kind: "stable" },
    ],
    extensions: [".js"],
    references: {
      major_implementations: [{ href: "https://sourceacademy.org", title: "Source Academy" }],
    },
    licenses: ["lic+apache"],
    paradigms: ["para+multi-paradigm", "para+scripting", "para+imperative", "para+functional"],
    typeSystems: ["tsys+dynamic", "tsys+duck"],
    platforms: ["platf+web"],
    implementations: ["pl+Safari", "pl+properly-tail-recursive"],
    influences: ["pl+JavaScript", "pl+Scheme"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+SQL", "SQL", {
    name: "SQL",
    websites: [{ kind: "wikipedia", title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" }],
    influenced: ["pl+Datalog", "pl+PowerShell", "pl+XQuery"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Squeak", "Squeak", {
    name: "Squeak",
    websites: [
      { kind: "wikipedia", title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak" },
      { kind: "homepage", title: "www.squeak.org", href: "http://www.squeak.org" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Squeak.svg" },
    ],
    releases: [
      { version: "unknown", date: "1996-01-01", kind: "first" },
      { version: "0.133", date: "2023-12-20", kind: "stable" },
    ],
    extensions: [".image", ".st"],
    people: [
      ["person+Alan-Kay", "designer"],
      ["person+Dan-Ingalls", "designer"],
      ["person+Adele-Goldberg", "designer"],
    ],
    licenses: ["lic+mit", "lic+apache"],
    paradigms: ["para+objects"],
    typeSystems: ["tsys+dynamic"],
    platforms: ["platf+cross-platform", "platf+unix", "platf+macos", "platf+ios", "platf+windows"],
    implementations: ["pl+Croquet"],
    dialects: ["pl+Pharo"],
    influences: [
      "pl+Smalltalk",
      "pl+Lisp",
      "pl+Logo",
      "pl+Sketchpad",
      "pl+Simula",
      "pl+Self",
      "pl+Etoys",
      "pl+Croquet",
      "pl+Scratch",
    ],
    influenced: ["pl+Self", "pl+Pharo"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Standard-ML", "Standard ML", {
    name: "Standard ML",
    websites: [
      {
        kind: "wikipedia",
        title: "Standard ML",
        href: "https://en.wikipedia.org/wiki/Standard_ML",
      },
      { kind: "repository", title: "smlfamily.github.io", href: "https://smlfamily.github.io/" },
    ],
    references: {
      paradigm: [
        {
          href: "https://www.cs.cmu.edu/~rwh/introsml/modules/subfun.htm",
          title: "Programming in Standard ML: Hierarchies and Parameterization",
        },
      ],
      first_appeared: [{ href: "http://www.smlnj.org/sml97.html", title: "SML '97" }],
      stable_release: [{ href: "http://www.smlnj.org/sml97.html", title: "SML '97" }],
      influenced: [
        {
          href: "https://docs.python.org/3/library/itertools.html",
          title:
            "itertools — Functions creating iterators for efficient looping — Python 3.7.1rc1 documentation",
        },
        {
          href: "https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "1983-01-01", kind: "first" },
      { version: "unknown", date: "1997-01-01", kind: "stable" },
    ],
    extensions: [".sml"],
    paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+modular"],
    typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    implementations: ["pl+SML-SlashNJ", "pl+MLton", "pl+Poly-SlashML"],
    dialects: ["pl+Alice", "pl+MLton", "pl+ML", "pl+Standard-ML-of-New-Jersey"],
    influences: [
      "pl+ML",
      "pl+Hope",
      "pl+Pascal",
      "pl+Elm",
      "pl+F-Sharp",
      "pl+F-Star",
      "pl+Haskell",
      "pl+OCaml",
      "pl+Python",
      "pl+Rust",
      "pl+Scala",
    ],
    influenced: [
      "pl+Futhark",
      "pl+MLton",
      "pl+OCaml",
      "pl+ML",
      "pl+F-Star",
      "pl+Standard-ML-of-New-Jersey",
      "pl+Scala",
      "pl+Rust",
      "pl+Elm",
      "pl+Pascal",
      "pl+EuLisp",
      "pl+Haskell",
      "pl+Python",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Starlark", "Starlark", {
    name: "Starlark",
    websites: [
      {
        kind: "wikipedia",
        title: "Starlark",
        href: "https://en.wikipedia.org/wiki/Bazel_(software)",
      },
    ],
    dialects: ["pl+Python"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Stateflow", "Stateflow", {
    name: "Stateflow",
    websites: [
      { kind: "wikipedia", title: "Stateflow", href: "https://en.wikipedia.org/wiki/Stateflow" },
      {
        kind: "homepage",
        title: "Stateflow product page",
        href: "http://www.mathworks.com/products/stateflow?s_cid=wiki_stateflow_2",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Automatic_Transmission_Logic.png/220px-Automatic_Transmission_Logic.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2018-09-12", kind: "stable" },
      { version: "unknown", date: "2018-06-14", kind: "preview" },
    ],
    references: {
      operating_system: [
        {
          href: "http://www.mathworks.com/products/stateflow/requirements.html?s_cid=wiki_stateflow_1",
          title: "MathWorks - Stateflow - Requirements",
        },
      ],
    },
    licenses: ["lic+proprietary"],
    platforms: ["platf+x64"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+SuperCollider", "SuperCollider", {
    name: "SuperCollider",
    websites: [
      {
        kind: "wikipedia",
        title: "SuperCollider",
        href: "https://en.wikipedia.org/wiki/SuperCollider",
      },
    ],
    influenced: ["pl+J"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+SWI-Prolog", "SWI-Prolog", {
    name: "SWI-Prolog",
    websites: [
      { kind: "wikipedia", title: "SWI-Prolog", href: "https://en.wikipedia.org/wiki/SWI-Prolog" },
      { kind: "homepage", title: "swi-prolog.org", href: "http://swi-prolog.org" },
    ],
    releases: [
      { version: "unknown", date: "1987-01-01", kind: "first" },
      { version: "9.2.2", date: "2024-01-01", kind: "stable" },
      { version: "9.3.2", date: "2024-02-29", kind: "preview" },
    ],
    references: {
      stable_release: [
        {
          href: "https://github.com/SWI-Prolog/swipl/releases/tag/V9.2.2",
          title: "Release V9.2.2",
        },
      ],
    },
    people: [
      ["person+Jan-Wielemaker", "designer"],
      ["person+Anjo-Anjewierden", "designer"],
    ],
    licenses: ["lic+simplified-bsd", "lic+lgpl"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Swift", "Swift", {
    name: "Swift",
    websites: [
      {
        kind: "wikipedia",
        title: "Swift",
        href: "https://en.wikipedia.org/wiki/Swift_(programming_language)",
      },
      {
        kind: "wikipedia",
        title: "Swift",
        href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
      },
      { kind: "homepage", title: "swift-lang.org", href: "http://swift-lang.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2007-01-01", kind: "first" },
      { version: "0.96.2", date: "2015-08-05", kind: "stable" },
    ],
    licenses: ["lic+apache"],
    paradigms: [
      "para+dataflow",
      "para+distributed",
      "para+grid",
      "para+concurrent",
      "para+scientific-workflow",
      "para+scripting",
    ],
    typeSystems: ["tsys+strong"],
    platforms: ["platf+cross-platform"],
    influences: ["pl+C", "pl+functional-programming", "pl+Cuneiform"],
    influenced: [
      "pl+Objective-C",
      "pl+Lisp",
      "pl+Ruby",
      "pl+ArkTS",
      "pl+Rust",
      "pl+V",
      "pl+CLU",
      "pl+Python",
      "pl+Smalltalk",
      "pl+D-programming-language",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+SystemVerilog", "SystemVerilog", {
    name: "SystemVerilog",
    websites: [
      {
        kind: "wikipedia",
        title: "SystemVerilog",
        href: "https://en.wikipedia.org/wiki/SystemVerilog",
      },
    ],
    releases: [
      { version: "unknown", date: "2002-01-01", kind: "first" },
      { version: "unknown", date: "2023-12-16", kind: "stable" },
    ],
    extensions: [".sv"],
    paradigms: ["para+structured", "para+objects"],
    typeSystems: ["tsys+static", "tsys+weak"],
    influences: ["pl+Verilog", "pl+VHDL", "pl+C-Plus-Plus", "pl+OpenVera", "pl+Java"],
    influenced: ["pl+Verilog"],
  });
}
