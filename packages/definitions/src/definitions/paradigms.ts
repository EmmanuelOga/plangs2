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

  g.n_paradigm.set("para+aspect", {
    name: "Aspect-oriented",
    keywords: ["aspect"],
    description:
      "Programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns. This allows behaviors that are not central to the business logic (such as logging) to be added to a program without cluttering the code of core functions.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Aspect-oriented_programming", "Aspect-oriented Programming")],
  });

  g.n_paradigm.set("para+assembly", {
    name: "Assembly",
    keywords: ["assembly"],
    description:
      "Assembly language is a low-level programming language for a computer, or other programmable device, in which there is a very strong (generally one-to-one) correspondence between the language and the architecture's machine code instructions.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Assembly_language", "Assembly Language")],
  });

  g.n_paradigm.set("para+oop", {
    name: "Object-oriented",
    keywords: ["object", "oop", "class-based"],
    description:
      "Programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods). In OOP, computer programs are designed by making them out of objects that interact with one another.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Object-orientation", "Object-orientation")],
  });

  g.n_paradigm.set("para+multi", {
    name: "Multi-paradigm",
    keywords: ["multi-paradigm", "multiparadigm"],
    description:
      "A programming paradigm is a relatively high-level way to conceptualize and structure the implementation of a computer program. Many/most languages are based on more than one paradigm.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Multi-paradigm_programming_language", "Multi-paradigm Programming")],
  });

  g.n_paradigm.set("para+compiled", {
    name: "Compiled Language",
    keywords: ["compiled", "compilation", "compiler"],
    description:
      "A compiled language is a programming language for which source code is typically compiled; not interpreted. The term is vague since, in principle, any language can be compiled or interpreted and in practice some languages are both (in different environments). In some environments, source code is first compiled (to an intermediate form; often bytecode) and then interpreted.",
    websites: [
      wikipedia("https://en.wikipedia.org/wiki/Compiled_language", "Compiled Language"),
      wikipedia("https://en.wikipedia.org/wiki/Compiler", "Compiler"),
    ],
  });

  g.n_paradigm.set("para+concurrent", {
    name: "Concurrent",
    keywords: ["concurrent", "parallel"],
    description:
      "Concurrent computing is a form of computing in which several computations are executed during overlapping time periods, concurrently, instead of sequentially. Concurrent computing is a form of modular programming. In its paradigm an overall computation is factored into subcomputations that may be executed concurrently.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Concurrent_computing", "Concurrent Computing")],
  });

  g.n_paradigm.set("para+constraint", {
    name: "Constraint Programming",
    keywords: ["constraint"],
    description: "In constraint programming, users declaratively state the constraints on the feasible solutions for a set of decision variables.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Constraint_programming", "Constraint Programming")],
  });

  g.n_paradigm.set("para+visual", {
    name: "Visual Programming",
    keywords: ["visual", "block-based", "block-coding", "diagrammatic", "graphical"],
    description:
      "A programming language that lets users create programs by manipulating program elements graphically rather than by specifying them textually.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Visual_programming_language", "Visual Programming Language")],
  });

  g.n_paradigm.set("para+functional", {
    name: "Functional Programming",
    keywords: ["functional", "lambda", "pure"],
    description:
      "A programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Functional_programming", "Functional Programming")],
  });

  g.n_paradigm.set("para+declarative", {
    name: "Declarative Programming",
    keywords: ["declarative"],
    description:
      "A style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Declarative_programming", "Declarative Programming")],
  });
}
