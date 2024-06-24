import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+groovy",
    "Groovy",
    {
      name: "Groovy",
      websites: [
        { kind: "wikipedia", title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)" },
      ],
    },
    { influenced: ["pl+java", "pl+kotlin", "pl+objective-cpp", "pl+ruby", "pl+smalltalk", "pl+xtend"] },
  );

  /**/
}
