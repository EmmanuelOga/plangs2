import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+risc-os", {
    name: "RISC OS",
    websites: [{ kind: "wikipedia", title: "RISC OS", href: "https://en.wikipedia.org/wiki/RISC_OS" }],
  });

  lb.define("platf+risc-v", {
    name: "RISC-V",
    websites: [{ kind: "wikipedia", title: "RISC-V", href: "https://en.wikipedia.org/wiki/RISC-V" }],
  });
}
