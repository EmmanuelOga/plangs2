import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+affine", "Affine", {
    websites: [
      { title: "Affine Type System", href: "https://en.wikipedia.org/wiki/affine_type_system", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+dependent", "Dependent", {
    websites: [
      { title: "Dependent Type System", href: "https://en.wikipedia.org/wiki/dependent_type", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+duck", "Duck", {
    websites: [{ title: "Duck Type System", href: "https://en.wikipedia.org/wiki/duck_typing", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+dynamic", "Dynamic", {
    websites: [
      { title: "Dynamic Type System", href: "https://en.wikipedia.org/wiki/dynamic_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+generic", "Generic", {
    websites: [
      { title: "Generic Type System", href: "https://en.wikipedia.org/wiki/generic_programming", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+gradual", "Gradual", {
    websites: [
      { title: "Gradual Type System", href: "https://en.wikipedia.org/wiki/gradual_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+inferred", "Inferred", {
    websites: [
      { title: "Inferred Type System", href: "https://en.wikipedia.org/wiki/type_inference", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+latent", "Latent", {
    websites: [{ title: "Latent Type System", href: "https://en.wikipedia.org/wiki/latent_typing", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+manifest", "Manifest", {
    websites: [
      { title: "Manifest Type System", href: "https://en.wikipedia.org/wiki/manifest_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+optional", "Optional", {
    websites: [
      { title: "Optional Type System", href: "https://en.wikipedia.org/wiki/optional_typing", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+safe", "Safe", {
    websites: [{ title: "Safe Type System", href: "https://en.wikipedia.org/wiki/type_safety", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+static", "Static", {
    websites: [{ title: "Static Type System", href: "https://en.wikipedia.org/wiki/static_typing", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+strong", "Strong", {
    websites: [{ title: "Strong Type System", href: "https://en.wikipedia.org/wiki/strong_typing", kind: "wikipedia" }],
  });

  /**/

  lb.define("tsys+uniqueness", "Uniqueness", {
    websites: [
      { title: "Uniqueness Type System", href: "https://en.wikipedia.org/wiki/uniqueness_type", kind: "wikipedia" },
    ],
  });

  /**/

  lb.define("tsys+weak", "Weak", {
    websites: [{ title: "Weak Type System", href: "https://en.wikipedia.org/wiki/weak_typing", kind: "wikipedia" }],
  });

  /**/
}
