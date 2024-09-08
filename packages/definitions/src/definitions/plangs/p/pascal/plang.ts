import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+pascal", {
      images: [],
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.",
      websites: [
        {
          href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)#ISO/IEC_10206:1990_Extended_Pascal",
          title: "Pascal",
          kind: "wikipedia",
        },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+algol", "pl+simula"])
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);
}