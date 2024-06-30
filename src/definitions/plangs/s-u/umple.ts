import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+umple",
    {
      name: "Umple",
      websites: [{ kind: "wikipedia", title: "Umple", href: "https://en.wikipedia.org/wiki/Umple" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Umple_Logo.png/200px-Umple_Logo.png",
        },
      ],
      releases: [{ version: "1.34.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+java", "pl+cpp", "pl+uml", "pl+ruby", "pl+php"],
      licenses: ["lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+static"],
    },
  );
}
