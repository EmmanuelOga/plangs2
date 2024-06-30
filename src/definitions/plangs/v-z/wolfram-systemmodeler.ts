import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+wolfram-systemmodeler",
    {
      name: "Wolfram System Modeler",
      websites: [
        {
          kind: "wikipedia",
          title: "Wolfram SystemModeler",
          href: "https://en.wikipedia.org/wiki/Wolfram_SystemModeler",
        },
        { kind: "homepage", title: "Wolfram SystemModeler", href: "http://www.wolfram.com/system-modeler" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/WolframSystemModelerLogo.png/64px-WolframSystemModelerLogo.png",
        },
      ],
      releases: [{ version: "14.0.0", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );
}
