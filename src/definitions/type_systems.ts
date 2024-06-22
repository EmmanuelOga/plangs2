import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+affine", "Affine", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/affine_type_system", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+dependent", "Dependent", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/dependent_type", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+duck", "Duck", {
    websites: [{ title: "${name} Type System", href: "https://en.wikipedia.org/wiki/duck_typing", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+dynamic", "Dynamic", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/dynamic_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+flow-sensitive", "Flow-Sensitive", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/flow-sensitive_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+generic", "Generic", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/generic_programming", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+gradual", "Gradual", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/gradual_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+hindley-milner", "Hindley-Milner", {
    websites: [
      {
        title: "${name} Type System",
        href: "https://en.wikipedia.org/wiki/hindley%e2%80%93milner_type_system",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("tsys+inferred", "Inferred", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/type_inference", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+latent", "Latent", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/latent_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+manifest", "Manifest", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/manifest_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+nominative", "Nominative", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/nominative_type_system", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+object-oriented", "Object-Oriented", {
    websites: [
      {
        title: "${name} Type System",
        href: "https://en.wikipedia.org/wiki/object_(computer_science)",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("tsys+optional", "Optional", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/optional_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+parametric", "Parametric", {
    websites: [
      {
        title: "${name} Type System",
        href: "https://en.wikipedia.org/wiki/parametric_polymorphism",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("tsys+polymorphic", "Polymorphic", {
    websites: [
      {
        title: "${name} Type System",
        href: "https://en.wikipedia.org/wiki/polymorphism_(computer_science)",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  lb.define("tsys+safe", "Safe", {
    websites: [{ title: "${name} Type System", href: "https://en.wikipedia.org/wiki/type_safety", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+static", "Static", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/static_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+strong", "Strong", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/strong_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+structural", "Structural", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/structural_type_system", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+uniqueness", "Uniqueness", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/uniqueness_type", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+weak", "Weak", {
    websites: [{ title: "${name} Type System", href: "https://en.wikipedia.org/wiki/weak_typing", kind: "wikipedia" }],
  });

  /**/
}
