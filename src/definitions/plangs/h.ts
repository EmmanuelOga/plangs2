import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Hack",
    "Hack",
    {
      name: "Hack",
      websites: [
        { kind: "wikipedia", title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)" },
        { kind: "homepage", title: "hacklang.org", href: "https://hacklang.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://web.archive.org/web/20210301030703/http://www.serpentine.com/blog/2014/03/28/where-credit-belongs-for-hack/",
            title: "Where Credit Belongs for Hack",
          },
        ],
        license: [
          {
            href: "https://web.archive.org/web/20190107074308/https://github.com/facebook/hhvm/blob/master/hphp/hack/LICENSE%20",
            title: "facebook/hhvm: hhvm / hphp / hack / LICENSE",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2014-01-01", kind: "first" },
        { version: "4.172", date: "2022-01-01", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+Java", "pl+PHP"],
      influences: ["pl+PHP", "pl+OCaml", "pl+Java", "pl+C-Sharp", "pl+Scala", "pl+Haskell"],
      licenses: ["lic+mit"],
      people: [
        ["person+Julien-Verlaguet", "designer"],
        ["person+Alok-Menghrajani", "designer"],
        ["person+Drew-Paroski", "designer"],
        ["person+Meta-Platforms", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Haskell",
    "Haskell",
    {
      name: "Haskell",
      websites: [
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)" },
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell" },
        { kind: "homepage", title: "haskell.org", href: "http://haskell.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", date: "2010-01-01", kind: "stable" },
        { version: "unknown", date: "2020-01-01", kind: "preview" },
      ],
      references: {
        stable_release: [
          {
            href: "http://www.haskell.org/pipermail/haskell/2009-November/021750.html",
            title: "Announcing Haskell 2010",
          },
        ],
        preview_release: [
          {
            href: "https://mail.haskell.org/pipermail/haskell-prime/2016-April/004050.html",
            title: "ANN: Haskell Prime 2020 committee has formed",
          },
        ],
      },
      extensions: [".hs", ".lhs"],
    },
    {
      dialects: ["pl+Elm", "pl+Hume"],
      implementations: ["pl+GHC", "pl+Hugs", "pl+Yhc"],
      influenced: [
        "pl+Pure",
        "pl+Futhark",
        "pl+Idris",
        "pl+Standard-ML",
        "pl+Scheme",
        "pl+Lisp",
        "pl+Clojure",
        "pl+Flix",
        "pl+Orc",
        "pl+Miranda",
        "pl+FP",
        "pl+Mercury",
        "pl+ML",
        "pl+LiveScript",
        "pl+PureScript",
        "pl+Aldor",
        "pl+Scala",
        "pl+Rust",
        "pl+Elm",
        "pl+Agda",
        "pl+A-",
        "pl+Curry",
        "pl+SASL",
        "pl+Orwell",
        "pl+ISWIM",
        "pl+Lean",
        "pl+Hack",
        "pl+EuLisp",
        "pl+Raku",
        "pl+Hume",
        "pl+Python",
        "pl+Clean",
        "pl+Fortress",
      ],
      influences: [
        "pl+Clean",
        "pl+FP",
        "pl+Gofer",
        "pl+Hope",
        "pl+Id",
        "pl+ISWIM",
        "pl+KRC",
        "pl+Lisp",
        "pl+Miranda",
        "pl+ML",
        "pl+Standard-ML",
        "pl+Orwell",
        "pl+SASL",
        "pl+Scheme",
        "pl+SISAL",
      ],
      paradigms: ["para+functional"],
      people: [
        ["person+Lennart-Augustsson", "designer"],
        ["person+Paul-Hudak", "designer"],
        ["person+John-Hughes", "designer"],
        ["person+Simon-Peyton-Jones", "designer"],
        ["person+John-Launchbury", "designer"],
        ["person+Erik-Meijer", "designer"],
        ["person+Philip-Wadler", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Haxe",
    "Haxe",
    {
      name: "Haxe",
      websites: [
        { kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" },
        { kind: "homepage", title: "haxe.org", href: "https://haxe.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
      releases: [
        { version: "unknown", date: "2005-11-14", kind: "first" },
        { version: "4.3.4", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/HaxeFoundation/haxe/releases/tag/4.3.4", title: "Release 4.3.4" }],
      },
      scoping: ["lexical"],
      extensions: [".hx", ".hxml"],
    },
    {
      implementations: ["pl+OCaml"],
      influenced: ["pl+Java", "pl+OCaml", "pl+JavaScript", "pl+ActionScript"],
      influences: [
        "pl+ECMAScript",
        "pl+JavaScript",
        "pl+ActionScript",
        "pl+OCaml",
        "pl+Java",
        "pl+C-Plus-Plus",
        "pl+PHP",
        "pl+C-Sharp",
        "pl+Python",
        "pl+Lua",
        "pl+NekoVM",
      ],
      licenses: ["lic+gpl", "lic+mit"],
      paradigms: ["para+multi-paradigm", "para+objects", "para+functional", "para+generic"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+aarch64",
        "platf+arm",
        "platf+mips",
        "platf+android",
        "platf+ios",
        "platf+linux",
        "platf+macos",
        "platf+windows",
      ],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+nominative"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+HotSpot",
    "HotSpot",
    {
      name: "HotSpot",
      websites: [
        { kind: "wikipedia", title: "HotSpot", href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)" },
      ],
    },
    { influenced: ["pl+Strongtalk"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Hy",
    "Hy",
    {
      name: "Hy",
      websites: [
        { kind: "wikipedia", title: "Hy", href: "https://en.wikipedia.org/wiki/Hy_(programming_language)" },
        { kind: "homepage", title: "hylang.org", href: "http://hylang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hy_Cuddles.png/121px-Hy_Cuddles.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "0.29.0", date: "2024-01-01", kind: "stable" },
        { version: "1.0", date: "2022-03-16", kind: "preview" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/hylang/hy/releases/tag/0.29.0", title: "Release 0.29.0" }],
      },
      extensions: [".hy"],
    },
    {
      dialects: ["pl+Lisp"],
      influenced: ["pl+LFE", "pl+Clojure"],
      influences: ["pl+Kawa", "pl+Clojure", "pl+Common-Lisp"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi-paradigm",
        "para+imperative",
        "para+functional",
        "para+objects",
        "para+meta",
        "para+reflective",
        "para+generic",
      ],
      people: [["person+Paul-Tagliamonte", "designer"]],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+HyperCard",
    "HyperCard",
    {
      name: "HyperCard",
      websites: [{ kind: "wikipedia", title: "HyperCard", href: "https://en.wikipedia.org/wiki/HyperCard" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/ee/HyperCard_2-icon.png" }],
      references: {
        initial_release: [
          { href: "http://macgui.com/usenet/?group=14&id=4987", title: "Hypercard – How About New Mac Owners" },
          { href: "http://32by32.com/macworld-expo-1987-boston/", title: "Macworld Expo 1987 Boston" },
        ],
      },
      releases: [{ version: "unknown", date: "1987-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+Scratch", "pl+Etoys"],
      licenses: ["lic+proprietary"],
      platforms: ["platf+macos", "platf+apple_ii"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+HyperTalk",
    "HyperTalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
      releases: [{ version: "unknown", date: "1987-01-01", kind: "first" }],
    },
    {
      influenced: [
        "pl+AppleScript",
        "pl+ECMAScript",
        "pl+JavaScript",
        "pl+ActionScript",
        "pl+SenseTalk",
        "pl+LiveCodeLiveCode-Script",
      ],
      influences: [
        "pl+Natural-language-programming",
        "pl+Pascal",
        "pl+ActionScript",
        "pl+AppleScript",
        "pl+ECMAScript",
        "pl+JavaScript",
        "pl+Lingo",
        "pl+LiveCode",
        "pl+SenseTalk",
        "pl+SuperTalk",
      ],
      paradigms: ["para+imperative", "para+event-driven"],
    },
  );
}