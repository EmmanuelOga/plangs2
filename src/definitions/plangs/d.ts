import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+dart",
    "Dart",
    {
      name: "Dart",
      websites: [
        { kind: "wikipedia", title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)" },
        { kind: "homepage", title: "dart.dev", href: "https://dart.dev" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
      ],
      references: {
        paradigm: [
          {
            href: "https://books.google.com/books?id=EcvjAwAAQBAJ&q=dart%20multi-paradigm&pg=PA56",
            title: "Dart for Absolute Beginners",
          },
        ],
        first_appeared: [
          {
            href: "http://googlecode.blogspot.com/2011/10/dart-language-for-structured-web.html",
            title: "Dart: a language for structured web programming",
          },
        ],
        stable_release: [{ href: "https://github.com/dart-lang/sdk/releases/tag/3.4.3", title: "Release 3.4.3" }],
        typing_discipline: [{ href: "https://dart.dev/guides/language/sound-dart", title: "The Dart type system" }],
        influenced_by: [
          {
            href: "https://www.youtube.com/watch?v=huawCRlo9H4&t=30m10s",
            title: "Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013",
          },
          {
            href: "https://news.dartlang.org/2012/10/the-dart-team-welcomes-typescript.html",
            title: "The Dart Team Welcomes TypeScript",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2011-10-10", kind: "first" },
        { version: "3.4.3", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".dart"],
    },
    {
      implementations: ["pl+flutter"],
      influenced: ["pl+erlang", "pl+javascript", "pl+smalltalk"],
      influences: [
        "pl+c",
        "pl+c-plus-plus",
        "pl+c-sharp",
        "pl+erlang",
        "pl+java",
        "pl+javascript",
        "pl+ruby",
        "pl+smalltalk",
        "pl+strongtalk",
        "pl+typescript",
      ],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+objects", "para+reflective"],
      people: [["person+lars-bak", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+dataflex",
    "DataFlex",
    {
      name: "DataFlex",
      websites: [
        { kind: "wikipedia", title: "DataFlex", href: "https://en.wikipedia.org/wiki/Visual_DataFlex" },
        { kind: "homepage", title: "www.dataaccess.com/DataFlex", href: "http://www.DataAccess.com/DataFlex" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
        },
      ],
      references: {
        stable_release: [
          {
            href: "https://support.dataaccess.com/Forums/showthread.php?70883-DataFlex-2024-Released-Download-now!",
            title: "DataFlex 2024/24.0  Release",
          },
        ],
        operating_system: [
          { href: "https://www.pcmag.com/encyclopedia/term/40897/dataflex", title: "Definition of: DataFlex" },
          { href: "http://johanbroddfelt.se/installing_dataflex-30", title: "Installing DataFlex" },
        ],
        license: [
          {
            href: "https://www.dataaccess.com/resources/licensing/dataflex-studio-license-978",
            title: "“DataFlex License Info”",
          },
        ],
      },
      releases: [{ version: "24.0", date: "2024-03-13", kind: "stable" }],
    },
    {
      licenses: ["lic+commercial", "lic+proprietary-software"],
      people: [["person+data-access-worldwide", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+datalog",
    "Datalog",
    {
      name: "Datalog",
      websites: [{ kind: "wikipedia", title: "Datalog", href: "https://en.wikipedia.org/wiki/Datalog" }],
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+prolog", "pl+sql-(structured-query-language)"],
      influences: ["pl+prolog", "pl+sql"],
      paradigms: ["para+declarative", "para+logic"],
      typeSystems: ["tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+delphi",
    "Delphi",
    {
      name: "Delphi",
      websites: [
        { kind: "wikipedia", title: "Delphi", href: "https://en.wikipedia.org/wiki/Delphi_(software)" },
        {
          kind: "homepage",
          title: "www.embarcadero.com/products/delphi",
          href: "https://www.embarcadero.com/products/delphi",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "12.1", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://blogs.embarcadero.com/announcing-the-availability-of-rad-studio-12-1-athens/",
            title: "Announcing the Availability of RAD Studio 12.1 Athens",
          },
        ],
        operating_system: [
          {
            href: "https://web.archive.org/web/20200806012405/http://docwiki.embarcadero.com/RADStudio/Sydney/en/Installation_Notes#Operating_System_Requirements",
            title: "Installation Notes - Operating System Requirements",
          },
        ],
      },
    },
    {
      dialects: ["pl+object-pascal", "pl+pascal"],
      influenced: ["pl+c-plus-plusbuilder", "pl+oxygene"],
      licenses: ["lic+freemium"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+dylan",
    "Dylan",
    {
      name: "Dylan",
      websites: [
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)" },
        { kind: "homepage", title: "opendylan.org", href: "https://opendylan.org/" },
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "2022.1", date: "2022-11-28", kind: "stable" },
      ],
      extensions: ["dylan", "lid"],
      references: {
        influenced: [
          {
            href: "https://increment.com/programming-languages/goldilocks-language-history-of-julia/",
            title: "Julia: The Goldilocks language",
          },
        ],
      },
    },
    {
      influenced: [
        "pl+common-lisp",
        "pl+eulisp",
        "pl+julia",
        "pl+lasso",
        "pl+lisp",
        "pl+newtonscript",
        "pl+oaklisp",
        "pl+python",
        "pl+ruby",
        "pl+scheme",
        "pl+smalltalk",
      ],
      influences: ["pl+algol", "pl+clos", "pl+eulisp", "pl+julia", "pl+lasso", "pl+python", "pl+ruby", "pl+scheme"],
      paradigms: ["para+functional", "para+multi-paradigm", "para+objects"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+gradual", "tsys+strong"],
    },
  );
}
