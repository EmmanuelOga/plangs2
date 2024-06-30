import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+risc-os").merge({
    name: "RISC OS",
    websites: [{ kind: "wikipedia", title: "RISC OS", href: "https://en.wikipedia.org/wiki/RISC_OS" }],
  });

  /**/

  g.buildPlatform("platf+risc-v").merge({
    name: "RISC-V",
    websites: [{ kind: "wikipedia", title: "RISC-V", href: "https://en.wikipedia.org/wiki/RISC-V" }],
  });

  /**/
}
