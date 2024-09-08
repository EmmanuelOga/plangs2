import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+k", {
      images: [],
      name: "K",
      description:
        "K is a proprietary array processing programming language developed by Arthur Whitney and commercialized by Kx Systems. The language serves as the foundation for kdb+, an in-memory, column-based database, and other related financial products. The language, originally developed in 1993, is a variant of APL and contains elements of Scheme. Advocates of the language emphasize its speed, facility in handling arrays, and expressive syntax.",
      websites: [
        { href: "http://kx.com/", title: "kx.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/K_(programming_language)", title: "K", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+apl", "pl+scheme"])
    .addParadigms(["para+array", "para+functional"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
