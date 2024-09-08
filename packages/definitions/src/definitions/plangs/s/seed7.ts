import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+seed7", {
      images: [],
      name: "Seed7",
      description:
        "Seed7 is an extensible general-purpose programming language designed by Thomas Mertes. It is syntactically similar to Pascal and Ada. Along with many other features, it provides an extension mechanism. Seed7 supports introducing new syntax elements and their semantics into the language, and allows new language constructs to be defined and written in Seed7. For example, programmers can introduce syntax and semantics of new statements and user defined operator symbols. The implementation of Seed7 differs significantly from that of languages with hard-coded syntax and semantics.",
      websites: [
        { href: "https://seed7.sourceforge.net/", title: "seed7.sourceforge.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Seed7", title: "Seed7", kind: "wikipedia" },
      ],
      extensions: [".s7i", ".sd7"],
      releases: [],
    })
    .addInfluencedBy(["pl+ada", "pl+c", "pl+c++", "pl+pascal"])
    .addLicenses(["lic+gnu-gpl", "lic+lgpl"])
    .addParadigms(["para+extensible", "para+imperative", "para+multi", "para+oop", "para+reflective", "para+structured"])
    .addPlatforms(["platf+bsd", "platf+cross", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong"]);
}
