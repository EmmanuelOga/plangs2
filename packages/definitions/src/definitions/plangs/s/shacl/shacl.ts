import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shacl", {
      name: "SHACL",
      description:
        "Shapes Constraint Language (SHACL)  is a World Wide Web Consortium (W3C) standard language for describing Resource Description Framework (RDF) graphs. SHACL has been designed to enhance the semantic and technical interoperability layers of ontologies expressed as RDF graphs.",
      websites: [
        { href: "https://www.w3.org/TR/shacl/", title: "www.w3.org/TR/shacl/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/SHACL", title: "SHACL", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+shex"]);
}
