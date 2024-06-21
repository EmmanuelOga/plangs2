import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ec",
    "eC",
    {
      name: "eC",
      websites: [
        { kind: "wikipedia", title: "eC", href: "https://en.wikipedia.org/wiki/EC_(programming_language)" },
        { kind: "homepage", title: "ec-lang.org", href: "http://ec-lang.org/" },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "0.44.15", date: "2016-08-04", kind: "stable" },
      ],
      extensions: [".ec", ".eh"],
    },
    {
      influences: ["pl+c", "pl+c-plus-plus", "pl+python"],
      licenses: ["lic+bsd-3"],
      paradigms: ["para+multi-paradigm", "para+imperative", "para+objects", "para+generic"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+nominative", "tsys+inferred"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ecmascript",
    "ECMAScript",
    {
      name: "ECMAScript",
      websites: [
        { kind: "wikipedia", title: "ECMAScript", href: "https://en.wikipedia.org/wiki/ECMAScript" },
        {
          kind: "homepage",
          title: "Standards",
          href: "https://www.ecma-international.org/publications-and-standards/standards/",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg" }],
      releases: [
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "unknown", date: "2023-01-01", kind: "other" },
      ],
      extensions: [],
    },
    {
      dialects: ["pl+haxe"],
      implementations: [
        "pl+javascript",
        "pl+actionscript",
        "pl+jscript",
        "pl+qtscript",
        "pl+inscript",
        "pl+google-apps-script",
      ],
      influenced: ["pl+haxe", "pl+java", "pl+hypertalk", "pl+jscript-.net"],
      influences: [
        "pl+self",
        "pl+hypertalk",
        "pl+awk",
        "pl+c",
        "pl+coffeescript",
        "pl+perl",
        "pl+python",
        "pl+java",
        "pl+scheme",
      ],
      paradigms: ["para+multi-paradigm", "para+prototypes", "para+functional", "para+imperative"],
      people: [
        ["person+brendan-eich", "designer"],
        ["person+ecma-international", "designer"],
      ],
      typeSystems: ["tsys+weak", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+elixir",
    "Elixir",
    {
      name: "Elixir",
      websites: [
        { kind: "wikipedia", title: "Elixir", href: "https://en.wikipedia.org/wiki/Elixir_(programming_language)" },
        { kind: "homepage", title: "elixir-lang.org", href: "https://elixir-lang.org" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" },
      ],
      releases: [
        { version: "unknown", date: "2012-01-01", kind: "first" },
        { version: "1.16.3", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/elixir-lang/elixir/releases/tag/v1.16.3", title: "Release 1.16.3" },
        ],
        license: [
          {
            href: "https://github.com/elixir-lang/elixir/blob/master/LICENSE",
            title: "elixir/LICENSE at master · elixir-lang/elixir · GitHub",
          },
        ],
      },
      extensions: [".ex", ".exs"],
    },
    {
      influenced: ["pl+lfe", "pl+lisp", "pl+clojure", "pl+erlang", "pl+ruby", "pl+gleam"],
      influences: ["pl+clojure", "pl+erlang", "pl+ruby", "pl+gleam", "pl+lfe"],
      licenses: ["lic+apache-2"],
      paradigms: [
        "para+multi-paradigm",
        "para+functional",
        "para+concurrent",
        "para+distributed",
        "para+process-oriented",
      ],
      people: [["person+jose-valim", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+elm",
    "Elm",
    {
      name: "Elm",
      websites: [
        { kind: "wikipedia", title: "Elm", href: "https://en.wikipedia.org/wiki/Elm_(programming_language)" },
        { kind: "homepage", title: "elm-lang.org", href: "https://elm-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://www.reddit.com/r/haskell/comments/rkyoa/my_thesis_is_finally_complete_elm_concurrent_frp/",
            title: 'My Thesis is Finally Complete! "Elm: Concurrent FRP for functional GUIs"',
          },
        ],
        stable_release: [{ href: "https://github.com/elm/compiler/releases", title: "Releases: elm/Compiler" }],
        license: [{ href: "https://github.com/elm/compiler/blob/master/LICENSE", title: "elm/compiler" }],
        influenced: [
          { href: "https://redux.js.org/introduction/prior-art", title: "Prior Art - Redux" },
          { href: "https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html", title: "Uniqueness Types" },
          {
            href: "https://vuejs.org/v2/guide/comparison.html#Scale",
            title: "Comparison with Other Frameworks — Vue.js",
          },
          {
            href: "https://github.com/roc-lang/roc/blob/main/roc-for-elm-programmers.md",
            title: "roc/roc-for-elm-programmers.md at main · roc-lang/roc",
          },
          {
            href: "https://derw.substack.com/p/why-derw-an-elm-like-language-that",
            title: "Why Derw: an Elm-like language that compiles to TypeScript?",
          },
          { href: "https://gren-lang.org/news/220530_first_release/", title: "Gren 0.1.0 is released" },
        ],
      },
      releases: [
        { version: "unknown", date: "2012-03-30", kind: "first" },
        { version: "0.19.1", date: "2019-10-21", kind: "stable" },
      ],
      extensions: [".elm"],
    },
    {
      influenced: ["pl+standard-ml", "pl+ocaml", "pl+ml", "pl+rust", "pl+gleam"],
      influences: ["pl+haskell", "pl+standard-ml", "pl+ocaml", "pl+f-sharp", "pl+redux", "pl+rust", "pl+vue"],
      licenses: ["lic+permissive", "lic+bsd-revised"],
      paradigms: ["para+functional"],
      people: [["person+evan-czaplicki", "designer"]],
      platforms: ["platf+x86-64", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+emacs-lisp",
    "Emacs Lisp",
    {
      name: "Emacs Lisp",
      websites: [
        { kind: "wikipedia", title: "Emacs Lisp", href: "https://en.wikipedia.org/wiki/Emacs_Lisp" },
        { kind: "homepage", title: "www.gnu.org/software/emacs", href: "http://www.gnu.org/software/emacs" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" }],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "29.1", date: "2023-07-30", kind: "stable" },
      ],
      scoping: ["lexical"],
      extensions: [".el", ".elc", ".eln"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+common-lisp"],
      influences: ["pl+common-lisp", "pl+maclisp"],
      licenses: ["lic+gpl-3"],
      paradigms: ["para+functional", "para+meta", "para+reflective"],
      people: [
        ["person+richard-stallman", "designer"],
        ["person+guy-l-steele", "designer"],
      ],
      platforms: ["platf+emacs"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+erlang",
    "Erlang",
    {
      name: "Erlang",
      websites: [
        { kind: "wikipedia", title: "Erlang", href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)" },
        { kind: "homepage", title: "www.erlang.org", href: "https://www.erlang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg" }],
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "26.2.5", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/erlang/otp/releases/tag/OTP-26.2.5", title: "Release 26.2.5" }],
        influenced_by: [
          {
            href: "https://vimeo.com/97329186",
            title:
              "Joe Armstrong - Functional Programming the Long Road to Enlightenment: a Historical and Personal Narrative",
          },
        ],
        influenced: [
          {
            href: "http://radar.oreilly.com/2011/06/clojure-java-lisp-jvm.html",
            title: "Clojure: Lisp meets Java, with a side of Erlang - O'Reilly Radar",
          },
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
      extensions: [".erl", ".hrl"],
    },
    {
      dialects: ["pl+lfe"],
      influenced: [
        "pl+lfe",
        "pl+elixir",
        "pl+clojure",
        "pl+fantom",
        "pl+ml",
        "pl+oz",
        "pl+scala",
        "pl+opa",
        "pl+rust",
        "pl+prolog",
        "pl+dart",
        "pl+gleam",
        "pl+plex",
        "pl+smalltalk",
      ],
      influences: [
        "pl+lisp",
        "pl+plex",
        "pl+prolog",
        "pl+smalltalk",
        "pl+akka",
        "pl+clojure",
        "pl+dart",
        "pl+elixir",
        "pl+f-sharp",
        "pl+opa",
        "pl+oz",
        "pl+reia",
        "pl+rust",
        "pl+scala",
        "pl+go",
      ],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+concurrent", "para+functional", "para+objects"],
      people: [["person+joe-armstrong", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+euphoria",
    "Euphoria",
    {
      name: "Euphoria",
      websites: [
        { kind: "wikipedia", title: "Euphoria", href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)" },
        { kind: "homepage", title: "openeuphoria.org", href: "http://openeuphoria.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png" }],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "4.1.0", date: "2021-03-01", kind: "stable" },
      ],
      extensions: [".e", ".ex", ".exw", ".edb"],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+bsd"],
      paradigms: ["para+imperative"],
      people: [
        ["person+jeremy-cowgar", "designer"],
        ["person+matt-lewis", "designer"],
        ["person+derek-parnell", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+windows", "platf+linux", "platf+macos", "platf+bsd"],
      typeSystems: ["tsys+static", "tsys+dynamic"],
    },
  );
}
