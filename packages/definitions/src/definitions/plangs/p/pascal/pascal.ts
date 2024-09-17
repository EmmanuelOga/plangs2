import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.",
      firstAppeared: "1970-01-01",
      websites: [
        {
          href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)#ISO/IEC_10206:1990_Extended_Pascal",
          title: "Pascal",
          kind: "wikipedia",
        },
      ],
    })
    .addInfluencedBy(["pl+algol", "pl+simula"])
    .addParadigms(["paradigm+imperative", "paradigm+structured"])
    .addTags([
      "tag+4gl",
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+framework",
      "tag+games",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+rad",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);
}
