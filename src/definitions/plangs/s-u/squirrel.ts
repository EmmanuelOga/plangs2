import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+squirrel",
    "Squirrel",
    {
      name: "Squirrel",
      websites: [
        { kind: "wikipedia", title: "Squirrel", href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)" },
        { kind: "homepage", title: "squirrel-lang.org", href: "http://squirrel-lang.org/" },
      ],
      releases: [
        { version: "unknown", date: "2003-09-06", kind: "first" },
        { version: "3.2", date: "2022-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://github.com/albertodemichelis/squirrel/blob/master/HISTORY",
            title: "squirrel/HISTORY at master - albertodemichelis/squirrel - GitHub",
          },
        ],
      },
      extensions: [".nut"],
    },
    {
      influences: ["pl+cpp", "pl+javascript", "pl+lua", "pl+python"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+scripting"],
      people: [["person+alberto-demichelis", { role: "designer" }]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
