import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+picat", {
      name: "Picat",
      description:
        "A logic-based, multi-paradigm language that integrates functional, logic, and imperative programming features designed for general-purpose applications, especially known for its modeling and constraint-solving capabilities.",
      shortDesc: "A multi-paradigm language integrating functional, logic, and imperative programming features.",
      created: "2013",
      extensions: [".pi", ".picat"],
      extGithubPath: "",
      extHomeURL: "http://picat-lang.org/",
      isTranspiler: false,
      keywords: ["constraint-solving", "logic-based", "modeling", "multi-paradigm"],
    })
    .relInfluencedBy.add("pl+prolog", "pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+constraint", "para+functional", "para+general-purpose", "para+imperative", "para+logic", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+modeling")
    .relTypeSystems.add("tsys+dynamic");
}
