import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+brainfuck", {
      name: "Brainfuck",
      description:
        "Brainfuck is an esoteric programming language created in 1993 by Swiss student Urban Müller. Designed to be extremely minimalistic, the language consists of only eight simple commands, a data pointer and an instruction pointer.",
      firstAppeared: "1993-01-01",
      extensions: [".b", ".bf"],
      websites: [
        { href: "https://brainfuck.org/", title: "brainfuck.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Brainfuck", title: "Brainfuck", kind: "wikipedia" },
      ],
    })
    .addParadigms(["para+esoteric", "para+imperative", "para+structured"]);
}
