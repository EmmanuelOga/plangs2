import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+dart")
    .merge({
      name: "Dart",
      websites: [
        { kind: "wikipedia", title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
      ],
      releases: [{ name: "Dart", version: "3.4.3", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+flutter"])
    .addInfluences(["pl+c", "pl+cpp", "pl+erlang", "pl+java", "pl+javascript", "pl+ruby", "pl+smalltalk"])
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://ghostarchive.org/varchive/youtube/20211221/huawCRlo9H4",
          title: "Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013",
        },
      ],
    })
    .addInfluence("pl+strongtalk", {
      refs: [
        {
          href: "https://www.youtube.com/watch?v=huawCRlo9H4&t=30m10s",
          title: "Web Languages and VMs: Fast Code is Always in Fashion. (V8, Dart) - Google I/O 2013",
        },
      ],
    })
    .addInfluence("pl+typescript", {
      refs: [
        {
          href: "https://news.dartlang.org/2012/10/the-dart-team-welcomes-typescript.html",
          title: "The Dart Team Welcomes TypeScript",
        },
      ],
    })
    .addPerson("person+lars-bak", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects"])
    .addParadigm("para+reflective", {
      refs: [
        {
          href: "https://books.google.com/books?id=EcvjAwAAQBAJ&q=dart%20multi-paradigm&pg=PA56",
          title: "Dart for Absolute Beginners",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+optional", "tsys+static", "tsys+strong"])
    .addTypeSystem("tsys+inferred", {
      refs: [{ href: "https://dart.dev/guides/language/sound-dart", title: "The Dart type system" }],
    });

  /**/

  g.buildPlang("pl+dartmouth-time-sharing-system")
    .merge({
      name: "Dartmouth Time Sharing System",
      websites: [
        {
          kind: "wikipedia",
          title: "Dartmouth Time Sharing System",
          href: "https://en.wikipedia.org/wiki/Dartmouth_Time_Sharing_System",
        },
      ],
    })
    .addInfluences(["pl+algol"]);

  /**/
}
