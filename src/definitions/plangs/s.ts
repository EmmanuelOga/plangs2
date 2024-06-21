import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+scala",
    "Scala",
    {
      name: "Scala",
      websites: [
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_(programming_language)" },
        { kind: "wikipedia", title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_programming_language" },
        { kind: "homepage", title: "www.scala-lang.org", href: "http://www.scala-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" }],
      releases: [
        { version: "unknown", date: "2004-01-20", kind: "first" },
        { version: "3.4.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/scala/scala3/releases/tag/3.4.0", title: "Scala 3.4.0" }],
        license: [{ href: "https://github.com/scala/scala/blob/2.13.x/NOTICE", title: "Notice file" }],
        influenced_by: [
          { href: "http://scalamacros.org", title: "Scala Macros" },
          {
            href: "http://blog.fogus.me/2010/08/06/martinodersky-take5-tolist/",
            title: "MartinOdersky take(5) toList",
          },
          {
            href: "https://lampwww.epfl.ch/~odersky/talks/popl06.pdf",
            title: "The Scala Experiment - Can We Provide Better Language Support for Component Systems?",
          },
          {
            href: "https://web.archive.org/web/20200709211816/https://www.scala-lang.org/docu/files/ScalaOverview.pdf",
            title: "An Overview of the Scala Programming Language",
          },
        ],
      },
      extensions: [".scala", ".sc"],
    },
    {
      influenced: [
        "pl+java",
        "pl+standard-ml",
        "pl+scheme",
        "pl+red",
        "pl+lisp",
        "pl+xtend",
        "pl+erlang",
        "pl+flix",
        "pl+fantom",
        "pl+ocaml",
        "pl+ml",
        "pl+pizza",
        "pl+lasso",
        "pl+oz",
        "pl+eiffel",
        "pl+hack",
        "pl+kotlin",
        "pl+ceylon",
        "pl+fortress",
        "pl+smalltalk",
      ],
      influences: [
        "pl+common-lisp",
        "pl+eiffel",
        "pl+erlang",
        "pl+f-sharp",
        "pl+haskell",
        "pl+java",
        "pl+ocaml",
        "pl+oz",
        "pl+pizza",
        "pl+scheme",
        "pl+smalltalk",
        "pl+standard-ml",
        "pl+ceylon",
        "pl+chisel",
        "pl+fantom",
        "pl+c-sharp",
        "pl+kotlin",
        "pl+lasso",
        "pl+red",
        "pl+flix",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+multi-paradigm", "para+concurrent", "para+functional", "para+imperative", "para+objects"],
      people: [["person+martin-odersky", "designer"]],
      platforms: ["platf+jvm", "platf+llvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+scheme",
    "Scheme",
    {
      name: "Scheme",
      websites: [
        { kind: "wikipedia", title: "Scheme", href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)" },
        { kind: "homepage", title: "www.scheme.org", href: "https://www.scheme.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" }],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "2013-01-01", kind: "stable" },
      ],
      extensions: [".scm", ".ss"],
      references: {
        influenced: [
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
    },
    {
      dialects: ["pl+lisp", "pl+document-style-semantics-and-specification-language"],
      implementations: ["pl+scheme-implementations"],
      influenced: [
        "pl+t",
        "pl+lfe",
        "pl+sather",
        "pl+scm",
        "pl+siod",
        "pl+source",
        "pl+mdl",
        "pl+clojure",
        "pl+ambienttalk",
        "pl+gambit",
        "pl+k",
        "pl+r",
        "pl+newlisp",
        "pl+ecmascript",
        "pl+lua",
        "pl+algol",
        "pl+dylan",
        "pl+kawa",
        "pl+arc",
        "pl+joy",
        "pl+scala",
        "pl+game-oriented-assembly-lisp",
        "pl+q",
        "pl+rust",
        "pl+javascript",
        "pl+multilisp",
        "pl+common-lisp",
        "pl+racket",
        "pl+eulisp",
        "pl+tea",
        "pl+gnu-guile",
        "pl+oaklisp",
        "pl+haskell",
        "pl+islisp",
        "pl+snap-",
        "pl+skill",
        "pl+---",
        "pl+pico",
        "pl+hop",
      ],
      influences: [
        "pl+algol",
        "pl+lisp",
        "pl+mdl",
        "pl+clojure",
        "pl+common-lisp",
        "pl+dylan",
        "pl+eulisp",
        "pl+haskell",
        "pl+hop",
        "pl+javascript",
        "pl+julia",
        "pl+lua",
        "pl+multilisp",
        "pl+python",
        "pl+r",
        "pl+racket",
        "pl+ruby",
        "pl+rust",
        "pl+s",
        "pl+scala",
        "pl+t",
      ],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+meta"],
      people: [
        ["person+guy-l-steele", "designer"],
        ["person+gerald-jay-sussman", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+scilab",
    "Scilab",
    {
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
        stable_release: [{ href: "https://www.scilab.org/download/scilab-2024.1.0", title: "Scilab 2024.1.0" }],
      },
      releases: [{ version: "2024.1.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influenced: ["pl+matlab-(programming-language)matlab-(software)"],
      licenses: ["lic+gpl-2", "lic+cecill"],
      people: [["person+dassault-systemes", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+scratch",
    "Scratch",
    {
      name: "Scratch",
      websites: [
        { kind: "wikipedia", title: "Scratch", href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)" },
        { kind: "homepage", title: "scratch.mit.edu", href: "https://scratch.mit.edu/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg" }],
      references: {
        first_appeared: [
          { href: "https://www.researchgate.net/publication/221338134", title: "Scratch: A Sneak Preview" },
          { href: "https://en.scratch-wiki.info/wiki/Scratch_Timeline#May", title: "Scratch Timeline – Scratch Wiki" },
        ],
        implementation_language: [
          {
            href: "https://bocoup.com/blog/porting-scratch-from-flash-to-javascript-performance-interoperability-and-extensions",
            title: "Porting Scratch from Flash to JavaScript: Performance, Interoperability and Extensions",
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
    },
    {
      implementations: ["pl+squeak", "pl+actionscript", "pl+html5", "pl+javascript"],
      influenced: [
        "pl+turtlestitch",
        "pl+agentsheets",
        "pl+squeak",
        "pl+logo",
        "pl+ucblogo",
        "pl+agentcubes",
        "pl+etoys",
        "pl+snap-",
        "pl+smalltalk",
      ],
      influences: [
        "pl+logo",
        "pl+smalltalk",
        "pl+hypercard",
        "pl+starlogo",
        "pl+agentsheets",
        "pl+agentcubes",
        "pl+etoys",
        "pl+catrobat",
        "pl+scratchjr",
        "pl+snap-",
        "pl+mblock",
        "pl+turtlestitch",
      ],
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
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+scratchjr",
    "ScratchJr",
    {
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
    },
    { influenced: ["pl+scratch"], platforms: ["platf+android", "platf+ios", "platf+chromeos"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+self",
    "Self",
    {
      name: "Self",
      websites: [
        { kind: "wikipedia", title: "Self", href: "https://en.wikipedia.org/wiki/Self_(programming_language)" },
        { kind: "homepage", title: "www.selflanguage.org", href: "http://www.selflanguage.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg" }],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "2017.1", date: "2017-05-24", kind: "stable" },
      ],
      references: {
        influenced_by: [{ href: "https://doi.org/10.1145%2F1238844.1238853", title: "10.1145/1238844.1238853" }],
      },
    },
    {
      dialects: ["pl+newspeak"],
      influenced: [
        "pl+ambienttalk",
        "pl+newtonscript",
        "pl+ecmascript",
        "pl+newspeak",
        "pl+squeak",
        "pl+urbiscript",
        "pl+obliq",
        "pl+javascript",
        "pl+io",
        "pl+factor",
        "pl+strongtalk",
        "pl+rebol",
        "pl+smalltalk",
      ],
      influences: [
        "pl+smalltalk",
        "pl+apl",
        "pl+newtonscript",
        "pl+javascript",
        "pl+io",
        "pl+agora",
        "pl+squeak",
        "pl+lua",
        "pl+factor",
        "pl+rebol",
      ],
      licenses: ["lic+bsd"],
      paradigms: ["para+objects", "para+prototypes"],
      people: [["person+david-ungar", "designer"]],
      platforms: ["platf+cross-platform", "platf+unix", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+smallbasic",
    "SmallBasic",
    {
      name: "SmallBasic",
      websites: [
        { kind: "wikipedia", title: "SmallBASIC", href: "https://en.wikipedia.org/wiki/SmallBasic" },
        { kind: "repository", title: "smallbasic.github.io", href: "https://smallbasic.github.io" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png" },
      ],
      references: { stable_release: [{ href: "https://smallbasic.github.io", title: "Browse Files for SmallBASIC" }] },
      releases: [{ version: "12.27", date: "2024-04-26", kind: "stable" }],
      extensions: [".bas"],
    },
    { implementations: ["pl+basic"], influenced: ["pl+qbasic"], licenses: ["lic+gpl-3"] },
  );

  //-------------------------------------------------------------------------------

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
      dialects: ["pl+newspeak", "pl+self", "pl+strongtalk", "pl+pharo", "pl+dolphin-smalltalk"],
      implementations: [
        "pl+amber",
        "pl+dolphin-smalltalk",
        "pl+gemstone-slashs",
        "pl+gnu-smalltalk",
        "pl+pharo",
        "pl+squeak",
        "pl+va-smalltalk",
        "pl+visualworks",
      ],
      influenced: [
        "pl+wolfram-language",
        "pl+ada",
        "pl+objective-c",
        "pl+java",
        "pl+object-pascal",
        "pl+claire",
        "pl+lisp",
        "pl+emerald",
        "pl+xtend",
        "pl+mdl",
        "pl+c-plus-plus",
        "pl+erlang",
        "pl+ambienttalk",
        "pl+orc",
        "pl+cobol",
        "pl+go",
        "pl+ruby",
        "pl+object-rexx",
        "pl+gemstone-slashs-object-server",
        "pl+agentsheets",
        "pl+newspeak",
        "pl+simula",
        "pl+squeak",
        "pl+lasso",
        "pl+logo",
        "pl+scala",
        "pl+self",
        "pl+dart",
        "pl+io",
        "pl+planner",
        "pl+scratch",
        "pl+logtalk",
        "pl+ucblogo",
        "pl+strongtalk",
        "pl+raku",
        "pl+oaklisp",
        "pl+agentcubes",
        "pl+etoys",
        "pl+pharo",
        "pl+dolphin-smalltalk",
        "pl+groovy",
        "pl+snap-",
        "pl+ceylon",
        "pl+pico",
      ],
      influences: [
        "pl+lisp",
        "pl+simula",
        "pl+euler",
        "pl+imp",
        "pl+planner",
        "pl+logo",
        "pl+sketchpad",
        "pl+arpanet",
        "pl+burroughs-b5000",
        "pl+applescript",
        "pl+common-lisp-object-system",
        "pl+dart",
        "pl+dylan",
        "pl+erlang",
        "pl+etoys",
        "pl+go",
        "pl+groovy",
        "pl+io",
        "pl+java",
        "pl+lasso",
        "pl+logtalk",
        "pl+newspeak",
        "pl+newtonscript",
        "pl+object-rexx",
        "pl+objective-c",
        "pl+php",
        "pl+python",
        "pl+raku",
        "pl+ruby",
        "pl+scala",
        "pl+scratch",
        "pl+self",
        "pl+swift",
      ],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", "designer"],
        ["person+dan-ingalls", "designer"],
        ["person+alan-kay", "designer"],
        ["person+peter-deutsch", "designer"],
        ["person+ted-kaehler", "designer"],
        ["person+diana-merry", "designer"],
      ],
      platforms: ["platf+74181", "platf+cross-platform"],
      typeSystems: ["tsys+object-oriented", "tsys+strong", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+solidity",
    "Solidity",
    {
      name: "Solidity",
      websites: [
        { kind: "wikipedia", title: "Solidity", href: "https://en.wikipedia.org/wiki/Solidity" },
        { kind: "homepage", title: "soliditylang.org", href: "https://soliditylang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" }],
      references: {
        developer: [{ href: "https://github.com/ethereum/solidity", title: "Contributors to ethereum/solidity" }],
        stable_release: [
          { href: "https://github.com/ethereum/solidity/releases/tag/v0.8.26", title: "Release 0.8.26" },
        ],
        implementation_language: [{ href: "https://github.com/", title: "Build software better, together" }],
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
    },
    {
      implementations: ["pl+c-plus-plus"],
      influences: ["pl+javascript", "pl+c-plus-plus", "pl+python"],
      licenses: ["lic+gnu-gpl-3"],
      paradigms: ["para+imperative"],
      people: [["person+gavin-wood", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+souffle",
    "Soufflé",
    {
      name: "Soufflé",
      websites: [
        {
          kind: "wikipedia",
          title: "Soufflé",
          href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
        },
      ],
    },
    { dialects: ["pl+datalog"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+source",
    "Source",
    {
      name: "Source",
      websites: [
        { kind: "wikipedia", title: "Source", href: "https://en.wikipedia.org/wiki/Source_(programming_language)" },
        { kind: "homepage", title: "docs.sourceacademy.org", href: "https://docs.sourceacademy.org/" },
      ],
      releases: [
        { version: "unknown", date: "2017-01-01", kind: "first" },
        { version: "unknown", date: "2021-12-31", kind: "stable" },
      ],
      extensions: [".js"],
      references: { major_implementations: [{ href: "https://sourceacademy.org", title: "Source Academy" }] },
    },
    {
      implementations: ["pl+safari", "pl+properly-tail-recursive"],
      influences: ["pl+javascript", "pl+scheme"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi-paradigm", "para+scripting", "para+imperative", "para+functional"],
      platforms: ["platf+web"],
      typeSystems: ["tsys+dynamic", "tsys+duck"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+sql",
    "SQL",
    { name: "SQL", websites: [{ kind: "wikipedia", title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" }] },
    { influenced: ["pl+datalog", "pl+powershell", "pl+xquery"] },
  );

  //-------------------------------------------------------------------------------

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
      dialects: ["pl+pharo"],
      implementations: ["pl+croquet"],
      influenced: ["pl+self", "pl+pharo"],
      influences: [
        "pl+smalltalk",
        "pl+lisp",
        "pl+logo",
        "pl+sketchpad",
        "pl+simula",
        "pl+self",
        "pl+etoys",
        "pl+croquet",
        "pl+scratch",
      ],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: ["para+objects"],
      people: [
        ["person+alan-kay", "designer"],
        ["person+dan-ingalls", "designer"],
        ["person+adele-goldberg", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+unix", "platf+macos", "platf+ios", "platf+windows"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+standard-ml",
    "Standard ML",
    {
      name: "Standard ML",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
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
            title: "itertools — Functions creating iterators for efficient looping — Python 3.7.1rc1 documentation",
          },
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
      extensions: [".sml"],
    },
    {
      dialects: ["pl+alice", "pl+mlton", "pl+ml", "pl+standard-ml-of-new-jersey"],
      implementations: ["pl+sml-slashnj", "pl+mlton", "pl+poly-slashml"],
      influenced: [
        "pl+futhark",
        "pl+mlton",
        "pl+ocaml",
        "pl+ml",
        "pl+f-star",
        "pl+standard-ml-of-new-jersey",
        "pl+scala",
        "pl+rust",
        "pl+elm",
        "pl+pascal",
        "pl+eulisp",
        "pl+haskell",
        "pl+python",
      ],
      influences: [
        "pl+ml",
        "pl+hope",
        "pl+pascal",
        "pl+elm",
        "pl+f-sharp",
        "pl+f-star",
        "pl+haskell",
        "pl+ocaml",
        "pl+python",
        "pl+rust",
        "pl+scala",
      ],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+modular"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+starlark",
    "Starlark",
    {
      name: "Starlark",
      websites: [{ kind: "wikipedia", title: "Starlark", href: "https://en.wikipedia.org/wiki/Bazel_(software)" }],
    },
    { dialects: ["pl+python"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+stateflow",
    "Stateflow",
    {
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
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+x64"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+supercollider",
    "SuperCollider",
    {
      name: "SuperCollider",
      websites: [{ kind: "wikipedia", title: "SuperCollider", href: "https://en.wikipedia.org/wiki/SuperCollider" }],
    },
    { influenced: ["pl+j"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+swi-prolog",
    "SWI-Prolog",
    {
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
        stable_release: [{ href: "https://github.com/SWI-Prolog/swipl/releases/tag/V9.2.2", title: "Release V9.2.2" }],
      },
    },
    {
      licenses: ["lic+simplified-bsd", "lic+lgpl"],
      people: [
        ["person+jan-wielemaker", "designer"],
        ["person+anjo-anjewierden", "designer"],
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+swift",
    "Swift",
    {
      name: "Swift",
      websites: [
        { kind: "wikipedia", title: "Swift", href: "https://en.wikipedia.org/wiki/Swift_(programming_language)" },
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
    },
    {
      influenced: [
        "pl+objective-c",
        "pl+lisp",
        "pl+ruby",
        "pl+arkts",
        "pl+rust",
        "pl+v",
        "pl+clu",
        "pl+python",
        "pl+smalltalk",
        "pl+d-programming-language",
      ],
      influences: ["pl+c", "pl+functional-programming", "pl+cuneiform"],
      licenses: ["lic+apache"],
      paradigms: [
        "para+dataflow",
        "para+distributed",
        "para+grid",
        "para+concurrent",
        "para+scientific-workflow",
        "para+scripting",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+systemverilog",
    "SystemVerilog",
    {
      name: "SystemVerilog",
      websites: [{ kind: "wikipedia", title: "SystemVerilog", href: "https://en.wikipedia.org/wiki/SystemVerilog" }],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "unknown", date: "2023-12-16", kind: "stable" },
      ],
      extensions: [".sv"],
    },
    {
      influenced: ["pl+verilog"],
      influences: ["pl+verilog", "pl+vhdl", "pl+c-plus-plus", "pl+openvera", "pl+java"],
      paradigms: ["para+structured", "para+objects"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );
}
