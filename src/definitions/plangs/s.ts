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
        "pl+ceylon",
        "pl+eiffel",
        "pl+erlang",
        "pl+fantom",
        "pl+flix",
        "pl+fortress",
        "pl+hack",
        "pl+java",
        "pl+kotlin",
        "pl+lasso",
        "pl+lisp",
        "pl+ml",
        "pl+ocaml",
        "pl+oz",
        "pl+pizza",
        "pl+red",
        "pl+scheme",
        "pl+smalltalk",
        "pl+standard-ml",
        "pl+xtend",
      ],
      influences: [
        "pl+c-sharp",
        "pl+ceylon",
        "pl+chisel",
        "pl+common-lisp",
        "pl+eiffel",
        "pl+erlang",
        "pl+f-sharp",
        "pl+fantom",
        "pl+flix",
        "pl+haskell",
        "pl+java",
        "pl+kotlin",
        "pl+lasso",
        "pl+ocaml",
        "pl+oz",
        "pl+pizza",
        "pl+red",
        "pl+scheme",
        "pl+smalltalk",
        "pl+standard-ml",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi-paradigm", "para+objects"],
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
      dialects: ["pl+document-style-semantics-and-specification-language", "pl+lisp"],
      implementations: ["pl+scheme-implementations"],
      influenced: [
        "pl+---",
        "pl+algol",
        "pl+ambienttalk",
        "pl+arc",
        "pl+clojure",
        "pl+common-lisp",
        "pl+dylan",
        "pl+ecmascript",
        "pl+eulisp",
        "pl+gambit",
        "pl+game-oriented-assembly-lisp",
        "pl+gnu-guile",
        "pl+haskell",
        "pl+hop",
        "pl+islisp",
        "pl+javascript",
        "pl+joy",
        "pl+k",
        "pl+kawa",
        "pl+lfe",
        "pl+lua",
        "pl+mdl",
        "pl+multilisp",
        "pl+newlisp",
        "pl+oaklisp",
        "pl+pico",
        "pl+q",
        "pl+r",
        "pl+racket",
        "pl+rust",
        "pl+sather",
        "pl+scala",
        "pl+scm",
        "pl+siod",
        "pl+skill",
        "pl+snap-",
        "pl+source",
        "pl+t",
        "pl+tea",
      ],
      influences: [
        "pl+algol",
        "pl+clojure",
        "pl+common-lisp",
        "pl+dylan",
        "pl+eulisp",
        "pl+haskell",
        "pl+hop",
        "pl+javascript",
        "pl+julia",
        "pl+lisp",
        "pl+lua",
        "pl+mdl",
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
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi-paradigm"],
      people: [
        ["person+gerald-jay-sussman", "designer"],
        ["person+guy-l-steele", "designer"],
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
      licenses: ["lic+cecill", "lic+gpl-2"],
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
      implementations: ["pl+actionscript", "pl+html5", "pl+javascript", "pl+squeak"],
      influenced: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+etoys",
        "pl+logo",
        "pl+smalltalk",
        "pl+snap-",
        "pl+squeak",
        "pl+turtlestitch",
        "pl+ucblogo",
      ],
      influences: [
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+catrobat",
        "pl+etoys",
        "pl+hypercard",
        "pl+logo",
        "pl+mblock",
        "pl+scratchjr",
        "pl+smalltalk",
        "pl+snap-",
        "pl+starlogo",
        "pl+turtlestitch",
      ],
      licenses: ["lic+bsd-3-clause", "lic+gpl-2"],
      paradigms: ["para+event-driven", "para+visual"],
      platforms: [
        "platf+android",
        "platf+dos",
        "platf+ios",
        "platf+linux",
        "platf+macos",
        "platf+web",
        "platf+windows",
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
    { influenced: ["pl+scratch"], platforms: ["platf+android", "platf+chromeos", "platf+ios"] },
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
        "pl+ecmascript",
        "pl+factor",
        "pl+io",
        "pl+javascript",
        "pl+newspeak",
        "pl+newtonscript",
        "pl+obliq",
        "pl+rebol",
        "pl+smalltalk",
        "pl+squeak",
        "pl+strongtalk",
        "pl+urbiscript",
      ],
      influences: [
        "pl+agora",
        "pl+apl",
        "pl+factor",
        "pl+io",
        "pl+javascript",
        "pl+lua",
        "pl+newtonscript",
        "pl+rebol",
        "pl+smalltalk",
        "pl+squeak",
      ],
      licenses: ["lic+bsd"],
      paradigms: ["para+objects", "para+prototypes"],
      people: [["person+david-ungar", "designer"]],
      platforms: ["platf+cross-platform", "platf+macos", "platf+unix", "platf+windows"],
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
      dialects: ["pl+dolphin-smalltalk", "pl+newspeak", "pl+pharo", "pl+self", "pl+strongtalk"],
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
        "pl+ada",
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+ambienttalk",
        "pl+c-plus-plus",
        "pl+ceylon",
        "pl+claire",
        "pl+cobol",
        "pl+dart",
        "pl+dolphin-smalltalk",
        "pl+emerald",
        "pl+erlang",
        "pl+etoys",
        "pl+gemstone-slashs-object-server",
        "pl+go",
        "pl+groovy",
        "pl+io",
        "pl+java",
        "pl+lasso",
        "pl+lisp",
        "pl+logo",
        "pl+logtalk",
        "pl+mdl",
        "pl+newspeak",
        "pl+oaklisp",
        "pl+object-pascal",
        "pl+object-rexx",
        "pl+objective-c",
        "pl+orc",
        "pl+pharo",
        "pl+pico",
        "pl+planner",
        "pl+raku",
        "pl+ruby",
        "pl+scala",
        "pl+scratch",
        "pl+self",
        "pl+simula",
        "pl+snap-",
        "pl+squeak",
        "pl+strongtalk",
        "pl+ucblogo",
        "pl+wolfram-language",
        "pl+xtend",
      ],
      influences: [
        "pl+applescript",
        "pl+arpanet",
        "pl+burroughs-b5000",
        "pl+common-lisp-object-system",
        "pl+dart",
        "pl+dylan",
        "pl+erlang",
        "pl+etoys",
        "pl+euler",
        "pl+go",
        "pl+groovy",
        "pl+imp",
        "pl+io",
        "pl+java",
        "pl+lasso",
        "pl+lisp",
        "pl+logo",
        "pl+logtalk",
        "pl+newspeak",
        "pl+newtonscript",
        "pl+object-rexx",
        "pl+objective-c",
        "pl+php",
        "pl+planner",
        "pl+python",
        "pl+raku",
        "pl+ruby",
        "pl+scala",
        "pl+scratch",
        "pl+self",
        "pl+simula",
        "pl+sketchpad",
        "pl+swift",
      ],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", "designer"],
        ["person+alan-kay", "designer"],
        ["person+dan-ingalls", "designer"],
        ["person+diana-merry", "designer"],
        ["person+peter-deutsch", "designer"],
        ["person+ted-kaehler", "designer"],
      ],
      platforms: ["platf+74181", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+object-oriented", "tsys+strong"],
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
      influences: ["pl+c-plus-plus", "pl+javascript", "pl+python"],
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
      implementations: ["pl+properly-tail-recursive", "pl+safari"],
      influences: ["pl+javascript", "pl+scheme"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+scripting"],
      platforms: ["platf+web"],
      typeSystems: ["tsys+duck", "tsys+dynamic"],
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
      influenced: ["pl+pharo", "pl+self"],
      influences: [
        "pl+croquet",
        "pl+etoys",
        "pl+lisp",
        "pl+logo",
        "pl+scratch",
        "pl+self",
        "pl+simula",
        "pl+sketchpad",
        "pl+smalltalk",
      ],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+objects"],
      people: [
        ["person+adele-goldberg", "designer"],
        ["person+alan-kay", "designer"],
        ["person+dan-ingalls", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+ios", "platf+macos", "platf+unix", "platf+windows"],
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
      dialects: ["pl+alice", "pl+ml", "pl+mlton", "pl+standard-ml-of-new-jersey"],
      implementations: ["pl+mlton", "pl+poly-slashml", "pl+sml-slashnj"],
      influenced: [
        "pl+elm",
        "pl+eulisp",
        "pl+f-star",
        "pl+futhark",
        "pl+haskell",
        "pl+ml",
        "pl+mlton",
        "pl+ocaml",
        "pl+pascal",
        "pl+python",
        "pl+rust",
        "pl+scala",
        "pl+standard-ml-of-new-jersey",
      ],
      influences: [
        "pl+elm",
        "pl+f-sharp",
        "pl+f-star",
        "pl+haskell",
        "pl+hope",
        "pl+ml",
        "pl+ocaml",
        "pl+pascal",
        "pl+python",
        "pl+rust",
        "pl+scala",
      ],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi-paradigm"],
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
      licenses: ["lic+lgpl", "lic+simplified-bsd"],
      people: [
        ["person+anjo-anjewierden", "designer"],
        ["person+jan-wielemaker", "designer"],
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
        "pl+arkts",
        "pl+clu",
        "pl+d-programming-language",
        "pl+lisp",
        "pl+objective-c",
        "pl+python",
        "pl+ruby",
        "pl+rust",
        "pl+smalltalk",
        "pl+v",
      ],
      influences: ["pl+c", "pl+cuneiform", "pl+functional-programming"],
      licenses: ["lic+apache"],
      paradigms: [
        "para+concurrent",
        "para+dataflow",
        "para+distributed",
        "para+grid",
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
      influences: ["pl+c-plus-plus", "pl+java", "pl+openvera", "pl+verilog", "pl+vhdl"],
      paradigms: ["para+objects", "para+structured"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );
}
