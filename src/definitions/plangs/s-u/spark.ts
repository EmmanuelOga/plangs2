import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+spark",
    {
      name: "SPARK",
      websites: [
        { kind: "wikipedia", title: "SPARK", href: "https://en.wikipedia.org/wiki/SPARK_(programming_language)" },
        { kind: "homepage", title: "About SPARK", href: "http://www.adacore.com/about-spark" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Sparkada.jpg/250px-Sparkada.jpg" },
      ],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+ada", "pl+eiffel"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"],
    },
  );
}
