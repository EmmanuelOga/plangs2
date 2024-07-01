import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+programming-language-for-business")
    .merge({
      name: "Programming Language for Business",
      websites: [
        { kind: "wikipedia", title: "PL/B", href: "https://en.wikipedia.org/wiki/Programming_Language_for_Business" },
      ],
      extensions: [".cb", ".pgm", ".pls", ".ps", ".rl"],
    })
    .addInfluence("pl+cobol", {
      refs: [
        {
          href: "https://www.sysmaker.com/infopro/x3j15/whatart.htm#why",
          title: "What is PL/B - The Programming Language for Business?",
        },
      ],
    })
    .addParadigms(["para+imperative"])
    .addTypeSystems(["tsys+static"])
    .addTypeSystem("tsys+strong", {
      refs: [{ href: "http://www.sysmaker.com/infopro/plb.htm", title: "Programming Language for Business" }],
    });

  /**/
}
