import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+labview",
    "LabVIEW",
    {
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
    },
    { licenses: ["lic+proprietary"], people: [["person+national-instruments", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+lean",
    "Lean",
    {
      name: "Lean",
      websites: [
        { kind: "wikipedia", title: "Lean", href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)" },
        { kind: "homepage", title: "lean-lang.org", href: "https://lean-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg" }],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "unknown", date: "2024-04-03", kind: "stable" },
        { version: "unknown", date: "2024-05-02", kind: "preview" },
      ],
    },
    {
      implementations: ["pl+c-plus-plus"],
      influenced: ["pl+f-star"],
      influences: ["pl+ml", "pl+coq", "pl+haskell"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+functional", "para+imperative"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+lfe",
    "LFE",
    {
      name: "LFE",
      websites: [
        { kind: "wikipedia", title: "LFE", href: "https://en.wikipedia.org/wiki/LFE_(programming_language)" },
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
      extensions: [],
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+erlang"],
      influenced: ["pl+elixir", "pl+clojure"],
      influences: [
        "pl+erlang",
        "pl+common-lisp",
        "pl+maclisp",
        "pl+scheme",
        "pl+elixir",
        "pl+clojure",
        "pl+hy",
        "pl+joxa",
        "pl+concurrent-schemer",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+multi-paradigm", "para+concurrent", "para+functional"],
      people: [["person+robert-virding", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+lisp",
    "Lisp",
    {
      name: "Lisp",
      websites: [
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)" },
        { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
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
    },
    {
      dialects: [
        "pl+t",
        "pl+hy",
        "pl+lfe",
        "pl+-starlisp-(starlisp)",
        "pl+scm",
        "pl+scheme",
        "pl+embeddable-common-lisp",
        "pl+siod",
        "pl+maclisp",
        "pl+mdl",
        "pl+clojure",
        "pl+franz-lisp",
        "pl+lisp-machine-lisp",
        "pl+netlogo",
        "pl+gambit",
        "pl+newlisp",
        "pl+cowsel--pop-1",
        "pl+interlisp",
        "pl+kawa",
        "pl+arc",
        "pl+logo",
        "pl+lispworks",
        "pl+game-oriented-assembly-lisp",
        "pl+le-lisp",
        "pl+openlisp",
        "pl+allegro-common-lisp",
        "pl+multilisp",
        "pl+emacs-lisp",
        "pl+common-lisp",
        "pl+racket",
        "pl+pop-11",
        "pl+starlogo",
        "pl+ucblogo",
        "pl+eulisp",
        "pl+pop-2",
        "pl+gnu-guile",
        "pl+autolisp",
        "pl+islisp",
        "pl+picolisp",
        "pl+pico",
      ],
      influenced: [
        "pl+nim",
        "pl+pure",
        "pl+wolfram-language",
        "pl+java",
        "pl+-starlisp-(starlisp)",
        "pl+curl",
        "pl+scm",
        "pl+claire",
        "pl+scheme",
        "pl+embeddable-common-lisp",
        "pl+siod",
        "pl+red",
        "pl+amiga-e",
        "pl+nu",
        "pl+nemerle",
        "pl+mdl",
        "pl+franz-lisp",
        "pl+erlang",
        "pl+lisp-machine-lisp",
        "pl+rpl",
        "pl+gambit",
        "pl+r",
        "pl+ruby",
        "pl+cowsel--pop-1",
        "pl+agentsheets",
        "pl+interlisp",
        "pl+nial",
        "pl+julia",
        "pl+squeak",
        "pl+postscript",
        "pl+kawa",
        "pl+arc",
        "pl+little-b",
        "pl+oz",
        "pl+logo",
        "pl+information-processing-language-(ipl)",
        "pl+lispworks",
        "pl+game-oriented-assembly-lisp",
        "pl+le-lisp",
        "pl+openlisp",
        "pl+io",
        "pl+allegro-common-lisp",
        "pl+multilisp",
        "pl+common-lisp",
        "pl+webassembly",
        "pl+iswim",
        "pl+ucblogo",
        "pl+factor",
        "pl+perl",
        "pl+clu",
        "pl+pop-2",
        "pl+gnu-guile",
        "pl+autolisp",
        "pl+agentcubes",
        "pl+tcl",
        "pl+visualworks",
        "pl+haskell",
        "pl+python",
        "pl+ceylon",
        "pl+rebol",
        "pl+smalltalk",
      ],
      influences: [
        "pl+information-processing-language",
        "pl+clips",
        "pl+clu",
        "pl+cowsel",
        "pl+dylan",
        "pl+elixir",
        "pl+excel",
        "pl+forth",
        "pl+haskell",
        "pl+io",
        "pl+javascript",
        "pl+julia",
        "pl+logo",
        "pl+lua",
        "pl+ml",
        "pl+nim",
        "pl+nu",
        "pl+ops5",
        "pl+perl",
        "pl+pop-2",
        "pl+11",
        "pl+python",
        "pl+r",
        "pl+rebol",
        "pl+red",
        "pl+ruby",
        "pl+scala",
        "pl+swift",
        "pl+smalltalk",
        "pl+tcl",
        "pl+wolfram-language",
      ],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+reflective", "para+meta"],
      people: [
        ["person+john-mccarthy", "designer"],
        ["person+steve-russell", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+livecode",
    "LiveCode",
    {
      name: "LiveCode",
      websites: [{ kind: "wikipedia", title: "LiveCode", href: "https://en.wikipedia.org/wiki/LiveCode" }],
    },
    { influenced: ["pl+hypertalk"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+livescript",
    "LiveScript",
    {
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
        stable_release: [{ href: "https://github.com/gkz/LiveScript/tags", title: "LiveScript Releases" }],
      },
      extensions: [".ls"],
    },
    {
      influenced: ["pl+coffeescript"],
      influences: ["pl+javascript", "pl+haskell", "pl+coffeescript", "pl+f-sharp"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+objects"],
      people: [
        ["person+jeremy-ashkenas", "designer"],
        ["person+satoshi-murakami", "designer"],
        ["person+george-zahariev", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+logo",
    "Logo",
    {
      name: "Logo",
      websites: [
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" },
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/ObjectLOGO" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
      releases: [{ version: "unknown", date: "1967-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+ucblogo"],
      influenced: [
        "pl+lisp",
        "pl+the-kojo-learning-environment",
        "pl+turtlestitch",
        "pl+netlogo",
        "pl+ezhil",
        "pl+agentsheets",
        "pl+squeak",
        "pl+scratch",
        "pl+starlogo",
        "pl+agentcubes",
        "pl+etoys",
        "pl+visualworks",
        "pl+microsoft-small-basic",
        "pl+snap-",
        "pl+rebol",
        "pl+smalltalk",
      ],
      influences: [
        "pl+lisp",
        "pl+agentsheets",
        "pl+netlogo",
        "pl+smalltalk",
        "pl+etoys",
        "pl+scratch",
        "pl+microsoft-small-basic",
        "pl+rebol",
      ],
      paradigms: ["para+multi-paradigm", "para+functional", "para+educational", "para+imperative", "para+reflective"],
      people: [
        ["person+wally-feurzeig", "designer"],
        ["person+seymour-papert", "designer"],
        ["person+cynthia-solomon", "designer"],
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+lua",
    "Lua",
    {
      name: "Lua",
      websites: [
        { kind: "wikipedia", title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" },
        { kind: "homepage", title: "www.lua.org", href: "https://www.lua.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "5.4.6", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://marc.info/?l=lua-l&m=168405965608207&w=2", title: "[ANN] Lua 5.4.6 now available" },
        ],
      },
      extensions: [".lua"],
    },
    {
      implementations: ["pl+ansi-c", "pl+luajit"],
      influenced: [
        "pl+haxe",
        "pl+scheme",
        "pl+red",
        "pl+lisp",
        "pl+squirrel",
        "pl+c-plus-plus",
        "pl+modula-2",
        "pl+ruby",
        "pl+julia",
        "pl+awk",
        "pl+snobol",
        "pl+self",
        "pl+io",
        "pl+ring",
        "pl+clu",
      ],
      influences: ["pl+c-plus-plus", "pl+clu", "pl+modula", "pl+scheme", "pl+snobol"],
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
      people: [["person+roberto-ierusalimschy", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    },
  );
}
