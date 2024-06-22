import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+partitioned-global-address-space", "Partitioned global address space", {
    websites: [
      {
        kind: "wikipedia",
        title: "Partitioned global address space",
        href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+pattern-matching", "Pattern-matching", {
    websites: [
      { kind: "wikipedia", title: "Pattern-matching", href: "https://en.wikipedia.org/wiki/Pattern-matching" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+people-oriented", "People Oriented Programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "People Oriented Programming",
        href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+pipeline", "pipeline", {
    websites: [
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_(software)" },
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_programming" },
    ],
  });
}
