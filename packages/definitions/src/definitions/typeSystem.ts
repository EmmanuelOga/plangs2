import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+affine", {
    name: "Affine",
    keywords: ["affine"],
    description: "An affine type system enforces that variables are used at most once, allowing for optimizations such as memory reuse.",
    extHomeURL: "https://en.wikipedia.org/wiki/Affine_type_system",
  });

  g.typeSystem.set("tsys+algebraic", {
    name: "Algebraic Data Types",
    keywords: ["adt", "algebraic", "product types", "sum types", "unions", "variant"],
    description: "A kind of composite type, i.e., a type formed by combining other types.",
    extHomeURL: "https://en.wikipedia.org/wiki/Algebraic_data_type",
  });

  g.typeSystem.set("tsys+dependent", {
    name: "Dependent",
    keywords: ["dependent"],
    description: "A type system where types depend on terms, allowing for more expressive type constraints.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dependent_typing",
  });

  g.typeSystem.set("tsys+duck", {
    name: "Duck",
    keywords: ["duck"],
    description: "A style of dynamic typing where an object's behavior determines its type rather than its inheritance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Duck_typing",
  });

  g.typeSystem.set("tsys+dynamic", {
    name: "Dynamic",
    keywords: ["dynamic"],
    description: "Dynamic typing defers type checking until runtime, allowing variables to hold different types at different times.",
    extHomeURL: "https://en.wikipedia.org/wiki/Dynamic_typing",
  });

  g.typeSystem.set("tsys+flow", {
    name: "Flow-Sensitive",
    keywords: ["flow"],
    description: "A type system where the types of variables can change based on control flow in the program.",
    extHomeURL: "https://en.wikipedia.org/wiki/Flow-sensitive_typing",
  });

  g.typeSystem.set("tsys+generic", {
    name: "Generic",
    keywords: ["generic"],
    description: "Uses algorithms that can work with several different but related data types.",
    extHomeURL: "https://en.wikipedia.org/wiki/Generic_programming",
  });

  g.typeSystem.set("tsys+gradual", {
    name: "Gradual",
    keywords: ["gradual"],
    description: "Allows mixing statically and dynamically typed code, progressively introducing type annotations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Gradual_typing",
  });

  g.typeSystem.set("tsys+inferred", {
    name: "Inferred",
    keywords: ["hindley", "implicit", "inferred", "milner"],
    description: "A type inference system where types are automatically deduced without requiring explicit type annotations.",
    extHomeURL: "https://en.wikipedia.org/wiki/Type_inference",
  });

  g.typeSystem.set("tsys+latent", {
    name: "Latent",
    keywords: ["latent"],
    description: "A dynamic typing model where type constraints are deferred until runtime, similar to duck typing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Latent_typing",
  });

  g.typeSystem.set("tsys+manifest", {
    name: "Manifest",
    keywords: ["manifest"],
    description: "Manifest typing is a type system in which all variables are explicitly typed in the code, usually associated with static typing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Manifest_typing",
  });

  g.typeSystem.set("tsys+nominal", {
    name: "Nominal",
    keywords: ["nominal", "nominative"],
    description: "A type system where compatibility between types is determined by explicit declarations or names, rather than structure.",
    extHomeURL: "https://en.wikipedia.org/wiki/Nominal_type_system",
  });

  g.typeSystem.set("tsys+object", {
    name: "Object-Oriented",
    keywords: ["object"],
    description: "Manage and enforce types for objects and classes, focusing on inheritance and polymorphism.",
    extHomeURL: "https://en.wikipedia.org/wiki/Object_(computer_science)",
  });

  g.typeSystem.set("tsys+optional", {
    name: "Optional",
    keywords: ["optional"],
    description: "Allows for type annotations to be included or omitted, offering flexibility between static and dynamic typing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Optional_typing",
  });

  g.typeSystem.set("tsys+polymorphic", {
    name: "Polymorphic",
    keywords: ["polymorphic"],
    description: "Allows types to be parameterized and reused with different data types, enhancing code reusability.",
    extHomeURL: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)",
  });

  g.typeSystem.set("tsys+rtti", {
    name: "RTTI",
    keywords: ["rtti", "run-time"],
    description: "Run time time information is a feature that allows a program to retrieve type information about an object during runtime.",
    extHomeURL: "https://en.wikipedia.org/wiki/Run-time_type_information",
  });

  g.typeSystem.set("tsys+safe", {
    name: "Safe",
    keywords: ["safe"],
    description: "Ensures that operations are performed on compatible types, preventing unintended behavior and runtime errors.",
    extHomeURL: "https://en.wikipedia.org/wiki/Type_safety",
  });

  g.typeSystem.set("tsys+static", {
    name: "Static",
    keywords: ["static"],
    description: "Checks type correctness at compile-time, reducing runtime errors by ensuring variables are properly typed before execution.",
    extHomeURL: "https://en.wikipedia.org/wiki/Static_typing",
  });

  g.typeSystem.set("tsys+string", {
    name: "String",
    keywords: ["string"],
    description: "Handling and validation of types through strings.",
    extHomeURL: "https://en.wikipedia.org/wiki/String_(programming)",
  });

  g.typeSystem.set("tsys+strong", {
    name: "Strong",
    keywords: ["strong", "strongly-typed"],
    description: "Enforces strict type rules, ensuring that variables cannot be implicitly cast or used in an unintended way.",
    extHomeURL: "https://en.wikipedia.org/wiki/Strong_typing",
  });

  g.typeSystem.set("tsys+structural", {
    name: "Structural",
    keywords: ["structural"],
    description: "Bases type compatibility on the structure of data rather than explicit type declarations or names.",
    extHomeURL: "https://en.wikipedia.org/wiki/Structural_typing",
  });

  g.typeSystem.set("tsys+uniqueness", {
    name: "Uniqueness",
    keywords: ["unique"],
    description: "Enforces that certain values are used only once, allowing optimizations like in-place updates in functional programming.",
    extHomeURL: "https://en.wikipedia.org/wiki/Uniqueness_type",
  });

  g.typeSystem.set("tsys+untyped", {
    name: "Untyped",
    keywords: ["untyped"],
    description: "Lacks explicit types, with variables and functions being dynamically interpreted based on their usage.",
    extHomeURL: "https://en.wikipedia.org/wiki/Type_system",
  });

  g.typeSystem.set("tsys+weak", {
    name: "Weak",
    keywords: ["weak"],
    description:
      "Allows for more flexible type conversions, where variables can be implicitly cast between types, sometimes leading to unexpected results.",
    extHomeURL: "https://en.wikipedia.org/wiki/Weak_typing",
  });
}
