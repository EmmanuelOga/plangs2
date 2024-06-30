import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+blockly",
    {
      name: "Blockly",
      websites: [{ kind: "wikipedia", title: "Blockly", href: "https://en.wikipedia.org/wiki/Blockly" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Blockly-Demo.png/220px-Blockly-Demo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
    },
    { licenses: ["lic+apache"], platforms: ["platf+web"] },
  );
}
