import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
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
    .addLicenses(["lic+gnu-gpl"])
    .addParadigms(["para+agents", "para+educational", "para+multi", "para+procedural", "para+simulation"])
    .addPlatforms(["platf+cross", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+scala"]);
}
