import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+safe", "Safe", {
    websites: [{ title: "${name} Type System", href: "https://en.wikipedia.org/wiki/type_safety", kind: "wikipedia" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("tsys+static", "Static", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/static_typing", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("tsys+strong", "Strong", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/strong_typing", kind: "wikipedia" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("tsys+structural", "Structural", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/structural_type_system", kind: "wikipedia" },
    ],
  });
}
