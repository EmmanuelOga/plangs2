import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+whiley",
    "Whiley",
    {
      name: "Whiley",
      websites: [
        { kind: "wikipedia", title: "Whiley", href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)" },
        { kind: "homepage", title: "whiley.org", href: "http://whiley.org" },
      ],
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "first" },
        { version: "0.6.1", date: "2022-06-27", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+ceylon"],
      influences: ["pl+java", "pl+c", "pl+python", "pl+rust"],
      licenses: ["lic+bsd"],
      paradigms: ["para+imperative", "para+functional"],
      people: [["person+david-j-pearce", "designer"]],
      typeSystems: ["tsys+strong", "tsys+safe", "tsys+structural", "tsys+flow-sensitive"],
    },
  );
}
