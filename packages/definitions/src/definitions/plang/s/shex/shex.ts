import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shex", {
      name: "ShEx",
      description: "Shape Expressions (ShEx) is a data modeling language used for describing and validating RDF data structures.",
      shortDesc: "Shape Expressions (ShEx) is used for RDF data validation and description.",
      created: "2012",
      extensions: [".shex", ".sx"],
      extHomeURL: "http://shex.io",
      extWikipediaPath: "ShEx",
      isTranspiler: false,
      keywords: ["rdf", "shex", "validation"],
      releases: [
        { version: "2.0", name: "Shape Expressions Language 2.0", date: "2017-03-30" },
        { version: "2.1", name: "ShEx 2.1", date: "2018-11-21" },
      ],
    })
    .relLicenses.add("lic+cc-by")
    .relParadigms.add("para+declarative", "para+dsl", "para+validation")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataq", "tag+framework", "tag+rdf", "tag+scripting", "tag+workflow")
    .relWrittenWith.add("pl+javascript", "pl+scala");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
