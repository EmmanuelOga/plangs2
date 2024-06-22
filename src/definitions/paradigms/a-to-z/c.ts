import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+class-based", "class-based", {
    websites: [
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class-based_programming" },
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class_(computer_programming)" },
    ],
  });

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

  lb.define("para+concatenative", "concatenative", {
    websites: [
      { kind: "wikipedia", title: "Concatenative", href: "https://en.wikipedia.org/wiki/Concatenative_programming" },
      {
        kind: "wikipedia",
        title: "concatenative",
        href: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+constraint", "constraint", {
    websites: [
      { kind: "wikipedia", title: "constraint", href: "https://en.wikipedia.org/wiki/Constraint_programming" },
      {
        kind: "wikipedia",
        title: "Constraint logic",
        href: "https://en.wikipedia.org/wiki/Constraint_logic_programming",
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
