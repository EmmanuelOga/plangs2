import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+k", {
      name: "K",
      description:
        "K is a proprietary array processing programming language developed by Arthur Whitney and commercialized by Kx Systems. K is the foundation for kdb+, an in-memory, column-based database, and other financial products. Introduced in 1993, K is influenced by APL and Scheme, and is noted for its speed, powerful array handling capabilities, and concise syntax.",
      keywords: ["kdb", "kdb+"],
      extWikipediaPath: "K_(programming_language)",
      extHomeURL: "http://kx.com/",
      created: "1993",
    })
    .relInfluencedBy.add(["pl+apl", "pl+scheme"])
    .relParadigms.add(["paradigm+array", "paradigm+functional"])
    .relPlatforms.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+analysis", "tag+app", "tag+dbms", "tag+interpreters"])
    .relTsys.add(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
