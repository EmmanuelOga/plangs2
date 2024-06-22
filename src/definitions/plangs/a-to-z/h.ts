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
      influences: ["pl+c-sharp", "pl+haskell", "pl+java", "pl+ocaml", "pl+php", "pl+scala"],
      licenses: ["lic+mit"],
      people: [
        ["person+alok-menghrajani", "designer"],
        ["person+drew-paroski", "designer"],
        ["person+julien-verlaguet", "designer"],
        ["person+meta-platforms", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+static", "tsys+weak"],
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
      influenced: ["pl+actionscript", "pl+java", "pl+javascript", "pl+ocaml"],
      influences: [
        "pl+actionscript",
        "pl+c-plus-plus",
        "pl+c-sharp",
        "pl+ecmascript",
        "pl+java",
        "pl+javascript",
        "pl+lua",
        "pl+nekovm",
        "pl+ocaml",
        "pl+php",
        "pl+python",
      ],
      licenses: ["lic+gpl", "lic+mit"],
      paradigms: ["para+functional", "para+generic", "para+multi-paradigm", "para+objects"],
      platforms: [
        "platf+aarch64",
        "platf+android",
        "platf+arm",
        "platf+ia-32",
        "platf+ios",
        "platf+linux",
        "platf+macos",
        "platf+mips",
        "platf+windows",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+dynamic", "tsys+nominative", "tsys+static"],
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
      influenced: ["pl+clojure", "pl+lfe"],
      influences: ["pl+clojure", "pl+common-lisp", "pl+kawa"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi-paradigm",
        "para+objects",
        "para+reflective",
      ],
      people: [["person+paul-tagliamonte", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
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
      influenced: ["pl+etoys", "pl+scratch"],
      licenses: ["lic+proprietary"],
      platforms: ["platf+apple_ii", "platf+macos"],
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
        "pl+actionscript",
        "pl+applescript",
        "pl+ecmascript",
        "pl+javascript",
        "pl+livecodelivecode-script",
        "pl+sensetalk",
      ],
      influences: [
        "pl+actionscript",
        "pl+applescript",
        "pl+ecmascript",
        "pl+javascript",
        "pl+lingo",
        "pl+livecode",
        "pl+natural-language-programming",
        "pl+pascal",
        "pl+sensetalk",
        "pl+supertalk",
      ],
      paradigms: ["para+event-driven", "para+imperative"],
    },
  );
}
