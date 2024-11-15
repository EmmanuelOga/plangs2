import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gforth", {
      name: "Gforth",
      description:
        "Gforth is a free and portable implementation of the Forth programming language for Unix-like systems, Microsoft Windows, and other operating systems. A primary goal of Gforth is to adhere to the ANS Forth standard. Gforth is free software as part of the GNU Project.",
      keywords: ["forth", "gforth"],
      year: 1992,
      isMainstream: false,
      releases: [
        { version: "0.7.3", name: "Gforth 0.7.3", date: "2014-06-14" },
        { version: "0.7.9_20200213", name: "Gforth 0.7.9", date: "2020-02-13" },
        { version: "0.7.9", name: "Gforth 0.7.9", date: "2020-01-01" },
      ],
      extWikipediaPath: "Gforth",
      extHomeURL: "http://gnu.org/s/gforth/",
    })
    .addImplements(["pl+forth"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+procedural", "paradigm+stack-oriented"])
    .addPlatforms(["plat+cross", "plat+dos", "plat+linux", "plat+windows"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}