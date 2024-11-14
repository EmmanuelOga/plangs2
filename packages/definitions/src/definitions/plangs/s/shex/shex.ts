import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shex", {
      name: "ShEx",
      description:
        "Shape Expressions (ShEx) is a data modeling language specifically designed for the validation and description of RDF (Resource Description Framework) data. It is primarily used within semantic web technologies to define and enforce data structures and constraints for RDF graphs.",
      keywords: ["data validation", "rdf", "semantic web", "shex"],
      websites: [
        { title: "Shape Expressions Community Group", href: "https://www.w3.org/community/shex/", kind: "homepage" },
        { title: "ShEx - Wikipedia", href: "https://en.wikipedia.org/wiki/ShEx", kind: "wikipedia" },
      ],
      extensions: [".shex", ".sx"],
      year: 2014,
      isMainstream: false,
      releases: [
        { version: "2.0", name: "Shape Expressions Language 2.0", date: "2017-03-30" },
        { version: "2.1", name: "ShEx 2.1", date: "2018-11-21" },
      ],
    })
    .addLicenses(["license+cc-by"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+validation"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataq", "tag+framework", "tag+scripting", "tag+workflow"])
    .addWrittenIn(["pl+javascript", "pl+scala"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
