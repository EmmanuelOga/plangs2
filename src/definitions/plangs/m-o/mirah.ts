import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+mirah",
    {
      name: "Mirah",
      websites: [
        { kind: "wikipedia", title: "Mirah", href: "https://en.wikipedia.org/wiki/Mirah_(programming_language)" },
        { kind: "homepage", title: "https://mirah.org/", href: "https://mirah.org/" },
      ],
      releases: [{ version: "0.2.1", date: "2016-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ruby", "pl+java", "pl+boo"],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+imperative"],
      platforms: ["platf+jvm", "platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+strong", "tsys+inferred"],
    },
  );
}
