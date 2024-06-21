import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+hack",
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
      influenced: ["pl+java", "pl+php"],
      influences: ["pl+php", "pl+ocaml", "pl+java", "pl+c-sharp", "pl+scala", "pl+haskell"],
      licenses: ["lic+mit"],
      people: [
        ["person+julien-verlaguet", "designer"],
        ["person+alok-menghrajani", "designer"],
        ["person+drew-paroski", "designer"],
        ["person+meta-platforms", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+haskell",
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
      dialects: ["pl+elm", "pl+hume"],
      implementations: ["pl+ghc", "pl+hugs", "pl+yhc"],
      influenced: [
        "pl+pure",
        "pl+futhark",
        "pl+idris",
        "pl+standard-ml",
        "pl+scheme",
        "pl+lisp",
        "pl+clojure",
        "pl+flix",
        "pl+orc",
        "pl+miranda",
        "pl+fp",
        "pl+mercury",
        "pl+ml",
        "pl+livescript",
        "pl+purescript",
        "pl+aldor",
        "pl+scala",
        "pl+rust",
        "pl+elm",
        "pl+agda",
        "pl+a-",
        "pl+curry",
        "pl+sasl",
        "pl+orwell",
        "pl+iswim",
        "pl+lean",
        "pl+hack",
        "pl+eulisp",
        "pl+raku",
        "pl+hume",
        "pl+python",
        "pl+clean",
        "pl+fortress",
      ],
      influences: [
        "pl+clean",
        "pl+fp",
        "pl+gofer",
        "pl+hope",
        "pl+id",
        "pl+iswim",
        "pl+krc",
        "pl+lisp",
        "pl+miranda",
        "pl+ml",
        "pl+standard-ml",
        "pl+orwell",
        "pl+sasl",
        "pl+scheme",
        "pl+sisal",
      ],
      paradigms: ["para+functional"],
      people: [
        ["person+lennart-augustsson", "designer"],
        ["person+paul-hudak", "designer"],
        ["person+john-hughes", "designer"],
        ["person+simon-peyton-jones", "designer"],
        ["person+john-launchbury", "designer"],
        ["person+erik-meijer", "designer"],
        ["person+philip-wadler", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+haxe",
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
      implementations: ["pl+ocaml"],
      influenced: ["pl+java", "pl+ocaml", "pl+javascript", "pl+actionscript"],
      influences: [
        "pl+ecmascript",
        "pl+javascript",
        "pl+actionscript",
        "pl+ocaml",
        "pl+java",
        "pl+c-plus-plus",
        "pl+php",
        "pl+c-sharp",
        "pl+python",
        "pl+lua",
        "pl+nekovm",
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
    "pl+hotspot",
    "HotSpot",
    {
      name: "HotSpot",
      websites: [
        { kind: "wikipedia", title: "HotSpot", href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)" },
      ],
    },
    { influenced: ["pl+strongtalk"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+hy",
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
      dialects: ["pl+lisp"],
      influenced: ["pl+lfe", "pl+clojure"],
      influences: ["pl+kawa", "pl+clojure", "pl+common-lisp"],
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
      people: [["person+paul-tagliamonte", "designer"]],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+hypercard",
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
      influenced: ["pl+scratch", "pl+etoys"],
      licenses: ["lic+proprietary"],
      platforms: ["platf+macos", "platf+apple_ii"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+hypertalk",
    "HyperTalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
      releases: [{ version: "unknown", date: "1987-01-01", kind: "first" }],
    },
    {
      influenced: [
        "pl+applescript",
        "pl+ecmascript",
        "pl+javascript",
        "pl+actionscript",
        "pl+sensetalk",
        "pl+livecodelivecode-script",
      ],
      influences: [
        "pl+natural-language-programming",
        "pl+pascal",
        "pl+actionscript",
        "pl+applescript",
        "pl+ecmascript",
        "pl+javascript",
        "pl+lingo",
        "pl+livecode",
        "pl+sensetalk",
        "pl+supertalk",
      ],
      paradigms: ["para+imperative", "para+event-driven"],
    },
  );
}
