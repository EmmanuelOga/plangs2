import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+seed7", {
      name: "Seed7",
      description:
        "Seed7 is an extensible general-purpose programming language designed by Thomas Mertes. It is syntactically similar to Pascal and Ada. Along with many other features, it provides an extension mechanism. Seed7 supports introducing new syntax elements and their semantics into the language, and allows new language constructs to be defined and written in Seed7. For example, programmers can introduce syntax and semantics of new statements and user defined operator symbols. The implementation of Seed7 differs significantly from that of languages with hard-coded syntax and semantics.",
      firstAppeared: "2005-01-01",
      extensions: [".s7i", ".sd7"],
      websites: [
        { href: "https://seed7.sourceforge.net/", title: "seed7.sourceforge.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Seed7", title: "Seed7", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+ada", "pl+c", "pl+c++", "pl+pascal"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+extensible", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective", "paradigm+structured"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+app", "tag+compiler", "tag+dbms", "tag+interpreter", "tag+ray-tracer"])
    .addTypeSystems(["tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong"]);
}
