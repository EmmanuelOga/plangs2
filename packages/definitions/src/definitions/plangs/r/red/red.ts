import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+red", {
      name: "Red",
      description:
        "Red is a programming language designed to overcome the limitations of the programming language Rebol. Red was introduced in 2011 by Nenad Rakočević, and is both an imperative and functional programming language. Its syntax and general usage overlaps that of the interpreted Rebol language.",
      keywords: ["red", "rebol", "multi-paradigm", "embedded"],
      websites: [
        { title: "www.red-lang.org", href: "https://www.red-lang.org/", kind: "homepage" },
        { title: "Red", href: "https://en.wikipedia.org/wiki/Red_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".red", ".reds"],
      year: 2011,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.6.5", name: "Red 0.6.5", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+lua", "pl+rebol"])
    .addLicenses(["license+boost", "license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+symbolic"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+dataflow", "tag+flow", "tag+interpreter", "tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"])
    .addWrittenIn(["pl+c", "pl+rebol"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
