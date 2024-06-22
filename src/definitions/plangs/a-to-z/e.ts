import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
      paradigms: ["para+generic", "para+imperative", "para+multi-paradigm", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );

  /**/

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
        "pl+actionscript",
        "pl+google-apps-script",
        "pl+inscript",
        "pl+javascript",
        "pl+jscript",
        "pl+qtscript",
      ],
      influenced: ["pl+haxe", "pl+hypertalk", "pl+java", "pl+jscript-.net"],
      influences: [
        "pl+awk",
        "pl+c",
        "pl+coffeescript",
        "pl+hypertalk",
        "pl+java",
        "pl+perl",
        "pl+python",
        "pl+scheme",
        "pl+self",
      ],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+prototypes"],
      people: [
        ["person+brendan-eich", "designer"],
        ["person+ecma-international", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  /**/

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
      influenced: ["pl+clojure", "pl+erlang", "pl+gleam", "pl+lfe", "pl+lisp", "pl+ruby"],
      influences: ["pl+clojure", "pl+erlang", "pl+gleam", "pl+lfe", "pl+ruby"],
      licenses: ["lic+apache-2"],
      paradigms: [
        "para+concurrent",
        "para+distributed",
        "para+functional",
        "para+multi-paradigm",
        "para+process-oriented",
      ],
      people: [["person+jose-valim", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
        ["person+guy-l-steele", "designer"],
        ["person+richard-stallman", "designer"],
      ],
      platforms: ["platf+emacs"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
        "pl+clojure",
        "pl+dart",
        "pl+elixir",
        "pl+fantom",
        "pl+gleam",
        "pl+lfe",
        "pl+ml",
        "pl+opa",
        "pl+oz",
        "pl+plex",
        "pl+prolog",
        "pl+rust",
        "pl+scala",
        "pl+smalltalk",
      ],
      influences: [
        "pl+akka",
        "pl+clojure",
        "pl+dart",
        "pl+elixir",
        "pl+f-sharp",
        "pl+go",
        "pl+lisp",
        "pl+opa",
        "pl+oz",
        "pl+plex",
        "pl+prolog",
        "pl+reia",
        "pl+rust",
        "pl+scala",
        "pl+smalltalk",
      ],
      licenses: ["lic+apache-2"],
      paradigms: ["para+concurrent", "para+functional", "para+multi-paradigm", "para+objects"],
      people: [["person+joe-armstrong", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
        ["person+derek-parnell", "designer"],
        ["person+jeremy-cowgar", "designer"],
        ["person+matt-lewis", "designer"],
      ],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+static"],
    },
  );

  /**/
}
