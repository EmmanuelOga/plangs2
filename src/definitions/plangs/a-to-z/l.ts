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
      influences: ["pl+coq", "pl+haskell", "pl+ml"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+functional", "para+imperative"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
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
      influenced: ["pl+clojure", "pl+elixir"],
      influences: [
        "pl+clojure",
        "pl+common-lisp",
        "pl+concurrent-schemer",
        "pl+elixir",
        "pl+erlang",
        "pl+hy",
        "pl+joxa",
        "pl+maclisp",
        "pl+scheme",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+multi-paradigm"],
      people: [["person+robert-virding", "designer"]],
      platforms: ["platf+cross-platform"],
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
      influences: ["pl+coffeescript", "pl+f-sharp", "pl+haskell", "pl+javascript"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+multi-paradigm", "para+objects"],
      people: [
        ["person+george-zahariev", "designer"],
        ["person+jeremy-ashkenas", "designer"],
        ["person+satoshi-murakami", "designer"],
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
        "pl+agentcubes",
        "pl+agentsheets",
        "pl+etoys",
        "pl+ezhil",
        "pl+lisp",
        "pl+microsoft-small-basic",
        "pl+netlogo",
        "pl+rebol",
        "pl+scratch",
        "pl+smalltalk",
        "pl+snap-",
        "pl+squeak",
        "pl+starlogo",
        "pl+the-kojo-learning-environment",
        "pl+turtlestitch",
        "pl+visualworks",
      ],
      influences: [
        "pl+agentsheets",
        "pl+etoys",
        "pl+lisp",
        "pl+microsoft-small-basic",
        "pl+netlogo",
        "pl+rebol",
        "pl+scratch",
        "pl+smalltalk",
      ],
      paradigms: ["para+educational", "para+functional", "para+imperative", "para+multi-paradigm", "para+reflective"],
      people: [
        ["person+cynthia-solomon", "designer"],
        ["person+seymour-papert", "designer"],
        ["person+wally-feurzeig", "designer"],
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
        "pl+awk",
        "pl+c-plus-plus",
        "pl+clu",
        "pl+haxe",
        "pl+io",
        "pl+julia",
        "pl+lisp",
        "pl+modula-2",
        "pl+red",
        "pl+ring",
        "pl+ruby",
        "pl+scheme",
        "pl+self",
        "pl+snobol",
        "pl+squirrel",
      ],
      influences: ["pl+c-plus-plus", "pl+clu", "pl+modula", "pl+scheme", "pl+snobol"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi-paradigm",
        "para+objects",
        "para+prototypes",
        "para+reflective",
        "para+scripting",
      ],
      people: [["person+roberto-ierusalimschy", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );
}
