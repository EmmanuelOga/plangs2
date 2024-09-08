import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+netlogo", {
      images: [{ title: "NetLogo", kind: "logo", url: "/images/plangs/n/netlogo/main.png" }],
      name: "NetLogo",
      description: "NetLogo is a programming language and integrated development environment (IDE) for agent-based modeling.",
      websites: [
        { href: "http://ccl.northwestern.edu/netlogo", title: "ccl.northwestern.edu/netlogo", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/NetLogo", title: "NetLogo", kind: "wikipedia" },
      ],
      extensions: [".nlogo", ".nlogo3d", ".nls"],
      releases: [{ version: "6.4.0", date: "2023-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addLicenses(["lic+gnu-gpl"])
    .addParadigms(["para+agents", "para+educational", "para+multi", "para+procedural", "para+simulation"])
    .addPlatforms(["platf+cross", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+scala"]);
}
