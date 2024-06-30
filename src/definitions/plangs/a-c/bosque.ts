import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+bosque",
    {
      name: "Bosque",
      websites: [
        { kind: "wikipedia", title: "Bosque", href: "https://en.wikipedia.org/wiki/Bosque_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png",
        },
      ],
    },
    {
      influences: ["pl+javascript", "pl+typescript", "pl+ml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi", "para+functional", "para+typed"],
    },
  );
}
