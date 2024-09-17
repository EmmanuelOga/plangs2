import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scheme", {
      name: "Scheme",
      description:
        "Scheme is a dialect of the Lisp family of programming languages. Scheme was created during the 1970s at the MIT Computer Science and Artificial Intelligence Laboratory (MIT AI Lab) and released by its developers, Guy L. Steele and Gerald Jay Sussman, via a series of memos now known as the Lambda Papers. It was the first dialect of Lisp to choose lexical scope and the first to require implementations to perform tail-call optimization, giving stronger support for functional programming and associated techniques such as recursive algorithms. It was also one of the first programming languages to support first-class continuations. It had a significant influence on the effort that led to the development of Common Lisp.",
      firstAppeared: "1975-01-01",
      extensions: [".scm", ".ss"],
      websites: [
        { href: "https://www.scheme.org/", title: "www.scheme.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)", title: "Scheme", kind: "wikipedia" },
      ],
      images: [{ kind: "other", title: "Scheme", url: "/images/plangs/s/scheme/other.png" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+algol", "pl+lisp", "pl+mzscheme", "pl+racket"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+metaprogramming", "paradigm+multi"])
    .addTags(["tag+analysis", "tag+app", "tag+compiler", "tag+if", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);
}
