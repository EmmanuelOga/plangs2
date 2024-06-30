import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+snobol",
    {
      name: "SNOBOL",
      websites: [
        { kind: "wikipedia", title: "SNOBOL", href: "https://en.wikipedia.org/wiki/SNOBOL" },
        { kind: "homepage", title: "https://www.regressive.org/snobol4/", href: "https://www.regressive.org/snobol4/" },
      ],
      releases: [{ version: "unknown", date: "1967-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+icon"],
      implementations: ["pl+spitbol"],
      influences: ["pl+comit"],
      people: ["person+david-j-farber", "person+ralph-griswold"],
      paradigms: ["para+imperative", "para+unstructured"],
    },
  );
}
