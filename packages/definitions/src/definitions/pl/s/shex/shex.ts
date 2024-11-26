import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shex", {
      name: "ShEx",
      description:
        "Shape Expressions (ShEx) is a data modeling language specifically designed for the validation and description of RDF (Resource Description Framework) data. It is primarily used within semantic web technologies to define and enforce data structures and constraints for RDF graphs.",
      keywords: ["data validation", "rdf", "semantic web", "shex"],
      extensions: [".shex", ".sx"],
      releases: [
        { version: "2.0", name: "Shape Expressions Language 2.0", date: "2017-03-30" },
        { version: "2.1", name: "ShEx 2.1", date: "2018-11-21" },
      ],
      extWikipediaPath: "ShEx",
      extHomeURL: "https://www.w3.org/community/shex/",
      created: "2014",
    })
    .relLicense.add(["lic+cc-by"])
    .relParadigm.add(["para+declarative", "para+dsl", "para+validation"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+dataq", "tag+framework", "tag+scripting", "tag+workflow"])
    .relWrittenInPlang.add(["pl+javascript", "pl+scala"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
