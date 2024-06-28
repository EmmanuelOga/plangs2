import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
      influences: [
        "pl+c",
        "pl+c-sharp",
        "pl+cpp",
        "pl+erlang",
        "pl+java",
        "pl+javascript",
        "pl+ruby",
        "pl+smalltalk",
        "pl+strongtalk",
        "pl+typescript",
      ],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      people: [["person+lars-bak", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"],
    },
  );
}
