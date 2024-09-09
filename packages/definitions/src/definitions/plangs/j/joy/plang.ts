import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+joy", {
      name: "Joy",
      description:
        "The Joy programming language in computer science is a purely functional programming language that was produced by Manfred von Thun of La Trobe University in Melbourne, Australia. Joy is based on composition of functions rather than lambda calculus. It has turned out to have many similarities to Forth, due not to design but to an independent evolution and convergence. It was also inspired by the function-level programming style of John Backus's FP.",
      firstAppeared: "2001-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/Joy_(programming_language)", title: "Joy", kind: "wikipedia" }],
    })
    .addInfluencedBy(["pl+forth", "pl+fp", "pl+scheme"])
    .addParadigms(["para+concatenative", "para+functional", "para+multi", "para+stack-oriented"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
