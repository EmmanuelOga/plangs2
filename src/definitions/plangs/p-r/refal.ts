import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+refal",
    {
      name: "Refal",
      websites: [
        { kind: "wikipedia", title: "Refal", href: "https://en.wikipedia.org/wiki/REFAL" },
        { kind: "homepage", title: "http://www.refal.net", href: "http://www.refal.net" },
      ],
    },
    {
      paradigms: ["para+pattern", "para+term"],
      people: ["person+valentin-turchin"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );
}
