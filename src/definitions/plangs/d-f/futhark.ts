import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+futhark",
    "Futhark",
    {
      name: "Futhark",
      websites: [
        { kind: "wikipedia", title: "Futhark", href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)" },
      ],
    },
    {
      influences: ["pl+apl", "pl+haskell", "pl+nesl", "pl+sml"],
      licenses: ["lic+isc"],
      paradigms: ["para+array", "para+functional"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness", "tsys+dependent"],
    },
  );
}
