import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+raku", {
      name: "Raku",
      description:
        "Raku is a member of the Perl family of programming languages. Formerly named Perl 6, it was renamed in October 2019. Raku introduces elements of many modern and historical languages. Compatibility with Perl was not a goal, though a compatibility mode is part of the specification. The design process for Raku began in 2000.",
      keywords: ["raku", "perl6"],
      websites: [
        { title: "raku.org", href: "http://raku.org/", kind: "homepage" },
        { title: "Raku", href: "https://en.wikipedia.org/wiki/Raku_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".raku", ".rakudoc", ".rakumod", ".rakutest", ".t"],
      year: 2015,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "2021.03", name: "Raku 2021.03", date: "2021-03-01" },
        { version: "2022.06", name: "Raku 2022.06", date: "2022-06-01" },
        { version: "2023.08", name: "Raku 2023.08", date: "2023-08-01" },
      ],
    })
    .addDialectOf(["pl+perl"])
    .addInfluencedBy(["pl+haskell", "pl+javascript", "pl+perl", "pl+ruby"])
    .addLicenses(["license+artistic"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual"]);
}
