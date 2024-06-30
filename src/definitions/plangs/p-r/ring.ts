import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ring",
    "Ring",
    {
      name: "Ring",
      websites: [
        { kind: "wikipedia", title: "Ring", href: "https://en.wikipedia.org/wiki/Ring_(programming_language)" },
        { kind: "homepage", title: "http://ring-lang.net", href: "http://ring-lang.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
        },
      ],
      releases: [{ version: "1.20", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+python", "pl+qml", "pl+lua", "pl+ruby", "pl+c", "pl+c-sharp", "pl+basic", "pl+xbase"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+objects",
        "para+imperative",
        "para+functional",
        "para+reflective",
        "para+dec",
        "para+natural",
      ],
      people: ["person+mahmoud-samir-fayed"],
      platforms: ["platf+win", "platf+linux", "platf+mac"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
