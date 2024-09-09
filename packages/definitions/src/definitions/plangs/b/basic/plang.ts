import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+basic", {
      name: "BASIC",
      description:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1963. They wanted to enable students in non-scientific fields to use computers. At the time, nearly all computers required writing custom software, which only scientists and mathematicians tended to learn.",
      firstAppeared: "1964-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/BASIC", title: "BASIC", kind: "wikipedia" }],
      images: [{ kind: "other", title: "BASIC", url: "/images/plangs/b/basic/other.png" }],
    })
    .addInfluencedBy(["pl+fortran"])
    .addParadigms(["para+oop", "para+procedural", "para+structured"]);
}
