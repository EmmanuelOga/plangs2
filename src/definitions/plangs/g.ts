import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gambit",
    "Gambit",
    {
      name: "Gambit",
      websites: [
        { kind: "wikipedia", title: "Gambit", href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)" },
        { kind: "homepage", title: "gambitscheme.org", href: "http://gambitscheme.org" },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "4.9.5", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://gambitscheme.org/latest/", title: "Gambit Scheme - Gambit 4.9.4" }],
      },
    },
    {
      influenced: ["pl+multilisp"],
      influences: ["pl+gerbil-scheme", "pl+lisp", "pl+scheme", "pl+termite-scheme"],
      licenses: ["lic+apache", "lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi-paradigm"],
      people: [["person+marc-feeley", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gdscript",
    "GDScript",
    {
      name: "GDScript",
      websites: [
        { kind: "wikipedia", title: "GDScript", href: "https://en.wikipedia.org/wiki/Godot_(game_engine)#GDScript" },
      ],
    },
    { influenced: ["pl+python"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gforth",
    "Gforth",
    {
      name: "Gforth",
      websites: [
        { kind: "wikipedia", title: "Gforth", href: "https://en.wikipedia.org/wiki/Gforth" },
        { kind: "homepage", title: "gnu.org/s/gforth/", href: "http://gnu.org/s/gforth/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" }],
      references: {
        initial_release: [
          {
            href: "http://www.complang.tuwien.ac.at/forth/gforth/Docs-html/Origin.html",
            title: "Origin - Gforth Manual",
          },
        ],
        stable_release: [
          { href: "https://www.gnu.org/software/gforth/", title: "Gforth - GNU Project - Free Software Foundation" },
        ],
      },
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "0.7.3", date: "2014-01-01", kind: "stable" },
        { version: "0.7.9", date: "2020-02-13", kind: "preview" },
      ],
    },
    { licenses: ["lic+gnu-gpl-3"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gleam",
    "Gleam",
    {
      name: "Gleam",
      websites: [
        { kind: "wikipedia", title: "Gleam", href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)" },
        { kind: "homepage", title: "gleam.run", href: "https://gleam.run/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
        },
      ],
      references: {
        paradigm: [{ href: "https://gleam.run/", title: "Gleam Homepage" }],
        stable_release: [{ href: "https://github.com/gleam-lang/gleam/releases/tag/v1.1.0", title: "Release 1.1.0" }],
        typing_discipline: [{ href: "https://gleam.run/", title: "Gleam Homepage" }],
        os: [{ href: "https://gleam.run/getting-started/installing/", title: "Installing Gleam" }],
        license: [{ href: "https://github.com/gleam-lang/gleam/blob/main/LICENCE", title: "Gleam License File" }],
        influenced_by: [
          {
            href: "https://www.youtube.com/watch?v=clsTrQUt-4M&t=304",
            title: "Gleam: Past, Present, Future! • Louis Pilfold @ FOSDEM 2024",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2016-06-13", kind: "first" },
        { version: "1.1.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".gleam"],
    },
    {
      implementations: ["pl+rust"],
      influenced: ["pl+elixir"],
      influences: ["pl+elixir", "pl+elm", "pl+erlang", "pl+go", "pl+javascript", "pl+ocaml", "pl+rust"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+concurrent", "para+functional", "para+multi-paradigm"],
      people: [["person+louis-pilfold", "designer"]],
      platforms: ["platf+bsd", "platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+inferred", "tsys+safe", "tsys+static"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+glsl",
    "GLSL",
    { name: "GLSL", websites: [{ kind: "wikipedia", title: "GLSL", href: "https://en.wikipedia.org/wiki/GLSL" }] },
    { influenced: ["pl+cg-slashhlsl"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gnat",
    "GNAT",
    {
      name: "GNAT",
      websites: [
        { kind: "wikipedia", title: "GNAT", href: "https://en.wikipedia.org/wiki/GNAT" },
        { kind: "homepage", title: "www.getadanow.com", href: "http://www.getadanow.com" },
        { kind: "homepage", title: "www.adacore.com/gnatpro/", href: "http://www.adacore.com/gnatpro/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "9.2", date: "2019-08-12", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://www.gnu.org/software/gcc/releases.html", title: "GCC Releases - GNU Project" },
          { href: "https://www.adacore.com/press/gnat-pro-7-4", title: "AdaCore Releases GNAT Pro 7.4" },
        ],
        license: [{ href: "https://www.gnu.org/licenses/gcc-exception.html", title: "GCC Runtime Library Exception" }],
      },
    },
    { licenses: ["lic+gnu-gpl-3-plus"] },
  );

  //-------------------------------------------------------------------------------

  lb.define("pl+gnu-awk-gawk", "GNU Awk gawk", { name: "GNU Awk gawk" }, { dialects: ["pl+awk"] });

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gnu-guile",
    "GNU Guile",
    {
      name: "GNU Guile",
      websites: [
        { kind: "wikipedia", title: "GNU Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" },
        { kind: "homepage", title: "gnu.org/software/guile", href: "https://gnu.org/software/guile" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg" }],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "3.0.9", date: "2023-01-25", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+scm"],
      influences: ["pl+lisp", "pl+scheme", "pl+scm"],
      licenses: ["lic+lgpl-3"],
      people: [
        ["person+aubrey-jaffer", "designer"],
        ["person+miles-bader", "designer"],
        ["person+tom-lord", "designer"],
      ],
      platforms: [
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cygwin",
        "platf+ia-32",
        "platf+linux",
        "platf+mingw",
        "platf+mips",
        "platf+windows",
        "platf+x86-64",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gnu-octave",
    "GNU Octave",
    {
      name: "GNU Octave",
      websites: [
        { kind: "wikipedia", title: "GNU Octave", href: "https://en.wikipedia.org/wiki/GNU_Octave" },
        { kind: "homepage", title: "gnu.org/software/octave/", href: "https://gnu.org/software/octave/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" }],
      references: {
        developers: [
          {
            href: "http://hg.savannah.gnu.org/hgweb/octave/file/tip/doc/interpreter/contributors.in",
            title: "contributors.in",
          },
        ],
        initial_release: [
          {
            href: "https://www.gnu.org/software/octave/about",
            title:
              '"Full-time development began in the Spring of 1992. The first alpha release was January 4, 1993, and version 1.0 was released February 17, 1994."',
          },
        ],
        stable_release: [
          {
            href: "https://octave.org/news/release/2024/03/14/octave-9.1.0-released.html",
            title: "GNU Octave 9.1.0 Released",
          },
        ],
        written_in: [{ href: "https://wiki.octave.org/Building", title: "Building - Octave" }],
        available_in: [
          {
            href: "https://hg.savannah.gnu.org/hgweb/octave/file/4730becad0b1/libgui/languages",
            title:
              "Basque, Belarusian, Catalan, Chinese, Dutch, English, French, German, Hungarian, Italian, Japanese, Latvian, Portuguese (Brazil), Portuguese (Portugal), Russian, Spanish, Turkish, Ukrainian",
          },
        ],
      },
      releases: [
        { version: "1.0", date: "1993-01-01", kind: "first" },
        { version: "9.1.0", date: "2024-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+gpl-2", "lic+gpl-3"], people: [["person+john-w-eaton", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gnu-prolog",
    "GNU Prolog",
    {
      name: "GNU Prolog",
      websites: [
        { kind: "wikipedia", title: "GNU Prolog", href: "https://en.wikipedia.org/wiki/GNU_Prolog" },
        { kind: "homepage", title: "www.gprolog.org", href: "http://www.gprolog.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      references: { developers: [{ href: "http://cri-dist.univ-paris1.fr/diaz/", title: "Daniel Diaz's Home Page" }] },
      releases: [{ version: "1.5.0", date: "2021-07-08", kind: "stable" }],
    },
    { licenses: ["lic+gnu-gpl", "lic+gnu-lesser-gpl"], people: [["person+daniel-diaz", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+go",
    "Go",
    {
      name: "Go",
      websites: [
        { kind: "wikipedia", title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)" },
        { kind: "homepage", title: "go.dev", href: "https://go.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" }],
      references: {
        paradigm: [
          { href: "https://go.dev/doc/codewalk/functions/", title: "Codewalk: First-Class Functions in Go" },
          {
            href: "https://golang.org/doc/faq#Is_Go_an_object-oriented_language",
            title: "Is Go an object-oriented language?",
          },
          { href: "https://talks.golang.org/2012/chat.slide#5", title: "Go: code that grows with grace" },
        ],
        designed_by: [{ href: "https://golang.org/doc/go_faq.html", title: "Language Design FAQ" }],
        developer: [{ href: "https://golang.org/LICENSE", title: "Text file LICENSE" }],
        typing_discipline: [
          {
            href: "https://go.dev/ref/spec#Introduction",
            title: "The Go Programming Language Specification - the Go Programming Language",
          },
          {
            href: "https://golang.org/doc/faq#implements_interface",
            title: 'Why doesn\'t Go have "implements" declarations?',
          },
          {
            href: "https://web.archive.org/web/20220407025913/https://twitter.com/rob_pike/status/546973312543227904",
            title: "Rob Pike on Twitter",
          },
        ],
        os: [
          { href: "http://ports.su/lang/go", title: "lang/go: go-1.4" },
          { href: "http://go-lang.cat-v.org/os-ports", title: "Go Porting Efforts" },
        ],
        license: [
          { href: "https://golang.org/LICENSE", title: "Text file LICENSE" },
          { href: "https://golang.org/PATENTS", title: "Additional IP Rights Grant" },
        ],
      },
      releases: [
        { version: "unknown", date: "2009-11-10", kind: "first" },
        { version: "1.22.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".go"],
    },
    {
      implementations: ["pl+assembly-language", "pl+c-plus-plus"],
      influenced: [
        "pl+alef",
        "pl+ballerina",
        "pl+bcpl",
        "pl+c",
        "pl+crystal",
        "pl+d-programming-language",
        "pl+erlang",
        "pl+flix",
        "pl+gleam",
        "pl+limbo",
        "pl+modula",
        "pl+newsqueak",
        "pl+oberon",
        "pl+oberon-2",
        "pl+occam",
        "pl+pascal",
        "pl+python",
        "pl+smalltalk",
        "pl+v",
      ],
      influences: [
        "pl+active-oberon",
        "pl+alef",
        "pl+apl",
        "pl+bcpl",
        "pl+c",
        "pl+communicating-sequential-processes",
        "pl+crystal",
        "pl+limbo",
        "pl+modula",
        "pl+modula-2",
        "pl+newsqueak",
        "pl+oberon",
        "pl+oberon-2",
        "pl+occam",
        "pl+pascal",
        "pl+smalltalk",
        "pl+v-(vlang)",
      ],
      licenses: ["lic+3-clause-bsd", "lic+patent"],
      paradigms: ["para+concurrent", "para+functional", "para+imperative", "para+multi-paradigm", "para+objects"],
      people: [
        ["person+ken-thompson", "designer"],
        ["person+rob-pike", "designer"],
        ["person+robert-griesemer", "designer"],
      ],
      platforms: ["platf+bsd", "platf+linux", "platf+macos", "platf+plan9", "platf+windows"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+gosu",
    "Gosu",
    {
      name: "Gosu",
      websites: [
        { kind: "wikipedia", title: "Gosu", href: "https://en.wikipedia.org/wiki/Gosu_(programming_language)" },
        { kind: "repository", title: "gosu-lang.github.io", href: "https://gosu-lang.github.io/" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/gosu-lang/gosu-lang/releases/tag/v1.17.10", title: "Release 1.17.10" },
        ],
      },
      releases: [{ version: "1.17.10", date: "2024-01-01", kind: "stable" }],
      extensions: [".gs", ".gsp", ".gst", ".gsx"],
    },
    {
      influenced: ["pl+kotlin"],
      influences: ["pl+c-sharp", "pl+java", "pl+kotlin"],
      licenses: ["lic+apache-2"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+static"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+groovy",
    "Groovy",
    {
      name: "Groovy",
      websites: [
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)" },
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Apache_Groovy" },
        { kind: "homepage", title: "groovy-lang.org", href: "https://groovy-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" }],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "4.0.21", date: "2024-01-01", kind: "stable" },
        { version: "4.0.0", date: "2021-09-06", kind: "preview" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/apache/groovy/releases/tag/GROOVY_4_0_21", title: "Release 4.0.21" },
        ],
        preview_release: [{ href: "https://github.com/apache/groovy/releases", title: "Releases - apache/groovy" }],
      },
    },
    {
      implementations: ["pl+gradle", "pl+grails"],
      influenced: ["pl+java", "pl+kotlin", "pl+objective-c", "pl+ruby", "pl+smalltalk", "pl+xtend"],
      influences: ["pl+java", "pl+kotlin", "pl+python", "pl+ruby", "pl+smalltalk"],
      licenses: ["lic+apache-2"],
      paradigms: [
        "para+aspect-oriented",
        "para+functional",
        "para+imperative",
        "para+multi-paradigm",
        "para+objects",
        "para+scripting",
      ],
      people: [
        ["person+cedric-champeau", "designer"],
        ["person+james-strachan", "designer"],
        ["person+paul-king", "designer"],
      ],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+guile",
    "Guile",
    {
      name: "Guile",
      websites: [{ kind: "wikipedia", title: "Guile", href: "https://en.wikipedia.org/wiki/GNU_Guile" }],
    },
    { influenced: ["pl+siod"] },
  );
}
