import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+algebraic-types", "algebraic types", {
    websites: [{ kind: "wikipedia", title: "algebraic types", href: "https://en.wikipedia.org/wiki/Algebraic_types" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+algorithmic", "algorithmic", {
    websites: [
      {
        kind: "wikipedia",
        title: "algorithmic",
        href: "https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+array", "array", {
    websites: [{ kind: "wikipedia", title: "array", href: "https://en.wikipedia.org/wiki/Array_programming" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+aspect-oriented", "aspect-oriented", {
    websites: [
      {
        kind: "wikipedia",
        title: "aspect-oriented",
        href: "https://en.wikipedia.org/wiki/Aspect-oriented_programming",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+assembly", "Assembly", {
    websites: [{ kind: "wikipedia", title: "Assembly", href: "https://en.wikipedia.org/wiki/Assembly_language" }],
  });
}
