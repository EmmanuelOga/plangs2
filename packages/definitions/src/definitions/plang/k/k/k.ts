import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+k", {
      name: "K",
      description:
        "Proprietary array processing programming language developed by Arthur Whitney and commercialized by Kx Systems. K serves as the basis for kdb+, an in-memory, column-based database for financial applications, and is influenced by APL and Scheme, renowned for its speed and concise syntax.",
      shortDesc: "Proprietary array language, foundation of kdb+, developed by Kx Systems.",
      created: "1993",
      extensions: [".k"],
      extHomeURL: "https://code.kx.com/",
      extWikipediaPath: "K_(programming_language)",
      isTranspiler: false,
      keywords: ["kdb", "kdb+"],
    })
    .relInfluencedBy.add("pl+apl", "pl+scheme")
    .relLicenses.add("lic+proprietary")
    .relParadigms.add("para+array", "para+functional")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+analysis", "tag+app", "tag+dbms", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
