import type { PlangsGraph } from "../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+zilog-z80").merge({
    name: "Zilog Z80",
    websites: [{ kind: "wikipedia", title: "Zilog Z80", href: "https://en.wikipedia.org/wiki/Zilog_Z80" }],
  });

  /**/
}
