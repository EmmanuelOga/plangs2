import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+r",
    "R",
    {
      name: "R",
      websites: [
        { kind: "wikipedia", title: "R", href: "https://en.wikipedia.org/wiki/R_(programming_language)" },
        { kind: "homepage", title: "www.r-project.org", href: "https://www.r-project.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" }],
      references: {
        paradigms: [
          {
            href: "https://doi.org/10.1007/978-3-642-31057-7_6",
            title: "Evaluating the design of the R language: objects and functions for data analysis",
          },
        ],
        stable_release: [
          {
            href: "https://hypatia.math.ethz.ch/pipermail/r-announce/2024/000701.html",
            title: "[Rd] R 4.4.0 is released",
          },
        ],
        license: [{ href: "https://directory.fsf.org/wiki/R#tab=Details", title: "R - Free Software Directory" }],
        filename_extensions: [
          {
            href: "http://mercury.webster.edu/aleshunas/R_learning_infrastructure/R%20scripts.html",
            title: "R scripts",
          },
          {
            href: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000470.shtml",
            title: "R Data Format Family (.rdata, .rda)",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20221228045640/https://cran.r-project.org/doc/FAQ/R-FAQ.html",
            title: "R FAQ",
          },
          {
            href: "https://doi.org/10.1007/978-3-642-31057-7_6",
            title: "Evaluating the design of the R language: objects and functions for data analysis",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20180620172516/https://docs.julialang.org/en/stable/manual/introduction/#man-introduction-1",
            title: "Introduction",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "4.4.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+scheme", "pl+lisp", "pl+julia", "pl+pcastl", "pl+s", "pl+common-lisp"],
      influences: ["pl+lisp", "pl+s", "pl+scheme", "pl+julia"],
      licenses: ["lic+gnu-gpl-2"],
      paradigms: [
        "para+multi-paradigm",
        "para+imperative",
        "para+objects",
        "para+functional",
        "para+reflective",
        "para+array",
      ],
      people: [
        ["person+ross-ihaka", "designer"],
        ["person+robert-gentleman", "designer"],
      ],
      platforms: ["platf+arm", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+racket",
    "Racket",
    {
      name: "Racket",
      websites: [
        { kind: "wikipedia", title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)" },
        { kind: "homepage", title: "racket-lang.org", href: "https://racket-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-28", kind: "first" },
        { version: "8.13", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/racket/racket/releases/tag/v8.13", title: "Racket 8.13" }],
        license: [
          {
            href: "https://blog.racket-lang.org/2019/11/completing-racket-s-relicensing-effort.html",
            title: "Completing Racket's relicensing effort",
          },
        ],
        filename_extensions: [
          { href: "https://docs.racket-lang.org/drracket/drracket-files.html", title: "DrRacket Files" },
        ],
        influenced_by: [
          {
            href: "http://www.ccs.neu.edu/racket/pubs/dls10-sf.pdf",
            title: "DLS 2010: Contracts for First-Class Classes",
          },
        ],
        influenced: [
          { href: "https://mail.mozilla.org/pipermail/rust-dev/2013-May/003947.html", title: "Planet2 questions" },
          {
            href: "https://github.com/rust-lang/rust/blob/0486e12ad0661adcfdbd926dea17d7edfda419c1/src/doc/book/bibliography.md",
            title: "Rust Bibliography",
          },
          { href: "http://www.r6rs.org", title: "Revised6 Report on the Algorithmic Language Scheme (R6RS)" },
        ],
      },
      extensions: [".rkt"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+scheme", "pl+clojure", "pl+eiffel"],
      influences: ["pl+eiffel", "pl+scheme", "pl+clojure", "pl+rust", "pl+scheme-(r6rs)"],
      licenses: ["lic+mit", "lic+apache-2"],
      paradigms: [
        "para+multi-paradigm",
        "para+functional",
        "para+imperative",
        "para+logic",
        "para+meta",
        "para+modular",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+x86", "platf+mips", "platf+arm", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+raku",
    "Raku",
    {
      name: "Raku",
      websites: [
        { kind: "wikipedia", title: "Raku", href: "https://en.wikipedia.org/wiki/Raku_(programming_language)" },
        { kind: "homepage", title: "raku.org", href: "http://raku.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg" }],
      releases: [
        { version: "unknown", date: "2015-12-25", kind: "first" },
        { version: "unknown", date: "2020-10-24", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "http://blogs.perl.org/users/zoffix_znet/2018/11/announce-raku-perl-6-diwali-6d-language-specification-release.html",
            title: "Announce: Raku Perl 6 'Diwali' 6.d Language Specification Release",
          },
        ],
        filename_extensions: [{ href: "https://docs.raku.org/language/modules#Basic_structure", title: "Modules" }],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20120121145808/http://www.perlfoundation.org/perl6/index.cgi?glossary_of_terms_and_jargon",
            title: "Glossary of Terms and Jargon",
          },
        ],
        influenced: [
          {
            href: "http://pugs.blogs.com/pugs/2010/04/how-to-implement-perl-6-in-10.html",
            title: "How to Implement Perl 6 in '10",
          },
        ],
      },
      extensions: [".raku", ".t"],
    },
    {
      implementations: ["pl+rakudo"],
      influenced: ["pl+smalltalk"],
      influences: ["pl+perl", "pl+ruby", "pl+smalltalk", "pl+haskell", "pl+javascript"],
      licenses: ["lic+gnu-gpl", "lic+artistic-2"],
      paradigms: ["para+multi-paradigm"],
      people: [["person+larry-wall", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+rakudo",
    "Rakudo",
    {
      name: "Rakudo",
      websites: [
        { kind: "wikipedia", title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo" },
        { kind: "homepage", title: "rakudo.org", href: "http://rakudo.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png",
        },
      ],
      references: {
        stable_release: [{ href: "https://github.com/rakudo/rakudo/releases", title: "Releases · rakudo/rakudo" }],
      },
      releases: [{ version: "2024.05", date: "2024-05-30", kind: "stable" }],
    },
    { licenses: ["lic+artistic"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+rc",
    "rc",
    {
      name: "rc",
      websites: [
        { kind: "wikipedia", title: "rc", href: "https://en.wikipedia.org/wiki/Rc_(Unix_shell)" },
        {
          kind: "homepage",
          title: "doc.cat-v.org/plan_9/4th_edition/papers/rc",
          href: "http://doc.cat-v.org/plan_9/4th_edition/papers/rc",
        },
      ],
      releases: [{ version: "unknown", date: "1989-01-01", kind: "first" }],
    },
    {
      influences: ["pl+bourne-shell", "pl+inferno"],
      paradigms: ["para+imperative", "para+pipeline"],
      people: [["person+tom-duff", "designer"]],
      platforms: ["platf+cross-platform", "platf+unix", "platf+plan9"],
      typeSystems: ["tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+reason",
    "Reason",
    {
      name: "Reason",
      websites: [
        { kind: "wikipedia", title: "Reason", href: "https://en.wikipedia.org/wiki/Reason_(programming_language)" },
        { kind: "repository", title: "reasonml.github.io", href: "https://reasonml.github.io/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Reason-logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://github.com/facebook/reason",
            title: "Simple, fast & type safe code that leverages the JavaScript & OCaml ecosystems: facebook/reason",
          },
        ],
        stable_release: [{ href: "https://github.com/reasonml/reason/releases/tag/3.11.0", title: "Release 3.11.0" }],
      },
      releases: [
        { version: "unknown", date: "2016-05-16", kind: "first" },
        { version: "3.11.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".re", ".rei"],
    },
    {
      influences: ["pl+ocaml", "pl+javascript"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+modular", "para+objects"],
      people: [["person+jordan-walke", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+rebol",
    "Rebol",
    {
      name: "Rebol",
      websites: [
        { kind: "wikipedia", title: "Rebol", href: "https://en.wikipedia.org/wiki/Rebol" },
        { kind: "wikipedia", title: "REBOL", href: "https://en.wikipedia.org/wiki/REBOL" },
        { kind: "homepage", title: "www.rebol.com", href: "http://www.rebol.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png" }],
      releases: [
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "2.7.8", date: "2011-01-01", kind: "stable" },
        { version: "2.101.0", date: "2012-01-01", kind: "preview" },
      ],
      references: {
        license: [
          { href: "http://www.rebol.com/license.html", title: "license" },
          { href: "https://github.com/rebol/r3", title: "R3 source" },
        ],
        filename_extensions: [
          { href: "http://www.rebol.com/article/0540.html", title: "Carl's REBOL Blog - Let's switch to .reb suffix" },
        ],
        influenced: [{ href: "https://www.youtube.com/watch?v=-C-JoyNuQJs", title: "The JSON Saga" }],
      },
      extensions: [".r", ".reb"],
    },
    {
      influenced: ["pl+red", "pl+lisp", "pl+forth", "pl+logo", "pl+self", "pl+ucblogo"],
      influences: ["pl+self", "pl+forth", "pl+lisp", "pl+logo", "pl+json", "pl+red"],
      licenses: ["lic+freely-redistributable-software", "lic+apache-2"],
      paradigms: [
        "para+language-oriented",
        "para+data-driven",
        "para+functional",
        "para+prototypes",
        "para+imperative",
      ],
      people: [["person+carl-sassenrath", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+red",
    "Red",
    {
      name: "Red",
      websites: [
        { kind: "wikipedia", title: "Red", href: "https://en.wikipedia.org/wiki/Red_(programming_language)" },
        { kind: "homepage", title: "www.red-lang.org", href: "https://www.red-lang.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png",
        },
      ],
      references: {
        designed_by: [{ href: "https://github.com/dockimbel", title: "Creator of Red" }],
        stable_release: [{ href: "https://www.red-lang.org/2024/02/065-changelog.html", title: "Red's changelog" }],
      },
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "0.6.5", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".red", ".reds"],
    },
    {
      influenced: ["pl+lisp", "pl+scala", "pl+rebol"],
      influences: ["pl+rebol", "pl+lisp", "pl+scala", "pl+lua"],
      licenses: ["lic+modified-bsd", "lic+boost"],
      paradigms: ["para+multi-paradigm", "para+imperative", "para+functional", "para+symbolic"],
      people: [["person+nenad-rakocevic", "designer"]],
      platforms: ["platf+linux", "platf+windows", "platf+macos"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ring",
    "Ring",
    {
      name: "Ring",
      websites: [
        { kind: "wikipedia", title: "Ring", href: "https://en.wikipedia.org/wiki/Ring_(programming_language)" },
        { kind: "homepage", title: "http://ring-lang.net", href: "http://ring-lang.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://link.springer.com/content/pdf/bbm%3A978-1-4842-5833-0%2F1.pdf",
            title: "A Dialogue with Mahmoud Fayed",
          },
        ],
        stable_release: [{ href: "https://github.com/ring-lang/ring/releases/tag/v1.20", title: "Released 1.20" }],
        influenced: [
          { href: "https://simple-lang.sourceforge.io", title: "The Simple programming language" },
          { href: "https://www.dragon-lang.org/", title: "The Dragon programming language" },
        ],
      },
      releases: [
        { version: "unknown", date: "2016-01-25", kind: "first" },
        { version: "1.20", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ring", ".rh", ".rform"],
    },
    {
      implementations: ["pl+c"],
      influenced: ["pl+ruby", "pl+qml", "pl+python"],
      influences: [
        "pl+lua",
        "pl+python",
        "pl+ruby",
        "pl+c",
        "pl+c-sharp",
        "pl+basic",
        "pl+qml",
        "pl+xbase",
        "pl+simplelang",
        "pl+dragonlang",
      ],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi-paradigm",
        "para+objects",
        "para+imperative",
        "para+functional",
        "para+reflective",
        "para+declarative",
        "para+natural-language",
      ],
      people: [["person+mahmoud-samir-fayed", "designer"]],
      platforms: ["platf+windows", "platf+linux", "platf+macos"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+rpython",
    "RPython",
    {
      name: "RPython",
      websites: [{ kind: "wikipedia", title: "RPython", href: "https://en.wikipedia.org/wiki/PyPy#RPython" }],
    },
    { dialects: ["pl+python"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ruby",
    "Ruby",
    {
      name: "Ruby",
      websites: [
        { kind: "wikipedia", title: "Ruby", href: "https://en.wikipedia.org/wiki/Ruby_(programming_language)" },
        { kind: "homepage", title: "ruby-lang.org", href: "https://www.ruby-lang.org/en/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "3.3.3", date: "2024-01-01", kind: "stable" },
      ],
      scoping: ["dynamic"],
      extensions: [".rb", ".ru"],
      references: {
        influenced_by: [
          {
            href: "https://web.archive.org/web/20200115080302/http://confreaks.tv/videos/rubyconf2008-reasons-behind-ruby",
            title: "Reasons behind Ruby",
          },
          {
            href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
            title: "Practical JRuby on Rails Web 2.0 Projects: Bringing Ruby on Rails to Java",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20180816025550/https://docs.julialang.org/en/stable/",
            title: "Julia 1.0 Documentation: Introduction",
          },
          { href: "https://web.archive.org/web/20181225131630/http://programming.nu/about%0A%20", title: "About Nu™" },
          {
            href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
            title: "Ring and other languages",
          },
          {
            href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
            title: "Influences - The Rust Reference",
          },
          {
            href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
        ],
      },
    },
    {
      implementations: [
        "pl+c",
        "pl+ruby-mri",
        "pl+truffleruby",
        "pl+yarv",
        "pl+rubinius",
        "pl+jruby",
        "pl+rubymotion",
        "pl+mruby",
      ],
      influenced: [
        "pl+ada",
        "pl+elixir",
        "pl+umple",
        "pl+scheme",
        "pl+lisp",
        "pl+nu",
        "pl+clojure",
        "pl+mirah",
        "pl+fantom",
        "pl+dylan",
        "pl+julia",
        "pl+crystal",
        "pl+eiffel",
        "pl+rust",
        "pl+dart",
        "pl+ring",
        "pl+clu",
        "pl+raku",
        "pl+groovy",
        "pl+python",
        "pl+smalltalk",
      ],
      influences: [
        "pl+ada",
        "pl+basic",
        "pl+c-plus-plus",
        "pl+clu",
        "pl+dylan",
        "pl+eiffel",
        "pl+lisp",
        "pl+lua",
        "pl+perl",
        "pl+python",
        "pl+smalltalk",
        "pl+clojure",
        "pl+coffeescript",
        "pl+crystal",
        "pl+d",
        "pl+elixir",
        "pl+groovy",
        "pl+julia",
        "pl+mirah",
        "pl+nu",
        "pl+ring",
        "pl+rust",
        "pl+swift",
      ],
      licenses: ["lic+ruby"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+objects", "para+reflective"],
      people: [["person+yukihiro-matsumoto", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+rust",
    "Rust",
    {
      name: "Rust",
      websites: [
        { kind: "wikipedia", title: "Rust", href: "https://en.wikipedia.org/wiki/Rust_(programming_language)" },
        { kind: "homepage", title: "foundation.rust-lang.org", href: "https://foundation.rust-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "2015-05-15", kind: "first" },
        { version: "1.78.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://blog.rust-lang.org/2024/05/02/Rust-1.78.0.html", title: "Announcing Rust 1.78.0" },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20231126231034/https://doc.rust-lang.org/reference/influences.html",
            title: "Influences - The Rust Reference",
          },
          { href: "https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html", title: "Uniqueness Types" },
        ],
        influenced: [
          { href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html", title: "Uniqueness Types" },
          {
            href: "https://web.archive.org/web/20200117143852/https://www.zdnet.com/article/microsoft-opens-up-rust-inspired-project-verona-programming-language-on-github/",
            title: "Microsoft opens up Rust-inspired Project Verona programming language on GitHub",
          },
          { href: "https://arxiv.org/abs/1710.07047", title: "1710.07047" },
          {
            href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
          {
            href: "https://github.com/vlang/v/blob/master/doc/docs.md#introduction",
            title: "V documentation (Introduction)",
          },
          {
            href: "https://www.infoworld.com/article/3113083/new-challenger-joins-rust-to-upend-c-language.html",
            title: "New challenger joins Rust to topple C language",
          },
        ],
      },
      extensions: [".rs", ".rlib"],
    },
    {
      dialects: ["pl+project-verona"],
      influenced: [
        "pl+nim",
        "pl+idris",
        "pl+standard-ml",
        "pl+scheme",
        "pl+whiley",
        "pl+c-plus-plus",
        "pl+erlang",
        "pl+alef",
        "pl+ruby",
        "pl+ballerina",
        "pl+ocaml",
        "pl+ml",
        "pl+project-verona",
        "pl+modula-3",
        "pl+newsqueak",
        "pl+crystal",
        "pl+cyclone",
        "pl+elm",
        "pl+c",
        "pl+racket",
        "pl+v",
        "pl+gleam",
        "pl+limbo",
        "pl+cilkopencilkcilk-plus",
      ],
      influences: [
        "pl+alef",
        "pl+c-sharp",
        "pl+c-plus-plus",
        "pl+cyclone",
        "pl+elm",
        "pl+erlang",
        "pl+haskell",
        "pl+limbo",
        "pl+newsqueak",
        "pl+ocaml",
        "pl+ruby",
        "pl+scheme",
        "pl+standard-ml",
        "pl+swift",
        "pl+idris",
        "pl+project-verona",
        "pl+spark",
        "pl+v",
        "pl+zig",
      ],
      licenses: ["lic+mit", "lic+apache-2"],
      paradigms: ["para+concurrent", "para+functional", "para+generic", "para+imperative", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+affine", "tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"],
    },
  );
}
