import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+x64", "x64", {
    websites: [{ kind: "wikipedia", title: "x64", href: "https://en.wikipedia.org/wiki/X64" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+x86", "x86", {
    websites: [{ kind: "wikipedia", title: "x86", href: "https://en.wikipedia.org/wiki/X86" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("platf+x86-64", "x86-64", {
    websites: [{ kind: "wikipedia", title: "x86-64", href: "https://en.wikipedia.org/wiki/X86-64" }],
  });
}
