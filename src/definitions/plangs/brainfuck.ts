import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+brainfuck",
    "Brainfuck",
    {
      name: "Brainfuck",
      websites: [{ kind: "wikipedia", title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck" }],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
      extensions: [".b", ".bf"],
    },
    {
      dialects: ["pl+p--"],
      influenced: ["pl+malbolge", "pl+p--"],
      influences: ["pl+esoteric-programming-language", "pl+malbolge", "pl+p--"],
      paradigms: ["para+esoteric", "para+imperative", "para+structured"],
      people: [["person+urban-muller", "designer"]],
    },
  );

  /**/
}
