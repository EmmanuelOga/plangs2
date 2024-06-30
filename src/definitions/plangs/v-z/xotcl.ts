import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xotcl",
    {
      name: "XOTcl",
      websites: [
        { kind: "wikipedia", title: "XOTcl", href: "https://en.wikipedia.org/wiki/XOTcl" },
        { kind: "homepage", title: "media.wu-wien.ac.at", href: "http://media.wu-wien.ac.at/" },
      ],
      releases: [{ version: "1.6.8", date: "2014-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+otcl", "pl+tcl"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
