import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+frink", {
      name: "Frink",
      description:
        "Frink is a computer programming language focused on performing physical calculations while tracking units of measure, ensuring that calculations have the right dimensions and that the answers are meaningful.",
      keywords: ["calculation", "frink", "measurement", "units"],
      extensions: [".frink"],
      year: 2001,
      extWikipediaPath: "Frink_(programming_language)",
      extHomeURL: "https://frinklang.org/",
    })
    .addLicenses(["license+artistic"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+cross", "plat+java"])
    .addTags(["tag+interpreters", "tag+numeric", "tag+sci", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
