import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
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
    .addInfluencedBy(["pl+c++", "pl+javascript", "pl+lua", "pl+moonscript"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+oop", "para+scripting"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic"]);
}
