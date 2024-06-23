import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+visual-basic-.net",
    "Visual Basic .NET",
    {
      name: "Visual Basic .NET",
      websites: [
        { kind: "wikipedia", title: "Visual Basic .NET", href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET" },
      ],
    },
    { influenced: ["pl+basic", "pl+microsoft-small-basic", "pl+visual-basic"] },
  );

  /**/
}
