import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+joy", {
      name: "Joy",
      description:
        "The Joy programming language in computer science is a purely functional programming language that was produced by Manfred von Thun of La Trobe University in Melbourne, Australia. Joy is based on composition of functions rather than lambda calculus. It has turned out to have many similarities to Forth, due not to design but to an independent evolution and convergence. It was also inspired by the function-level programming style of John Backus's FP.",
      keywords: ["joy"],
      websites: [{ title: "Joy", href: "https://en.wikipedia.org/wiki/Joy_(programming_language)", kind: "wikipedia" }],
      firstAppeared: "2001-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+forth", "pl+fp", "pl+scheme"])
    .addParadigms(["paradigm+concatenative", "paradigm+functional", "paradigm+multi", "paradigm+stack-oriented"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
