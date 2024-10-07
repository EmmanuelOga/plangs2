import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+basic", {
      name: "BASIC",
      description:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1963. They wanted to enable students in non-scientific fields to use computers. At the time, nearly all computers required writing custom software, which only scientists and mathematicians tended to learn.",
      firstAppeared: "1964-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/BASIC", title: "BASIC", kind: "wikipedia" }],
    })
    .addInfluencedBy(["pl+fortran"])
    .addParadigms(["paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+embedded",
      "tag+games",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+ray-tracer",
      "tag+ui",
      "tag+wavelet",
    ]);
}
