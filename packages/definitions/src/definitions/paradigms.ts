import type { PlangsGraph } from "@plangs/plangs";
import { wikipedia } from "@plangs/plangs/util";

export function define(g: PlangsGraph) {
  g.n_paradigm.set("para+agents", {
    name: "Agent-oriented",
    keywords: ["agent"],
    description: "Agent-oriented programming simulates the actions and interactions of autonomous agents.",
    websites: [
      wikipedia("https://en.wikipedia.org/wiki/Agent-based_model", "Agent-based Model"),
      wikipedia("https://en.wikipedia.org/wiki/Agent-oriented_programming", "Agent-oriented Programming"),
    ],
  });

  g.n_paradigm.set("para+algebraic", {
    name: "Algebraic Data Types",
    keywords: ["algebraic", "adt", "product types", "sum types", "variant types", "unions"],
    description:
      "In computer programming, especially functional programming and type theory, an algebraic data type (ADT) is a kind of composite type, i.e., a type formed by combining other types.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Algebraic_data_type", "Algebraic Data Type")],
  });

  g.n_paradigm.set("para+array", {
    name: "Array Programming",
    keywords: ["array", "vector"],
    description:
      "In computer science, array programming refers to solutions that allow the application of operations to an entire set of values at once. Such solutions are commonly used in scientific and engineering settings.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Array_programming", "Array Data Structure")],
  });
}
