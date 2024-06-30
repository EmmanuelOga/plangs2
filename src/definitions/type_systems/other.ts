import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildTypeSystem("tsys+affine").merge({
    name: "Affine",
    websites: [
      { title: "Affine Type System", href: "https://en.wikipedia.org/wiki/affine_type_system", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+dependent").merge({
    name: "Dependent",
    websites: [
      { title: "Dependent Type System", href: "https://en.wikipedia.org/wiki/dependent_type", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+duck").merge({
    name: "Duck",
    websites: [{ title: "Duck Type System", href: "https://en.wikipedia.org/wiki/duck_typing", kind: "wikipedia" }],
  });

  /**/

  g.buildTypeSystem("tsys+dynamic").merge({
    name: "Dynamic",
    websites: [
      { title: "Dynamic Type System", href: "https://en.wikipedia.org/wiki/dynamic_typing", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+flow-sensitive").merge({
    name: "Flow-Sensitive",
    websites: [
      {
        title: "Flow-Sensitive Type System",
        href: "https://en.wikipedia.org/wiki/flow-sensitive_typing",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+generic").merge({
    name: "Generic",
    websites: [
      { title: "Generic Type System", href: "https://en.wikipedia.org/wiki/generic_programming", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+gradual").merge({
    name: "Gradual",
    websites: [
      { title: "Gradual Type System", href: "https://en.wikipedia.org/wiki/gradual_typing", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+hindley-milner").merge({
    name: "Hindley-Milner",
    websites: [
      {
        title: "Hindley-Milner Type System",
        href: "https://en.wikipedia.org/wiki/hindley%e2%80%93milner_type_system",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+inferred").merge({
    name: "Inferred",
    websites: [
      { title: "Inferred Type System", href: "https://en.wikipedia.org/wiki/type_inference", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+latent").merge({
    name: "Latent",
    websites: [{ title: "Latent Type System", href: "https://en.wikipedia.org/wiki/latent_typing", kind: "wikipedia" }],
  });

  /**/

  g.buildTypeSystem("tsys+manifest").merge({
    name: "Manifest",
    websites: [
      { title: "Manifest Type System", href: "https://en.wikipedia.org/wiki/manifest_typing", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+nominative").merge({
    name: "Nominative",
    websites: [
      {
        title: "Nominative Type System",
        href: "https://en.wikipedia.org/wiki/nominative_type_system",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+object-oriented").merge({
    name: "Object-Oriented",
    websites: [
      {
        title: "Object-Oriented Type System",
        href: "https://en.wikipedia.org/wiki/object_(computer_science)",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+optional").merge({
    name: "Optional",
    websites: [
      { title: "Optional Type System", href: "https://en.wikipedia.org/wiki/optional_typing", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+parametric").merge({
    name: "Parametric",
    websites: [
      {
        title: "Parametric Type System",
        href: "https://en.wikipedia.org/wiki/parametric_polymorphism",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+polymorphic").merge({
    name: "Polymorphic",
    websites: [
      {
        title: "Polymorphic Type System",
        href: "https://en.wikipedia.org/wiki/polymorphism_(computer_science)",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+safe").merge({
    name: "Safe",
    websites: [{ title: "Safe Type System", href: "https://en.wikipedia.org/wiki/type_safety", kind: "wikipedia" }],
  });

  /**/

  g.buildTypeSystem("tsys+static").merge({
    name: "Static",
    websites: [{ title: "Static Type System", href: "https://en.wikipedia.org/wiki/static_typing", kind: "wikipedia" }],
  });

  /**/

  g.buildTypeSystem("tsys+strong").merge({
    name: "Strong",
    websites: [{ title: "Strong Type System", href: "https://en.wikipedia.org/wiki/strong_typing", kind: "wikipedia" }],
  });

  /**/

  g.buildTypeSystem("tsys+structural").merge({
    name: "Structural",
    websites: [
      {
        title: "Structural Type System",
        href: "https://en.wikipedia.org/wiki/structural_type_system",
        kind: "wikipedia",
      },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+uniqueness").merge({
    name: "Uniqueness",
    websites: [
      { title: "Uniqueness Type System", href: "https://en.wikipedia.org/wiki/uniqueness_type", kind: "wikipedia" },
    ],
  });

  /**/

  g.buildTypeSystem("tsys+weak").merge({
    name: "Weak",
    websites: [{ title: "Weak Type System", href: "https://en.wikipedia.org/wiki/weak_typing", kind: "wikipedia" }],
  });

  /**/
}
