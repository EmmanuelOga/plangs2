import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+netlogo", {
      name: "NetLogo",
      description: "NetLogo is a programming language and integrated development environment (IDE) for agent-based modeling.",
      firstAppeared: "1999-01-01",
      extensions: [".nlogo", ".nlogo3d", ".nls"],
      websites: [
        { href: "http://ccl.northwestern.edu/netlogo", title: "ccl.northwestern.edu/netlogo", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/NetLogo", title: "NetLogo", kind: "wikipedia" },
      ],
      releases: [{ version: "6.4.0", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "NetLogo", url: "/images/plangs/n/netlogo/logo.png" }],
    })
    .addDialectOf(["pl+lisp"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+agents", "paradigm+educational", "paradigm+multi", "paradigm+procedural", "paradigm+simulation"])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+modeling", "tag+uml"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+scala"]);
}
