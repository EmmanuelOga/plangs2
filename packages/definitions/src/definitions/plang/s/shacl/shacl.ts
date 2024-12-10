import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shacl", {
      name: "SHACL",
      description:
        "Shapes Constraint Language (SHACL) is a World Wide Web Consortium (W3C) standard language for describing Resource Description Framework (RDF) graphs. SHACL has been designed to enhance the semantic and technical interoperability layers of ontologies expressed as RDF graphs.",
      keywords: ["shacl"],
      extensions: [".shacl"],
      releases: [{ version: "1.0", name: "SHACL 1.0", date: "2017-07-20" }],
      extWikipediaPath: "SHACL",
      extHomeURL: "https://www.w3.org/TR/shacl/",
      created: "2015",
    })
    .relInfluencedBy.add("pl+shex")
    .relParadigms.add("para+declarative", "para+dsl", "para+validation")
    .relTags.add("tag+dbms", "tag+framework")
    .relTypeSystems.add("tsys+structural");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
