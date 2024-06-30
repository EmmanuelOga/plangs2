import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+affine", {
    name: "Affine",
    websites: [
      { title: "Affine Type System", href: "https://en.wikipedia.org/wiki/affine_type_system", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+dependent", {
    name: "Dependent",
    websites: [
      { title: "Dependent Type System", href: "https://en.wikipedia.org/wiki/dependent_type", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+duck", {
    name: "Duck",
    websites: [{ title: "Duck Type System", href: "https://en.wikipedia.org/wiki/duck_typing", kind: "wikipedia" }],
  });

  lb.define("tsys+dynamic", {
    name: "Dynamic",
    websites: [
      { title: "Dynamic Type System", href: "https://en.wikipedia.org/wiki/dynamic_typing", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+flow-sensitive", {
    name: "Flow-Sensitive",
    websites: [
      {
        title: "Flow-Sensitive Type System",
        href: "https://en.wikipedia.org/wiki/flow-sensitive_typing",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+generic", {
    name: "Generic",
    websites: [
      { title: "Generic Type System", href: "https://en.wikipedia.org/wiki/generic_programming", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+gradual", {
    name: "Gradual",
    websites: [
      { title: "Gradual Type System", href: "https://en.wikipedia.org/wiki/gradual_typing", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+hindley-milner", {
    name: "Hindley-Milner",
    websites: [
      {
        title: "Hindley-Milner Type System",
        href: "https://en.wikipedia.org/wiki/hindley%e2%80%93milner_type_system",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+inferred", {
    name: "Inferred",
    websites: [
      { title: "Inferred Type System", href: "https://en.wikipedia.org/wiki/type_inference", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+latent", {
    name: "Latent",
    websites: [{ title: "Latent Type System", href: "https://en.wikipedia.org/wiki/latent_typing", kind: "wikipedia" }],
  });

  lb.define("tsys+manifest", {
    name: "Manifest",
    websites: [
      { title: "Manifest Type System", href: "https://en.wikipedia.org/wiki/manifest_typing", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+nominative", {
    name: "Nominative",
    websites: [
      {
        title: "Nominative Type System",
        href: "https://en.wikipedia.org/wiki/nominative_type_system",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+object-oriented", {
    name: "Object-Oriented",
    websites: [
      {
        title: "Object-Oriented Type System",
        href: "https://en.wikipedia.org/wiki/object_(computer_science)",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+optional", {
    name: "Optional",
    websites: [
      { title: "Optional Type System", href: "https://en.wikipedia.org/wiki/optional_typing", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+parametric", {
    name: "Parametric",
    websites: [
      {
        title: "Parametric Type System",
        href: "https://en.wikipedia.org/wiki/parametric_polymorphism",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+polymorphic", {
    name: "Polymorphic",
    websites: [
      {
        title: "Polymorphic Type System",
        href: "https://en.wikipedia.org/wiki/polymorphism_(computer_science)",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+safe", {
    name: "Safe",
    websites: [{ title: "Safe Type System", href: "https://en.wikipedia.org/wiki/type_safety", kind: "wikipedia" }],
  });

  lb.define("tsys+static", {
    name: "Static",
    websites: [{ title: "Static Type System", href: "https://en.wikipedia.org/wiki/static_typing", kind: "wikipedia" }],
  });

  lb.define("tsys+strong", {
    name: "Strong",
    websites: [{ title: "Strong Type System", href: "https://en.wikipedia.org/wiki/strong_typing", kind: "wikipedia" }],
  });

  lb.define("tsys+structural", {
    name: "Structural",
    websites: [
      {
        title: "Structural Type System",
        href: "https://en.wikipedia.org/wiki/structural_type_system",
        kind: "wikipedia",
      },
    ],
  });

  lb.define("tsys+uniqueness", {
    name: "Uniqueness",
    websites: [
      { title: "Uniqueness Type System", href: "https://en.wikipedia.org/wiki/uniqueness_type", kind: "wikipedia" },
    ],
  });

  lb.define("tsys+weak", {
    name: "Weak",
    websites: [{ title: "Weak Type System", href: "https://en.wikipedia.org/wiki/weak_typing", kind: "wikipedia" }],
  });
}
