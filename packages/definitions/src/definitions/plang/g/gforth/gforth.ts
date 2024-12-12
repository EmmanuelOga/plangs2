import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gforth", {
      name: "Gforth",
      description:
        "Gforth is a free and portable implementation of the Forth programming language for Unix-like systems, Microsoft Windows, and other operating systems. A primary goal of Gforth is to adhere to the ANS Forth standard. Gforth is free software as part of the GNU Project.",
      keywords: ["forth", "gforth"],
      releases: [
        { version: "0.7.3", name: "Gforth 0.7.3", date: "2014-06-14" },
        { version: "0.7.9_20200213", name: "Gforth 0.7.9", date: "2020-02-13" },
        { version: "0.7.9", name: "Gforth 0.7.9", date: "2020-01-01" },
      ],
      extWikipediaPath: "Gforth",
      extHomeURL: "http://gnu.org/s/gforth/",
      created: "1992",
      isTranspiler: false,
      shortDesc: "Gforth is a free and portable implementation of the Forth language adhering to the ANS Forth standard.",
    })
    .relImplements.add("pl+forth")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+procedural", "para+stack-oriented")
    .relPlatforms.add("plat+cross", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+interpreters")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
