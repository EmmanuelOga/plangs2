import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+frink", {
      name: "Frink",
      description:
        'Frink is a computer programming language. It is, according to creator of the language, "designed to make physical calculations simple, to help ensure that answers come out right, and to make a tool that\'s really useful in the real world. It tracks units of measure (feet, meters, kilograms, watts, etc.) through all calculations, allowing you to mix units of measure transparently, and helps you easily verify that your answers make sense."',
      firstAppeared: "2001-01-01",
      extensions: [".frink"],
      websites: [
        { href: "https://frinklang.org/", title: "frinklang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Frink_(programming_language)", title: "Frink", kind: "wikipedia" },
      ],
    })
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"]);
}
