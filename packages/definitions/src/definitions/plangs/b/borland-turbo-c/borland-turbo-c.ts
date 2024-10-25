import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+borland-turbo-c", {
      name: "Borland Turbo C",
      description:
        "Turbo C is a discontinued integrated development environment (IDE) and compiler for the C programming language from Borland. First introduced in 1987, it was noted for its integrated development environment, small size, fast compile speed, comprehensive manuals and low price.",
      keywords: ["turbo c", "c programming", "borland", "ide", "compiler"],
      websites: [{ title: "Borland Turbo C", href: "https://en.wikipedia.org/wiki/Borland_Turbo_C", kind: "wikipedia" }],
      year: 1987,
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+compiled", "paradigm+imperative", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+interpreter"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
