import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+frink", {
      name: "Frink",
      description:
        "Frink is a computer programming language focused on performing physical calculations while tracking units of measure, ensuring that calculations have the right dimensions and that the answers are meaningful.",
      keywords: ["calculation", "frink", "measurement", "units"],
      extensions: [".frink"],
      extWikipediaPath: "Frink_(programming_language)",
      extHomeURL: "https://frinklang.org/",
      created: "2001",
    })
    .relLicenses.add("lic+artistic")
    .relParadigms.add("para+functional", "para+imperative", "para+oop")
    .relPlatforms.add("plat+android", "plat+cross", "plat+java")
    .relTags.add("tag+interpreters", "tag+numeric", "tag+sci", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
