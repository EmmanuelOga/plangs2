import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+brainfuck", {
      name: "Brainfuck",
      description:
        "Brainfuck is an esoteric programming language created in 1993 by Swiss student Urban Müller. Designed to be extremely minimalistic, the language consists of only eight simple commands, a data pointer and an instruction pointer. Its Turing completeness and simplicity make it a favorite among enthusiasts and a tool for teaching programming language concepts.",
      keywords: ["brainfuck"],
      websites: [
        { title: "brainfuck.org", href: "https://brainfuck.org/", kind: "homepage" },
        { title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck", kind: "wikipedia" },
      ],
      extensions: [".b", ".bf"],
      firstAppeared: "1993-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+esoteric", "paradigm+imperative", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+edu", "tag+interpreter"])
    .addTypeSystems(["tsys+untyped"]);
}
