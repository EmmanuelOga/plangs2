import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+LabVIEW", "LabVIEW", {
    name: "LabVIEW",
    websites: [
      { kind: "wikipedia", title: "LabVIEW", href: "https://en.wikipedia.org/wiki/LabVIEW" },
      { kind: "homepage", title: "www.ni.com/labview", href: "https://www.ni.com/labview" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/LabVIEW_Logo.jpg/300px-LabVIEW_Logo.jpg",
      },
    ],
    releases: [
      { version: "unknown", date: "1986-01-01", kind: "first" },
      { version: "5.1", date: "2023-01-01", kind: "stable" },
    ],
    people: [["person+National-Instruments", "designer"]],
    licenses: ["lic+proprietary"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Lean", "Lean", {
    name: "Lean",
    websites: [
      {
        kind: "wikipedia",
        title: "Lean",
        href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)",
      },
      { kind: "homepage", title: "lean-lang.org", href: "https://lean-lang.org/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg" },
    ],
    releases: [
      { version: "unknown", date: "2013-01-01", kind: "first" },
      { version: "unknown", date: "2024-04-03", kind: "stable" },
      { version: "unknown", date: "2024-05-02", kind: "preview" },
    ],
    licenses: ["lic+apache-2"],
    paradigms: ["para+functional", "para+imperative"],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    platforms: ["platf+cross-platform"],
    implementations: ["pl+C-Plus-Plus"],
    influences: ["pl+ML", "pl+Coq", "pl+Haskell"],
    influenced: ["pl+F-Star"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+LFE", "LFE", {
    name: "LFE",
    websites: [
      {
        kind: "wikipedia",
        title: "LFE",
        href: "https://en.wikipedia.org/wiki/LFE_(programming_language)",
      },
      { kind: "homepage", title: "lfe.io", href: "http://lfe.io" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
      },
    ],
    releases: [
      { version: "unknown", date: "2008-01-01", kind: "first" },
      { version: "2.1.1", date: "2023-01-06", kind: "stable" },
    ],
    people: [["person+Robert-Virding", "designer"]],
    licenses: ["lic+apache"],
    paradigms: ["para+multi-paradigm", "para+concurrent", "para+functional"],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    platforms: ["platf+cross-platform"],
    implementations: ["pl+Erlang"],
    dialects: ["pl+Lisp"],
    influences: [
      "pl+Erlang",
      "pl+Common-Lisp",
      "pl+Maclisp",
      "pl+Scheme",
      "pl+Elixir",
      "pl+Clojure",
      "pl+Hy",
      "pl+Joxa",
      "pl+Concurrent-Schemer",
    ],
    influenced: ["pl+Elixir", "pl+Clojure"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Lisp", "Lisp", {
    name: "Lisp",
    websites: [
      {
        kind: "wikipedia",
        title: "Lisp",
        href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)",
      },
      {
        kind: "wikipedia",
        title: "Lisp",
        href: "https://en.wikipedia.org/wiki/Lisp_programming_language",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" },
    ],
    releases: [{ version: "unknown", date: "1960-01-01", kind: "first" }],
    references: {
      influenced: [
        {
          href: "https://web.archive.org/web/20160408134008/http://julia.readthedocs.org/en/latest/manual/introduction/",
          title: "Introduction",
        },
        { href: "https://www.wolfram.com/language/faq/", title: "Wolfram Language Q&A" },
      ],
    },
    people: [
      ["person+John-McCarthy", "designer"],
      ["person+Steve-Russell", "designer"],
    ],
    paradigms: [
      "para+multi-paradigm",
      "para+functional",
      "para+imperative",
      "para+reflective",
      "para+meta",
    ],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    dialects: [
      "pl+T",
      "pl+Hy",
      "pl+LFE",
      "pl+-StarLisp-(StarLisp)",
      "pl+SCM",
      "pl+Scheme",
      "pl+Embeddable-Common-Lisp",
      "pl+SIOD",
      "pl+Maclisp",
      "pl+MDL",
      "pl+Clojure",
      "pl+Franz-Lisp",
      "pl+Lisp-Machine-Lisp",
      "pl+NetLogo",
      "pl+Gambit",
      "pl+newLISP",
      "pl+COWSEL--POP-1",
      "pl+Interlisp",
      "pl+Kawa",
      "pl+Arc",
      "pl+Logo",
      "pl+LispWorks",
      "pl+Game-Oriented-Assembly-Lisp",
      "pl+Le-Lisp",
      "pl+OpenLisp",
      "pl+Allegro-Common-Lisp",
      "pl+MultiLisp",
      "pl+Emacs-Lisp",
      "pl+Common-Lisp",
      "pl+Racket",
      "pl+POP-11",
      "pl+StarLogo",
      "pl+UCBLogo",
      "pl+EuLisp",
      "pl+POP-2",
      "pl+GNU-Guile",
      "pl+AutoLISP",
      "pl+ISLISP",
      "pl+PicoLisp",
      "pl+Pico",
    ],
    influences: [
      "pl+Information-Processing-Language",
      "pl+CLIPS",
      "pl+CLU",
      "pl+COWSEL",
      "pl+Dylan",
      "pl+Elixir",
      "pl+Excel",
      "pl+Forth",
      "pl+Haskell",
      "pl+Io",
      "pl+JavaScript",
      "pl+Julia",
      "pl+Logo",
      "pl+Lua",
      "pl+ML",
      "pl+Nim",
      "pl+Nu",
      "pl+OPS5",
      "pl+Perl",
      "pl+POP-2",
      "pl+11",
      "pl+Python",
      "pl+R",
      "pl+Rebol",
      "pl+Red",
      "pl+Ruby",
      "pl+Scala",
      "pl+Swift",
      "pl+Smalltalk",
      "pl+Tcl",
      "pl+Wolfram-Language",
    ],
    influenced: [
      "pl+Nim",
      "pl+Pure",
      "pl+Wolfram-Language",
      "pl+Java",
      "pl+-StarLisp-(StarLisp)",
      "pl+Curl",
      "pl+SCM",
      "pl+Claire",
      "pl+Scheme",
      "pl+Embeddable-Common-Lisp",
      "pl+SIOD",
      "pl+Red",
      "pl+Amiga-E",
      "pl+Nu",
      "pl+Nemerle",
      "pl+MDL",
      "pl+Franz-Lisp",
      "pl+Erlang",
      "pl+Lisp-Machine-Lisp",
      "pl+RPL",
      "pl+Gambit",
      "pl+R",
      "pl+Ruby",
      "pl+COWSEL--POP-1",
      "pl+AgentSheets",
      "pl+Interlisp",
      "pl+Nial",
      "pl+Julia",
      "pl+Squeak",
      "pl+PostScript",
      "pl+Kawa",
      "pl+Arc",
      "pl+Little-b",
      "pl+Oz",
      "pl+Logo",
      "pl+Information-Processing-Language-(IPL)",
      "pl+LispWorks",
      "pl+Game-Oriented-Assembly-Lisp",
      "pl+Le-Lisp",
      "pl+OpenLisp",
      "pl+Io",
      "pl+Allegro-Common-Lisp",
      "pl+MultiLisp",
      "pl+Common-Lisp",
      "pl+WebAssembly",
      "pl+ISWIM",
      "pl+UCBLogo",
      "pl+Factor",
      "pl+Perl",
      "pl+CLU",
      "pl+POP-2",
      "pl+GNU-Guile",
      "pl+AutoLISP",
      "pl+AgentCubes",
      "pl+Tcl",
      "pl+VisualWorks",
      "pl+Haskell",
      "pl+Python",
      "pl+Ceylon",
      "pl+Rebol",
      "pl+Smalltalk",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+LiveCode", "LiveCode", {
    name: "LiveCode",
    websites: [
      { kind: "wikipedia", title: "LiveCode", href: "https://en.wikipedia.org/wiki/LiveCode" },
    ],
    influenced: ["pl+HyperTalk"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+LiveScript", "LiveScript", {
    name: "LiveScript",
    websites: [
      {
        kind: "wikipedia",
        title: "LiveScript",
        href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
      },
      { kind: "homepage", title: "livescript.net", href: "https://livescript.net" },
    ],
    releases: [
      { version: "unknown", date: "2011-01-01", kind: "first" },
      { version: "1.6.1", date: "2020-07-14", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://github.com/gkz/LiveScript/tags", title: "LiveScript Releases" },
      ],
    },
    extensions: [".ls"],
    people: [
      ["person+Jeremy-Ashkenas", "designer"],
      ["person+Satoshi-Murakami", "designer"],
      ["person+George-Zahariev", "designer"],
    ],
    licenses: ["lic+mit"],
    paradigms: ["para+multi-paradigm", "para+functional", "para+objects"],
    typeSystems: ["tsys+dynamic", "tsys+weak"],
    platforms: ["platf+cross-platform"],
    influences: ["pl+JavaScript", "pl+Haskell", "pl+CoffeeScript", "pl+F-Sharp"],
    influenced: ["pl+CoffeeScript"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Logo", "Logo", {
    name: "Logo",
    websites: [
      {
        kind: "wikipedia",
        title: "Logo",
        href: "https://en.wikipedia.org/wiki/Logo_(programming_language)",
      },
      { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/ObjectLOGO" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
      },
    ],
    releases: [{ version: "unknown", date: "1967-01-01", kind: "first" }],
    people: [
      ["person+Wally-Feurzeig", "designer"],
      ["person+Seymour-Papert", "designer"],
      ["person+Cynthia-Solomon", "designer"],
    ],
    paradigms: [
      "para+multi-paradigm",
      "para+functional",
      "para+educational",
      "para+imperative",
      "para+reflective",
    ],
    typeSystems: ["tsys+dynamic"],
    implementations: ["pl+UCBLogo"],
    influences: [
      "pl+Lisp",
      "pl+AgentSheets",
      "pl+NetLogo",
      "pl+Smalltalk",
      "pl+Etoys",
      "pl+Scratch",
      "pl+Microsoft-Small-Basic",
      "pl+REBOL",
    ],
    influenced: [
      "pl+Lisp",
      "pl+The-Kojo-Learning-Environment",
      "pl+TurtleStitch",
      "pl+NetLogo",
      "pl+Ezhil",
      "pl+AgentSheets",
      "pl+Squeak",
      "pl+Scratch",
      "pl+StarLogo",
      "pl+AgentCubes",
      "pl+Etoys",
      "pl+VisualWorks",
      "pl+Microsoft-Small-Basic",
      "pl+Snap-",
      "pl+Rebol",
      "pl+Smalltalk",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Lua", "Lua", {
    name: "Lua",
    websites: [
      {
        kind: "wikipedia",
        title: "Lua",
        href: "https://en.wikipedia.org/wiki/Lua_(programming_language)",
      },
      { kind: "homepage", title: "www.lua.org", href: "https://www.lua.org/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "1993-01-01", kind: "first" },
      { version: "5.4.6", date: "2023-01-01", kind: "stable" },
    ],
    references: {
      stable_release: [
        {
          href: "https://marc.info/?l=lua-l&m=168405965608207&w=2",
          title: "[ANN] Lua 5.4.6 now available",
        },
      ],
    },
    extensions: [".lua"],
    people: [["person+Roberto-Ierusalimschy", "designer"]],
    licenses: ["lic+mit"],
    paradigms: [
      "para+multi-paradigm",
      "para+scripting",
      "para+imperative",
      "para+prototypes",
      "para+objects",
      "para+functional",
      "para+meta",
      "para+reflective",
    ],
    typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    platforms: ["platf+cross-platform"],
    implementations: ["pl+ANSI-C", "pl+LuaJIT"],
    influences: ["pl+C-Plus-Plus", "pl+CLU", "pl+Modula", "pl+Scheme", "pl+SNOBOL"],
    influenced: [
      "pl+Haxe",
      "pl+Scheme",
      "pl+Red",
      "pl+Lisp",
      "pl+Squirrel",
      "pl+C-Plus-Plus",
      "pl+Modula-2",
      "pl+Ruby",
      "pl+Julia",
      "pl+AWK",
      "pl+SNOBOL",
      "pl+Self",
      "pl+Io",
      "pl+Ring",
      "pl+CLU",
    ],
  });
}
