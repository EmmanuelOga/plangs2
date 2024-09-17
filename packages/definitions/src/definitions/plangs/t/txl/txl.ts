import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+txl", {
      name: "TXL",
      description:
        'TXL is a special-purpose programming language originally designed by Charles Halpern-Hamu and James Cordy at the University of Toronto in 1985.  The acronym "TXL" originally stood for "Turing eXtender Language" after the language\'s original purpose, the specification and rapid prototyping of variants and extensions of the Turing programming language, but no longer has any meaningful interpretation.',
      websites: [
        { href: "https://www.txl.ca/", title: "www.txl.ca", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/TXL_(programming_language)", title: "TXL", kind: "wikipedia" },
      ],
    })
    .addParadigms(["paradigm+pattern-matching", "paradigm+rewriting"])
    .addTags(["tag+analysis", "tag+app", "tag+industrial", "tag+interpreter"]);
}
