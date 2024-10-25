import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+alice", {
      name: "Alice",
      description:
        "Alice is an object-based educational programming language with an integrated development environment (IDE). Alice uses a drag and drop environment to create computer animations using 3D models. The software was developed first at University of Virginia in 1994, then Carnegie Mellon (from 1997), by a research group led by Randy Pausch.",
      keywords: ["alice", "educational", "3d animation", "visual programming"],
      websites: [
        { title: "www.alice.org", href: "http://www.alice.org/", kind: "homepage" },
        { title: "Alice", href: "https://en.wikipedia.org/wiki/Alice_(software)", kind: "wikipedia" },
      ],
      extensions: [],
      year: 2000,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "3.6.0.3", name: "Alice 3.6.0.3", date: "2021-01-01" }],
    })
    .addDialectOf(["pl+ml", "pl+standard-ml"])
    .addInfluencedBy(["pl+ml"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+concurrent",
      "paradigm+constraint",
      "paradigm+distributed",
      "paradigm+educational",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+visual",
    ])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+3dg", "tag+edu", "tag+flow", "tag+interpreter", "tag+testing"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
