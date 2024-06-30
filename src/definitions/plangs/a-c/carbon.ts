import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+carbon",
    {
      name: "Carbon",
      websites: [
        { kind: "wikipedia", title: "Carbon", href: "https://en.wikipedia.org/wiki/Carbon_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Carbon_logo.png/121px-Carbon_logo.png",
        },
      ],
      extensions: [".carbon"],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+cpp"],
      licenses: ["lic+apache"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );
}
