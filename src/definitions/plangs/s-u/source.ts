import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+source",
    "Source",
    {
      name: "Source",
      websites: [
        { kind: "wikipedia", title: "Source", href: "https://en.wikipedia.org/wiki/Source_(programming_language)" },
        { kind: "homepage", title: "docs.sourceacademy.org", href: "https://docs.sourceacademy.org/" },
      ],
      releases: [
        { version: "unknown", date: "2017-01-01", kind: "first" },
        { version: "unknown", date: "2021-12-31", kind: "stable" },
      ],
      extensions: [".js"],
      references: { major_implementations: [{ href: "https://sourceacademy.org", title: "Source Academy" }] },
    },
    {
      implementations: ["pl+safari", "pl+tail-call"],
      influences: ["pl+javascript", "pl+scheme"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+scripting"],
      platforms: ["platf+web"],
      typeSystems: ["tsys+duck", "tsys+dynamic"],
    },
  );

  /**/
}
