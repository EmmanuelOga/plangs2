import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ring",
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
      influences: ["pl+basic", "pl+c", "pl+c-sharp", "pl+lua", "pl+python", "pl+qml", "pl+ruby", "pl+xbase"],
      people: ["person+mahmoud-samir-fayed"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+dec",
        "para+functional",
        "para+imperative",
        "para+multi",
        "para+natural",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
