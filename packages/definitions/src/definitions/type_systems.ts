import { wikipedia } from "@plangs/definitions/shortcuts";
import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.tsys.set("tsys+affine", {
    name: "Affine Type System",
    keywords: ["affine"],
    description: "An affine type system enforces that variables are used at most once, allowing for optimizations such as memory reuse.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Affine_type_system", "Affine Type System")],
  });

  g.nodes.tsys.set("tsys+dependent", {
    name: "Dependent Typing",
    keywords: ["dependent"],
    description: "Dependent typing is a type system where types depend on terms, allowing for more expressive type constraints.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Dependent_typing", "Dependent Typing")],
  });

  g.nodes.tsys.set("tsys+duck", {
    name: "Duck Typing",
    keywords: ["duck"],
    description: "Duck typing is a style of dynamic typing where an object's behavior determines its type rather than its inheritance.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Duck_typing", "Duck Typing")],
  });

  g.nodes.tsys.set("tsys+dynamic", {
    name: "Dynamic Typing",
    keywords: ["dynamic"],
    description: "Dynamic typing defers type checking until runtime, allowing variables to hold different types at different times.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Dynamic_typing", "Dynamic Typing")],
  });

  g.nodes.tsys.set("tsys+flow", {
    name: "Flow-Sensitive Typing",
    keywords: ["flow"],
    description: "Flow-sensitive typing is a type system where the types of variables can change based on control flow in the program.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Flow-sensitive_typing", "Flow-Sensitive Typing")],
  });

  g.nodes.tsys.set("tsys+gradual", {
    name: "Gradual Typing",
    keywords: ["gradual"],
    description: "Gradual typing allows mixing statically and dynamically typed code, progressively introducing type annotations.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Gradual_typing", "Gradual Typing")],
  });

  g.nodes.tsys.set("tsys+inferred", {
    name: "Inferred Type System",
    keywords: ["implicit", "hindley", "milner", "inferred"],
    description: "A type inference system where types are automatically deduced without requiring explicit type annotations.",
    websites: [
      wikipedia("https://en.wikipedia.org/wiki/Type_inference", "Type Inference"),
      wikipedia("https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system", "Hindley-Milner Type System"),
    ],
  });

  g.nodes.tsys.set("tsys+latent", {
    name: "Latent Typing",
    keywords: ["latent"],
    description: "Latent typing is a dynamic typing model where type constraints are deferred until runtime, similar to duck typing.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Latent_typing", "Latent Typing")],
  });

  g.nodes.tsys.set("tsys+manifest", {
    name: "Manifest Typing",
    keywords: ["manifest"],
    description: "Manifest typing is a type system in which all variables are explicitly typed in the code, usually associated with static typing.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Manifest_typing", "Manifest Typing")],
  });

  g.nodes.tsys.set("tsys+nominal", {
    name: "Nominal Typing",
    keywords: ["nominal", "nominative"],
    description:
      "Nominal typing is a type system where compatibility between types is determined by explicit declarations or names, rather than structure.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Nominal_type_system", "Nominal Typing")],
  });

  g.nodes.tsys.set("tsys+object", {
    name: "Object-Oriented Typing",
    keywords: ["object"],
    description:
      "Object-oriented typing refers to type systems that manage and enforce types for objects and classes, focusing on inheritance and polymorphism.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Object_(computer_science)", "Object-Oriented Typing")],
  });

  g.nodes.tsys.set("tsys+optional", {
    name: "Optional Typing",
    keywords: ["optional"],
    description: "Optional typing allows for type annotations to be included or omitted, offering flexibility between static and dynamic typing.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Optional_typing", "Optional Typing")],
  });

  g.nodes.tsys.set("tsys+polymorphic", {
    name: "Polymorphic Typing",
    keywords: ["polymorphic"],
    description: "Polymorphic typing allows types to be parameterized and reused with different data types, enhancing code reusability.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Polymorphism_(computer_science)", "Polymorphic Typing")],
  });

  g.nodes.tsys.set("tsys+rtti", {
    name: "Run-Time Type Information (RTTI)",
    keywords: ["rtti", "run-time"],
    description: "RTTI is a feature that allows a program to retrieve type information about an object during runtime.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Run-time_type_information", "Run-Time Type Information (RTTI)")],
  });

  g.nodes.tsys.set("tsys+static", {
    name: "Static Typing",
    keywords: ["static"],
    description:
      "Static typing checks type correctness at compile-time, reducing runtime errors by ensuring variables are properly typed before execution.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Static_typing", "Static Typing")],
  });

  g.nodes.tsys.set("tsys+string", {
    name: "String Typing",
    keywords: ["string"],
    description: "String typing refers to the type system's handling and validation of string data types in programming languages.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/String_(programming)", "String Typing")],
  });

  g.nodes.tsys.set("tsys+strong", {
    name: "Strong Typing",
    keywords: ["strong", "strongly-typed"],
    description: "Strong typing enforces strict type rules, ensuring that variables cannot be implicitly cast or used in an unintended way.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Strong_typing", "Strong Typing")],
  });

  g.nodes.tsys.set("tsys+structural", {
    name: "Structural Typing",
    keywords: ["structural"],
    description: "Structural typing bases type compatibility on the structure of data rather than explicit type declarations or names.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Structural_typing", "Structural Typing")],
  });

  g.nodes.tsys.set("tsys+safe", {
    name: "Type Safe",
    keywords: ["safe"],
    description: "Type safety ensures that operations are performed on compatible types, preventing unintended behavior and runtime errors.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Type_safety", "Type Safety")],
  });

  g.nodes.tsys.set("tsys+uniqueness", {
    name: "Uniqueness Typing",
    keywords: ["unique"],
    description:
      "Uniqueness typing enforces that certain values are used only once, allowing optimizations like in-place updates in functional programming.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Uniqueness_type", "Uniqueness Typing")],
  });

  g.nodes.tsys.set("tsys+weak", {
    name: "Weak Typing",
    keywords: ["weak"],
    description:
      "Weak typing allows for more flexible type conversions, where variables can be implicitly cast between types, sometimes leading to unexpected results.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Weak_typing", "Weak Typing")],
  });

  g.nodes.tsys.set("tsys+untyped", {
    name: "Untyped",
    keywords: ["untyped"],
    description: "Untyped systems lack explicit types, with variables and functions being dynamically interpreted based on their usage.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Type_system", "Type System")],
  });

  g.nodes.tsys.set("tsys+generic", {
    name: "Generic Programming",
    keywords: ["generic"],
    description: "Generic programming uses algorithms that can work with several different but related data types.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Generic_programming", "Generic")],
  });

  g.nodes.tsys.set("tsys+algebraic", {
    name: "Algebraic Data Types",
    keywords: ["algebraic", "adt", "product types", "sum types", "variant", "unions"],
    description:
      "In computer programming, especially functional programming and type theory, an algebraic data type (ADT) is a kind of composite type, i.e., a type formed by combining other types.",
    websites: [wikipedia("https://en.wikipedia.org/wiki/Algebraic_data_type", "Algebraic Data Type")],
  });
}
