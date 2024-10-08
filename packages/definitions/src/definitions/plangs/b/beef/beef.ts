import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+beef", {
      name: "Beef",
      description:
        "Beef is a compiled, high-performance language that's natively stateful and designed for system programming with a focus on performance and ease of use.",
      keywords: ["beef", "system programming", "compiled", "performance"],
      websites: [
        { title: "BeefLang Official Website", href: "https://www.beeflang.org/", kind: "homepage" },
        { title: "BeefLang GitHub Repository", href: "https://github.com/beefytech/Beef", kind: "repository" },
      ],
      extensions: [".bf"],
      firstAppeared: "2020-01-01",
      releases: [{ version: "0.42.8", name: "Beef 0.42.8", date: "2023-09-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+c++", "pl+delphi", "pl+rust"])
    .addLicenses(["license+zlib"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+games"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);
}
