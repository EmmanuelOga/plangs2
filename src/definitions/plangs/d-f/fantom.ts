import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+fantom",
    {
      name: "Fantom",
      websites: [
        { kind: "wikipedia", title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png" }],
      releases: [{ version: "1.0.79", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c-sharp", "pl+erlang", "pl+java", "pl+ruby", "pl+scala"],
      licenses: ["lic+academic-free"],
      paradigms: ["para+multi"],
      typeSystems: ["tsys+dynamic", "tsys+static"],
    },
  );
}
