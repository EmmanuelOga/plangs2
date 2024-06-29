import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xtend",
    "Xtend",
    {
      name: "Xtend",
      websites: [{ kind: "wikipedia", title: "Xtend", href: "https://en.wikipedia.org/wiki/Xtend" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png" }],
      releases: [{ version: "2.25.0", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+java", "pl+scala", "pl+groovy", "pl+smalltalk"],
      licenses: ["lic+eclipse-public"],
      paradigms: ["para+objects", "para+imperative", "para+functional"],
      platforms: ["platf+jvm", "platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    },
  );
}
