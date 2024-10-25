import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+netlogo", {
      name: "NetLogo",
      description:
        "NetLogo is a programming language and integrated development environment (IDE) for agent-based modeling. It is particularly suited for modeling complex systems developing over time.",
      keywords: ["netlogo"],
      websites: [
        { title: "ccl.northwestern.edu/netlogo", href: "http://ccl.northwestern.edu/netlogo", kind: "other" },
        { title: "NetLogo", href: "https://en.wikipedia.org/wiki/NetLogo", kind: "wikipedia" },
      ],
      extensions: [".nlogo", ".nlogo3d", ".nls"],
      year: 1999,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "6.4.0", name: "NetLogo 6.4.0", date: "2023-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+logo"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+agents", "paradigm+educational", "paradigm+multi", "paradigm+procedural", "paradigm+simulation"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+edu", "tag+interpreter", "tag+modeling", "tag+uml"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+java", "pl+scala"]);
}
