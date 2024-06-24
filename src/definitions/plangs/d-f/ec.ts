import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ec",
    "eC",
    {
      name: "eC",
      websites: [
        { kind: "wikipedia", title: "eC", href: "https://en.wikipedia.org/wiki/EC_(programming_language)" },
        { kind: "homepage", title: "ec-lang.org", href: "http://ec-lang.org/" },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "0.44.15", date: "2016-08-04", kind: "stable" },
      ],
      extensions: [".ec", ".eh"],
    },
    {
      influences: ["pl+c", "pl+cpp", "pl+python"],
      licenses: ["lic+bsd-3"],
      paradigms: ["para+generic", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+nominative", "tsys+static"],
    },
  );

  /**/
}
