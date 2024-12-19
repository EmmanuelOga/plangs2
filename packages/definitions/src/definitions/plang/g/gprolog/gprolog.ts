import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gprolog", {
      name: "GNU Prolog",
      description:
        "A Prolog implementation designed to be fast and resource-efficient, providing both an interactive interpreter and a native-code compiler.",
      shortDesc: "A Prolog implementation with an interpreter and native compiler.",
      created: "1999",
      extensions: [".pro"],
      extGithubPath: "didoudiaz/gprolog",
      extHomeURL: "http://www.gprolog.org/",
      extWikipediaPath: "GNU_Prolog",
      isTranspiler: false,
      keywords: ["constraint", "interpreter", "native-code"],
    })
    .relImplements.add("pl+prolog")
    .relInfluencedBy.add("pl+swi-prolog")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+constraint", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
