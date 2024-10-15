import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shen", {
      name: "Shen",
      description:
        "Shen is a functional programming language that combines logic programming, lambda calculus, and pattern matching into a powerful language for AI and other complex application domains.",
      keywords: ["shen", "functional", "logic programming", "lambda calculus"],
      websites: [
        { title: "Shen Language Website", href: "https://shenlanguage.org/", kind: "homepage" },
        { title: "Shen Wikipedia", href: "https://en.wikipedia.org/wiki/Shen_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".shen"],
      firstAppeared: "2011-10-01",
      releases: [{ version: "22.2", name: "Shen 22.2", date: "2023-08-01" }],
    })
    .addInfluencedBy(["pl+assembler", "pl+prolog", "pl+scheme"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+logic", "paradigm+multi", "paradigm+symbolic"])
    .addPlatforms(["plat+cross", "plat+java", "plat+linux", "plat+mac", "plat+web", "plat+windows"])
    .addTags(["tag+automation", "tag+cas", "tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+manifest", "tsys+polymorphic", "tsys+strong"])
    .addWrittenIn(["pl+scheme"]);
}
