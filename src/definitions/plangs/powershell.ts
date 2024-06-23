import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+powershell",
    "PowerShell",
    {
      name: "PowerShell",
      websites: [{ kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/PowerShell" }],
    },
    { influenced: ["pl+sql"] },
  );

  /**/
}
