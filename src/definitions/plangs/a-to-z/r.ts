import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
      influences: ["pl+haskell", "pl+javascript", "pl+perl", "pl+ruby", "pl+smalltalk"],
      licenses: ["lic+artistic-2", "lic+gpl"],
      paradigms: ["para+multi-paradigm"],
      people: [["person+larry-wall", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual"],
    },
  );

  /**/

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

  /**/

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
      platforms: ["platf+cross-platform", "platf+plan9", "platf+unix"],
      typeSystems: ["tsys+weak"],
    },
  );

  /**/

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
      influences: ["pl+javascript", "pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi-paradigm", "para+objects"],
      people: [["person+jordan-walke", "designer"]],
    },
  );

  /**/

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
      influenced: ["pl+forth", "pl+lisp", "pl+logo", "pl+red", "pl+self", "pl+ucblogo"],
      influences: ["pl+forth", "pl+json", "pl+lisp", "pl+logo", "pl+red", "pl+self"],
      licenses: ["lic+apache-2", "lic+freely-redistributable-software"],
      paradigms: [
        "para+data-driven",
        "para+functional",
        "para+imperative",
        "para+language-oriented",
        "para+prototypes",
      ],
      people: [["person+carl-sassenrath", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      influenced: ["pl+lisp", "pl+rebol", "pl+scala"],
      influences: ["pl+lisp", "pl+lua", "pl+rebol", "pl+scala"],
      licenses: ["lic+boost", "lic+modified-bsd"],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+symbolic"],
      people: [["person+nenad-rakocevic", "designer"]],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
    },
  );

  /**/

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
      influenced: ["pl+python", "pl+qml", "pl+ruby"],
      influences: [
        "pl+basic",
        "pl+c",
        "pl+c-sharp",
        "pl+dragonlang",
        "pl+lua",
        "pl+python",
        "pl+qml",
        "pl+ruby",
        "pl+simplelang",
        "pl+xbase",
      ],
      licenses: ["lic+mit"],
      paradigms: [
        "para+declarative",
        "para+functional",
        "para+imperative",
        "para+multi-paradigm",
        "para+natural-language",
        "para+objects",
        "para+reflective",
      ],
      people: [["person+mahmoud-samir-fayed", "designer"]],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/

  lb.define(
    "pl+rpython",
    "RPython",
    {
      name: "RPython",
      websites: [{ kind: "wikipedia", title: "RPython", href: "https://en.wikipedia.org/wiki/PyPy#RPython" }],
    },
    { dialects: ["pl+python"] },
  );

  /**/
}
