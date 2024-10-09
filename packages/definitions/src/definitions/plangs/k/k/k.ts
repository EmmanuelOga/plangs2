import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+k", {
      name: "K",
      description:
        "K is a proprietary array processing programming language developed by Arthur Whitney and commercialized by Kx Systems. The language serves as the foundation for kdb+, an in-memory, column-based database, and other related financial products. The language, originally developed in 1993, is a variant of APL and contains elements of Scheme. Advocates of the language emphasize its speed, facility in handling arrays, and expressive syntax.",
      keywords: ["kdb+", "kdb"],
      websites: [
        { title: "kx.com", href: "http://kx.com/", kind: "homepage" },
        { title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)", kind: "wikipedia" },
      ],
      firstAppeared: "1993-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+apl", "pl+scheme"])
    .addParadigms(["paradigm+array", "paradigm+functional"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+app", "tag+dbms", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
