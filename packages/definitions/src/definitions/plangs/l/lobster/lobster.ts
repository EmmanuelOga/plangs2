import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+lobster", {
      name: "Lobster",
      description:
        "Lobster is a statically type-checked programming language primarily focused on real-time, high-performance games and applications. It features a unique memory model that mixes manual and automatic memory management with optional reference counting.",
      keywords: ["lobster"],
      websites: [
        { title: "Lobster", href: "https://strlen.com/lobster/", kind: "homepage" },
        { title: "Lobster on GitHub", href: "https://github.com/aardappel/lobster", kind: "repository" },
      ],
      extensions: [".lobster"],
      firstAppeared: "2016-01-01",
      releases: [{ version: "1.0", name: "Initial Release", date: "2016-01-01" }],
    })
    .addInfluencedBy(["pl+cpp", "pl+python"])
    .addLicenses(["license+zlib"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+games", "tag+real-time", "tag+scripting"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);
}
