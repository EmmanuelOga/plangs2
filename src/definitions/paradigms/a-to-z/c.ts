import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+compiled", "compiled", {
    websites: [{ kind: "wikipedia", title: "compiled", href: "https://en.wikipedia.org/wiki/Compiled_language" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+component-based", "component-based", {
    websites: [
      {
        kind: "wikipedia",
        title: "component-based",
        href: "https://en.wikipedia.org/wiki/Component-based_software_engineering",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+csp", "communicating sequential processes", {
    websites: [
      {
        kind: "wikipedia",
        title: "communicating sequential processes",
        href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
      },
    ],
  });
}
