import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+ia-32", "IA-32", {
    websites: [{ kind: "wikipedia", title: "IA-32", href: "https://en.wikipedia.org/wiki/IA-32" }],
  });

  /**/

  lb.define("platf+ia-64", "IA-64", {
    websites: [{ kind: "wikipedia", title: "IA-64", href: "https://en.wikipedia.org/wiki/IA-64" }],
  });

  /**/

  lb.define("platf+intel_80286", "Intel 286", {
    websites: [{ kind: "wikipedia", title: "Intel 286", href: "https://en.wikipedia.org/wiki/Intel_80286" }],
  });

  /**/

  lb.define("platf+intel_8080", "Intel 8080", {
    websites: [{ kind: "wikipedia", title: "Intel 8080", href: "https://en.wikipedia.org/wiki/Intel_8080" }],
  });

  /**/

  lb.define("platf+ios", "iOS", {
    websites: [{ kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" }],
  });

  /**/
}
