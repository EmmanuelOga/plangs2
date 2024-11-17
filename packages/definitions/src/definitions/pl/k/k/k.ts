import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+k", {"name":"K","description":"K is a proprietary array processing programming language developed by Arthur Whitney and commercialized by Kx Systems. K is the foundation for kdb+, an in-memory, column-based database, and other financial products. Introduced in 1993, K is influenced by APL and Scheme, and is noted for its speed, powerful array handling capabilities, and concise syntax.","keywords":["kdb","kdb+"],"year":1993,"isMainstream":false,"extWikipediaPath":"K_(programming_language)","extHomeURL":"http://kx.com/"})
    .addInfluencedBy(["pl+apl","pl+scheme"])
    .addParadigms(["paradigm+array","paradigm+functional"])
    .addPlatforms(["plat+cross","plat+linux","plat+windows"])
    .addTags(["tag+analysis","tag+app","tag+dbms","tag+interpreter"])
    .addTypeSystems(["tsys+dynamic","tsys+strong"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  