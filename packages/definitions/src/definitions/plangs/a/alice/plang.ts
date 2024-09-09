import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+alice", {
      images: [{ kind: "screenshot", title: "Alice", url: "/images/plangs/a/alice/screenshot.jpg" }],
      name: "Alice",
      description:
        "Alice is an object-based educational programming language with an integrated development environment (IDE). Alice uses a drag and drop environment to create computer animations using 3D models. The software was developed first at University of Virginia in 1994, then Carnegie Mellon (from 1997), by a research group led by Randy Pausch.",
      websites: [
        { href: "http://www.alice.org/", title: "www.alice.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Alice_(software)", title: "Alice", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "3.6.0.3", date: "2021-01-01" }],
    })
    .addDialectOf(["pl+ml", "pl+standard-ml"])
    .addInfluencedBy(["pl+ml"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+concurrent", "para+constraint", "para+distributed", "para+functional", "para+imperative", "para+multi"])
    .addPlatforms(["platf+cross", "platf+java"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
