import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+squirrel", {
      name: "Squirrel",
      description:
        "Squirrel is a high level imperative, object-oriented programming language, designed to be a lightweight scripting language that fits in the size, memory bandwidth, and real-time requirements of applications like video games.",
      firstAppeared: "2003-01-01",
      extensions: [".nut"],
      websites: [
        { href: "http://squirrel-lang.org/", title: "squirrel-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)", title: "Squirrel", kind: "wikipedia" },
      ],
      releases: [{ version: "3.2", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+c++", "pl+javascript", "pl+lua", "pl+moonscript", "pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+games", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"]);
}
