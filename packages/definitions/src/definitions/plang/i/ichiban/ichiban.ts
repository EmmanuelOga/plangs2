import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ichiban", {
      name: "Ichiban Prolog",
      description: "An embeddable interpreter for ISO Prolog, designed for integration within Go applications.",
      shortDesc: "An embeddable ISO Prolog interpreter in Go.",
      created: "2021",
      extensions: [".plg"],
      extGithubPath: "ichiban/prolog",
      isTranspiler: false,
      keywords: ["embeddable", "go", "interpreter", "prolog"],
    })
    .relImplements.add("pl+prolog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+embedded", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+embedded", "tag+scripting")
    .relWrittenWith.add("pl+go");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
