import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+forth", {
      name: "Forth",
      description:
        'Forth is a stack-oriented programming language and interactive integrated development environment designed by Charles H. "Chuck" Moore and first used by other programmers in 1970. Although not an acronym, the language\'s name in its early years was often spelled in all capital letters as FORTH. The FORTH-79 and FORTH-83 implementations, which were not written by Moore, became de facto standards, and an official technical standard of the language was published in 1994 as ANS Forth. A wide range of Forth derivatives existed before and after ANS Forth. The free and open-source software Gforth implementation is actively maintained, as are several commercially supported systems.',
      firstAppeared: "1970-01-01",
      extensions: [".4th", ".f", ".forth[]", ".fs", ".fth"],
      websites: [
        { href: "https://forth-standard.org/", title: "forth-standard.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Forth_(programming_language)", title: "Forth", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+lisp"])
    .addParadigms(["para+concatenative", "para+procedural", "para+reflective"]);
}
