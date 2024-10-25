import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shacl", {
      name: "SHACL",
      description:
        "Shapes Constraint Language (SHACL) is a World Wide Web Consortium (W3C) standard language for describing Resource Description Framework (RDF) graphs. SHACL has been designed to enhance the semantic and technical interoperability layers of ontologies expressed as RDF graphs.",
      keywords: ["shacl"],
      websites: [
        { title: "SHACL", href: "https://www.w3.org/TR/shacl/", kind: "homepage" },
        { title: "SHACL", href: "https://en.wikipedia.org/wiki/SHACL", kind: "wikipedia" },
      ],
      extensions: [".shacl"],
      year: 2017,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.0", name: "SHACL 1.0", date: "2017-07-20" }],
    })
    .addInfluencedBy(["pl+shex"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+validation"])
    .addTags(["tag+dbms", "tag+framework"])
    .addTypeSystems(["tsys+structural"]);
}
